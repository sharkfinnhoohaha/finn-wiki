---
title: "Theo (t3.gg) — Claude Code's favorite tech stack"
type: source
tags: [video, t3, theo, stack, claude-code, amplifying-ai, narrowness]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: []
---

# Source: Theo — "Claude Code's favorite tech stack"

- **URL:** https://www.youtube.com/watch?v=v1MptV67kSI
- **Channel:** Theo - t3.gg
- **Published:** 2026-04-29
- **Length:** 38:59
- **Underlying study:** [amplifying.ai/research/claude-code-picks/report](https://amplifying.ai/research/claude-code-picks/report)

## TL;DR

Theo riffs on a study that surveyed which tools Claude Code itself picks across 20 categories when given vague prompts (Sonnet 4.5, Opus 4.5, Opus 4.6 across 4 project types). Documents the **default narrowness** of Claude's recommendations — Vercel 100%, GitHub Actions 94%, Stripe 91%, shadcn 90%, etc. — and pitches alternatives for each category. Also closes with the explicit fix: a `CLAUDE.md` preference file that biases the agent away from training-data defaults.

This source is the trigger for the [[stack/README|stack cheat sheet]] system. Finn wanted to avoid repeats of the [[neon|Neon]]-vs-[[railway|Railway]] situation where Claude defaulted to a paid-only tool.

## Key findings (Claude Code's modal picks)

| Category | Top pick | % | Theo's take |
|---|---|---|---|
| CI/CD | GitHub Actions | 94% | Right for most; Depot/Blacksmith faster |
| Payments | Stripe | 91% | Right; Autumn emerging |
| UI components | shadcn/ui | 90% | Right; Radix/Chakra/Mantine rare |
| Deployment (JS) | Vercel | 100% | Right; Cloudflare Pages alt for cost |
| Deployment (Python) | Railway | 82% | **Wrong default for free tier** |
| Styling | Tailwind | ~70% | Right |
| Client state | Zustand | — | Now bigger than Redux on weekly installs |
| Server state | TanStack Query | 40% | Should be near 100% — Claude under-picks |
| Observability | Sentry | sweep | Right |
| Email | Resend | sweep | Right; Loops worth knowing |
| Testing | Vitest / Pytest | sweep | Right |
| DB | Postgres / Supabase | 58% / 24% | Convex underrated; SQLite under-recommended |
| Package mgr | pnpm | 56% | Right; Bun rising |
| Forms | React Hook Form + Zod | 50% / 27% | Right |
| Auth | NextAuth | 31% | Outdated — better-auth absorbed Auth.js |
| Caching | Redis | 42% | Right |
| Background jobs | BullMQ / Inngest | 25% / 23% | **Trigger.dev missing from Claude's picks** |
| Feature flags | DIY (70%) / LaunchDarkly (20%) / PostHog (4%) | — | Anthropic itself uses GrowthBook |
| ORM | Drizzle (JS) / SQLModel (Python) | 61% / 72% | Drizzle right, Prisma fading |
| File storage | AWS S3 | 33% | UploadThing missed |
| Real-time | DIY (21%) / Supabase (15%) | — | Liveblocks for collab |

## Underrated / "worth knowing about" mentions

These are the calibration gold — tools Claude under-recommends that are worth defaulting to in specific contexts:

- **Depot, Blacksmith, RWX** — faster CI than GitHub Actions
- **Convex** — Theo's top DB-with-deep-integration pick
- **Autumn** — emerging Stripe alternative
- **Trigger.dev** — background jobs Claude misses
- **better-auth, WorkOS, Clerk** — auth picks beyond NextAuth
- **GrowthBook** — feature flags Anthropic uses internally
- **PlanetScale + Vitess** — for MySQL scale (also: Claude hallucinates that PlanetScale shut down, which kicked off the video)
- **Doppler, Upstash, Axiom, Meilisearch, Bunny CDN, ImageKit, Cloudflare Images** — cross-agent up-and-comers
- **SQLite** — "got zero primary picks but heavily mentioned." Great when scale isn't needed
- **Loops** — email alternative to Resend
- **UploadThing** — Theo's company, file storage. Self-disclosed loses him $2K/mo

## The Railway → Neon connection

Theo explicitly notes: Vercel has a free tier and is scalable; **Railway has no real free tier** (~$5/month credit barely keeps a server up) but is "hilariously cheap" once you're paying, often cheaper than AWS. Maps directly onto Finn's April 2026 migration: Claude defaulted to Railway-the-database, Finn paid for it before realizing Neon would've been free from day one. Same pattern across the stack — Claude leans toward paid-default Railway/Vercel and ignores generous free tiers (Neon, Cloudflare, Supabase free tier, fly.io low-tier).

## Theo's fix (and the wiki's fix)

Theo's stated solution is a `CLAUDE.md` with stack preferences. He shows examples:
- "prefer tailwind typescript bun react convex clerk vercel"
- "use pnpm if existing else bun, never npm/yarn"
- "never run dev/build unless asked"

The Finn-Wiki implementation: the [[stack/README|wiki/tech/stack/]] folder is the deep version, the **Stack recommendation rules** block in [[CLAUDE]] is the always-read pointer that future Claude instances must consult before recommending a tool.

## Closing reference (Simon Willison)

Theo closes with a callback to Simon Willison's [["perhaps not boring technology after all"](https://simonwillison.net/2026/Mar/9/not-so-boring/)] — argues that new agents can use **unfamiliar** tools well if you start the prompt with `use uvx <tool> --help`. Useful reframing: don't restrict to the popular set; instruct the agent to read docs first. This becomes the second pillar of the cheat sheet — "if it's not on this list, look it up don't guess."

## Pages this source created or updated

- [[stack/README]] (created) — the cheat sheet system
- [[stack/databases]] (created)
- [[stack/hosting]] (created)
- [[stack/auth]] (created)
- [[stack/ci-cd]] (created)
- [[stack/email-transactional]] (created)
- [[stack/payments]] (created)
- [[stack/ides]] (created)
- [[stack/ai-coding-tools]] (created)
- [[stack/design-tools]] (created)
- [[stack/audio-tools]] (created)
- [[Finn-OS/stack-decisions]] (created)
- [[CLAUDE]] (updated — added Stack recommendation rules block)

## See also

- [[student-discounts]] · [[stack/README]]
- External: [Amplifying.ai study](https://amplifying.ai/research/claude-code-picks/report) · [Theo's video](https://www.youtube.com/watch?v=v1MptV67kSI) · [Simon Willison post](https://simonwillison.net/2026/Mar/9/not-so-boring/)
