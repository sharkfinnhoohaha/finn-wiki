---
title: "Railway"
type: entity
tags: [tool, service, hosting, backend, postgres]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-1f40bcce]], [[session-c49c7f7b]], [[session-dec9a139]]
---

# Railway

Backend hosting platform Finn uses for FastAPI + SQLAlchemy + Alembic + Postgres. Default backend host for [[overlook-strategy]] projects. Production URL pattern: `<project>-production.up.railway.app` (e.g. `claudeoverlook-webapp-production.up.railway.app`).

## How it's used

- Hosts FastAPI for the [[overlook-portal-webapp]] backend
- Hosts the Postgres database used by SQLAlchemy + Alembic
- Runs Alembic migrations on each deploy
- Logs are the source of truth for Python tracebacks ([[vercel]] only shows status codes)

## Gotchas Finn has hit

- **Postgres enum gotcha.** `sa.Enum(...)` inside `op.create_table()` auto-creates the type. If a previous deploy created the type but failed to create the table (partial run), every subsequent migration aborts with `DuplicateObjectError: type "X" already exists`. App keeps running, every request 500s with `relation "Y" does not exist`. This was the `noticetype` failure in the notices/feed_posts deploy. Fix:
  - `op.execute("CREATE TYPE IF NOT EXISTS noticetype AS ENUM ('info', 'warning', 'maintenance', 'success')")` BEFORE `op.create_table()`
  - Pass `create_type=False` to `sa.Enum(...)` columns
  - In `downgrade()`: `op.execute("DROP TYPE IF EXISTS noticetype")` after dropping tables
  - Verify with `alembic current` in Railway logs (should match head, e.g. `c4d5e6f7a8b9 (head)`)
- **Alembic migration chains.** Every new migration must chain off the latest head (`alembic heads`) — not the initial schema. A Copilot-authored migration `b3c9f1a2d8e0` created a branched chain that silently failed on every deploy. Tables never created, all related endpoints returned 500.
- **Volume mount for uploads.** Need `/data/uploads` mounted as a Railway volume to survive redeploys — flagged as a 30-second config fix.
- **No GitHub creds in sandbox.** Same Cowork limitation as [[vercel]] — Finn pushes from his terminal.

## See also

- [[vercel]]
- [[overlook-portal-webapp]]
- [[ollama]]
- [[pgvector]]
