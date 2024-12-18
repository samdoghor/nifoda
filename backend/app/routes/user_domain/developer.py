"""
app/routes/user_domain/developer.py
this file holds the developer route info
"""

# imports

from flask import Blueprint

from ...domain.user.services import DeveloperService

# configuration

DeveloperBlueprint = Blueprint("developer", __name__)

# routes

DeveloperBlueprint.route("/developers", methods=['POST'])(DeveloperService.create)
DeveloperBlueprint.route("/developers", methods=['GET'])(DeveloperService.read)
DeveloperBlueprint.route("/developers/<uuid:id>", methods=['GET'])(DeveloperService.fetch)
DeveloperBlueprint.route("/developers/<uuid:id>", methods=['PUT'])(DeveloperService.update)
DeveloperBlueprint.route("/developers/<uuid:id>", methods=['DELETE'])(DeveloperService.delete)
