"""
app/routes/food_domain/group.py
this file holds the group route info
"""

# imports

from flask import Blueprint

from ...domain.food.services import GroupService

# configuration

GroupBlueprint = Blueprint("group", __name__)

# routes

GroupBlueprint.route("/groups", methods=['POST'])(GroupService.create)
GroupBlueprint.route("/groups", methods=['GET'])(GroupService.read)
GroupBlueprint.route("/groups/<uuid:id>", methods=['GET'])(GroupService.fetch)
GroupBlueprint.route("/groups/<uuid:id>", methods=['PUT'])(GroupService.update)
GroupBlueprint.route("/groups/<uuid:id>", methods=['DELETE'])(GroupService.delete)
