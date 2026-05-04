---
title: "Stack cheat sheet — what tool for what job"
type: tech
tags: [stack, recommendations, tooling, decision-aid, anti-narrowness]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 15
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Stack cheat sheet

This is the index for `wiki/tech/stack/`. Every category is its own page, every page answers the same four questions:

1. **Pick (free-tier first):** what to default to when broke, with the actual free-tier limits
2. **When NOT to use the default:** the situation where the obvious pick is wrong
3. **Worth knowing about:** underrated alternatives that don't get suggested by default
4. **Avoid / paid-default trap:** tools that look free but bite (Railway-the-database is the patron saint)

## Why this exists

Two reasons that bit Finn personally:

1. **The Railway → Neon migration (April 2026).** Claude defaulted to Railway for a Postgres DB without checking that Railway killed its free tier. Neon would've worked from day one. The whole vault now reflects "free tier first."
2. **The narrow-recommendation pattern.** Per the [Theo / amplifying.ai study](https://amplifying.ai/research/claude-code-picks/report) ([[theo-claude-code-favorite-stack-2026-04-29|video summary]]), Claude Code converges hard on a small set of tools (Vercel 100%, GitHub Actions 94%, Stripe 91%, shadcn 90%, etc.) regardless of fit. Sometimes those are right. Often they aren't. This cheat sheet is the corrective.

## How Claude should use this

This is enforced via the root [[CLAUDE]] file under "Stack recommendation rules" — when Finn asks about a tool / service / framework choice, **read the relevant page in this folder before answering**. Not after. Not while answering. Before.

If the page doesn't exist yet for the category being discussed, create it using the template below and ask Finn for his current take before recommending.

## How Finn should use this

When you're spinning up a project: open the relevant category, read the "Pick" line, ship. If the pick doesn't fit your situation, scan "When NOT to use" — that's where Finn-specific edge cases live (no email server allowed in the network, client requires SOC 2, etc.).

When a recommendation feels narrow or off, reopen the category page and update it. The wiki is the source of truth for these calls.

## Categories (top 10, populated 2026-04-29)

**Infrastructure**
- [[stack/databases|databases]] — Neon, Supabase, Convex, Turso, the Railway trap
- [[stack/hosting|hosting]] — Vercel vs Cloudflare Pages vs fly.io vs Render (frontend + backend)
- [[stack/auth|auth]] — Clerk, better-auth, Auth.js, WorkOS
- [[stack/ci-cd|ci-cd]] — GitHub Actions, Depot, Blacksmith
- [[stack/email-transactional|email-transactional]] — Resend, Loops, AWS SES
- [[stack/payments|payments]] — Stripe, Lemonsqueezy, Polar.sh

**Tooling**
- [[stack/ides|ides]] — VS Code vs WebStorm vs Cursor vs Windsurf vs Zed (he has the JetBrains pack — when does it actually beat VS Code)
- [[stack/ai-coding-tools|ai-coding-tools]] — Claude Code, Cursor agents, Codex, v0, Aider

**Creative**
- [[stack/design-tools|design-tools]] — Figma, Penpot, Affinity-by-Canva, Framer
- [[stack/audio-tools|audio-tools]] — Logic, Ableton, REAPER, Splice, Berklee perks

## Companion pages

- [[student-discounts]] — what `.edu` actually unlocks. The cheat sheet pages link here for any tool with a student deal. Don't duplicate; the discount page is canonical.
- [[Finn-OS/stack-decisions]] — Finn's curated current-picks slate, the "what I'm using right now and why" view
- [[next-js-patterns]], [[vercel-deployment]], [[clerk-auth-pattern]], [[alembic-postgres-patterns]], [[sanity-patterns]] — the existing pattern pages (HOW to use a tool, complementary to these CHOICE pages)

## Maintenance

Date-stamped at the top of each page. Anything older than 90 days on a fast-moving category (auth, AI tools, hosting) should be re-verified. Static categories (REAPER pricing) can drift longer.

When new categories come up (vector DBs, queues for ML, headless CMS — currently lives in [[sanity-patterns]] / [[tinacms]]), add them as new pages and surface in the list above.

## Page template

```markdown
---
title: "<Category>"
type: tech
tags: [stack, <category>]
created: YYYY-MM-DD
updated: YYYY-MM-DD
weight: medium
node_size: 5
---

# <Category>

One-sentence framing: when does this category come up, what's the default trap.

## Pick (free-tier first)

**[[entity]]** — <free tier headline>. <one-sentence why>.

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

## When NOT to use the default

- Bullet per situation

## Worth knowing about

- Tool — one-line pitch

## Avoid / paid-default trap

- Tool — what looks free but isn't

## Finn's current pick (as of YYYY-MM-DD)

What he's actually using and why. Update on real decisions.

## See also

[[student-discounts]] · [[stack/<related>]] · external links
```
