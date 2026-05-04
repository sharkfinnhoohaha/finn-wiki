---
title: "gimmerefs"
type: project
status: blocked
tags: [music, spotify, broken-build]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [gimmerefs]
---

## TL;DR

Music reference finder — "give me refs" style tool built on Spotify recommendations. Stalled mid-refactor: Vercel Apr 22 deploy is in ERROR state because the Spotify recommendations refactor broke the build.

## Concept

A tool for finding sonic/reference tracks for music production, wired to Spotify's recommendations API. Aligns with Finn's Berklee Online work and mix referencing.

## Where it died

Mid-refactor. Spotify's recommendations endpoint behavior changed (or the refactor mis-shaped the request) and the build broke. Nothing in CC since showing a fix pass.

## Status detail

Vercel `gimmerefs-pjvri3rm2-sharkfinnhoohahas-projects.vercel.app` — last prod deploy ERROR on 2026-04-22.

## Path to unblock (if revived)

- Diagnose the Spotify recommendations call that broke the build
- Decide whether Spotify Recommendations API (deprecated in 2024) is even the right backbone — may need to pivot to a different similarity source

## Related

- [[berklee-music-supervision-1]]

## Sources

- Vercel project `gimmerefs` (ERROR 2026-04-22)
