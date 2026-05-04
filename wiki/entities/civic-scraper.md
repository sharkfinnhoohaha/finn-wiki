---
title: "civic-scraper"
type: entity
tags: [entity, tool, civic-data, scraping, python, big-local-news, pier-and-point]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 5
sources: [[automated-news-playbook-civic-operators]]
---

## TL;DR

BSD-licensed Python library for ingesting civic agency data. Maintained by **Big Local News at Stanford**. Handles **Granicus / Legistar / CivicPlus / PrimeGov / Civic Clerk** out of the box — the four platforms most Ventura County agencies use.

The compass artifact ([[automated-news-playbook-civic-operators]]) names this as the canonical civic ingestion tool for any AI-assisted local news operation in 2026. **First-class fit for [[pier-and-point]]'s ingest layer.**

URL: <https://github.com/biglocalnews/civic-scraper>

## What it covers

- Granicus (used by Ventura County Board of Supervisors and most cities)
- Legistar (used by major cities including NYC — what [[citymeetings-nyc]] pulls from)
- CivicPlus / CivicEngage (used by City of Ventura)
- PrimeGov (used by Ventura County)
- Civic Clerk

For Pier and Point specifically, this replaces the bespoke scrapers the April 25 [[pier-and-point-execution]] estimated at "~3–5 days for the full bundle" — most of the bundle is already in `civic-scraper` if Finn's willing to use the library as-is rather than write his own.

## Related ecosystem

- **[[city-scrapers]]** — City Bureau's project, foundation of Documenters.org, extends to hundreds of agencies
- **[[openstates]]** — state-level legislator + bill data, free
- **[[muckrock]]** — FOIA workflow management
- **[[documentcloud]]** — OCR + collaborative annotation of received PDFs

## Why it matters for Pier and Point

The April 25 execution map estimated 3–5 days to build civic ingestion from scratch. With civic-scraper + OpenStates + a thin wrapper, that estimate compresses substantially — call it **1–2 days** to wire civic-scraper + OpenStates + a normalization layer into the editorial queue. The library is BSD-licensed so vendoring or forking is fine.

## Related

[[pier-and-point-execution]] — [[ai-newsroom-pipeline]] — [[city-scrapers]] — [[openstates]] — [[muckrock]] — [[documentcloud]] — [[citymeetings-nyc]] — [[automated-news-playbook-civic-operators]]

## Sources

[[automated-news-playbook-civic-operators]] — section 1 (tech and deployment stack); closing recommendation
