---
title: "Railway Deployment"
type: tech
tags: [railway, postgres, fastapi, alembic, backend, deployment]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_1f40bcce-863b-4387-a4ad-ad704bcd0a73, local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53, local_c49c7f7b-15a7-4256-8a5f-b71125d9e309]
---

[[Railway]] hosts the [[overlook-strategy]] portal backend: FastAPI + SQLAlchemy + [[alembic]] + Postgres. Production host: `claudeoverlook-webapp-production.up.railway.app`. Frontend lives on [[Vercel]] (see [[vercel-deployment]]).

## Deploy trigger

Same connected-GitHub-repo pattern as Vercel — push to the configured branch and Railway rebuilds. Migration runs as part of the boot sequence; if it fails, the app may still come up but every request touching missing tables 500s.

## Volume mount for persistent uploads

**Flagged as a 30-second fix Finn should do**: configure Railway volume mount at `/data/uploads` so document uploads survive redeploys. Without it, every Railway deploy wipes uploaded PDFs/DOCXs and the [[ollama-rag-pattern]] document store starts from zero. See `local_dec9a139`.

## Verifying migrations

After deploy, Railway logs should show:

```
alembic current
<rev_id> (head)
```

If the rev shows without `(head)`, or shows nothing, the migration didn't apply cleanly. Common causes covered in [[alembic-postgres-patterns]]:

- Branched migration chain (two heads — must `down_revision` to latest head)
- `DuplicateObjectError` on enum types from a partial prior run

## Runtime logs

Railway runtime logs are where actual Python tracebacks land. Vercel logs show **status codes** but not the upstream traceback. So when the portal returns 500 / 404, the diagnosis path is:

1. Vercel runtime logs → confirm status code
2. Railway runtime logs → grab the traceback
3. If Alembic-related, check `alembic current` output near the top of the boot log

This is the path that exposed the `c4d5e6f7a8b9_add_feed_posts_and_notices.py` enum failure (`DuplicateObjectError: type "noticetype" already exists`) and the `b3c9f1a2d8e0` branched chain.

## Stack pinned to Railway

- Python (FastAPI)
- SQLAlchemy 2.x
- Alembic
- Postgres (Railway-managed)
- pgvector extension for [[ollama-rag-pattern]] embeddings

## Endpoints (Overlook portal)

```
/api/notices
/api/feed_posts
/api/clients
/api/tasks/{id}
```

## Env vars worth mirroring

Same discipline as [[vercel-deployment]] — what's in `.env.local` for the backend should mirror to Railway env, and any token regen needs a Railway redeploy. The `ENABLE_AI=true` master switch lives here for backend (see [[ollama-rag-pattern]]).

## Gotchas (hit personally)

- **App boots fine even when migration fails.** Symptom is request-level 500s, not boot crash. Always check `alembic current` shows `(head)` after deploy.
- **Volume not mounted by default.** Documents disappear on redeploy until `/data/uploads` is mounted as a volume.
- **Frontend can mask backend 500s.** [[next-js-patterns]] has the `try/catch → notFound()` story. Always grep Railway logs when the frontend says 404 but the backend should have data.
- **Don't re-run a partially failed migration.** Drop the partial type/table first or use `IF NOT EXISTS`-style guards (see [[alembic-postgres-patterns]]).

## Source citations

Sessions: `local_1f40bcce` (the `noticetype` enum failure and the prod URL), `local_dec9a139` (`/data/uploads` volume mount flag, full root cause on 404s, Alembic verification path), `local_c49c7f7b` (initial portal feed/notice deploy that introduced the migration).
