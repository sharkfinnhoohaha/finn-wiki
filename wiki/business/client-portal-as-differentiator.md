---
title: "Client Portal as Differentiator"
type: business
tags: [overlook-strategy, positioning, client-portal, vercel, free]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[local_b7e57647-0d6d-464c-9ae8-fbd083e1d078]], [[local_c49c7f7b-15a7-4256-8a5f-b71125d9e309]]
---

## TL;DR

The free Overlook client portal — dashboard / roadmap / financials, deployed on Vercel — is a **strategic positioning move** for [[overlook-strategy-positioning|Overlook Strategy]]. Clients get a real working dashboard included with the engagement; Finn pays no recurring SaaS cost because it runs on existing Vercel infra.

## The pitch

- Most studios at this size send PDFs or Notion shares to clients
- Overlook gives clients a live, branded portal — dashboard + roadmap + financials tabs
- Cost to client: included
- Cost to Finn: $0/month recurring (existing Vercel deployment, FastAPI + Postgres on Railway already running for [[overlook-strategy-positioning|the studio's own backend]])

## Stack

- **Frontend:** Next.js 15 (App Router), Tailwind, TypeScript
- **Aesthetic:** dark, monochromatic, Notion-inspired (preserved from existing static `index.html` mockup)
- **Hosting:** Vercel auto-deploy from `main`
- **Backend:** FastAPI + SQLAlchemy + Alembic on Railway
- **Auth:** `X-Admin-Key` header pattern for admin; per-client `portal_token` UUID (NOT the same as `client.id`)

## Tabs

- **Dashboard**
- **Roadmap**
- **Financials**
- **Updates** (activity feed — replaced "Resources" in the redesign)

## Recent feature work

From `local_c49c7f7b-15a7-4256-8a5f-b71125d9e309`:

- Replaced Resources tab with an Updates activity feed
- Added dismissible notice banners
- Built admin-side managers: `FeedManager.tsx`, `NoticeManager.tsx`, `ProjectHealthBar.tsx`
- New DB models: `FeedPost`, `Notice` with Alembic migration `c4d5e6f7a8b9`
- New routers: `/api/feed_posts`, `/api/notices`
- Pattern preserved: portal sidebar nav uses tab-keyed `hidden` divs

## Constraint that shapes the pitch

> "Build me a customer and client dashboard that I can add to my vercel website (overlookstrategy.com) for free (no additional subscriptions, etc)"

Zero new subscriptions is the explicit guardrail — this is what makes the portal a sustainable freebie rather than an unprofitable add-on. Connects to [[token-conservation-mindset]].

## Sources

- `local_b7e57647-0d6d-464c-9ae8-fbd083e1d078` — "Build free customer dashboard for website"
- `local_c49c7f7b-15a7-4256-8a5f-b71125d9e309` — "Redesign client portal with updates feed"
