---
title: "Design Tokens"
type: tech
tags: [design, design-system, overlook-strategy, tokens, css]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# Design Tokens

Reference for every color, type, spacing, radius, shadow, and motion token in the [[design-system/overview|Overlook Strategy Design System]]. Pulled from `raw/design/overlook-strategy/design-system/overlook-strategy-design-system/project/colors_and_type.css`.

## Colors

### Ink (deep navy from the logo)

| Token | Hex | Use |
|---|---|---|
| `--ink-900` | `#0e2439` | Deepest navy, headlines, wordmark |
| `--ink-800` | `#122f39` | Deep navy-green, secondary surfaces |
| `--ink-700` | `#1f3d5a` | Secondary navy |

### Paper (warm creams, Ventura morning light)

| Token | Hex | Use |
|---|---|---|
| `--paper-50` | `#ffffff` | Pure white, hero surfaces, deep contrast |
| `--paper-100` | `#fbfaf7` | Default page surface, softest off-white |
| `--paper-200` | `#f2f4f2` | Card surface on page |
| `--paper-300` | `#e2e4e1` | Borders on off-white |

### Pacific (ocean teals/blues)

| Token | Hex | Use |
|---|---|---|
| `--pacific-50` | `#e9f1f2` | Tint backgrounds |
| `--pacific-200` | `#a7c8ce` | Soft accent |
| `--pacific-400` | `#5f9ba4` | Channel Islands haze |
| `--pacific-600` | `#2f6e7b` | Deep water |
| `--pacific-800` | `#134852` | Kelp forest |

### Tide (the ONE highlight color)

| Token | Hex | Use |
|---|---|---|
| `--tide-300` | `#8fc4c1` | Soft accent |
| `--tide-500` | `#4a9d97` | The single highlight color of the system |

### Sandstone (warm tans, bluffs and adobe)

| Token | Hex | Use |
|---|---|---|
| `--sand-200` | `#e8d9bf` | Warm tint |
| `--sand-400` | `#c9a775` | Warm accent |
| `--sand-600` | `#916b3a` | Accent warm, dates, credit lines, small wayfinding only |

The only non-cool family in the system. Use sparingly.

### Fog (cool neutrals for lines, dividers)

| Token | Hex |
|---|---|
| `--fog-100` | `#eceae4` |
| `--fog-300` | `#c9c7bf` |
| `--fog-500` | `#8b8a84` |
| `--fog-700` | `#555450` |

### Signal (semantic, used sparingly)

| Token | Hex | Use |
|---|---|---|
| `--signal-sunset` | `#c85a3f` | Warnings, rare |
| `--signal-moss` | `#5a7d4a` | Success, rare |

## Typography

### Families

| Variable | Stack | Use |
|---|---|---|
| `--font-sans` | Inter, Helvetica Neue, system-ui | Body, UI, wordmark |
| `--font-serif` | Libre Caslon Text, Cormorant Garamond, Georgia | Names, taglines, editorial display, italics |
| `--font-display` | same as serif | Editorial display headlines |
| `--font-mono` | JetBrains Mono, SF Mono | HUD meta: coordinates, timestamps, file paths, status readouts |
| `--font-display-mono` | Space Mono, JetBrains Mono | Display mono — portfolio-style names, big titles, eyebrows at scale |

Cormorant Garamond is the substitute for the unknown business-card serif. Questrial is the substitute for the unknown logo wordmark sans.

### Type scale (1.25 ratio anchored at 16px)

| Token | Value | Pixels |
|---|---|---|
| `--fs-xs` | 0.75rem | 12 |
| `--fs-sm` | 0.875rem | 14 |
| `--fs-base` | 1rem | 16 |
| `--fs-md` | 1.125rem | 18 |
| `--fs-lg` | 1.375rem | 22 |
| `--fs-xl` | 1.75rem | 28 |
| `--fs-2xl` | 2.25rem | 36 |
| `--fs-3xl` | 3rem | 48 |
| `--fs-4xl` | 4rem | 64 |
| `--fs-5xl` | 5.5rem | 88 — editorial hero |

### Line height

| Token | Value |
|---|---|
| `--lh-tight` | 1.08 |
| `--lh-snug` | 1.25 |
| `--lh-body` | 1.55 |
| `--lh-loose` | 1.8 |

### Tracking

| Token | Value | Use |
|---|---|---|
| `--tracking-tightest` | -0.02em | Display headlines |
| `--tracking-tight` | -0.01em | Headings |
| `--tracking-normal` | 0 | Body |
| `--tracking-wide` | 0.08em | Small caps |
| `--tracking-wider` | 0.18em | All-caps labels, buttons, eyebrows |
| `--tracking-widest` | 0.28em | HUD / tiny eyebrow meta |
| `--tracking-mono-display` | 0.30em | Display-mono names, hero titles |
| `--tracking-mono-nav` | 0.22em | Display-mono nav, small display |

The 0.18em / 0.28em UPPERCASE tracking is the single most recognizable typographic move of the brand, inherited from HUD labels in [[three-altitudes]] and the logo wordmark.

## Spacing scale

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |
| `--space-10` | 128px (section top/bottom) |

## Corner radii

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Hero images, feature blocks (mirrors logo's 0 radius) |
| `--radius-sm` | 6px | — |
| `--radius-md` | 10px | Default for cards in CSS, but README specifies 4px in practice |
| `--radius-lg` | 14px | — |
| `--radius-xl` | 20px | Hero surfaces, large panels |
| `--radius-pill` | 999px | Tiny utility pills only |

> [!warning]
> Tokens specify `--radius-md: 10px` for default cards, but the README states "default card is 4px." Treat 4px as the canonical card radius and 10px as a softer alternative for larger surfaces. Confirm with Finn if implementing.

## Shadows (paper-like, never glowy)

| Token | Value |
|---|---|
| `--shadow-flat` | `0 1px 0 rgba(14, 36, 57, 0.05)` |
| `--shadow-soft` | `0 2px 8px rgba(14, 36, 57, 0.06)` |
| `--shadow-card` | `0 8px 24px rgba(14, 36, 57, 0.08)` |
| `--shadow-lift` | `0 18px 48px rgba(14, 36, 57, 0.12)` |

All tinted with ink navy for warmth.

## Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` (default) |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--dur-fast` | 150ms |
| `--dur-base` | 240ms (default) |
| `--dur-slow` | 480ms |

## Rules

| Token | Value |
|---|---|
| `--rule-hair` | `1px solid var(--ink-900)` (structural editorial rule) |
| `--rule-thin` | `1px solid var(--color-border)` (default hairline) |

## Semantic tokens

Use these in components, not the raw scales:

```css
--color-bg:         var(--paper-100);
--color-bg-elev:    var(--paper-50);
--color-bg-sunk:    var(--paper-200);
--color-bg-inverse: var(--ink-900);

--color-fg:          var(--ink-900);
--color-fg-muted:    var(--ink-700);
--color-fg-subtle:   var(--fog-700);
--color-fg-inverse:  var(--paper-50);

--color-accent:       var(--tide-500);
--color-accent-deep:  var(--pacific-600);
--color-accent-warm:  var(--sand-600);

--color-border:        var(--paper-300);
--color-border-strong: var(--ink-900);
--color-divider:       var(--fog-300);

--color-link:        var(--ink-900);
--color-link-hover:  var(--pacific-600);
```

## Related

- [[design-system/overview|Design System overview]]
- [[brand-voice]]
- [[components]]
- [[ui-kit-marketing-site]]
- [[next-js-patterns]] — implementation patterns
