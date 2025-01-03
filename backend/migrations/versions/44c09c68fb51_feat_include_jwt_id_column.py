"""feat: include jwt-id column

Revision ID: 44c09c68fb51
Revises: f6e6d989c296
Create Date: 2024-12-28 16:33:01.582073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '44c09c68fb51'
down_revision = 'f6e6d989c296'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.add_column(sa.Column('_jwt_id', sa.String(), nullable=True))

    with op.batch_alter_table('contributors', schema=None) as batch_op:
        batch_op.add_column(sa.Column('_jwt_id', sa.String(), nullable=True))

    with op.batch_alter_table('developers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('_jwt_id', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('developers', schema=None) as batch_op:
        batch_op.drop_column('_jwt_id')

    with op.batch_alter_table('contributors', schema=None) as batch_op:
        batch_op.drop_column('_jwt_id')

    with op.batch_alter_table('admins', schema=None) as batch_op:
        batch_op.drop_column('_jwt_id')

    # ### end Alembic commands ###
