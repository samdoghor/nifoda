"""
app/domain/repositories/authentication.py
this file holds the authentication repository info
"""
import secrets

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, ProgrammingError

from ..value_objects import LoginCredential, PasswordCheck
from .... import config
from ....infrastructure.models import ContributorModel, DeveloperModel
from ....infrastructure.models.user_domain import AdminModel
from ....utils import encode_auth_token


# imports


# resources


class AuthenticationRepository(Resource):
    """Resource for managing authentication"""

    @staticmethod
    def login(user: LoginCredential):
        """basic login"""

        try:

            user_email = None
            which_model = [AdminModel, ContributorModel, DeveloperModel]

            for this_model in which_model:
                user_email = this_model.query.filter_by(email_address=user.email_address).first()

                if user_email:
                    break

            if user_email is None or not user_email:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"no account with {user.email_address} was found",
                }), 404

            password_check = PasswordCheck(user.password)
            verify_password = password_check.check_password(user_email.password, user.password)

            if not verify_password:
                return jsonify({
                    "code": 401,
                    "code_message": "unauthorized",
                    "data": "incorrect password"
                }), 401

            jti = secrets.token_urlsafe(16)
            access_token = encode_auth_token(user_email.id,
                                             user_email.first_name,
                                             user_email.last_name,
                                             config.login_exp,
                                             jti)

            user_email._jwt_id = jti
            user_email.save()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': {
                    'data': f'{user_email.email_address}, logged in successfully',
                    'token': access_token,
                    'expires': config.login_exp,
                },
            }), 200

        except DataError:
            return jsonify({
                "code": 400,
                'code_message': 'bad request',
                "data": "this error is a datatype error",
            }), 400

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
