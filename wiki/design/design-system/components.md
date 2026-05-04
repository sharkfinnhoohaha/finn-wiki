---
title: "Components"
type: tech
tags: [design, design-system, overlook-strategy, components, ui]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# Components

Component inventory for the [[design-system/overview|Overlook Strategy Design System]]. Each item has a preview HTML file under `raw/design/overlook-strategy/design-system/overlook-strategy-design-system/project/preview/`.

## Preview file inventory

### Color

- `colors-primary.html` — ink, paper, pacific scales
- `colors-accent.html` — tide, sandstone, fog
- `colors-semantic.html` — bg, fg, border, accent, link tokens

### Type

- `type-display.html` — serif display scale (h1 → h6)
- `type-display-mono.html` — Space Mono display variant for portfolio names
- `type-body.html` — body, lede, caption
- `type-utility.html` — eyebrow, meta, mono labels

### Spacing & geometry

- `spacing-scale.html` — 4px through 128px
- `spacing-radii.html` — 0, 4px, 6px, 10px, 14px, 20px, pill
- `spacing-shadows.html` — flat / soft / card / lift

### Components

- `components-buttons.html`
- `components-cards.html`
- `components-forms.html`
- `components-hero.html`
- `components-nav.html`
- `components-badges.html`

### Brand

- `brand-iconography.html` — Lucide icons + custom brand glyphs
- `brand-logo.html` — square mark + wordmark guidance
- `brand-voice.html` — voice cards (mirrors [[brand-voice]])

## Component rules

### Iconography

- **System:** Lucide. 1.5px stroke, rounded caps, 24×24 viewBox.
- Always rendered in `currentColor`. Never tinted.
- Custom brand glyphs: `overlook-mark.svg` (logo at icon size), `compass-rose.svg` (decorative dividers), `hairline-arrow.svg` (link rows).
- **Emoji: never.** Unicode glyphs occasionally allowed in meta: `→`, `↗`, `//`, `°`, `′`, `″`.
- Icons never sit alone in a button, never appear without a label. Hero sections have zero icons.

### Buttons

- **Hover = polarity flip.** Ink-on-cream → cream-on-ink. No scale transform.
- **Press:** background darkens, no scale.
- **Focus ring:** 2px `ink-900` outline with 2px offset. Never the system default.
- Labels are UPPERCASE with `0.18em` tracking.

### Cards

- Paper-on-paper. `paper-50` surface on `paper-100` page.
- 1px `paper-300` border, 4px radius (per README; CSS scale offers 10px as a soft alt).
- `shadow-soft` at rest → `shadow-card` on hover. Border darkens from `paper-300` to `ink-900`.
- No inner gradients.
- Optional editorial treatment: a thin 1px `ink-900` rule at the top of the card.

### Hero

- Cream-on-ink for impact, or full-bleed photography (desaturated, high-contrast, cool-shifted, blue-hour).
- 0 corner radius (mirrors logo's sharpness).
- Optional 0.035-opacity SVG grain overlay on dark heroes (lifted from [[three-altitudes]]).
- One allowed scrim: `rgba(14, 36, 57, 0.45)` ink over photography so cream text reads.
- Zero icons.

### Forms

- 1px hairline borders.
- Inputs use sentence-case body type. Labels are UPPERCASE eyebrow.
- Focus ring matches button: 2px `ink-900` outline, 2px offset.

### Nav

- Fixed, 72px tall, hairline bottom border.
- Paper background by default, transparent over hero, ink on paper.
- Wordmark UPPERCASE, links also UPPERCASE with 0.18em tracking.

### Badges

- Tiny utility pills only. Pill radius (`999px`).
- All-caps eyebrow type with 0.28em tracking for HUD-style readouts.

### Text links

- Solid 1px underline appears on hover.
- Color shift: `ink-900` → `pacific-600`.

## Borders, hairlines, dividers

- 1px hairlines only. Never thicker structural rules.
- Default border `paper-300` on cream, `ink-700` on ink.
- A single 1px `ink-900` hairline serves as a structural editorial rule (book-spread layouts).

## Layout rules

- 12-column grid, 96px max gutter, 1280px content max.
- Section padding: 128px top / 128px bottom (`--space-10`).
- Editorial asymmetry: titles hang left, meta pins bottom-right.
- Avoid centered single-column stacks except on heroes.

## Imagery

- Cool, misty, blue-hour. Long horizons. Water, sky, sparse architecture.
- No people-facing stock.
- B&W acceptable when imagery is stark.
- Subtle SVG grain overlay (0.035 opacity) on dark heroes only.

## Related

- [[design-system/overview|Design System overview]]
- [[design-tokens]]
- [[brand-voice]]
- [[ui-kit-marketing-site]]
