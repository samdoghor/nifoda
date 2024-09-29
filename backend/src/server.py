"""
## Module Name: server.py

This module is responsible for setting up and running the Nigeria Database
Food API (NIFODA) server.

It imports necessary modules, configures the server, and defines routes and
endpoints for the API.

"""

# imports

from flask import Blueprint, Flask
from flask_migrate import Migrate
from flask_talisman import Talisman
from flask_cors import CORS

import config
import routes
from models import db

# instantiation/configuration

server = Flask(__name__)

# security

Talisman(server)
origins = [
    "http://localhost:3000",
    "http://localhost:5000",
]
cors = CORS(server, resources={
            r"/api-v1/*": {"origins": origins}})
server.config['SECRET_KEY'] = config.SECRET_KEY


# database
server.debug = config.DEBUG
server.config["SQLALCHEMY_DATABASE_URI"] = config.SQLALCHEMY_DATABASE_URI
server.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = config.SQLALCHEMY_TRACK_MODIFICATIONS  # noqa
db.init_app(server)
db.app = server
migrate = Migrate(server, db)

# routes

for blueprint in vars(routes).values():
    if isinstance(blueprint, Blueprint):
        server.register_blueprint(
            blueprint, url_prefix=config.APPLICATION_ROOT)

# run


if __name__ == "__main__":
    server.debug = config.DEBUG if config.ENVIRONMENT == "DEV" else False
    if config.ENVIRONMENT == "DEV":
        server.run(host=config.HOST, port=config.PORT)
