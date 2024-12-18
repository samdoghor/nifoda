"""
app/domain/repositories/category.py
this file holds the category repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, IntegrityError, ProgrammingError

from ..entities import CategoryEntity
from ....infrastructure.models.food_domain import CategoryModel


# resources


class CategoryRepository(Resource):
    """Resource for managing categories"""

    @staticmethod
    def create(category: CategoryEntity):
        """Create a new category"""

        try:
            existing_category = CategoryModel.query.filter_by(name=category.name.lower()).first()

            if existing_category:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{category.name} category already exist",
                }), 409

            # create new category account

            # noinspection PyArgumentList
            new_category = CategoryModel(
                name=category.name.lower(),
                description=category.description,
                category_status=category.category_status,
                group=category.group,
            )
            new_category.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'{category.name} category was created successfully',
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
                "data": f"{category.name} category already exist or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all categories """

        try:
            categories = CategoryModel.query.all()

            if not categories:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no category was found",
                }), 404

            data = [
                {
                    'id': category.id,
                    'name': category.name,
                    'description': category.description,
                    'category_status': category.category_status,
                    'group': category.group,
                    'created_at': category.created_at,
                    'updated_at': category.updated_at,
                }
                for category in categories
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
        """ retrieves one category by id """

        try:
            category = CategoryModel.query.filter_by(id=id).first()

            if not category:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"category with id {id} was not found",
                }), 404

            data = {
                'id': category.id,
                'name': category.name,
                'description': category.description,
                'category_status': category.category_status,
                'group': category.group,
                'created_at': category.created_at,
                'updated_at': category.updated_at,
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
        """ Update one category by id """

        try:
            category = CategoryModel.query.filter_by(id=id).first()

            if not category:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"category with id {id} was not found",
                }), 404

            if 'name' in args and args['name'] is not None:
                category.name = args['name'].lower()

            if 'description' in args and args['description'] is not None:
                category.description = args['description']

            if 'group' in args and args['group'] is not None:
                category.group = args['group']

            category.save()

            data = {
                'id': category.id,
                'name': category.name,
                'description': category.description,
                'category_status': category.category_status,
                'group': category.group,
                'created_at': category.created_at,
                'updated_at': category.updated_at,
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
        """ Delete one category by id """

        try:
            category = CategoryModel.query.filter_by(id=id).first()

            if not category:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"category with id {id} was not found",
                }), 404

            # category.category_status = 'deleted'
            # category.save()

            # TODO: uncomment the above and comment the below

            category.delete()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': "category was deleted successfully"
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
