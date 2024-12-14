"""
app/domain/services/index.py
this file holds the index service info
"""

from flask import jsonify, request
from flask_restful import Resource


class IndexService(Resource):
    """sumary_line"""

    @staticmethod
    def home():
        """ Confirms and displays basic info that the server is running"""

        try:

            server_home = jsonify({
                "App Name": "Nigeria Food Database API (NIFODA)",
                "API Version": "v1",
                "Endpoints Access": f'{request.url}[endpoints]',
                "Message": "The server is up and running",
                "Version": "1.0.0"
            })

            return server_home

        except (RuntimeError, ReferenceError, SyntaxError):
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": "an incorrect datatype was inputted",
            }), 500
