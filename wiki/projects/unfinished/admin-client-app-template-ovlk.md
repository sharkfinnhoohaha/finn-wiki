---
title: "Overlook Admin/Client App Template"
type: project
status: dormant
tags: [overlook-strategy, template, superseded]
created: 2026-04-24
updated: 2026-04-28
weight: low
node_size: 2
sources: [overlook-strategy-admin-client-template-ovlk, cc-batch-a]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 1
effort_score: 2
roi_score: 0
icon: "·"
area: strategy
last_touched: 2026-04-09
next_action: "Decide: archive Vercel project + spin down Railway, or keep as reference template"
blocker: ""
---

## Next Action

Decide: archive the Vercel project and spin down Railway to avoid idle costs, or keep as a reference template for productized-services work.

## Blockers

- None — it's a decision, not a technical block.

## TL;DR

The template that seeded the Overlook portal. Full stack shipped Apr 9 — Railway backend plus Vercel frontend both live — then got superseded when the real Overlook webapp was forked off it.

## Stack

- Next.js frontend on Vercel (`overlook-strategy-admin-client-template-ovlk-nzrdy31m7.vercel.app`)
- FastAPI + Postgres backend on Railway
- `X-Admin-Key` header auth pattern (the same pattern that carried forward into [[overlook-portal-webapp]])

## Status detail

Template is live in production but parked — no iteration since the fork. Marked unfinished rather than deployed because as a standalone product it was never "finished": its purpose was to become the real portal, which it did.

## Last known activity

2026-04-09 — initial deploy of both frontend and backend.

## What's blocking finishing it

- **Superseded:** the real Overlook webapp ([[overlook-portal-webapp]]) is the live product; this template has no user-facing purpose of its own
- Decision needed: keep it running as a reference, or archive the Vercel project and spin down Railway

## Cross-reference (2026-04-24)

This deployment shows up as a source in [[notebooklm-overlook-strategy]] — Finn was apparently using its Vercel deployment overview as a reference pinned alongside other 2026 dev-tooling videos. Implies it still has reference value even if no further iteration is planned. If/when productizing the [[admin-client-app-template-ovlk|template]] becomes a serious option (see [[ai-agency-niches]] and [[productized-services]]), this is the obvious starting point.

## Related

- [[overlook-portal-webapp]] — the fork that became the real product
- [[overlook-boilerplates]] — newer boilerplate strategy
- [[overlook-strategy]]

## Sources

- Vercel project `overlook-strategy-admin-client-template-ovlk`
- CC extract: `raw/_extracts/cc-batch-a.md`
