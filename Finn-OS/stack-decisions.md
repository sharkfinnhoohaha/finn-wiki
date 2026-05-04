---
title: "Stack decisions — what I'm using and why"
type: finn-os
tags: [stack, decisions, current-picks]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: []
---

# Stack decisions

The curated cut. Encyclopedic version lives in [[stack/README|wiki/tech/stack/]]. This page is "what's on my hard drive right now and why," and it's what Claude reads when I ask "what should I use for X."

## Current defaults (broke-friendly)

| Need | Pick | Why |
|---|---|---|
| Postgres | [[neon]] | 100 CU-hrs/mo free, branches, paused-when-idle. **Never default to Railway again** |
| Frontend host | [[vercel]] Hobby (Pro for clients) | The smoothest DX. Move to Pro when client work demands it |
| Backend host | [[railway]] for existing FastAPI; Cloud Run for new | Railway $5/mo per project, accept it. New backends explore Cloud Run first |
| Auth | [[clerk]] free tier | 50K MAU is more than I'll hit in any project. Migrate to better-auth if I do |
| Email transactional | [[resend]] (when I need it) | Already have MailerLite for marketing |
| Payments | [[stripe]] (when I need it) | Lemonsqueezy if international tax matters |
| CI/CD | GitHub Actions | Free for public, plenty for private |
| ORM (TS) | Drizzle | Light, query-builder feel, no codegen step |
| ORM (Python) | SQLAlchemy + Alembic | Already in [[overlook-portal-webapp]] — see [[alembic-postgres-patterns]] |
| Editor | VS Code | Default. WebStorm for big refactors |
| AI agent | [[claude-code]] | Pro tier. Cursor 1yr-free still un-claimed (open thread) |
| DAW | Logic Pro | Owned, M1-native, Berklee-standard |
| Samples | Splice ($4/mo Berklee) | Cut from $12.99 — claim if not done (open thread) |
| Plugins | Slate All-Access via Berklee | 70% off — claim if not done (open thread) |
| Design | Figma | Education plan — paid Pro for actual client work |
| Project mgmt | [[notion]] | Free Plus via student |

## Open threads (things to actually do)

- [ ] **Claim Cursor Pro 1-year-free** via [SheerID](https://cursor.com/students). Costs nothing, useful A/B against Claude Code
- [ ] **Confirm Splice is on the $4/mo Berklee tier**, not the $12.99 retail
- [ ] **Claim Slate All-Access via Berklee** if not done — 70% off 140+ plugins
- [ ] **Provision Figma paid Pro seat** for active client work ([[rustler-42]], [[somliøya]]) — Education plan is academic-use-only
- [ ] **Claim Apple Music + Spotify student bundles** if not done — locks 4-yr cumulative discount, clock starts on activation

See also the [[student-discounts]] activation queue for the full list of unclaimed perks.

## What I've explicitly decided NOT to use (and why)

| Tool | Why not |
|---|---|
| **Railway Postgres** | Burned in April 2026 — no real free tier. Use [[neon]] |
| **Render Postgres** | Auto-deletes after 30+14 days. Worse than Railway |
| **GitHub Copilot Pro** | Overlaps with Claude Code; pick one |
| **Devin** | Priced for teams replacing junior engineers, not solo devs |
| **Adobe XD** | Killed by Adobe in 2023 |
| **InVision** | Sunset 2024 |
| **Native Instruments Komplete one-time bundle** | Student deal removed in 2026 — only Reaktor 6 still discounted |

## Decisions worth revisiting in 90 days (by 2026-07-29)

- **Cursor 1-year-free trial** — if claimed, decide whether to keep editing in Cursor or stay in VS Code
- **Cloud Run vs Railway** for next FastAPI deploy — depends on whether DO credit is exhausted by then
- **Convex** — if [[pier-and-point]] needs realtime / live updates, evaluate Convex over Postgres + websockets
- **Better-auth** — if any project crosses 5K MAU, evaluate migration before hitting Clerk Education's 10K commercial cap

## How this page stays current

Update on every real decision. When I pick a tool for a new project, write it here with the why. When something changes (deal expires, tool gets killed, my workflow shifts), update the row. The wiki tier ([[stack/README]]) holds the full menu; this page holds the current order.

## See also

- [[stack/README]] — encyclopedic stack cheat sheet
- [[student-discounts]] — what `.edu` unlocks
- [[Finn-OS/now]] — this week
- [[Finn-OS/career/skills]] — what I'm deliberately practicing (some stack choices are skill-development picks)
