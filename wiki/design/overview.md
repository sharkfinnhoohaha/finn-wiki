---
title: "Design Overview"
type: concept
tags: [design, overlook-strategy, index]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# Design Overview

Entry point for the `wiki/design/` section. Tracks visual systems, inspiration, and reusable templates Finn keeps for [[overlook-strategy]] and adjacent client work.

## Layout

```
wiki/design/
├── overview.md                  ← you are here
├── design-system/               ← Overlook Strategy brand + UI system
│   ├── overview.md
│   ├── design-tokens.md
│   ├── brand-voice.md
│   ├── components.md
│   └── ui-kit-marketing-site.md
├── inspiration/                 ← reference sites + Finn's pattern library
│   ├── web-dev-inspiration.md
│   └── inspiration-links.md
└── templates/                   ← repurposable HTML templates
    ├── simple-mono-template.md
    └── kelly-bennett-site.md
```

## What lives where

- **[[design-system/overview|Design System]]** — the Overlook Strategy brand-and-UI system. Tokens, voice, components, and the marketing-site UI kit. Ocean-inspired, editorial, ink-and-cream. Source of truth for Finn's agency aesthetic.
- **[[web-dev-inspiration|Inspiration]]** — Finn's Notion export of reference sites grouped by Overall UI, Simplicity, Animations, Components, Interactions, Typography. See [[inspiration-links]] for the flat link list.
- **[[simple-mono-template|Templates]]** — single-file HTML templates ready to clone. Currently: the SimpleMono monochromatic portfolio template, deployed once as [[kelly-bennett-site]].

## Raw sources

All raw inputs are immutable and live under `raw/design/overlook-strategy/`:

- `design-system/overlook-strategy-design-system/` — full handoff bundle from Claude Design (README, project files, preview HTML, ui_kits, assets).
- `inspiration/webdev-inspo-notion-export/` — Notion export of the web dev inspiration page.
- `templates/SimpleMono_WEB-TEMP.html` and `templates/kelly-bennett.html` — identical files, the SimpleMono template.

## Adding new material

1. Drop the source under `raw/design/...`. Don't edit it after.
2. Read it end to end and summarize the key points back to Finn.
3. Write a summary page in `wiki/sources/` and any new pages under `wiki/design/`.
4. Cross-link from this overview, the design-system overview, and any related project page.
5. Append a `log.md` entry.

## Related

- [[overlook-strategy]] — the studio whose brand this captures
- [[overlook-strategy-positioning]] — strategic framing of the brand
- [[three-altitudes]] — adjacent visual reference (HUD meta motifs are lifted from Engine Room stage)
- [[finn-bennett]] — founder, designer of record
- [[next-js-patterns]] — implementation patterns for translating designs to code
