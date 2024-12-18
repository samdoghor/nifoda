"""
app/domain/services/role.py
this file holds the role service info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..entities import DeveloperEntity
from ..repositories import DeveloperRepository
from ..value_objects import EmailCheck, PasswordCheck


# resources


class DeveloperService(Resource):
    """ service for managing roles """

    @staticmethod
    @parse_params(
        Argument("first_name", location="json", required=True),
        Argument("last_name", location="json", required=True),
        Argument("middle_name", location="json"),
        Argument("email_address", location="json", required=True),
        Argument("password", location="json", required=True),
    )
    def create(first_name, last_name, middle_name, email_address, password):
        """Create a new developer account"""

        try:

            EmailCheck(email_address)
            PasswordCheck(password)

            role = DeveloperEntity(
                id=None,
                first_name=first_name,
                last_name=last_name,
                middle_name=middle_name,
                email_address=email_address,
                password=password,
                api_key="",
                secret_key="",
                account_status="unverifeid",
                account_verified=False,
                role=None,
                created_at=None,
                updated_at=None,
            )
            return DeveloperRepository.create(role)

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
        """ retrieves all developers """

        try:

            return DeveloperRepository.read()

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
        """ retrieves one developer by id """

        try:

            return DeveloperRepository.fetch(id)

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
        Argument("first_name", location="json"),
        Argument("last_name", location="json"),
        Argument("middle_name", location="json"),
        Argument("email_address", location="json"),
        Argument("password", location="json"),
    )
    def update(id, **developer: DeveloperEntity):
        """ update one role by id """

        try:

            return DeveloperRepository.update(id, **developer)

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
        """ delete one developer by id """

        try:
            return DeveloperRepository.delete(id)

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
