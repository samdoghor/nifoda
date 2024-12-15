# imports

from flask_sqlalchemy import SQLAlchemy

# instantiation

db = SQLAlchemy()

# models

from .role import RoleModel
from .developer import DeveloperModel
