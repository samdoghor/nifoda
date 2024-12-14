"""
app/domain/entity/role.py
this file holds the role entity info
"""
from datetime import datetime
from uuid import uuid4


class RoleEntity:
    """
    the
    """

    def __init__(self, id: uuid4, role: str, created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.role = role
        self.created_at = created_at
        self.updated_at = updated_at
