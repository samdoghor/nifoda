"""
app/domain/repositories/role.py
this file holds the role repository info
"""

# imports

from flask import jsonify
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from app.infrastructure.models import RoleModel
from ..entities import RoleEntity


# resources


class RoleRepository:
    """ service for managing roles """

    @staticmethod
    def create(role: RoleEntity) -> jsonify:
        """Create a new editor"""

        try:
            existing_role = RoleModel.query.filter_by(role=role.role).first()

            if existing_role:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{role.role} role already exist",
                }), 409

            # noinspection PyArgumentList
            new_role = RoleModel(
                role=role.role
            )
            new_role.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'{role.role} role was created successfully',
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
                "data": f"{role.role} role already exist",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all roles """

        try:
            roles = RoleModel.query.all()

            if not roles:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no role was found",
                }), 404

            data = [
                {
                    'id': role.id,
                    'role': role.role,
                    'created_at': role.created_at,
                    'updated_at': role.updated_at
                }
                for role in roles
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
        """ retrieves one role by id """

        try:
            role = RoleModel.query.filter_by(id=id).first()

            if not role:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"role with id {id} was not found",
                }), 404

            data = {
                'id': role.id,
                'role': role.role,
                'created_at': role.created_at,
                'updated_at': role.updated_at,
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
        """ Update one role by id """

        try:
            role = RoleModel.query.filter_by(id=id).first()

            if not role:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"role with id {id} was not found",
                }), 404

            if 'role' in args and args['role'] is not None:
                role.role = args['role']

            role.save()

            data = {
                'id': role.id,
                'role': role.role,
                'created_at': role.created_at,
                'updated_at': role.updated_at,
            }

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data
            }), 200

        except IntegrityError:
            return jsonify({
                "code": 409,
                'code_message': 'conflict',
                "data": f"{args['role']} role already exist",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def delete(id):
        """ Delete one role by id """

        try:
            role = RoleModel.query.filter_by(id=id).first()

            if not role:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"role with id {id} was not found",
                }), 404

            role_name = role.role

            if not role_name:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"role with id {id} was not found",
                }), 404

            role.delete()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': f"{role_name} role was deleted"
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
