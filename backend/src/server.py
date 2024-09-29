"""
## Module Name: server.py

This module is responsible for setting up and running the Nigeria Database
Food API (NIFODA) server.

It imports necessary modules, configures the server, and defines routes and
endpoints for the API.

"""

# imports

from flask import Blueprint, Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_talisman import Talisman

try:
    from . import config, routes
    from .models import db
except ImportError:
    import config
    import routes
    from models import db

# instantiation/configuration

server = Flask(__name__)

# security

Talisman(server)
origins = [config.frontend_application_url,
           config.admin_application_url]
cors = CORS(server, resources={
            r"/nifoda-api-v1/*": {"origins": origins}},
            supports_credentials=True,
            methods=['post', 'get', 'put', 'delete'],
            allowed_headers=["Authorization", "Content-Type"],
            max_age=3600)
server.config['SECRET_KEY'] = config.secret_key


# database
server.debug = config.debug
server.config["SQLALCHEMY_DATABASE_URI"] = config.sqlalchemy_database_uri
server.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = config.sqlalchemy_track_modifications  # noqa
db.init_app(server)
db.app = server
migrate = Migrate(server, db)

# routes

for blueprint in vars(routes).values():
    if isinstance(blueprint, Blueprint):
        server.register_blueprint(
            blueprint, url_prefix=config.api_application_root)

# run


if __name__ == "__main__":
    server.debug = config.debug if config.environment == "DEV" else False
    if config.environment == "DEV":
        server.run(host=config.application_host, port=config.application_port)  # noqa
