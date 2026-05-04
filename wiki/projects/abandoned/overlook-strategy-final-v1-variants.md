---
title: "Overlook Strategy Final V1 — variant slugs"
type: project
status: dormant
tags: [cleanup, vercel-slug-clutter, overlook-strategy]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [overlook-strategy-final-v1, overlook-strategy-final-v1-1lwq, overlook-strategy-final-v1-sqv1]
---

## TL;DR

Three Vercel slugs for the same `OverlookStrategyFinalV1` repo. Two are duplicates; the canonical one is [[overlook-strategy-final-v1-main]]. All three deployed Apr 20.

## The variants

| Slug | State | Note |
|---|---|---|
| `overlook-strategy-final-v1` | READY | Canonical — see [[overlook-strategy-final-v1-main]] |
| `overlook-strategy-final-v1-1lwq` | READY | Duplicate slug |
| `overlook-strategy-final-v1-sqv1` | READY | Duplicate slug |

## Where it died

Not a real project — slug clutter. The "-1lwq" and "-sqv1" variants look like Vercel auto-suffixed re-imports.

## Cleanup action

Delete the `-1lwq` and `-sqv1` slugs from Vercel. Keep `overlook-strategy-final-v1`.

## Related

- [[overlook-strategy-final-v1-main]] — canonical live deploy
- [[ovlkstratredo]] — even earlier superseded attempt

## Sources

- Vercel (`raw/_extracts/vercel-status.md`)
