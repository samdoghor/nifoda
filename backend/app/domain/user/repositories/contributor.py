"""
app/domain/repositories/contributor.py
this file holds the contributor repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from ..entities import ContributorEntity
from ..value_objects import EmailCheck, PasswordCheck
from ....infrastructure.models import DeveloperModel
from ....infrastructure.models.user_domain import ContributorModel, RoleModel


# resources


class ContributorRepository(Resource):
    """Resource for managing contributors"""

    @staticmethod
    def create(contributor: ContributorEntity):
        """Create a new contributor"""

        try:
            existing_contributor = ContributorModel.query.filter_by(email_address=contributor.email_address).first()
            existing_developer = DeveloperModel.query.filter_by(email_address=contributor.email_address).first()
            role = RoleModel.query.filter_by(role="contributor").first()

            if existing_contributor:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{contributor.email_address} already has an account",
                }), 409

            if existing_developer:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{contributor.email_address} already has an account as a developer",
                }), 409

            # create new contributor account

            # noinspection PyArgumentList
            new_contributor = ContributorModel(
                first_name=contributor.first_name,
                last_name=contributor.last_name,
                middle_name=contributor.middle_name,
                email_address=contributor.email_address,
                password=contributor.password,
                role=role.id
            )
            new_contributor.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'an account has been created successfully for {contributor.email_address}',
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
                "data": f"{contributor.email_address} already has an account or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all contributors """

        try:
            contributors = ContributorModel.query.all()

            if not contributors:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no contributor was found",
                }), 404

            data = [
                {
                    'id': contributor.id,
                    'first_name': contributor.first_name,
                    'last_name': contributor.last_name,
                    'middle_name': contributor.middle_name,
                    'email_address': contributor.email_address,
                    'account_status': contributor.account_status,
                    'account_verified': contributor.account_verified,
                    'role': contributor.role,
                    'created_at': contributor.created_at,
                    'updated_at': contributor.updated_at,
                }
                for contributor in contributors
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
        """ retrieves one contributor by id """

        try:
            contributor = ContributorModel.query.filter_by(id=id).first()

            if not contributor:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"contributor with id {id} was not found",
                }), 404

            data = {
                'id': contributor.id,
                'first_name': contributor.first_name,
                'last_name': contributor.last_name,
                'middle_name': contributor.middle_name,
                'email_address': contributor.email_address,
                'account_status': contributor.account_status,
                'account_verified': contributor.account_verified,
                'role': contributor.role,
                'created_at': contributor.created_at,
                'updated_at': contributor.updated_at,
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
        """ Update one contributor by id """

        try:
            contributor = ContributorModel.query.filter_by(id=id).first()

            if not contributor:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"contributor with id {id} was not found",
                }), 404

            if 'first_name' in args and args['first_name'] is not None:
                contributor.first_name = args['first_name']

            if 'last_name' in args and args['last_name'] is not None:
                contributor.last_name = args['last_name']

            if 'middle_name' in args and args['middle_name'] is not None:
                contributor.middle_name = args['middle_name']

            if 'email_address' in args and args['email_address'] is not None:
                email_address = args['email_address']
                EmailCheck(email_address)
                contributor.email_address = email_address

            if 'password' in args and args['password'] is not None:
                password = args['password']
                password_check = PasswordCheck(password)
                contributor.password = password_check.password

            contributor.save()

            data = {
                'id': contributor.id,
                'first_name': contributor.first_name,
                'last_name': contributor.last_name,
                'middle_name': contributor.middle_name,
                'email_address': contributor.email_address,
                'account_status': contributor.account_status,
                'account_verified': contributor.account_verified,
                'role': contributor.role,
                'created_at': contributor.created_at,
                'updated_at': contributor.updated_at,
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
        """ Delete one contributor by id """

        try:
            contributor = ContributorModel.query.filter_by(id=id).first()

            if not contributor:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"contributor with id {id} was not found",
                }), 404

            # contributor.account_status = 'deleted'
            # contributor.save()

            # TODO: uncomment the above and comment the below

            contributor.delete()

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
