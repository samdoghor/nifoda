"""
app/routes/index.py
this file holds the index route info

"""

# imports

from flask import Blueprint

from app import IndexService

# configuration

IndexBlueprint = Blueprint("index", __name__)

# routes

IndexBlueprint.route("/", methods=['GET'])(IndexService.home)
