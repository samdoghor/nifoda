"""
app/routes/developer.py
this file holds the developer route info
"""

# imports

from flask import Blueprint

from ..domain.user.services import AdminService

# configuration

AdminBlueprint = Blueprint("admin", __name__)

# routes

AdminBlueprint.route("/admins", methods=['POST'])(AdminService.create)
AdminBlueprint.route("/admins", methods=['GET'])(AdminService.read)
AdminBlueprint.route("/admins/<uuid:id>", methods=['GET'])(AdminService.fetch)
AdminBlueprint.route("/admins/<uuid:id>", methods=['PUT'])(AdminService.update)
AdminBlueprint.route("/admins/<uuid:id>", methods=['DELETE'])(AdminService.delete)
