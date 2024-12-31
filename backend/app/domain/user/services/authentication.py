"""
app/domain/services/authentication.py
this file holds the authentication service info
"""

# imports

from flask import jsonify, request
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..repositories import AuthenticationRepository
from ..value_objects import EmailCheck, LoginCredential, PasswordCheck


# resources


class AuthenticationService(Resource):
    """ service for logging in users """

    @staticmethod
    @parse_params(
        Argument("email_address", location="json", required=True),
        Argument("password", location="json", required=True),
    )
    def login(email_address, password):
        """basic login"""

        try:

            if not email_address:
                return jsonify({
                    "code": 400,
                    "error_message": "bad request",
                    "message": "email address is missing, you must supply one"
                }), 400

            if not password:
                return jsonify({
                    "code": 400,
                    "error_message": "bad request",
                    "message": "password is missing, you must supply one"
                }), 400

            EmailCheck(email_address)
            PasswordCheck(password)
            user = LoginCredential(email_address, password)

            return AuthenticationRepository.login(user)

        except ValueError as e:
            return jsonify({
                "code": 500,
                'code_message': 'value error',
                "data": f"an incorrect value was inputted: {str(e)}",
            }), 500

        except TypeError as e:
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": f"an incorrect datatype was inputted: {str(e)}",
            }), 500
