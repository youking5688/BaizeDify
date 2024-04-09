from datetime import datetime
# from decimal import Decimal
import pytz
from flask import jsonify
from flask_restful import Resource, reqparse
from controllers.service_api import api
from extensions.ext_database import db
from libs.helper import datetime_string
from models.model import  EndUser
class DailyTokenCostStatistic(Resource):
    def get(self):
          parser = reqparse.RequestParser()
          parser.add_argument('start', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
          parser.add_argument('end', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
          parser.add_argument('user', required=True, location='args')
          args = parser.parse_args()
          if not args['user']:
                      return jsonify({'error': 'Missing user parameter'}), 400
          # 获取用户所有的 ID
          session_id = args['user']
          user_ids = self.get_user_ids_by_session_id(session_id)
          # 循环遍历所有 ID
          all_apps_daily_token_cost_statistics = []
          for user_id in user_ids:
            daily_token_cost_statistics = self.get_all_apps_daily_token_cost_statistics(user_id,args['start'],args['end'])
            all_apps_daily_token_cost_statistics.append(daily_token_cost_statistics)
          # 返回最终结果
          return jsonify({
              'data': all_apps_daily_token_cost_statistics
          })
    def get_all_apps_daily_token_cost_statistics(user_id,start,end):
        sql_query = ''' SELECT date(DATE_TRUNC('day', created_at AT TIME ZONE 'UTC' AT TIME ZONE :tz )) AS date, (sum(messages.message_tokens) + sum(messages.answer_tokens)) as token_count,sum(total_price) as total_price FROM messages where from_end_user_id = :from_end_user_id '''
        arg_dict = {'tz': 'Asia/Shanghai', 'from_end_user_id': user_id}
        timezone = pytz.timezone('Asia/Shanghai')
        utc_timezone = pytz.utc
        if start:
            start_datetime = datetime.strptime(start, '%Y-%m-%d %H:%M')
            start_datetime = start_datetime.replace(second=0)
            start_datetime_timezone = timezone.localize(start_datetime)
            start_datetime_utc = start_datetime_timezone.astimezone(utc_timezone)
            sql_query += ' and created_at >= :start'
            arg_dict['start'] = start_datetime_utc
        if end:
            end_datetime = datetime.strptime(end, '%Y-%m-%d %H:%M')
            end_datetime = end_datetime.replace(second=0)
            end_datetime_timezone = timezone.localize(end_datetime)
            end_datetime_utc = end_datetime_timezone.astimezone(utc_timezone)
            sql_query += ' and created_at < :end'
            arg_dict['end'] = end_datetime_utc
        sql_query += ' GROUP BY date order by date'
        response_data = []
        with db.engine.begin() as conn:
            rs = conn.execute(db.text(sql_query), arg_dict)
            for i in rs:
                response_data.append({
                    'date': str(i.date),
                    'token_count': i.token_count,
                    'total_price': i.total_price,
                    'currency': 'USD'
                })
        return response_data
    def get_user_ids_by_session_id(session_id):
          # 从数据库中查询end_user表
          end_user_rows = db.session.query(EndUser).filter(
              EndUser.session_id == session_id
          )
          # 将查询结果转换为id列表
          # user_ids = [row[0] for row in end_user_rows]
          user_ids = []
          for row in end_user_rows :
               user_ids.append(row[0])
          return user_ids

class DailyTokenCostStatisticResidue(Resource):
    def get(self):
          parser = reqparse.RequestParser()
          parser.add_argument('user', required=True, location='args')
          args = parser.parse_args()
          if not args['user']:
                      return jsonify({'error': 'Missing user parameter'}), 400
          # 获取用户所有的 ID
          session_id = args['user']
          user_ids = DailyTokenCostStatistic.get_user_ids_by_session_id(session_id)
          all_apps_daily_token_cost_statistics = []
        # 循环遍历所有时间段
          for user_id in user_ids:
              daily_token_cost_statistics = self._get_all_time_token_cost_statistics(user_id)
              self._update_tokens(user_id, daily_token_cost_statistics)
              all_apps_daily_token_cost_statistics.append(daily_token_cost_statistics)
          end_user_residue = db.session.query(EndUser).filter(EndUser.id == user_id).first().tokens
         # 返回最终结果
          return jsonify({
              'data': end_user_residue
          })
    def _get_all_time_token_cost_statistics(user_id):
        sql_query = """ SELECT date(created_at AT TIME ZONE 'UTC' AT TIME ZONE :tz ) AS date,(sum(messages.message_tokens) + sum(messages.answer_tokens)) as token_count,sum(total_price) as total_price FROM messages where from_end_user_id = :from_end_user_id GROUP BY date order by date """
        arg_dict = {'tz': 'Asia/Shanghai', 'from_end_user_id': user_id}
        response_data = []
        with db.engine.begin() as conn:
            rs = conn.execute(db.text(sql_query), arg_dict)
            for i in rs:
                response_data.append({
                    'date': str(i.date),
                    'token_count': i.token_count,
                    'total_price': i.total_price,
                    'currency': 'USD'
                })
        return response_data
    def _update_tokens(user_id, daily_token_cost_statistics):
        total_tokens_used = sum(item['token_count'] for item in daily_token_cost_statistics)
        end_user = db.session.query(EndUser).filter(EndUser.id == user_id).first()
        end_user.tokens -= total_tokens_used
        db.session.commit()
api.add_resource(DailyTokenCostStatistic, '/statistics/token-costs')
api.add_resource(DailyTokenCostStatisticResidue, '/statistics/token-residue')