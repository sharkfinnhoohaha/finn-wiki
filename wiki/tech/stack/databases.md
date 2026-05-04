---
title: "Databases — what to pick, what to avoid"
type: tech
tags: [stack, database, postgres, sqlite, neon, supabase, railway-trap]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Databases

The single category that bit Finn hardest in April 2026 (Railway → Neon migration). Default Postgres recommendation should be Neon, full stop, unless the project has a specific reason to be elsewhere.

## Pick (free-tier first)

**[[neon]]** — 100 compute-hours/mo, 0.5GB storage per project, up to 10 projects (~5GB total). Branches are first-class (can `git checkout` a schema). Compute pauses when idle so the 100 CU-hours stretch much further than they sound. **The only Postgres option Finn should default to until proven otherwise.**

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Neon** | 100 CU-hrs/mo, 5GB across 10 projects | Via [[student-discounts]] none direct, GitHub Pack adjacent | Postgres for any new project. Branching for schema-heavy work | CU-hours run out silently — set up usage alerts |
| **Supabase** | Free Postgres + Auth + Storage; smaller compute | Some via Pack | When you want auth + DB + storage in one product | Auth + DB + Storage usage compound, hit 3 walls at once. RLS state in dashboard hard to version-control |
| **Convex** | Generous free tier; live queries built-in | None known | Realtime apps, anything with subscriptions, where you'd otherwise wire DB + websockets manually | Lock-in: Convex is the framework, not just a DB. Migrating off later means a rewrite |
| **Turso (libSQL)** | 500M row reads/mo, 10M writes, 5GB, 500 DBs | None | Edge / multi-region read-heavy. Embedded replicas zero-latency locally | SQLite limitations apply (writes serialize per DB). Worse for write-heavy or join-heavy schemas |
| **PlanetScale** | Free tier returned 2025 (after the 2024 cull) | Not in Pack | Serious MySQL workloads, branching like Neon but for MySQL | Costs ramp fast above free; MySQL not Finn's default |
| **Cloudflare D1** | Generous free; native edge SQLite | Via Cloudflare for Students (1yr Workers Paid) | Cloudflare-native apps where you want the whole stack on CF | Still maturing; early-product caveats |
| **Xata** | Free tier exists | None | Postgres + search built-in | Less momentum than Neon |
| **Railway Postgres** | None — 30-day $5 trial then $5/mo minimum | Pack lists Railway but no student-specific DB deal | Quick provisioning if you're already on Railway compute | **THE TRAP. Looks free, isn't.** This is what burned Finn. |
| **Render Postgres** | Free DB **expires after 30 days + 14-day grace** then deleted | None | Render-native apps | Same shape as Railway trap. Worse: deletion is automatic |

## When NOT to use the default (Neon)

- **Realtime / subscriptions are the core feature** → use [[convex]]. Not worth wiring websockets + Postgres + a sync layer when Convex bundles it.
- **Edge-first reads dominate** (CDN-ish data, low writes) → [[turso]] embedded replicas beat Postgres latency.
- **Mobile-first SQLite scenario** → just ship SQLite in the app, optionally sync via Turso. Per Theo: "SQLite is heavily underrated, got zero primary picks."
- **Project lives entirely on Cloudflare** → D1 keeps the stack one-vendor.
- **MySQL is non-negotiable** (legacy, partner integration) → PlanetScale.

## Worth knowing about

- **SQLite (local file)** — for any side project that runs as a single process, this is the cheapest, fastest, most boring option. Theo's framing: agents under-recommend it because it doesn't have a logo to suggest.
- **DuckDB** — analytical queries on local files (CSV, Parquet). Pairs nicely with SQLite for OLTP.
- **pgvector** (already in [[ollama-rag-pattern]]) — Neon supports it; no need for a separate vector DB for RAG side projects.

## Avoid / paid-default trap

- **Railway Postgres** — see above. This is the canonical Finn-trap.
- **Render Postgres** — automatic deletion after 30+14 days. Worse than Railway.
- **AWS RDS for hobby projects** — minimum viable cost is meaningfully higher than Neon's free tier. Only worth it for client work that's already AWS-bound.
- **MongoDB Atlas free M0** — fine, but Mongo as a default is bad shape for Finn's stack (Postgres + Drizzle / SQLAlchemy is everywhere in his projects). Don't reach for Mongo because of a $50 Pack credit.

## Finn's current pick (as of 2026-04-29)

- **[[neon]]** for any new Postgres need (Pier and Point pipeline, Overlook portal experiments, Ventura Forward).
- **[[supabase]]** kept for [[ventura-forward-app]] where Supabase Auth is also being used and migrating off would cost more than the convenience.
- **[[railway]]** still in use for [[overlook-portal-webapp]] FastAPI backend (compute, not DB) — see [[railway-deployment]]. Do not provision new Railway DBs.
- **SQLite** for any single-process side project from now on (e.g., Pier and Point local-only, scratch tools).

## Used by

Projects currently using a database in Finn's stack:

- [[overlook-portal-webapp]] — Postgres on Railway (migration target: [[neon]])
- [[ventura-forward-app]] — [[supabase]] (couples to Supabase Auth, keep)
- [[gearflip]] — [[supabase]] + [[clerk]]
- [[echomind]] (abandoned) — was scoped on [[supabase]]
- [[ollama-rag-pattern]] — pgvector on local Postgres for embeddings

## See also

- [[student-discounts]] · [[neon]] · [[supabase]] · [[convex]] · [[railway-deployment]] · [[alembic-postgres-patterns]] · [[ollama-rag-pattern]]
- External: [Neon pricing](https://neon.com/pricing) · [Supabase pricing](https://supabase.com/pricing) · [Turso pricing](https://turso.tech/pricing) · [Convex pricing](https://www.convex.dev/pricing)
