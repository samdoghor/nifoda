"""
app/domain/services/authentication.py
this file holds the authentication service info
"""

# imports

from flask import jsonify
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
                    "code_message": "bad request",
                    "data": "email address is missing, you must supply one"
                }), 400

            if not password:
                return jsonify({
                    "code": 400,
                    "code_message": "bad request",
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

    @staticmethod
    @parse_params(
        Argument("jwt_id", location="json", required=True),
    )
    def logout(jwt_id):
        """basic logout"""

        try:

            if not jwt_id:
                return jsonify({
                    "code": 400,
                    "code_message": "bad request",
                    "data": "id is missing, contact developers"
                }), 400

            user = jwt_id

            return AuthenticationRepository.logout(user)

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
