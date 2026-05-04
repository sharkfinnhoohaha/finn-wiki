---
title: "Ventura Forward App"
type: project
status: active
tags: [civic, ventura, supabase, nextjs]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [ventura-forward-app, cc-batch-a]

# --- life-os-daily contract ---
revenue_type: retainer
revenue_score: 7
effort_score: 5
roi_score: 5
icon: "🏙️"
area: strategy
client: [[ventura-forward]]
last_touched: 2026-04-20
next_action: "Finish schema migration + RLS policies, then wire admin triage UI for status"
blocker: ""
---

## Next Action

Finish schema migration + RLS policies, then wire admin triage UI for status transitions on reports.

## Blockers

- None currently — mid-migration state left from Apr 19, just needs to be resumed.

## TL;DR

Civic reporting app for Ventura. Current work is the "Report It" feature: a Supabase-backed form for reporting trash, graffiti, potholes, abandoned property, and hazards with photo, location, and status tracking.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Supabase (Postgres + Storage + Auth)
- Reverse geocoding for human-readable addresses
- Vercel project: `ventura-forward-app-800ngqhzt-sharkfinnhoohahas-projects.vercel.app`

## Status detail

Mid-migration as of 2026-04-19. Supabase schema for reports in place: enum `category` (trash | graffiti | pothole | abandoned | hazard | other), photo stored in Supabase Storage, `lat`/`lng` plus reverse-geocoded `address`, and a `status` field. Vercel production deploy READY 2026-04-20.

## Last known activity

2026-04-20 — last successful production deploy. Apr 19 schema migration work.

## Current active work + next TODO

- Finish schema migration + RLS policies
- Wire admin triage UI for `status` transitions
- Photo upload UX on mobile
- Public map view of open reports

## Warnings

> [!warning]
> `ventura-forward-admin-client-web-app` is a separate Vercel slug in ERROR state — it's a dead duplicate, see [[ventura-forward-admin-duplicate]].

> [!warning] Name collision with Pier and Point
> [[pier-and-point]] is a separate venture sketch (AI-assisted hyperlocal news outlet for Ventura) under the same [[overlook-strategy]] LLC. Same geography, civic-data overlap, but they're different products. Cross-pollination potential: Report It data could feed Pier and Point's tip line if both ship.

## Related

- [[supabase]]
- [[ventura-forward-admin-duplicate]] — dead sibling slug
- [[ventura-forward]] — the client retainer this app serves
- [[pier-and-point]] — adjacent venture concept, same Overlook umbrella, different brand

## Sources

- Vercel project `ventura-forward-app`
- CC extract: `raw/_extracts/cc-batch-a.md`
