---
title: "Copper and Cast"
type: project
status: active
tags: [outdoor, rebrand, nextjs, threejs, client]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [copper-and-cast, cc-batch-a]

# --- life-os-daily contract ---
revenue_type: direct-billable
revenue_score: 7
effort_score: 2
roi_score: 6
icon: "·"
area: strategy
client: [[overlook-strategy]]
last_touched: 2026-04-24
next_action: "Swap placeholder GLB for real high-poly Subaru Outback model when asset arrives"
blocker: ""
---

## Next Action

Swap placeholder GLB for real high-poly Subaru Outback model once asset is delivered by client. Then verify mobile fallback and polish lighting.

## Blockers

- Waiting on client to provide the real 3D asset (GLB). Nothing to do on dev side until it arrives.

## TL;DR

Outdoor catalog rebrand: Next.js site with a Three.js Subaru Outback hero model. Shipped the rebrand Apr 24, currently on a placeholder GLB until the real 3D asset lands.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Three.js for the Outback hero scene
- Deployed on Vercel: `copper-and-cast-300j0to1l-sharkfinnhoohahas-projects.vercel.app`

## Status detail

Vercel project `copper-and-cast` READY as of 2026-04-22 (2 days ago). Rebrand work shipped Apr 24. Page loads, but the Three.js scene is fed a placeholder GLB.

## Last known activity

2026-04-24 — rebrand shipped to production.

## Current active work + next TODO

- Swap the stand-in Subaru Outback GLB for the real high-poly model once it's ready
- Verify mobile fallback for the Three.js scene (poster frame vs. low-poly)
- Polish lighting once real model is in

## Related

- [[overlook-strategy]] — likely a client deliverable under the studio
- [[three-altitudes]] — uses similar Three.js + cinematic pattern

## Sources

- Vercel project `copper-and-cast` (see `raw/_extracts/vercel-status.md`)
- CC extract: `raw/_extracts/cc-batch-a.md`
