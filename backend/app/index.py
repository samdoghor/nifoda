"""
app/domain/services/index.py
this file holds the index service info
"""
import socket

from flask import jsonify, request
from flask_restful import Resource


class IndexService(Resource):
    """ service for managing index """

    @staticmethod
    def home():
        """ Confirms and displays basic info that the server is running"""

        try:

            host_name = socket.gethostname()
            ip_address = socket.gethostbyname(host_name)
            user_agent = request.user_agent.string
            true_ip_address = request.headers.get('True-Client-Ip')
            connecting_ip_address = request.headers.get('Cf-Connecting-Ip')
            ip_address_country = request.headers.get('Cf-Ipcountry')

            server_home = jsonify({
                "app_name": "Nigeria Food Database API (NIFODA)",
                "api_version": "v1",
                "connecting_ip_address": connecting_ip_address,
                "current_endpoint": f'{request.url}',
                "endpoints_access": f'{request.url}[endpoints]',
                "ip_address": ip_address,
                "ip_address_country": ip_address_country,
                "message": "The server is up and running",
                "true_ip_address": true_ip_address,
                "user_agent": user_agent,
                "version": "1.0.0",
            })

            return server_home

        except (RuntimeError, ReferenceError, SyntaxError):
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": "an incorrect datatype was inputted",
            }), 500
