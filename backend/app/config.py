"""
## Module Name: config.py

This module contains the configuration settings for the Nigeria Food Database
API (NIFODA).

It provides environment variables and settings related to the database,
server, and debugging.
"""

# imports

import os

from dotenv import load_dotenv

load_dotenv()
db_username = os.getenv('DB_USERNAME')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')
db_name = os.getenv('DB_NAME')

# database (PostgreSQl)

sqlalchemy_database_uri = f'postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}'
sqlalchemy_track_modifications = False

# server

secret_key = os.getenv("SECRET_KEY")
environment = os.getenv("ENVIRONMENT")
api_application_root = os.getenv("API_APPLICATION_ROOT")
application_host = os.getenv("APPLICATION_HOST")
application_port = int(os.getenv("APPLICATION_PORT"))
algorithm = os.getenv("ALGORITHM")

frontend_application_url = os.getenv("FRONTEND_APPLICATION_URL")
admin_application_url = os.getenv("ADMIN_APPLICATION_URL")
server_url = 'os.getenv("SERVER_URL")'

# debugging

debug = os.getenv('DEBUG')
