"""
app/routes/point.py
this file holds the point route info
"""

# imports

from flask import Blueprint

from ..domain.user.services import PointService

# configuration

PointBlueprint = Blueprint("point", __name__)

# routes

PointBlueprint.route("/points", methods=['POST'])(PointService.create)
PointBlueprint.route("/points", methods=['GET'])(PointService.read)
PointBlueprint.route("/points/<uuid:id>", methods=['GET'])(PointService.contributor_point)
PointBlueprint.route("/points/<uuid:id>", methods=['DELETE'])(PointService.delete)
