import requests
from flask import Flask, request, jsonify, current_app
from flask_restful import Resource, reqparse
from controllers.console import api
from models.model import  EndUser
from extensions.ext_database import db
class MiniLogin(Resource):
    def post(self):
        # 替换为您的小程序配置
        APP_ID = current_app.config.get("WECHAT_CLIENT_ID")
        APP_SECRET = current_app.config.get("WECHAT_CLIENT_SECRET")
        parser = reqparse.RequestParser()
        parser.add_argument('code', required=True, location='json')
        args = parser.parse_args()
        # data = request.json
        # code = data.get('code')

        if not args['code']:
            return jsonify({'error': 'Missing code parameter'}), 400

        # 获取 access_token
        token_url = f'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={APP_ID}&secret={APP_SECRET}'
        token_response = requests.get(token_url)
        token_data = token_response.json()
        access_token = token_data.get('access_token')

        if not access_token:
            return jsonify({'error': 'Failed to get access_token'}), 500

        # 使用 access_token 和 code 获取用户手机号
        phone_url = f'https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token={access_token}'
        phone_response = requests.post(phone_url, json={'code': args['code']})
        phone_data = phone_response.json()
        
        phone = phone_data.get('phone_info', {}).get('phoneNumber')
        # 查询用户是否为新用户
        user = db.session.query(EndUser).filter(EndUser.phone == phone).first()
        # 发放tokens
        if not user:
            user = EndUser()
            user.phone = phone
            user.tokens = 100000
            user.tenant_id = 'c28af3a9-929c-4e63-b81c-b65f5c473c00'
            user.type = 'service_api'
            user.session_id = '+86'+phone
            db.session.add(user)
            db.session.commit()
        return jsonify(phone_data)

api.add_resource(MiniLogin, '/get_phone_number')
