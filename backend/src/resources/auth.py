"""auth.py

Keyword arguments:
argument -- description
Return: return_description
"""

from datetime import datetime, timedelta

from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

try:
    from ..models import EditorModel
    from ..utils import (DataNotFound, Forbidden, InternalServerError,
                         parse_params)
except ImportError:
    from models import EditorModel
    from utils import (DataNotFound, Forbidden, InternalServerError,
                       parse_params)


class AuthResource(Resource):

    """  """

    @staticmethod
    @parse_params(
        Argument("email_address", location="json", required=True,
                 help="The email address of the editor"),
        Argument("password", location="json", required=True,
                 help="The password of the editor"),
    )
    def login(email_address, password):
        """ """

        try:

            editor_email = EditorModel.query.filter_by(
                email_address=email_address).first()

            if not editor_email:
                return jsonify({
                    "code": 401,
                    "error_message": "Email Not Found",
                    "message": f"The email address {email_address} was not found, it might be incorrect."  # noqa
                }), 401

            editor_password = editor_email.check_password(password)

            if not editor_password:
                return jsonify({
                    "code": 401,
                    "error_message": "Incorrect Data",
                    "message": "The password is not correct."
                }), 401

            auth_token = editor_email.encode_token(
                str(editor_email.id), editor_email.first_name,
                editor_email.last_name)

            expires = (datetime.now() + timedelta(seconds=600)
                       ).strftime("%H:%M")

            if editor_email:
                if editor_password:
                    return jsonify({
                        "code": 200,
                        'code_status': 'successful',
                        'message': 'Successfully logged in.',
                        'auth_token': auth_token,
                        'token_expires_by': expires,
                        'editor_id': editor_email.id
                    })

        except Forbidden as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Error Message': e.message
            }

        except DataNotFound as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Error_Message': e.message,
                'Message': "No business data was found in the database."
            }

        except InternalServerError as e:
            return {
                'Code': e.code,
                'Type': e.type,
                'Error_Message': e.message
            }
