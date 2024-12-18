"""
app/domain/repositories/point.py
this file holds the point repository info
"""

# imports

from flask import jsonify
from psycopg2.errors import DataError, InternalError, OperationalError
from sqlalchemy.exc import DBAPIError, DisconnectionError, ProgrammingError

from app.infrastructure.models.user_domain import ContributorModel, PointModel
from ..entities import PointEntity
from ..value_objects import PointCheck


# resources


class PointRepository:
    """ service for managing points """

    @staticmethod
    def create(point: PointEntity) -> jsonify:
        """Create a new editor"""

        try:

            PointCheck(point.point)

            # noinspection PyArgumentList
            new_point = PointModel(
                point=point.point,
                contributor=point.contributor
            )
            new_point.save()

            contributor = ContributorModel.query.filter_by(id=new_point.contributor).first()

            return jsonify({
                'code': 201,
                'code_message': 'created',
                'data': f'{point.point} point was added to {contributor.first_name} {contributor.last_name}',
            }), 201

        except DataError:
            return jsonify({
                "code": 400,
                'code_message': 'bad request',
                "data": "this error is a datatype error",
            }), 400

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def read():
        """ retrieves all points """

        try:
            points = PointModel.query.all()

            if not points:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": "no point was found",
                }), 404

            data = [
                {
                    'id': point.id,
                    'point': point.point,
                    'contributor': point.contributor,
                    'created_at': point.created_at,
                    'updated_at': point.updated_at
                }
                for point in points
            ]

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data,
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def contributor_point(id):
        """ retrieves all points of a contributor by id """

        try:
            points = PointModel.query.filter_by(contributor=id).all()

            if not points:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"{id} has no point yet",
                }), 404

            data = [
                {
                    'id': point.id,
                    'point': point.point,
                    'contributor': point.contributor,
                    'created_at': point.created_at,
                    'updated_at': point.updated_at
                }
                for point in points
            ]

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': data,
                'total_points': sum(point.point for point in points)
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500

    @staticmethod
    def delete(id):
        """ Delete one point by id """

        try:
            point = PointModel.query.filter_by(id=id).first()

            if not point:
                return jsonify({
                    "code": 404,
                    'code_message': 'not found',
                    "data": f"point with id {id} was not found",
                }), 404

            point.delete()

            return jsonify({
                'code': 200,
                'code_message': 'successful',
                'data': f"point was deleted"
            }), 200

        except (ProgrammingError, DBAPIError, DisconnectionError, InternalError, OperationalError):
            return jsonify({
                "code": 500,
                'code_message': 'database error',
                "data": "this error is a database error",
            }), 500
