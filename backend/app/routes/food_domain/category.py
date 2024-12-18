"""
app/routes/food_domain/category.py
this file holds the category route info
"""

# imports

from flask import Blueprint

from ...domain.food.services import CategoryService

# configuration

CategoryBlueprint = Blueprint("category", __name__)

# routes

CategoryBlueprint.route("/categories", methods=['POST'])(CategoryService.create)
CategoryBlueprint.route("/categories", methods=['GET'])(CategoryService.read)
CategoryBlueprint.route("/categories/<uuid:id>", methods=['GET'])(CategoryService.fetch)
CategoryBlueprint.route("/categories/<uuid:id>", methods=['PUT'])(CategoryService.update)
CategoryBlueprint.route("/categories/<uuid:id>", methods=['DELETE'])(CategoryService.delete)
