---
title: "Portal Landing Page"
type: project
status: shipped
tags: [overlook-portal, landing, broken-build]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [portal-landing-page]
---

## TL;DR

Landing page for the Overlook portal. Filed under deployed because the Vercel project exists and has served successful production builds — but **the most recent production deploy (2026-04-22) is in ERROR state** due to a package.json issue. Essentially a broken-latest on an otherwise deployed project.

## Production

- Vercel URL: `portal-landing-page-1rl74qx40-sharkfinnhoohahas-projects.vercel.app`
- Last deploy: 2026-04-22 — **ERROR** (package.json issue, redeploy of a previously errored build)

## Warnings

> [!warning]
> Latest production deploy is in ERROR state. The URL either serves the prior successful build or nothing at all — verify before sharing.

## Open follow-ups

- Fix the package.json issue that's blocking the build
- Once green, arguably move this page back to in-progress if there's more design work; if it's truly just a fix-and-forget, keep here

## Related

- [[overlook-portal-webapp]]

## Sources

- Vercel project `portal-landing-page` (ERROR 2026-04-22)
