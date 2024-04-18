from datetime import datetime
import pytz
from flask import jsonify
from flask_restful import Resource, reqparse
from controllers.service_api import api
from extensions.ext_database import db
from libs.helper import datetime_string
from models.model import EndUser

class DailyTokenCostStatistic(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('start', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
        parser.add_argument('end', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
        parser.add_argument('user', required=True, location='args')
        args = parser.parse_args()

        if not args['user']:
            return jsonify({'error': 'Missing user parameter'}), 400
        if not args['start']:
            return jsonify({'error': 'Missing start parameter'}), 400
        if not args['end']:
            return jsonify({'error': 'Missing end parameter'}), 400
        user_ids = get_user_ids_by_session_id(args['user'])
        all_apps_daily_token_cost_statistics = 0

        for user_id in user_ids:
            daily_token_cost_statistics = get_all_apps_daily_token_cost_statistics(user_id, args['start'], args['end'])
            all_apps_daily_token_cost_statistics+=daily_token_cost_statistics

        return jsonify({'data': all_apps_daily_token_cost_statistics})

class DailyTokenCostStatisticResidue(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('start', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
        parser.add_argument('end', type=datetime_string('%Y-%m-%d %H:%M'), location='args')
        parser.add_argument('user', required=True, location='args')
        args = parser.parse_args()

        if not args['user']:
            return jsonify({'error': 'Missing user parameter'}), 400
        if not args['start']:
            return jsonify({'error': 'Missing start parameter'}), 400
        if not args['end']:
            return jsonify({'error': 'Missing end parameter'}), 400
        user_ids = get_user_ids_by_session_id(args['user'])
        daily_token_cost_statistics = 0

        for user_id in user_ids:
            daily_token_cost_statistics += get_all_apps_daily_token_cost_statistics(user_id, args['start'], args['end'])
        end_user_tokens = db.session.query(EndUser).filter(EndUser.phone == args['user']).first().tokens
        end_user_tokens -= daily_token_cost_statistics
        db.session.commit()

        return jsonify({'data': end_user_tokens })

def get_all_apps_daily_token_cost_statistics(user_id, start, end):
    sql_query = ''' SELECT date(DATE_TRUNC('day', created_at AT TIME ZONE 'UTC' AT TIME ZONE :tz )) AS date, (sum(messages.message_tokens) + sum(messages.answer_tokens)) as token_count,sum(total_price) as total_price FROM messages where from_end_user_id = :from_end_user_id '''
    arg_dict = {'tz': 'Asia/Shanghai', 'from_end_user_id': user_id}
    timezone = pytz.timezone('Asia/Shanghai')
    utc_timezone = pytz.utc

    if start:
        start_datetime = datetime.strptime(start, '%Y-%m-%d %H:%M').replace(second=0)
        start_datetime_timezone = timezone.localize(start_datetime)
        start_datetime_utc = start_datetime_timezone.astimezone(utc_timezone)
        sql_query += ' and created_at >= :start'
        arg_dict['start'] = start_datetime_utc

    if end:
        end_datetime = datetime.strptime(end, '%Y-%m-%d %H:%M').replace(second=0)
        end_datetime_timezone = timezone.localize(end_datetime)
        end_datetime_utc = end_datetime_timezone.astimezone(utc_timezone)
        sql_query += ' and created_at < :end'
        arg_dict['end'] = end_datetime_utc

    sql_query += ' GROUP BY date order by date'
    response_data = 0


    with db.engine.begin() as conn:
        rs = conn.execute(db.text(sql_query), arg_dict)
        for i in rs:
            response_data += i.token_count
            

    return response_data

def get_user_ids_by_session_id(user):
    q = db.session.query(EndUser)
    end_user_rows = q.filter(EndUser.session_id == user)
        
    user_ids = [row.id for row in end_user_rows]
    return user_ids

api.add_resource(DailyTokenCostStatistic, '/statistics/token-costs')
api.add_resource(DailyTokenCostStatisticResidue, '/statistics/token-residue')