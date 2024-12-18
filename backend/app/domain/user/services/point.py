"""
app/domain/services/point.py
this file holds the point service info
"""

# imports

from flask import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from app.utils import parse_params
from ..entities import PointEntity
from ..repositories import PointRepository


# resources


class PointService(Resource):
    """ service for managing points """

    @staticmethod
    @parse_params(
        Argument("point", location="json", required=True, type=int),
        Argument("contributor", location="json", required=True),
    )
    def create(point, contributor):
        """Create a new editor"""

        try:

            point = PointEntity(
                id=None,
                point=point,
                contributor=contributor,
                created_at=None,
                updated_at=None,
            )
            return PointRepository.create(point)

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
        """ retrieves all points """

        try:

            return PointRepository.read()

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
    def contributor_point(id):
        """ retrieves all points of a contributor by id """

        try:

            return PointRepository.contributor_point(id)

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
        """ delete one point by id """

        try:
            return PointRepository.delete(id)

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
