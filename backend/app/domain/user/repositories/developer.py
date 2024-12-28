"""
app/domain/repositories/developer.py
this file holds the developer repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from ..entities import DeveloperEntity
from ..value_objects import EmailCheck, PasswordCheck
from ....infrastructure.models import ContributorModel
from ....infrastructure.models.user_domain import DeveloperModel, RoleModel
from ....utils import SecretGenerator


# resources


class DeveloperRepository(Resource):
    """Resource for managing developers"""

    @staticmethod
    def create(developer: DeveloperEntity):
        """Create a new developer"""

        try:
            existing_developer = DeveloperModel.query.filter_by(email_address=developer.email_address).first()
            existing_contributor = ContributorModel.query.filter_by(email_address=developer.email_address).first()
            role = RoleModel.query.filter_by(role="developer").first()

            if existing_developer:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{developer.email_address} already has an account",
                }), 409

            if existing_contributor:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{developer.email_address} already has an account as a contributor",
                }), 409

            # create new developer account

            api_key = SecretGenerator.api_key().decode('utf-8')
            secret_key = SecretGenerator.secret_key().decode('utf-8')

            # noinspection PyArgumentList
            new_developer = DeveloperModel(
                first_name=developer.first_name,
                last_name=developer.last_name,
                middle_name=developer.middle_name,
                email_address=developer.email_address,
                password=developer.password,
                secret_key=secret_key,
                api_key=api_key,
                role=role.id
            )
            new_developer.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'an account has been created successfully for {developer.email_address}',
            }), 201

        except DataError:
            return jsonify({
                "code": 400,
                'code_message': 'bad request',
                "data": "this error is a datatype error",
            }), 400

        except IntegrityError:
            return jsonify({
                "code": 409,
                'code_message': 'conflict',
                "data": f"{developer.email_address} already has an account or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all developers """

        try:
            developers = DeveloperModel.query.all()

            if not developers:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no developer was found",
                }), 404

            data = [
                {
                    'id': developer.id,
                    'first_name': developer.first_name,
                    'last_name': developer.last_name,
                    'middle_name': developer.middle_name,
                    'email_address': developer.email_address,
                    'secret_key': developer.secret_key,
                    'api_key': SecretGenerator.verify_key(developer.api_key),
                    'account_status': developer.account_status,
                    'account_verified': developer.account_verified,
                    'role': developer.role,
                    'created_at': developer.created_at,
                    'updated_at': developer.updated_at,
                }
                for developer in developers
            ]

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def fetch(id):
        """ retrieves one developer by id """

        try:
            developer = DeveloperModel.query.filter_by(id=id).first()

            if not developer:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"developer with id {id} was not found",
                }), 404

            data = {
                'id': developer.id,
                'first_name': developer.first_name,
                'last_name': developer.last_name,
                'middle_name': developer.middle_name,
                'email_address': developer.email_address,
                'secret_key': developer.secret_key,
                'api_key': SecretGenerator.verify_key(developer.api_key),
                'account_status': developer.account_status,
                'account_verified': developer.account_verified,
                'role': developer.role,
                'created_at': developer.created_at,
                'updated_at': developer.updated_at,
            }

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def update(id, **args):
        """ Update one developer by id """

        try:
            developer = DeveloperModel.query.filter_by(id=id).first()

            if not developer:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"developer with id {id} was not found",
                }), 404

            if 'first_name' in args and args['first_name'] is not None:
                developer.first_name = args['first_name']

            if 'last_name' in args and args['last_name'] is not None:
                developer.last_name = args['last_name']

            if 'middle_name' in args and args['middle_name'] is not None:
                developer.middle_name = args['middle_name']

            if 'email_address' in args and args['email_address'] is not None:
                email_address = args['email_address']
                EmailCheck(email_address)
                developer.email_address = email_address

            if 'password' in args and args['password'] is not None:
                password = args['password']
                password_check = PasswordCheck(password)
                developer.password = password_check.password

            developer.save()

            data = {
                'id': developer.id,
                'first_name': developer.first_name,
                'last_name': developer.last_name,
                'middle_name': developer.middle_name,
                'email_address': developer.email_address,
                'secret_key': developer.secret_key,
                'api_key': SecretGenerator.verify_key(developer.api_key),
                'account_status': developer.account_status,
                'account_verified': developer.account_verified,
                'role': developer.role,
                'created_at': developer.created_at,
                'updated_at': developer.updated_at,
            }

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def delete(id):
        """ Delete one developer by id """

        try:
            developer = DeveloperModel.query.filter_by(id=id).first()

            if not developer:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"developer with id {id} was not found",
                }), 404

            # developer.account_status = 'deleted'
            # developer.save()

            # TODO: uncomment the above and comment the below

            developer.delete()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': "account was deleted successfully"
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
