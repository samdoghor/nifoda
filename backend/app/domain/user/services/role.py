"""
app/domain/services/role.py
this file holds the role service info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..entities import RoleEntity
from ..repositories import RoleRepository


# resources


class RoleService(Resource):
    """ service for managing roles """

    @staticmethod
    @parse_params(
        Argument("role", location="json", required=True),
    )
    def create(role):
        """Create a new editor"""

        try:
            role = RoleEntity(
                id=None,
                role=role,
                created_at=None,
                updated_at=None,
            )
            return RoleRepository.create(role)

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
    def read():
        """ retrieves all roles """

        try:

            return RoleRepository.read()

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
        """ retrieves one role by id """

        try:

            return RoleRepository.fetch(id)

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
        Argument("role", location="json"),
    )
    def update(id, **args):
        """ update one role by id """

        try:
            # update_data = {
            #     "role": args["role"]
            # }

            return RoleRepository.update(id, **args)

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
    def delete(id):
        """ delete one role by id """

        try:
            return RoleRepository.delete(id)

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
