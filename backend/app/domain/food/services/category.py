"""
app/domain/services/category.py
this file holds the category service info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..entities import CategoryEntity
from ..repositories import CategoryRepository


# resources


class CategoryService(Resource):
    """ service for managing category """

    @staticmethod
    @parse_params(
        Argument("name", location="json", required=True),
        Argument("description", location="json", required=True),
        Argument("group", location="json"),
    )
    def create(name, description, group):
        """Create a new category account"""

        try:

            category = CategoryEntity(
                id=None,
                name=name,
                description=description,
                category_status="pending_review",
                group=group,
                created_at=None,
                updated_at=None,
            )
            return CategoryRepository.create(category)

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
    def read():
        """ retrieves all categories """

        try:

            return CategoryRepository.read()

        except ValueError:
            return jsonify({
                "code": 500,
                'code_message': 'value error',
                "data": "an incorrect value was inputted",
            }), 500

        except TypeError:
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": "an incorrect datatype was inputted",
            }), 500

    @staticmethod
    def fetch(id):
        """ retrieves one category by id """

        try:

            return CategoryRepository.fetch(id)

        except ValueError:
            return jsonify({
                "code": 500,
                'code_message': 'value error',
                "data": "an incorrect value was inputted",
            }), 500

        except TypeError:
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": "an incorrect datatype was inputted",
            }), 500

    @staticmethod
    @parse_params(
        Argument("name", location="json"),
        Argument("description", location="json"),
        Argument("group", location="json"),
    )
    def update(id, **category: CategoryEntity):
        """ update one category by id """

        try:

            return CategoryRepository.update(id, **category)

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
    def delete(id):
        """ delete one category by id """

        try:
            return CategoryRepository.delete(id)

        except ValueError:
            return jsonify({
                "code": 500,
                'code_message': 'value error',
                "data": "an incorrect value was inputted",
            }), 500

        except TypeError:
            return jsonify({
                "code": 500,
                'code_message': 'type error',
                "data": "an incorrect datatype was inputted",
            }), 500
