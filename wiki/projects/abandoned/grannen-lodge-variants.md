---
title: "Grannen Lodge — variant slugs"
type: project
status: dormant
tags: [cleanup, vercel-slug-clutter, grannen-lodge]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [grannen-lodge, grannen-lodge-v3, grannen-lodge-p6rn, grannen-lodge-hwra, grannen_lodge_v2]
---

## TL;DR

Five Vercel project slugs all pointing at the same GrannenLodge repo lineage. Four are iteration clutter; one is the real one ([[grannen-lodge-main]]). One is permanently ERRORed.

## The variants

| Slug | State | Note |
|---|---|---|
| `grannen-lodge` | READY | Canonical — see [[grannen-lodge-main]] |
| `grannen-lodge-v3` | READY | Iteration clutter |
| `grannen-lodge-p6rn` | READY | Iteration clutter |
| `grannen-lodge-hwra` | READY | Iteration clutter |
| `grannen_lodge_v2` | ERROR | TinaCMS lockfile loop, never recovered on this slug |

All five deployed 2026-02-27 (56 days old at audit).

## Where it died

This isn't a project per se — it's slug clutter from iteration. The "real" deploy lives at [[grannen-lodge-main]]; the other four exist only because Vercel imports tend to mint fresh slugs.

## Cleanup action

Delete the four non-canonical slugs from Vercel. Keep `grannen-lodge`.

## Related

- [[grannen-lodge-main]] — the canonical live deploy

## Sources

- Vercel (`raw/_extracts/vercel-status.md`)
