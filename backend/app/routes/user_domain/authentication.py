"""
app/routes/user_domain/authentication.py
this file holds the authentication route info
"""

# imports

from flask import Blueprint

from ...domain.user.services import AuthenticationService

# configuration

AuthenticationBlueprint = Blueprint("authentication", __name__)

# routes

AuthenticationBlueprint.route("/auth/login", methods=['POST'])(AuthenticationService.login)
