"""
app/domain/entities/group.py
this file holds the group entity info
"""
from datetime import datetime
from uuid import uuid4


class GroupEntity:
    """
    the
    """

    def __init__(self, id: uuid4, name: str, description: str, group_status: str | None,
                 created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.name = name
        self.description = description
        self.group_status = group_status  # pending_review, approved, rejected, make_changes, deleted
        self.created_at = created_at
        self.updated_at = updated_at

    def approve_group(self):
        """
        this function approves the group
        """
        self.group_status = 'approved'

    def reject_group(self):
        """
        this function rejects the group
        """
        self.group_status = 'rejected'

    def make_changes(self):
        """
        this function request contributor to make changes
        """
        self.group_status = 'make_changes'
