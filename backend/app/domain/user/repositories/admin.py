"""
app/domain/repositories/admin.py
this file holds the admin repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from ..entities import AdminEntity
from ..value_objects import EmailCheck, PasswordCheck
from ....infrastructure.models import AdminModel, RoleModel


# resources


class AdminRepository(Resource):
    """Resource for managing admins"""

    @staticmethod
    def create(admin: AdminEntity):
        """Create a new admin"""

        try:
            existing_admin = AdminModel.query.filter_by(email_address=admin.email_address).first()
            role = RoleModel.query.filter_by(role="admin").first()

            if existing_admin:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{admin.email_address} already has an account",
                }), 409

            # create new admin account

            # noinspection PyArgumentList
            new_admin = AdminModel(
                first_name=admin.first_name,
                last_name=admin.last_name,
                middle_name=admin.middle_name,
                email_address=admin.email_address,
                password=admin.password,
                role=role.id
            )
            new_admin.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'an account has been created successfully for {admin.email_address}',
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
                "data": f"{admin.email_address} already has an account or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all admins """

        try:
            admins = AdminModel.query.all()

            if not admins:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no admin was found",
                }), 404

            data = [
                {
                    'id': admin.id,
                    'first_name': admin.first_name,
                    'last_name': admin.last_name,
                    'middle_name': admin.middle_name,
                    'email_address': admin.email_address,
                    'account_status': admin.account_status,
                    'account_verified': admin.account_verified,
                    'role': admin.role,
                    'created_at': admin.created_at,
                    'updated_at': admin.updated_at,
                }
                for admin in admins
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
        """ retrieves one admin by id """

        try:
            admin = AdminModel.query.filter_by(id=id).first()

            if not admin:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"admin with id {id} was not found",
                }), 404

            data = {
                'id': admin.id,
                'first_name': admin.first_name,
                'last_name': admin.last_name,
                'middle_name': admin.middle_name,
                'email_address': admin.email_address,
                'account_status': admin.account_status,
                'account_verified': admin.account_verified,
                'role': admin.role,
                'created_at': admin.created_at,
                'updated_at': admin.updated_at,
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
        """ Update one admin by id """

        try:
            admin = AdminModel.query.filter_by(id=id).first()

            if not admin:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"admin with id {id} was not found",
                }), 404

            if 'first_name' in args and args['first_name'] is not None:
                admin.first_name = args['first_name']

            if 'last_name' in args and args['last_name'] is not None:
                admin.last_name = args['last_name']

            if 'middle_name' in args and args['middle_name'] is not None:
                admin.middle_name = args['middle_name']

            if 'email_address' in args and args['email_address'] is not None:
                email_address = args['email_address']
                EmailCheck(email_address)
                admin.email_address = email_address

            if 'password' in args and args['password'] is not None:
                password = args['password']
                password_check = PasswordCheck(password)
                admin.password = password_check.password

            admin.save()

            data = {
                'id': admin.id,
                'first_name': admin.first_name,
                'last_name': admin.last_name,
                'middle_name': admin.middle_name,
                'email_address': admin.email_address,
                'account_status': admin.account_status,
                'account_verified': admin.account_verified,
                'role': admin.role,
                'created_at': admin.created_at,
                'updated_at': admin.updated_at,
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
        """ Delete one admin by id """

        try:
            admin = AdminModel.query.filter_by(id=id).first()

            if not admin:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"admin with id {id} was not found",
                }), 404

            # admin.account_status = 'deleted'
            # admin.save()

            # TODO: uncomment the above and comment the below

            admin.delete()

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
