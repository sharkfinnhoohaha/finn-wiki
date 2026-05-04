---
title: "Overlook Strategy Design System"
type: concept
tags: [design, design-system, overlook-strategy, brand]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# Overlook Strategy Design System

A brand-and-UI system for [[overlook-strategy]], Finn's branding and digital-systems agency in Ventura, California. Captures the quiet, editorial, ocean-inspired aesthetic of the Overlook mark and gives design agents the tools to produce on-brand output: slides, prototypes, websites, production code.

## The brand, in a sentence

Overlook Strategy is a small, craft-led agency that helps its clients see their business from a calmer altitude: measured counsel, hand-drawn precision, and the visual restraint of a coastal morning.

## Visual foundations summary

- **Palette.** Ink navy `#0E2439` plus warm paper cream `#F4EEE2` is the base pairing. Pacific teals and a single tide highlight `#4A9D97` carry accents. Sandstone is the only non-cool color, used sparingly.
- **Type.** Cormorant Garamond serif (display), Questrial / Inter sans (body, UI, wordmark), JetBrains Mono (HUD meta), Space Mono (display mono for portfolio-style names).
- **Animation.** Restrained. 240ms fades, 16px lifts on entrance, `cubic-bezier(0.22, 1, 0.36, 1)`. No bounces, no springs, no parallax. Hover = color shift or 1px underline.
- **Layout.** 12-column grid, 96px max gutter, 1280px content max. Sections breathe at 128px top/bottom. Editorial asymmetry, not centered stacks.
- **Corner radii.** Small and architectural. 4px default cards, 0 radius on hero images, pill only for tiny utility chips.
- **Borders.** 1px hairlines. `paper-300` on cream, `ink-700` on ink.

See [[design-tokens]] for the full reference.

## Scope

This system covers **only the Overlook Strategy marketing site**. Other Overlook properties live elsewhere:

- [[overlook-audio]] — different vocabulary, separate system warranted.
- [[three-altitudes]] — cinematic portfolio site. Adjacent visual reference: the HUD meta, grain, coordinates, and serif+mono pairing in this system are lifted from its Vector / Engine Room stage. Not the source of truth.

## Caveats

- **Font substitutions.** The real wordmark font (logo "OVERLOOK STRATEGY") and the business-card serif are unknown. Substituted with Questrial (geometric sans) and Cormorant Garamond (transitional serif). Finn to confirm originals.
- **Icons.** Substituted [Lucide](https://lucide.dev) until a preferred set is provided.
- **Imagery.** No brand photography supplied. UI kit uses placeholder blocks captioned "Photo: Ventura coast, morning."
- **No slide template.** `slides/` directory was not built — no template was attached to the source bundle.

## Pages

- [[design-tokens]] — colors, type, spacing, radii, shadows, motion
- [[brand-voice]] — voice, casing, banned words, example copy
- [[components]] — buttons, cards, forms, hero, nav, badges, iconography
- [[ui-kit-marketing-site]] — the React UI kit for the agency's own marketing site

## Related

- [[overlook-strategy]]
- [[overlook-strategy-positioning]]
- [[three-altitudes]]
- [[finn-bennett]]
- [[design/overview|design overview]]
- [[next-js-patterns]] — implementation patterns
