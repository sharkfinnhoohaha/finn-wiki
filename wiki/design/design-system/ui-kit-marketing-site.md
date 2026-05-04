---
title: "UI Kit — Overlook Strategy Marketing Site"
type: tech
tags: [design, design-system, overlook-strategy, ui-kit, react]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# UI Kit — Overlook Strategy Marketing Site

The single UI kit shipped with the [[design-system/overview|Overlook Strategy Design System]]. A hi-fi recreation of the agency's own marketing site: editorial, cream-on-ink hero, paper body. Lifts HUD meta motifs from the Vector / Engine Room stage of [[three-altitudes]].

## Location

`raw/design/overlook-strategy/design-system/overlook-strategy-design-system/project/ui_kits/overlook-strategy-site/`

## Files

| File | Role |
|---|---|
| `index.html` | Assembled home page: hero → approach → selected work → contact |
| `Nav.jsx` | Top navigation, fixed, paper background with hairline bottom |
| `Hero.jsx` | Ink-inverse hero with grain overlay, serif display headline |
| `Approach.jsx` | Three-column editorial block with hairline rules |
| `Work.jsx` | Selected work list, numbered, alternating ink/paper sections |
| `Contact.jsx` | Cream-on-ink footer with coordinates and links |
| `README.md` | Kit overview |

## Notes

- All copy is in-voice. See [[brand-voice]].
- Icons via Lucide CDN (`<script src="https://unpkg.com/lucide@latest"></script>`).
- Imagery is represented with labeled placeholder blocks ("Photo: Ventura coast, morning") since no brand photography was provided.
- Out of scope for this kit: [[overlook-audio]] studio site, [[three-altitudes]] portfolio. Different visual vocabularies, separate systems warranted.

## Translating to production

The kit is JSX prototypes, not production code. Match the visual output in whatever target codebase is sensible. For Finn's stack that means [[next-js-patterns]]: Next.js App Router, React, Tailwind, TypeScript, monochromatic by default. Map design tokens to Tailwind theme extensions or CSS variables on the root.

## Related

- [[design-system/overview|Design System overview]]
- [[design-tokens]]
- [[brand-voice]]
- [[components]]
- [[overlook-strategy]]
- [[three-altitudes]] — adjacent visual reference
- [[next-js-patterns]] — implementation patterns
