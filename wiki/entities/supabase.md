---
title: "Supabase"
type: entity
tags: [tool, service, postgres, backend, auth]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-2a27ba0d]]
---

# Supabase

Hosted Postgres + auth + storage platform. Finn uses it as the backend for [[gearflip]] (the music gear arbitrage app), where it sits in front of [[clerk]] auth. Stack alternative to the FastAPI + Railway pattern Finn uses on [[overlook-portal-webapp]].

## How it's used (GearFlip)

- **Schema:** `listings`, `price_history`, `market_prices`, `alert_rules`
- **RLS policies** with service-role bypass for cron jobs (scraping pipeline)
- TypeScript types in `lib/types.ts`, with mock data + TODO comments where Supabase queries will land

## Pattern

- Auth via [[clerk]] middleware, not Supabase Auth — Clerk is the identity layer, Supabase is the data layer with RLS
- `lib/normalize.ts` defines `RawListing` → `NormalizedListing` interface + `parsePriceToCents` helper for ingest

## See also

- [[gearflip]]
- [[clerk]]
- [[pgvector]]
