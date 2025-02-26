"""

"""
from flask import jsonify
from psycopg2 import DataError, IntegrityError, InternalError, OperationalError, ProgrammingError
from sqlalchemy.exc import DBAPIError, DisconnectionError

from ..entities import SourceEntity
from ....infrastructure.models import SourceModel


class SourceRepository:
    """  """

    @staticmethod
    def create(source: SourceEntity):
        """ """

        try:
            existing_source = SourceModel.query.filter_by(name=source.name.lower()).first()

            if existing_source:
                return jsonify({
                    "code": 409,
                    'code_message': 'conflict',
                    "data": f"{source.name} source already exist",
                }), 409

            # create new source account

            # noinspection PyArgumentList
            new_source = SourceModel(
                name=source.name.lower(),
                description=source.description,
                source_status=source.source_status,
            )
            new_source.save()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'{source.name} source was created successfully',
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
                "data": f"{source.name} source already exist or required parameter is missing",
            }), 409

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ """

