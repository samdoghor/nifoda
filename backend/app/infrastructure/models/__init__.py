# imports

from flask_sqlalchemy import SQLAlchemy

# instantiation

db = SQLAlchemy()

from .food_domain import CategoryModel, FoodClassModel, FoodItemModel, GroupModel, SourceModel
from .user_domain import AdminModel, ContributorModel, DeveloperModel, PointModel, RoleModel
