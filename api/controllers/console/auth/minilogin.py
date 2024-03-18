import requests
from flask import Flask, request, jsonify, current_app
from flask_restful import Resource, reqparse
from controllers.console import api

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

        return jsonify(phone_data)

api.add_resource(MiniLogin, '/get_phone_number')
