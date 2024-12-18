"""
app/infrastructure/models/role.py
this file holds the role model info
"""

from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from .. import db
from ..abc import BaseModel, MetaBaseModel


# imports


# model

class RoleModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the roles Model e.g contributor """

    __tablename__ = 'roles'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    role = db.Column(db.String(), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # relationships

    admins = db.relationship('AdminModel', backref='roles', lazy=True)
    contributors = db.relationship('ContributorModel', backref='roles', lazy=True)
    developers = db.relationship('DeveloperModel', backref='roles', lazy=True)
