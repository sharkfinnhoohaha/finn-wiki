---
title: "Overlook Boilerplates"
type: project
status: active
tags: [overlook-strategy, boilerplate, github, templates]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [cc-batch-a]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 2
effort_score: 2
roi_score: 1
icon: "📦"
area: strategy
last_touched: 2026-04-24
next_action: "Delete 2 scratch repos manually (needs delete_repo scope) + README pass"
blocker: ""
---

## Next Action

Manually delete 2 scratch repos from github.com/Overlook-Strategy (requires local token with `delete_repo` scope), then README pass.

## Blockers

- None — Finn needs to run this from local terminal (no Cowork `gh` token has `delete_repo` scope).

## TL;DR

Five Overlook Strategy boilerplate repos (SaaS, web, dashboard, etc.) seeded at github.com/Overlook-Strategy. Shipped Apr 24; two leftover verification repos still need manual cleanup because the `gh` CLI lacks `delete_repo` scope.

## Stack

- GitHub org: `Overlook-Strategy`
- Next.js / TypeScript / Tailwind base across most templates
- `gh` CLI for repo automation

## Status detail

Five boilerplates pushed Apr 24. Two scratch/verification repos from the setup pass are still sitting in the org — couldn't remove them from the sandbox because the available `gh` token is scoped without `delete_repo`.

## Last known activity

2026-04-24 — five boilerplate repos shipped.

## Current active work + next TODO

- Finn to manually delete the two leftover verification repos from github.com/Overlook-Strategy (needs a token with `delete_repo` scope, run locally)
- README pass across the five boilerplates so they stand on their own
- Decide which boilerplate becomes the default "new Overlook client" starter

## Related

- [[overlook-strategy]]
- [[admin-client-app-template-ovlk]] — older template lineage, superseded

## Sources

- CC extract: `raw/_extracts/cc-batch-a.md`
- GitHub org: `Overlook-Strategy`
