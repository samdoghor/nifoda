"""
app/routes/user_domain/contributor.py
this file holds the contributor route info
"""

# imports

from flask import Blueprint

from ...domain.user.services import ContributorService

# configuration

ContributorBlueprint = Blueprint("contributor", __name__)

# routes

ContributorBlueprint.route("/contributors", methods=['POST'])(ContributorService.create)
ContributorBlueprint.route("/contributors", methods=['GET'])(ContributorService.read)
ContributorBlueprint.route("/contributors/<uuid:id>", methods=['GET'])(ContributorService.fetch)
ContributorBlueprint.route("/contributors/<uuid:id>", methods=['PUT'])(ContributorService.update)
ContributorBlueprint.route("/contributors/<uuid:id>", methods=['DELETE'])(ContributorService.delete)
