---
title: "Design tools — Figma, Penpot, Affinity, Framer"
type: tech
tags: [stack, design, figma, penpot, framer, affinity, canva, overlook-strategy]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: [[design-research-2026-04-29]]
---

# Design tools

Finn runs [[overlook-strategy]] — design needs are real (client deliverables, brand systems, web mockups). [[overlook-audio]] needs product packaging + marketing collateral occasionally. This page is decision-aid, not Figma tutorials.

## Pick (free-tier first)

- **UI / web design / prototyping:** [[figma]] (he has the free Education plan — see [[student-discounts]]).
- **Vector design / print / brand:** Affinity Designer 3 (free under Canva ownership, for non-AI use) or Figma if it fits the use.
- **Design + publish (designer-developer):** Framer for non-CMS marketing sites, but watch the custom-domain paywall.
- **Project management for design:** [[notion]] (he already has it free for students).

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Figma** | 3 editable files, unlimited collaborators | **Free Pro for 2 yrs** via [[student-discounts\|Education plan]] | UI/UX, prototyping, real-time collab. Industry standard | Education license is **academic use only** — cannot use for paid Overlook Strategy client work. Need separate paid seat for clients |
| **Penpot** | Open-source, fully free | None needed | Solo / small studio that wants no vendor lock-in | Component variants lag Figma; plugin ecosystem not yet there |
| **Framer** | 10 CMS collections, 1K pages, framer.website subdomain | None | Designer-built marketing sites with motion/interactions baked in | Custom domain forces $30/mo Pro |
| **Sketch** | None (paid only) | None | Mac-only agencies | Increasingly niche vs Figma |
| **Affinity Designer** | Free under Canva ownership (perpetual) | None | Vector / print / brand work without subscription | AI features paywalled to Canva Pro ($144/yr) |
| **Adobe Creative Cloud** | None | $19.99/mo first year via [Adobe Students](https://www.adobe.com/creativecloud/buy/students.html), then $34.99 | Photoshop / Illustrator workflows that nothing else matches | Subscription; renewal cliff after first year |
| **Canva** | Free + $13/mo Pro | None | Quick social graphics, decks for non-designers | Don't ship Canva for client brand systems |
| **Linear** | 250 issues free | None | Project management for design + dev teams | Issue cap hits real quick on active projects |
| **Notion sites** | Free | Free Plus via [[student-discounts]] | Quick one-page sites, internal docs | Limited design control |
| **Cargo / Readymag** | Cargo: free 12 projects, 3 pages | None | Design portfolios, art-y marketing sites | Niche; not for client SaaS |

## When NOT to use the default (Figma)

- **You need print bleed / CMYK / packaging** → Affinity Designer 3 (free now under Canva).
- **You're building a marketing site that's design-led with motion** → Framer. Skip Figma → handoff → Webflow/Next.js dance entirely.
- **You want zero-vendor-risk for a long-term project** → Penpot.
- **The deliverable is a one-page promo / Instagram carousel / decks for non-designers** → Canva, not Figma.

## Worth knowing about

- **Spline** — 3D in the browser, exports to React Three Fiber. Useful for [[three-altitudes]]-style work without leaving the browser.
- **Rive** — interactive animations. Beats Lottie + After Effects for many web/app animation needs.
- **TypeScale / Modular Scale** — typography sizing tools. Free, useful for the Overlook Strategy design system.
- **Coolors / Realtime Colors** — color palette tooling. Free, fast.
- **Iconify** + **Lucide React** — icon libraries. Free, what shadcn uses.

## Avoid / paid-default trap

- **InVision** — sunset 2024. Don't use.
- **Marvel / Origami Studio / Principle** — small audiences, declining.
- **Adobe XD** — Adobe killed it 2023. Use Figma.
- **Squarespace / Wix for client sites** — fine for non-clients; for Overlook Strategy clients, the [[overlook-boilerplates]] + Vercel stack is the differentiator.

## Commercial-use note for Finn

This is a recurring trap with student licenses:

| Tool | Education license commercial use? |
|---|---|
| **Figma Education** | ❌ Academic only. Need paid Pro for paid client work |
| **JetBrains Educational** | ❌ Strictly non-commercial (per [[student-discounts]]) |
| **Adobe CC for Students** | ✅ Commercial use allowed |
| **Notion Plus Education** | ✅ Commercial use allowed |
| **Affinity (Canva-owned, free)** | ✅ Commercial use allowed |

For Overlook Strategy client deliverables, default to Figma paid Pro (~$15/mo per editor) and Adobe CC (already on student rate). Don't risk the Figma Education TOS.

## Finn's current pick (as of 2026-04-29)

- **Figma** for all UI/UX and brand work. Education plan for personal / Berklee. Need to provision a paid seat for any active client engagement (currently using Figma without it for [[rustler-42]] and [[somliøya]] — flag for review).
- **Affinity Designer 3** worth installing as the print / vector tool of last resort.
- **Notion** for design project management + client deliverables (already in workflow).
- **Linear** not currently used; could become useful when [[overlook-strategy]] hires design help.

## Used by

Design work touches almost every project. Specific Figma files / design needs:

- [[overlook-strategy]] — full brand system in Figma (see [[wiki/design/design-system/overview|design system overview]])
- [[overlook-audio]] — packaging + marketing collateral
- [[rustler-42]] (client) — Figma mockups → Next.js handoff
- [[somliøya]] (client) — Figma mockups → TinaCMS site
- [[three-altitudes]] — heavy Figma → Sanity → Next.js work
- [[copper-and-cast]] — Figma + Spline 3D for the Subaru model
- [[johnson-aviation]] (client) — Figma → Next.js template instance
- All deployed Overlook sites — Figma source of truth lives in the studio

⚠ Figma Education plan is **academic-use-only.** Client work above currently uses the Education seat, which violates Figma TOS. Open thread in [[Finn-OS/stack-decisions]].

## See also

- [[student-discounts]] · [[figma]] · [[overlook-strategy]] · [[wiki/design/design-system/overview|design system overview]] · [[wiki/design/inspiration/web-dev-inspiration]]
- External: [Figma Education](https://www.figma.com/education/) · [Penpot](https://penpot.app/) · [Framer pricing](https://www.framer.com/pricing) · [Affinity by Canva](https://affinity.serif.com)
