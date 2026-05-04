---
title: "Overlook Strategy"
type: entity
tags: [organization, business, brand, web-dev, branding]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 15
sources: [[session-c49c7f7b]], [[session-dec9a139]], [[session-b7e57647]], [[session-ac05b833]], [[session-65f6bd58]]
---

# Overlook Strategy

[[finn-bennett]]'s branding and web development studio. GitHub org: `Overlook-Strategy`. Public site: `overlookstrategy.com`. In the portfolio brand architecture, it's `MODULE_01` — a sub-output of the Finn Bennett identity, not the primary identity.

## Why it matters

Primary revenue lever for Finn's web dev work. Houses the client portal app (`claude_Overlook-webapp`), which is the active product surface — Next.js frontend on Vercel ([[vercel]]), FastAPI/SQLAlchemy/Postgres backend on Railway ([[railway]]), with admin dashboard, client portals, updates feeds, notices, AI features (Ollama-backed summaries + RAG), and invoicing.

## Repo migration history

Originally on Finn's personal GitHub account `sharkfinnhoohaha`. Migrated to the `Overlook-Strategy` organization. The original remote was renamed to `personal`, new origin is the org repo. This bit Finn during the lost-work incident in session-ac05b833 — branch `claude/admin-dashboard-customization-HN68Q` couldn't be found on either remote, suspected pruned worktree from a separate Claude Code session.

## Stack and conventions

- **Frontend:** Next.js (App Router), Tailwind only, monochromatic (white bg, neutral-900 text, neutral-100/200 borders), no new deps unless asked
- **Money:** always `formatCents()` from `lib/utils.ts`, never raw cents
- **Auth:** `X-Admin-Key` header for admin requests via `adminFetch` from `lib/api.ts`
- **Admin routes:** `frontend/app/(admin)/admin/page.tsx`, `/admin/clients`, with `AdminSidebar.tsx`, `AdminLayoutClient.tsx`, `TaskManager.tsx`
- **AI:** `ENABLE_AI=true` (backend) + `NEXT_PUBLIC_ENABLE_AI=true` (frontend) master switches; [[ollama]] + [[pgvector]] for RAG
- **Worktree convention:** Claude Code sessions create `claude/<feature-name>-<id>` branches — these can be pruned when the session cleans up, so commit and push frequently from inside the session

## Client portal differentiator

Free dashboard / roadmap / financials views for clients, built on the existing Vercel deploy with no extra subscription cost. Pitched in session-b7e57647 as a competitive edge — clients get a real portal without Finn paying recurring SaaS fees.

## Active clients (per Notion Life OS)

- Rustler 42
- [[somliøya]] (Next.js + [[tinacms]])
- All In One Music

## Strategic direction (April 2026)

Three NotebookLM notebooks captured into this wiki on 2026-04-24 surface a pending positioning fork: lead with productized AI services, or keep them internal. See [[overlook-strategy-positioning]] for the framing and [[ai-agency-niches]] for the menu of candidates.

Related new pages from that ingest:
- [[notebooklm-overlook-strategy]] — the 47-source research pile Finn keeps for this question
- [[wat-framework-marketing]] — agent-driven delivery pipeline
- [[claude-max-arbitrage]] — economic substrate for productized tiers
- [[ninety-day-launch-plan]] — execution timeline

## See also

- [[finn-bennett]]
- [[overlook-audio]]
- [[overlook-portal-webapp]]
- [[vercel]]
- [[railway]]
- [[overlook-strategy-positioning]]
- [[admin-client-app-template-ovlk]]
