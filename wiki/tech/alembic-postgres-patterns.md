---
title: "Alembic + Postgres Patterns"
type: tech
tags: [alembic, postgres, sqlalchemy, fastapi, migrations, backend]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_1f40bcce-863b-4387-a4ad-ad704bcd0a73, local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]
---

[[alembic]] migrations on [[postgres]] running on [[Railway]] for the [[overlook-strategy]] portal backend (FastAPI + SQLAlchemy). Two specific failure modes have burned days each — both belong here so they don't burn a third.

## Migration head chaining

**Every new migration must `down_revision` to the latest head, not the initial schema.** A Copilot-authored migration `b3c9f1a2d8e0` chained off the initial schema instead of the previous head, creating a branched migration graph. Alembic silently failed on every Railway deploy, `invoice_files` was never created, and any portal fetch that touched invoices threw 500 — which the frontend `try/catch` masked as `notFound()` (see [[next-js-patterns]]).

Diagnosis path: backend code looked fine, frontend looked fine, the bug was a one-line `down_revision` in a migration file.

### Pre-push verification

```bash
alembic heads
```

Should show **exactly one head**. Two heads = branched chain = silent failure. Run this before every push that touches `alembic/versions/`.

After deploy, on Railway:

```bash
alembic current
```

Should show `<rev> (head)`. If it doesn't, the migration didn't apply.

## Postgres enum gotcha

`sa.Enum(...)` inside `op.create_table()` **auto-creates the type**. If the type already exists from a partial prior run, the migration fails with `DuplicateObjectError: type "noticetype" already exists` and the entire migration aborts before tables are created. Result: the app keeps running but every request that touches the new tables throws 500 (`relation "feed_posts" does not exist`).

This is what happened with migration `c4d5e6f7a8b9_add_feed_posts_and_notices.py` and the `noticetype` enum (`info`, `warning`, `maintenance`, `success`).

### Fix pattern

```python
def upgrade():
    op.execute("""
        CREATE TYPE IF NOT EXISTS noticetype AS ENUM
        ('info', 'warning', 'maintenance', 'success')
    """)

    op.create_table(
        'notices',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('type', sa.Enum(
            'info', 'warning', 'maintenance', 'success',
            name='noticetype',
            create_type=False,   # <-- the load-bearing piece
        )),
        # ...
    )

def downgrade():
    op.drop_table('notices')
    op.execute("DROP TYPE IF EXISTS noticetype")
```

Two parts: explicit `CREATE TYPE IF NOT EXISTS` before `create_table`, and `create_type=False` on every `sa.Enum(...)` column. Without both, partial-run state will trip the next deploy.

## Migration file location

```
alembic/versions/<rev_id>_<description>.py
```

For the Overlook backend, full path is `backend/alembic/versions/c4d5e6f7a8b9_add_feed_posts_and_notices.py` (or similar — check the repo).

## Models added during these sessions

- `FeedPost` — backing the portal Updates feed
- `Notice` — dismissible banners on portal
- `invoice_files` — invoice attachments

Routers: `/api/feed_posts`, `/api/notices`. Portal endpoint extended to return active feed posts + notices.

## Gotchas (hit personally)

- **Silent failures.** Alembic doesn't loudly crash on a branched chain or a duplicate enum — the app boots, the migration just doesn't apply. Always verify with `alembic current` showing `(head)` after deploy.
- **`alembic heads` lies if you don't run it.** Pre-push check is the cheapest way to catch this.
- **Frontend masks backend 500s.** If `app/portal/[token]/page.tsx` is throwing `notFound()`, check Railway runtime logs for the actual traceback. Vercel logs only show status codes.
- **Don't retry a failing migration manually.** Drop the partial type/table state first or you'll pile partial-run mess on top of partial-run mess.
- **Copilot writes branched chains.** Both the chaining bug and the enum bug came from Copilot-authored migrations. Review migration `down_revision` fields by hand.

## Source citations

Sessions: `local_1f40bcce` (enum DuplicateObjectError, exact fix pattern, `noticetype` values), `local_dec9a139` (branched migration chain, `alembic heads` verification, full root-cause walkthrough on portal 404s).
