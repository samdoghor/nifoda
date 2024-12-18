"""
app/domain/entities/source.py
this file holds the source entity info
"""
from datetime import datetime
from uuid import uuid4


class SourceEntity:
    """
    the
    """

    def __init__(self, id: uuid4, name: str, description: str, source_status: str | None,
                 created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.name = name
        self.description = description
        self.source_status = source_status  # pending_review, approved, rejected, make_changes, deleted
        self.created_at = created_at
        self.updated_at = updated_at

    def approve_source(self):
        """
        this function approves the source
        """
        self.source_status = 'approved'

    def reject_source(self):
        """
        this function rejects the source
        """
        self.source_status = 'rejected'

    def make_changes(self):
        """
        this function request contributor to make changes
        """
        self.source_status = 'make_changes'
