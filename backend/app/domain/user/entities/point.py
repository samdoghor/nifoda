"""
app/domain/entity/point.py
this file holds the point entity info
"""
from datetime import datetime
from uuid import uuid4


class PointEntity:
    """
    the
    """

    def __init__(self, id: uuid4, point: int, contributor: uuid4, created_at: datetime | None,
                 updated_at: datetime | None):
        self.id = id
        self.point = point
        self.contributor = contributor
        self.created_at = created_at
        self.updated_at = updated_at
