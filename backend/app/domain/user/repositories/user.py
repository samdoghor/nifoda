"""
app/domain/repositories/user.py
this file holds the user repository info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument
from sqlalchemy.exc import IntegrityError

from ..entities import UserEntity
from ..models import EditorModel
from ..utils import Conflict, DataNotFound, Forbidden, InternalServerError, KeyManager, parse_params


# resources


class UserRepository(Resource):
    """Resource for managing editors"""

    @staticmethod
    @parse_params(
        Argument("first_name", location="json", required=True),
        Argument("last_name", location="json", required=True),
        Argument("middle_name", location="json"),
        Argument("email_address", location="json", required=True),
        Argument("password", location="json", required=True),
    )
    def create(admin: UserEntity):
        """Create a new editor"""

        try:
            user = EditorModel.query.filter_by(email_address=email_address).first()

            if editor:
                return jsonify({
                    "code": 409,
                    'code_status': 'Duplicate email',
                    "message": f"{email_address}, already has an account."
                }), 409

            # Generate API key pair
            api_key, hashed_secret_key, salt = KeyManager.generate_api_key_pair()  # noqa

            # Create new editor

            new_editor = EditorModel(
                first_name=first_name.capitalize(),
                last_name=last_name.capitalize(),
                email_address=email_address,
                is_admin=is_admin,
                is_developer=is_developer,
                api_key=api_key,
                secret_key=hashed_secret_key,
                salt=salt
            )
            new_editor.set_password(password)
            new_editor.save()

            return jsonify({
                'code': 200,
                'code_status': 'Successful',
                'message': f'Account created successfully for {new_editor.email_address}',  # noqa
                'data': {
                    'id': new_editor.id,
                    'first_name': new_editor.first_name,
                    'last_name': new_editor.last_name,
                    'email_address': new_editor.email_address,
                    'is_admin': new_editor.is_admin,
                    'is_developer': new_editor.is_developer,
                    'api_key': new_editor.api_key,
                    'secret_key': new_editor.secret_key,
                }
            }), 200  # noqa

        except IntegrityError:
            return jsonify({
                "code": 409,
                'code_status': 'Data Integrity',
                "message": f"{email_address}, already has an account."
            }), 409

        except Forbidden as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except Conflict:
            return jsonify({
                "code": 409,
                'code_status': 'Conflicting email',
                "message": f"{email_address}, already has an account."
            }), 409

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

    @staticmethod
    def read_all():
        """ Retrieves all editors """

        try:
            editors = EditorModel.query.all()

            if not editors:
                return {
                    'code': 404,
                    'code_status': 'Client errors',
                    'message': 'No editor was not found'
                }, 404

            data = []

            for editor in editors:
                data.append({
                    'id': editor.id,
                    'first_name': editor.first_name,
                    'last_name': editor.last_name,
                    'email_address': editor.email_address,
                    'is_admin': editor.is_admin,
                    'is_developer': editor.is_developer,
                    'api_key': editor.api_key,
                    'secret_key': editor.secret_key,
                })

            return {
                'code': 200,
                'code_status': 'Successful',
                'data': data
            }, 200

        except DataNotFound as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

    @staticmethod
    def read_one(id):
        """ Retrieves one editor by id """

        try:
            editor = EditorModel.query.filter_by(id=id).first()

            if not editor:
                return {
                    'code': 404,
                    'code_status': 'Client errors',
                    'message': f'The editor with id {id} was not found'
                }, 404

            data = {
                'id': editor.id,
                'first_name': editor.first_name,
                'last_name': editor.last_name,
                'email_address': editor.email_address,
                'is_admin': editor.is_admin,
                'is_developer': editor.is_developer,
                'api_key': editor.api_key,
                'secret_key': editor.secret_key
            }

            return {
                'code': 200,
                'code_status': 'Successful',
                'data': data
            }, 200

        except DataNotFound as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

    @staticmethod
    @parse_params(
        Argument("first_name", location="json",
                 help="The first name of the editor."),
        Argument("last_name", location="json",
                 help="The last name of the editor."),
        Argument("email_address", location="json",
                 help="The email address of the editor."),
        Argument("password", location="json",
                 help="The password of the editor."),
        Argument("is_admin", location="json", type=bool,
                 help="Determine if the personel is an admin."),
        Argument("is_developer", location="json", type=bool,
                 help="Determine if the personel is a developer."),
        Argument("api_key", location="json",
                 help="The API key for developers."),
        Argument("secret_key", location="json",
                 help="The Secret key for developers."),
    )
    @staticmethod
    def update(id, **args):
        """ Update one editor by id """

        try:
            editor = EditorModel.query.filter_by(id=id).first()

            if not editor:
                return {
                    'code': 404,
                    'code_status': 'Client errors',
                    'message': f'The editor with id {id} was not found'
                }, 404

            if 'first_name' in args and args['first_name'] is not None:
                editor.first_name = args['first_name']

            if 'last_name' in args and args['last_name'] is not None:
                editor.last_name = args['last_name']

            if 'email_address' in args and args['email_address'] is not None:
                editor.email_address = args['email_address']

            if 'password' in args and args['password'] is not None:
                editor.password = args['password']

            if 'is_admin' in args and args['is_admin'] is not None:
                editor.is_admin = args['is_admin']

            if 'is_developer' in args and args['is_developer'] is not None:
                editor.is_developer = args['is_developer']

            if 'api_key' in args and args['api_key'] is not None:
                editor.api_key = args['api_key']

            if 'secret_key' in args and args['secret_key'] is not None:
                editor.secret_key = args['secret_key']

            editor.save()

            data = {
                'id': editor.id,
                'first_name': editor.first_name,
                'last_name': editor.last_name,
                'email_address': editor.email_address,
                'is_admin': editor.is_admin,
                'is_developer': editor.is_developer,
                'api_key': editor.api_key,
                'secret_key': editor.secret_key
            }

            return {
                'code': 200,
                'code_status': 'Successful',
                'data': data,
            }, 200

        except DataNotFound as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except Forbidden as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

    @staticmethod
    def delete(id):
        """ Delete one editor by id """

        try:
            editor = EditorModel.query.filter_by(id=id).first()

            if not editor:
                return {
                    'code': 404,
                    'code_status': 'Client errors',
                    'message': f'The editor with id {id} was not found'
                }, 404

            editor.delete()

            return {
                'code': 200,
                'code_status': 'Successful',
                'message': f'The editor with id {id} was found and was deleted successfully'  # noqa E501
            }, 200

        except DataNotFound as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Message': e.message
            }
