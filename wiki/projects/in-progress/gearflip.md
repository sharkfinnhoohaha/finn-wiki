---
title: "GearFlip"
type: project
status: active
tags: [nextjs, supabase, clerk, shadcn, arbitrage, music-gear]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [[local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f]]

# --- life-os-daily contract ---
revenue_type: speculative
revenue_score: 5
effort_score: 7
roi_score: 2
icon: "📱"
area: none
last_touched: 2026-04-24
next_action: "Build scraping pipeline — the single missing piece that makes this real"
blocker: ""
---

## Next Action

Build scraping pipeline for the 4 marketplaces — everything else (normalize, alerts, Stripe, Resend) is stubbed and waiting on this.

## Blockers

- None blocking, just paused. Scraping pipeline is the next required step.

## TL;DR

A music-gear arbitrage / deal-finding app — scrapes 4 marketplaces, detects below-market listings, alerts subscribers under 5 minutes. Tagline: **"Sell high."** (emerald highlighted). Stack is Next.js App Router + [[supabase]] + [[clerk]] + [[shadcn-ui]]. Foundation is clean (schema, types, auth scaffolded) and a real landing page + dashboard UI are now built; scraping pipeline, normalization, alerts creation flow, Stripe, and Resend are all still empty.

## Stack

- **Framework:** Next.js (App Router), TypeScript, Geist font
- **DB:** [[supabase]] (Postgres + RLS, with service-role bypass for cron jobs)
- **Auth:** [[clerk]] — middleware splits public (`/`, `/sign-in`, `/sign-up`, `/api/webhooks/*`) vs protected
- **UI:** [[shadcn-ui]] + [[tailwind]] + lucide-react icons
- **AI:** Claude API enrichment call (stubbed in `lib/normalize.ts`)
- **Local repo:** `/Users/finnbennett/GearFlip`

## Schema

Four tables in Supabase, all with RLS policies:

- `listings`
- `price_history`
- `market_prices`
- `alert_rules`

Service-role bypass for cron jobs that need to write across users.

## Patterns

- `lib/types.ts` — TypeScript types matching Supabase schema; dashboard typed against this with mock data + TODO comments for Supabase queries
- `lib/normalize.ts` — `RawListing` → `NormalizedListing` interface, `parsePriceToCents` helper, Claude API enrichment stub
- **Auth pattern:** Clerk middleware, public route allowlist
- **Dashboard:** source-color-coded badges per marketplace, "X% below market" callouts, market price snapshot as low/median/high range bars with sample count
- `<UserButton>` from Clerk in dashboard layout
- `usePathname` for active sidebar state

## Pages built

- **Landing:** nav, hero, stats bar, "how it works" with 3 steps, 6-feature grid, demo card with Apollo Twin X Duo example, footer CTA
- **Dashboard layout:** sidebar with `usePathname` active state, lucide icons, `<UserButton>`
- **Dashboard page:** stats row, hot deals feed, alerts panel, market price snapshot

## Pitch surface area (from landing copy)

- 4 marketplaces
- 2,400+ listings/day
- <5min alert delivery
- 90-day price history
- AI normalization (calls out Claude by name)
- Arbitrage detection
- Subscription tiers planned

Vertical signal: Apollo Twin X Duo used as the demo example → pro audio interfaces are a target gear category.

## Files / paths / repos

- `/Users/finnbennett/GearFlip` — local
- `lib/types.ts`
- `lib/normalize.ts`
- `.aider.chat.history.md` — present in repo (used [[aider]] alongside Claude Code earlier)

## Open threads

- Scraping pipeline — empty, next build target
- Normalization — Claude enrichment call stubbed only
- Alerts creation flow — empty
- Stripe (subscriptions) — empty
- Resend (alert email delivery) — empty
- Subscription tier model not designed yet

## Quotes from Finn

> "Nope wrong project I am talking about this one /Users/finnbennett/GearFlip"

> "yes" (terse approvals — preference for less back-and-forth, just keep building)

## Related

- [[supabase]], [[clerk]], [[shadcn-ui]], [[tailwind]]
- [[aider]] — used in repo earlier
- [[overlook-strategy]] — Finn's own SaaS-flavoured product, distinct from client work

## Sources

- `local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f` — GearFlip design progress update (batch-2 session 3)
