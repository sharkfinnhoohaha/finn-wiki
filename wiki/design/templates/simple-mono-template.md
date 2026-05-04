---
title: "SimpleMono Template"
type: tech
tags: [design, template, html, portfolio, monochrome]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# SimpleMono Template

## TL;DR

Single-file HTML/CSS template for minimalist monochromatic portfolio sites. Cormorant Garamond serif paired with JetBrains Mono meta, cream paper `#fafaf7` over ink `#1a1a1a`, no frameworks, no build step. Drop the file on any static host and deploy.

The template at `raw/design/overlook-strategy/templates/SimpleMono_WEB-TEMP.html` is **identical** to `raw/design/overlook-strategy/templates/kelly-bennett.html`. The Kelly Bennett site IS the reference implementation; this template is the same file repurposable for any other professional-services client.

## Visual basis

| Token | Value |
|---|---|
| `--ink` | `#1a1a1a` |
| `--ink-soft` | `#555` |
| `--ink-mute` | `#888` |
| `--paper` | `#fafaf7` |
| `--rule` | `#e8e6e0` |
| `--accent` | `#1a1a1a` |

Body sets Cormorant Garamond at 18px / 1.5 / weight 400. Mono utility class is JetBrains Mono at 11px, 0.08em tracking, uppercase.

Lighter and warmer than the [[design-tokens|Overlook Strategy palette]]: `#fafaf7` paper sits between `paper-100` (`#fbfaf7`) and `paper-50` (`#ffffff`); `#1a1a1a` ink is closer to true black than the system's navy `#0e2439`.

## Structure

### Nav

- Fixed top bar, 24px / 40px padding.
- Translucent paper `rgba(250, 250, 247, 0.85)` with `backdrop-filter: blur(8px)`.
- Hairline bottom border that fades in once `.scrolled` (toggled past 20px scrollY).
- Left meta block: animated red dot (`#c84444`, 2s pulse) plus "AVAILABLE FOR INQUIRY" plus live PST clock (updates every 30s).
- Right link block: nav links with animated 1px underline that grows from 0 to 100% on hover.

### Hero

- 100vh, centered column, 120/40/80px padding.
- Inline SVG stag silhouette (180px wide, 1.4px stroke, hand-drawn antlers).
- `h1.name` clamps from 56px to 128px with weight 300, `-0.02em` tracking, line-height 0.95. Italic "Esq." (or equivalent) suffix at 0.5em set super.
- Italic tagline at clamp(20px → 28px), max-width 620px.
- City row in mono with `/` separators between entries.
- Bottom scroll cue with bob animation.
- Staggered fade-in: stag at 0.2s, name at 0.5s, tagline at 0.8s, cities at 1.1s, scroll cue at 1.4s, all 1.4s `ease`.

### Section header pattern

- `(0X)` mono label hanging left, large serif title centering, hairline bottom border, trailing `_` cursor on the title.

### About

- 1fr / 2fr grid with 80px gap.
- Left aside: `<dl>` of mono `dt` labels (10px, 0.1em tracking, uppercase) over serif `dd` values.
- Right body: paragraphs at clamp(20px → 24px), weight 300.
- First paragraph gets a 3.2em italic drop cap (`::first-letter`).

### Practice list

- 80px / 1fr / auto grid per row.
- 32px vertical padding, hairline bottom border between items.
- Hover: `padding-left: 16px` slide. Trailing arrow shifts 6px right and color darkens to ink.

### Cities grid

- 4-column grid, 1px hairline borders forming a closed rectangle.
- Each cell 220px min, top-aligned label and bottom-aligned coordinate in mono.
- Hover: cell background warms to `#f5f3ed`.

### Contact

- Centered, 160px vertical padding.
- Mono preamble like `(04)  Get in touch_`.
- Giant italic email link, clamp(36px → 88px), serif italic, weight 300, `-0.02em` tracking. Underline is hairline at rest, darkens to ink and 70% opacity dim on hover.

### Footer

- Mono row, hairline top border, copyright left and "Est. private practice" right.

## Responsive

Single breakpoint at `768px`:

- Nav padding shrinks to 18/24, clock hides.
- Sections drop to 80/24 padding.
- About grid collapses to single column.
- Practice list narrows the index column from 80px to 40px.
- Cities grid collapses to 2 columns.
- Section header stacks vertically.

## Animation primitives

- `@keyframes pulse` — 2s, fades dot opacity 1 → 0.4 → 1.
- `@keyframes fadeIn` — 1.4s, 12px translateY plus opacity.
- `@keyframes bob` — 2s, 6px translateY oscillation on the scroll cue.
- `.reveal` class — 20px lift plus opacity. `IntersectionObserver` (threshold 0.15) toggles `.in` once.

## Behavior

```js
// nav border on scroll
nav.classList.toggle('scrolled', window.scrollY > 20);

// live clock (PST), updates every 30s
new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', ... });

// reveal-on-scroll
new IntersectionObserver(...).observe('.reveal');
```

No JS dependencies. No build step. Drop on any static host.

## Stack note for coders

- Pure HTML / CSS / inline JS. Zero deps, zero build.
- Single file: easier to clone and rename per client than to abstract.
- Easy to port into [[next-js-patterns|Next.js App Router]] later as a single-route page if a CMS or routing is needed.

## Use as a starting point

Good fit for: portfolio sites for solo professionals where the work is mostly relational and the site is a credibility cue. Lawyers, consultants, photographers, music supervisors. Currently deployed once: [[kelly-bennett-site]].

Bad fit for: anything with a real catalog, e-commerce, or a content cadence. Switch to a CMS-backed Next.js site at that point.

## Related

- [[kelly-bennett-site]] — the deployment of this template
- [[kelly-bennett]] — the client
- [[design-system/overview|Overlook Strategy Design System]] — the lighter, warmer cousin of this aesthetic
- [[design-tokens]]
- [[next-js-patterns]] — port path if the site grows
