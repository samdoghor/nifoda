"""
app/routes/user_domain/role.py
this file holds the role route info
"""

# imports

from flask import Blueprint

from ...domain.user.services import RoleService

# configuration

RoleBlueprint = Blueprint("role", __name__)

# routes

RoleBlueprint.route("/roles", methods=['POST'])(RoleService.create)
RoleBlueprint.route("/roles", methods=['GET'])(RoleService.read)
RoleBlueprint.route("/roles/<uuid:id>", methods=['GET'])(RoleService.fetch)
RoleBlueprint.route("/roles/<uuid:id>", methods=['PUT'])(RoleService.update)
RoleBlueprint.route("/roles/<uuid:id>", methods=['DELETE'])(RoleService.delete)
