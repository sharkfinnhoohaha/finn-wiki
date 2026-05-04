---
title: "frontend (duplicate slug)"
type: project
status: dormant
tags: [cleanup, vercel-slug-clutter, duplicate]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [frontend]
---

## TL;DR

Vercel project literally named `frontend`, deploying from the `claude_Overlook-webapp` repo. It's a dead duplicate of `overlook-webapp-ehtt` — same repo, same code, different slug. Currently in ERROR state (merge-conflict build).

## Concept

Not a project — just a Vercel slug from an extra Git import.

## Where it died

The canonical Overlook webapp deploy is `overlook-webapp-ehtt` (READY 2026-04-21). `frontend` is a sibling slug wired to the same repo and has been in ERROR since the last push.

## Cleanup action

Delete the `frontend` Vercel project.

## Related

- [[overlook-portal-webapp]] — the real Overlook product surface
- [[claude-overlook-webapp]] — the repo

## Sources

- Vercel project `frontend` (ERROR 2026-04-21)
