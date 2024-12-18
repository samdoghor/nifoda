"""
app/domain/repositories/group.py
this file holds the group repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from ..entities import GroupEntity
from ....infrastructure.models.food_domain import GroupModel


# resources


class GroupRepository(Resource):
    """Resource for managing groups"""

    @staticmethod
    def create(group: GroupEntity):
        """Create a new group"""

        try:
            existing_group = GroupModel.query.filter_by(name=group.name.lower()).first()

            if existing_group:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{group.name} group already exist",
                }), 409

            # create new group account

            # noinspection PyArgumentList
            new_group = GroupModel(
                name=group.name.lower(),
                description=group.description,
                group_status=group.group_status,
            )
            new_group.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'{group.name} group was created successfully',
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
                "data": f"{group.name} group already exist or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all groups """

        try:
            groups = GroupModel.query.all()

            if not groups:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no group was found",
                }), 404

            data = [
                {
                    'id': group.id,
                    'name': group.name,
                    'description': group.description,
                    'group_status': group.group_status,
                    'created_at': group.created_at,
                    'updated_at': group.updated_at,
                }
                for group in groups
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
        """ retrieves one group by id """

        try:
            group = GroupModel.query.filter_by(id=id).first()

            if not group:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"group with id {id} was not found",
                }), 404

            data = {
                'id': group.id,
                'name': group.name,
                'description': group.description,
                'group_status': group.group_status,
                'created_at': group.created_at,
                'updated_at': group.updated_at,
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
        """ Update one group by id """

        try:
            group = GroupModel.query.filter_by(id=id).first()

            if not group:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"group with id {id} was not found",
                }), 404

            if 'name' in args and args['name'] is not None:
                group.name = args['name'].lower()

            if 'description' in args and args['description'] is not None:
                group.description = args['description']

            group.save()

            data = {
                'id': group.id,
                'name': group.name,
                'description': group.description,
                'group_status': group.group_status,
                'created_at': group.created_at,
                'updated_at': group.updated_at,
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
        """ Delete one group by id """

        try:
            group = GroupModel.query.filter_by(id=id).first()

            if not group:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"group with id {id} was not found",
                }), 404

            # group.group_status = 'deleted'
            # group.save()

            # TODO: uncomment the above and comment the below

            group.delete()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': "group was deleted successfully"
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
