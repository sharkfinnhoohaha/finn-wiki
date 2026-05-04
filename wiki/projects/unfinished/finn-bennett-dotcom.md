---
title: "finnbennett.com (Maintenance Landing)"
type: project
status: blocked
tags: [personal-site, landing, vercel, tooling-block]
created: 2026-04-24
updated: 2026-04-28
weight: low
node_size: 2
sources: [finnbennett-maintenance, fbdotcom-underdev, cc-batch-a]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 0
effort_score: 3
roi_score: 0
icon: "·"
area: none
last_touched: 2026-04-08
next_action: "Decide: keep finnbennett-maintenance or make fbdotcom-underdev canonical, then deploy from local"
blocker: "Cowork sandbox has no vercel CLI — deploy must be run from Finn's local terminal"
---

## Next Action

Decide whether to keep `finnbennett-maintenance` or make `fbdotcom-underdev` canonical, then deploy from local terminal (no Cowork CLI).

## Blockers

- Cowork sandbox has no `vercel` CLI and no `VERCEL_TOKEN` — deploy must go through Finn's local shell or the Vercel web UI.

## TL;DR

Temporary "under maintenance" landing for finnbennett.com. Two Vercel slugs were spun up as attempts (`finnbennett-maintenance` and `fbdotcom-underdev`), but the follow-up fixes kept failing in the Cowork sandbox.

## Stack

- Static HTML landing
- Vercel slugs: `finnbennett-maintenance` (Apr 1 READY) and `fbdotcom-underdev` (Apr 8 READY — tracked separately in [[fbdotcom-underdev]])

## Status detail

Marked unfinished because the deploy pipeline never got healthy in-session. Sandbox has no Vercel CLI in `$PATH` and no auth token wired up, so `vercel deploy` kept failing. The Apr 5 CC session ended with Finn saying essentially "try figure out why, and fix it" but the next session never came back to it.

## Last known activity

2026-04-08 — `fbdotcom-underdev` deployed successfully as the working interim page. Apr 5 CC session hit the tooling wall.

## What's blocking finishing it

- **Tooling:** Cowork sandbox has no `vercel` CLI and no `VERCEL_TOKEN` — deploys have to go through the web UI or a local shell
- Recurring sandbox limitation: can't push to GitHub either, so the deploy-from-git path needs Finn on his terminal
- No clear decision on whether to keep `finnbennett-maintenance` or make `fbdotcom-underdev` the canonical interim

## Related

- [[fbdotcom-underdev]] — the working interim deploy
- [[finn-v2-portfolio]] — older deployed portfolio iteration
- [[three-altitudes]] — the upcoming "real" portfolio

## Sources

- Vercel projects `finnbennett-maintenance`, `fbdotcom-underdev`
- CC extract: `raw/_extracts/cc-batch-a.md`
