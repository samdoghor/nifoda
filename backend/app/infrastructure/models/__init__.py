# imports

from flask_sqlalchemy import SQLAlchemy

# instantiation

db = SQLAlchemy()

# models

from .role import RoleModel
from .point import PointModel
from .developer import DeveloperModel
from .contributor import ContributorModel
from .admin import AdminModel
