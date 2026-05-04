---
title: "Overlook Portal Webapp"
aliases: [overlook-webapp, overlook-portal, overlook-client-portal]
type: project
status: active
tags: [overlook-strategy, nextjs, fastapi, railway, vercel, postgres, ollama]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 15
sources: [[local_ac05b833-2a5a-44bd-97e8-58c840d59483]], [[local_1f40bcce-863b-4387-a4ad-ad704bcd0a73]], [[local_c49c7f7b-15a7-4256-8a5f-b71125d9e309]], [[local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]], [[local_b7e57647-0d6d-464c-9ae8-fbd083e1d078]]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 4
effort_score: 5
roi_score: 2
icon: "🏢"
area: strategy
last_touched: 2026-04-24
next_action: "Fix notices/posts 500 and redo admin dashboard customization"
blocker: ""
---

## Next Action

Fix notices/posts 500 (enum bug pattern documented in `## Recent work`) then redo admin dashboard customization via reconstruction prompts.

## Blockers

- None currently blocking development, but notices/posts 500 was unresolved at last session end — confirm fix before moving on.

## TL;DR

[[overlook-strategy]]'s client portal app — clients log into their own dashboard at `overlookstrategy.com` / `overlook-webapp.vercel.app` to see project status, an updates feed, notices, invoices, FAQs, and (admin-only) AI-generated weekly summaries. Free for clients (no SaaS subscription burden on Finn) — sold as a competitive differentiator. Frontend is Next.js on Vercel; backend is FastAPI + SQLAlchemy + Alembic + Postgres on Railway. Most recent feature work: an Updates feed + dismissible notices replacing the old Resources tab, plus an admin-side AI suite (RAG over uploaded docs, weekly project summaries, ask-AI CLI).

> "Build me a customer and client dashboard that I can add to my vercel website (overlookstrategy.com) for free (no additional subscriptions, etc)"

## Stack

- **Frontend:** Next.js (App Router), React, [[tailwind]] only, TypeScript. Monochromatic aesthetic — white bg, neutral-900 text, neutral-100/200 borders. **No new deps unless asked.**
- **Backend:** [[fastapi]] + [[sqlalchemy]] + [[alembic]] + Postgres
- **Hosting:** [[vercel]] (frontend, auto-deploys from `main`); [[railway]] (backend, prod host `claudeoverlook-webapp-production.up.railway.app`)
- **Auth:** `X-Admin-Key` header pattern for admin routes; `portal_token` (separate UUID, NOT `client.id`) for client portal access
- **AI:** [[ollama]] (`mistral`, `nomic-embed-text`) + [[pgvector]]. `ENABLE_AI=true` (backend) + `NEXT_PUBLIC_ENABLE_AI=true` (frontend) master switches. Ollama base URL `http://localhost:11434`.

## Repo

- GitHub: `Overlook-Strategy/claude_Overlook-webapp` (origin)
- Previously on personal account: `sharkfinnhoohaha/claude_Overlook-webapp` (`personal` remote, retained)
- Production frontend: `overlook-webapp.vercel.app` (also custom domain `overlookstrategy.com`)
- Production backend: `claudeoverlook-webapp-production.up.railway.app`

## Key components and routes

### Frontend (admin)

- `frontend/app/(admin)/admin/page.tsx`
- `/admin/clients`
- `/admin/ai` (AI status page)
- `frontend/components/admin/AdminSidebar.tsx`
- `frontend/components/admin/AdminLayoutClient.tsx`
- `frontend/components/admin/TaskManager.tsx`
- `FeedManager.tsx` — admin posts/edits feed entries
- `NoticeManager.tsx` — admin manages notice banners
- `ProjectHealthBar.tsx`
- `AISummaryPanel` — review + publish AI-drafted weekly summaries
- `DocumentManager` — upload PDF/DOCX/TXT, hit "Index" to chunk + embed via `nomic-embed-text` into pgvector

### Frontend (portal)

- `app/portal/[token]/page.tsx` — portal entrypoint, fetches by `portal_token`
- `FeedView.tsx` — client-facing updates feed
- `DashboardView.tsx` (rebuilt in batch-2 session 1)
- `PortalClientShell.tsx`
- `FAQView` — replaced `AskAIView` (component still exists but disabled in portal)
- Sidebar nav uses tab-keyed `hidden` divs (existing pattern preserved)

### Backend

- Routers: `/api/feed_posts`, `/api/notices`, `/api/clients`, `/api/tasks/{id}`
- Models: `FeedPost`, `Notice`, `Client`, `Task`, `InvoiceFile`, plus AI tables
- Migrations live in `alembic/versions/`
- Specific migrations referenced:
  - `c4d5e6f7a8b9_add_feed_posts_and_notices.py` — added `FeedPost`, `Notice`, `noticetype` enum (`info`, `warning`, `maintenance`, `success`)
  - `b3c9f1a2d8e0` — Copilot-authored, broke prod (see Gotchas)

### Helpers

- `lib/utils.ts` → `formatCents()` — **always** use this for money. Never raw cents.
- `lib/api.ts` → `adminFetch` for authed admin requests via `X-Admin-Key`

### CLI

- `python scripts/overlook-ai.py status | summarize | triage` — Finn's daily AI sweep concept

## Recent work

### Updates feed + notices (batch-2 session 1)

Replaced the "Resources" tab with an "Updates" activity feed; added dismissible notice banners. 15 files written across backend + frontend. New DB models `FeedPost` + `Notice` with Alembic migration `c4d5e6f7a8b9`. `noticetype` enum: `info | warning | maintenance | success`. Portal endpoint extended to return active feed posts + notices. Push hit non-fast-forward on first attempt → `deploy-changes.sh` script was patched to `git pull --rebase` first.

### Production 404 / 500 debugging (batch-2 session 2)

Cascaded bug. Symptoms: clicking a client → portal URL just opened to a generic page. Root cause: a Copilot-authored Alembic migration (`b3c9f1a2d8e0`) had `down_revision` pointing to the initial schema instead of the previous head, creating a branched migration chain. Alembic silently failed on every Railway deploy, `invoice_files` table never created, any portal fetch that queried invoices threw 500 — and the frontend's `try/catch` in `app/portal/[token]/page.tsx` was masking 500s as `notFound()`. Diagnosis path: Vercel runtime logs show status codes; Railway logs show actual tracebacks. Also resolved a stale `claude/peaceful-banach` worktree.

### Notices/posts deploy 500 (batch-1 session 6)

Migration `c4d5e6f7a8b9_add_feed_posts_and_notices.py` failed on every deploy with:

```
DuplicateObjectError: type "noticetype" already exists
```

Enum was leftover from a partial prior run; migration aborted before creating tables; every request to `/api/notices` and `/api/feed_posts` returned 500 with `relation "feed_posts" does not exist`. Bug **not resolved** at session end. Fix pattern (provided as a Codex/Claude Code prompt):

- `op.execute("CREATE TYPE IF NOT EXISTS noticetype AS ENUM ('info', 'warning', 'maintenance', 'success')")` BEFORE `op.create_table()`
- Pass `create_type=False` to `sa.Enum(...)` columns
- In `downgrade()`: `op.execute("DROP TYPE IF EXISTS noticetype")` after dropping tables
- Verify with `alembic current` in Railway logs → should show `c4d5e6f7a8b9 (head)`

### Lost admin dashboard work (batch-1 session 4)

Finn tried to push branch `claude/admin-dashboard-customization-HN68Q` to main. Branch didn't exist locally or on either remote — likely created in a separate Claude Code session worktree that was cleaned up / pruned (Finn had recently deleted 21 stale branches). Searched local clones, worktrees, git history, `~/.claude` session folders — nothing. **Work was lost.** 3 active local worktrees at the time: `admiring-nash`, `charming-mayer`, `heuristic-ellis`. Remediation: agent provided 3 reconstruction prompts for Copilot/Codex to redo the admin dashboard work.

> "Give me prompts to give to github agent to redo the work. I'm incredibly dissapointed, you burned through two days of tokens to do this work for nothing?"

### Initial portal dashboard build (batch-3 session 3)

Started from a static `index.html` mockup (dark, monochromatic, Notion-inspired with dashboard/roadmap/financials tabs). Goal: build it into a deployable client/customer dashboard for `overlookstrategy.com` on Vercel with zero new subscriptions. Scaffolded Next.js 15 + ran `/productivity:start`. Build went idle mid-scaffold.

## AI architecture

- `ENABLE_AI=true` (backend) + `NEXT_PUBLIC_ENABLE_AI=true` (frontend) master switches
- [[ollama]] running locally at `http://localhost:11434`
- Models: `mistral` (chat/summary), `nomic-embed-text` (embeddings)
- [[pgvector]] for embedding storage
- Admin status page at `/admin/ai`
- **Weekly project summaries** — generated as unpublished drafts, admin reviews + publishes
- **Document RAG** — upload PDF/DOCX/TXT in `DocumentManager`, hit "Index" → chunks + embeddings → pgvector
- **`AskAIView`** — was removed from portal, replaced with `FAQView`. Component still exists.
- **Future enhancements identified:** streaming summary generation, populating `prompt_tokens` from Ollama `eval_count`, [[slowapi]] rate-limiting on `/ask` if portal AI returns

## Gotchas

- **Sandbox can't push to GitHub.** Pattern: commit locally, Finn pushes from terminal. `deploy-changes.sh` script committed in repo, updated to `git pull --rebase` before push.
- **Postgres enum gotcha:** `sa.Enum(...)` inside `op.create_table()` auto-creates the type — fails if it already exists from a partial run.
- **Alembic chain:** every new migration must chain off the latest head, not the initial schema. Pre-push verification: `alembic heads`. Copilot got this wrong once and broke prod.
- **Frontend error masking:** `try/catch` in `app/portal/[token]/page.tsx` was converting backend 500s into `notFound()`. Diagnosis must use Railway logs, not just Vercel runtime logs.
- **`portal_token` ≠ `client.id`** — separate UUID field. Don't confuse them.
- **Repo migration:** moved from personal GitHub (`sharkfinnhoohaha`) → `Overlook-Strategy` org. Origin renamed; `personal` retained as a second remote.
- **Worktree cleanup:** `git worktree remove <path> --force && git worktree prune && git branch -D claude/<name>`. Lost-work prevention: commit + push frequently from inside session, since Claude Code worktrees can be pruned.
- **Money:** `formatCents()` from `lib/utils.ts`. Never raw cents.
- **Style:** Tailwind only, monochromatic, no new dependencies.

## Open threads

- Notices/posts 500 may still be unresolved (`STILL FUCKING SAME ISSUE` was the last word from Finn in batch-1 session 6)
- Admin dashboard customization needs to be redone — reconstruction prompts provided
- Local main was 2 commits behind both remotes — needs `git pull`
- Other 3 worktrees (`admiring-nash`, `charming-mayer`, `heuristic-ellis`) not yet checked for the lost HN68Q work
- Whether to re-add `AskAIView` to client portal (currently uses FAQ)
- Railway volume mount for uploads at `/data/uploads` to survive redeploys — flagged as a "30-second fix" Finn should do
- Whether to wire `slowapi` rate limiting on `/ask` if portal AI returns

## Quotes from Finn

> "I'm encountering issues trying to push claude/admin-dashboard-customization-HN68Q to the main branch. i feel like it has something to do with the fact that the repo used to be on my personal github account but I switched it to my organization."

> "I am trying to fix an issue where none of my notices or posts are working... You have already tried to fix this, but failed so don't retry things that didn't work."

> "Do not explain the fixes to me, i need to just get this working. Give me a prompt i can give to codex or claude code to debug, I don't want to keep wasting claude credits having you fail at trying to fix it."

> "STILL FUCKING SAME ISSUE"

> "ok so that didn't fix anything...still 404. Web app is already deployed on Vercel so you don't need a deploy checklist."

> "I'm confused, i clicked a client -> portal url -> and it just opened to this"

> "Can you give me a step by step guide on how to get the admin dashboard ai features working, and what they can be best used for? ... Do not make code changes yourself, do not overuse tokens. Assign coding tasks to cheaper models like sonnet, or give me a prompt to give to copilot."

## Related

- [[overlook-strategy]] — the studio that owns this portal
- [[fastapi]], [[alembic]], [[railway]], [[vercel]], [[ollama]], [[pgvector]], [[tailwind]]
- [[cowork-sandbox-limits]]
- Clients using the portal: [[rustler-42]], [[somliøya]], [[all-in-one-music]], [[ventura-forward]]

## Sources

- `local_ac05b833-2a5a-44bd-97e8-58c840d59483` — Fix git push to main branch (batch-1 session 4)
- `local_1f40bcce-863b-4387-a4ad-ad704bcd0a73` — Debug notices and posts deployment issue (batch-1 session 6)
- `local_c49c7f7b-15a7-4256-8a5f-b71125d9e309` — Redesign client portal with updates feed (batch-2 session 1)
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` — Clean up repository branches and merge fixes (batch-2 session 2)
- `local_b7e57647-0d6d-464c-9ae8-fbd083e1d078` — Build free customer dashboard for website (batch-3 session 3)
