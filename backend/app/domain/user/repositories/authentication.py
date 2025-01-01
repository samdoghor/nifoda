"""
app/domain/repositories/authentication.py
this file holds the authentication repository info
"""
import secrets

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, ProgrammingError

from ..value_objects import EmailCheck, LoginCredential, PasswordCheck
from .... import config
from ....infrastructure.models import BlackListedTokenModel, ContributorModel, DeveloperModel
from ....infrastructure.models.user_domain import AdminModel
from ....utils import SecretGenerator, encode_auth_token


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

            user_email.jwt_id = jti
            user_email.save()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': {
                    'data': f'{user_email.email_address}, logged in successfully',
                    'identifier': user_email.jwt_id,
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

    @staticmethod
    def logout(jwt_id):
        """basic logout"""

        try:

            user = None
            which_model = [AdminModel, ContributorModel, DeveloperModel]

            for this_model in which_model:
                user = this_model.query.filter_by(jwt_id=jwt_id).first()

                if user:
                    break

            if user is None or not user:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"no account with {jwt_id.email_address} was found",
                }), 404

            # noinspection PyArgumentList
            blacklist_token = BlackListedTokenModel(
                jwt_id=user.jwt_id
            )
            blacklist_token.save()

            user.jwt_id = None
            user.save()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': f'{user.email_address}, logged out successfully',
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
