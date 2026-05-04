---
title: "Identity and Brand Architecture"
type: personal
tags: [identity, brand, portfolio, positioning, finn-bennett]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 15
sources: [[local_65f6bd58-1447-4afc-948b-6b9efd97150a]]
---

## TL;DR

"Finn Bennett" is the anchor identity. [[overlook-strategy-positioning|Overlook Strategy]] is `MODULE_01` and [[overlook-audio-positioning|Overlook Audio]] is `MODULE_02` — both framed as sub-outputs of the creative logic, not the primary brand. The portfolio site at [[three-altitudes]] is the public expression of this architecture, organized as a four-stage scrolling autobiography rather than a project grid.

## The hierarchy

- **Primary identity:** Finn Bennett
- **Identity tags (cycling on portfolio HUD, 2.2s interval):** PILOT / PRODUCER / DEVELOPER
- **Sub-modules:**
  - `MODULE_01` — [[overlook-strategy-positioning|Overlook Strategy]] (branding/web dev studio)
  - `MODULE_02` — [[overlook-audio-positioning|Overlook Audio]] (hardware/firmware brand, [[riptide]] flagship)

Direct quote from Finn establishing this:

> "Identity First: The name 'Finn Bennett' is the anchor. 'Overlook Strategy' and 'Overlook Audio' are sub-modules — outputs of his creative logic, not the primary identity."

## Geographic anchor

- **Ventura, CA** — `34.2746° N  119.2290° W` (rendered in JetBrains Mono as a HUD coordinate on the portfolio).

## Aesthetic vocabulary

The site and brand pull from a fixed set of evocative words. These are the load-bearing terms — keep them when writing copy, naming files, or talking about the brand.

- Pacific swell
- Snare beat
- Filament light
- Ghosting code
- Horizon tilt
- 16mm film grain
- Cinematic

## Visual system (carried into [[three-altitudes]])

- **Color rail (smoothstep transitions across scroll):**
  - Shoreline — Ventura Teal `#003838` (originally `#002b2b`)
  - Pocket — near-black `#0a0609`
  - Engine Room — Terminal Grey
  - Horizon — Hangar White `#f5f5f7`
- **Typography:** Cormorant Garamond (300/400/600) for serif title cards; JetBrains Mono for HUD; `serif-text` global class.
- **Film grain:** animated SVG noise filter via `body::after`, `mix-blend-mode: overlay`, opacity 0.035.

## Stage-based identity communication

The four scroll zones map to identity facets — see [[environmental-behaviors]] for the design philosophy. Brief mapping:

- **Shoreline (0–25%)** — surfer / Ventura origin (Pacific swell physics)
- **Pocket (26–50%)** — drummer / producer (snare-beat pulsing filament light, [[touring-band-stage-2|Stage 2 touring band photos]])
- **Engine Room (51–75%)** — developer (ghosting code, glassmorphism modules)
- **Horizon (76–100%)** — pilot (`la-altitude.jpg` full-bleed, see [[aviation-training]])

## Source

- session: `local_65f6bd58-1447-4afc-948b-6b9efd97150a` — "Evolve portfolio into cinematic autobiography"
