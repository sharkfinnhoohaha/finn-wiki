---
title: "Overlook Strategy Design System Bundle"
type: source
tags: [design, overlook-strategy, design-system, source]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[overlook-strategy-design-system-bundle]]
---

# Overlook Strategy Design System Bundle

## TL;DR

A handoff bundle from Claude Design (claude.ai/design) capturing the [[overlook-strategy]] brand-and-UI system. Plus an adjacent Notion export of Finn's web dev inspiration, plus the SimpleMono HTML portfolio template (deployed once as the [[kelly-bennett-site]]). All material is now organized under `raw/design/overlook-strategy/`.

## Source paths

```
raw/design/overlook-strategy/
├── design-system/
│   └── overlook-strategy-design-system/
│       ├── README.md                       (top-level handoff explainer)
│       ├── project/
│       │   ├── README.md                   (brand-in-a-sentence, voice, foundations)
│       │   ├── SKILL.md                    (agent invocation)
│       │   ├── colors_and_type.css         (design tokens)
│       │   ├── assets/                     (logo, business card, icons)
│       │   ├── preview/                    (component preview HTML cards)
│       │   └── ui_kits/overlook-strategy-site/   (React JSX UI kit)
├── inspiration/
│   └── webdev-inspo-notion-export/
│       └── Web Dev Inspiratiom 318e501a546b8071b071e935f583f607.md
└── templates/
    ├── SimpleMono_WEB-TEMP.html            (template, identical to kelly-bennett.html)
    └── kelly-bennett.html                  (Kelly Bennett, Esq. portfolio site)
```

## Key takeaways

- **Brand sentence:** "A small, craft-led agency that helps its clients see their business from a calmer altitude — measured counsel, hand-drawn precision, and the visual restraint of a coastal morning."
- **Foundations:** ink navy `#0e2439` + warm paper cream, pacific teals as accent, single tide highlight `#4a9d97`. Cormorant Garamond serif + Questrial / Inter sans + JetBrains Mono + Space Mono display. 4px card radius, 1px hairlines, restrained 240ms motion.
- **Voice:** measured, plain-spoken. Banned: crafted, curated, journey, solutions, ecosystem, world-class, best-in-class, seamless, unlock, empower, supercharge, leverage. No emoji.
- **Scope:** Overlook Strategy marketing site only. [[overlook-audio]] and [[three-altitudes]] explicitly out of scope.
- **Caveats:** font substitutions (Questrial / Cormorant Garamond), no brand photography, no slide template, Lucide icons substituted.

## Pages produced from this source

- [[design/overview|design overview]]
- [[design-system/overview|Design System overview]]
- [[design-tokens]]
- [[brand-voice]]
- [[components]]
- [[ui-kit-marketing-site]]
- [[web-dev-inspiration]]
- [[inspiration-links]]
- [[simple-mono-template]]
- [[kelly-bennett-site]]
- [[kelly-bennett]] (entity)

## Related

- [[overlook-strategy]]
- [[overlook-strategy-positioning]]
- [[three-altitudes]]
- [[finn-bennett]]
