"""
app/domain/services/admin.py
this file holds the admin service info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..entities import AdminEntity
from ..repositories import AdminRepository
from ..value_objects import EmailCheck, PasswordCheck


# resources


class AdminService(Resource):
    """ service for managing admin """

    @staticmethod
    @parse_params(
        Argument("first_name", location="json", required=True),
        Argument("last_name", location="json", required=True),
        Argument("middle_name", location="json"),
        Argument("email_address", location="json", required=True),
        Argument("password", location="json", required=True),
    )
    def create(first_name, last_name, middle_name, email_address, password):
        """Create a new admin account"""

        try:

            EmailCheck(email_address)
            password_check = PasswordCheck(password)

            admin = AdminEntity(
                id=None,
                first_name=first_name,
                last_name=last_name,
                middle_name=middle_name,
                email_address=email_address,
                password=password_check.password,
                account_status="unverifeid",
                account_verified=False,
                role=None,
                created_at=None,
                updated_at=None,
            )
            return AdminRepository.create(admin)

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
        """ retrieves all admins """

        try:

            return AdminRepository.read()

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
        """ retrieves one admin by id """

        try:

            return AdminRepository.fetch(id)

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
    def update(id, **admin: AdminEntity):
        """ update one admin by id """

        try:

            return AdminRepository.update(id, **admin)

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
        """ delete one admin by id """

        try:
            return AdminRepository.delete(id)

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
