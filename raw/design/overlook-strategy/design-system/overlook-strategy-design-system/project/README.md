# Overlook Strategy — Design System

A brand + UI system for **Overlook Strategy**, a brand-identity and digital-systems agency based in Ventura, California. This design system captures the quiet, editorial, ocean-inspired aesthetic of the Overlook mark and gives design agents the tools to produce on-brand work — slides, prototypes, websites, and production code.

---

## The brand, in a sentence

Overlook Strategy is a small, craft-led agency that helps its clients see their business from a calmer altitude — measured counsel, hand-drawn precision, and the visual restraint of a coastal morning.

**Founder:** Finn Bennett. Also runs Overlook Audio (studio / live sound, Ventura) and a cinematic portfolio site, *The Three Altitudes* — but the **Overlook Strategy** identity is the single scope of this system.

---

## Sources used to build this system

| Source | Path |
|---|---|
| Logo (square mark + wordmark) | `assets/overlook-logo.png` |
| Business card (Finn Bennett, Founder) | `assets/overlook-business-card.png` |
| Codebase referenced for tokens, motifs, HUD patterns | GitHub: `Overlook-Strategy/three-altitudes` @ branch `norm` — the cinematic portfolio site that adjacently references Overlook Strategy as the "Vector / Engine Room" stage |
| Founder note | "Ocean inspired color theme that reminds you of Ventura, California." |

The codebase is the cinematic portfolio (`three-altitudes`), not a dedicated Overlook Strategy site — treat it as **adjacent** visual reference, not the source of truth. The logo and business card are the source of truth for the Strategy brand; the codebase informs motifs (HUD meta, grain, coordinates, serif+mono pairing) we pull forward sparingly.

---

## File index

```
.
├── README.md                    ← you are here
├── SKILL.md                     ← Agent SKills entrypoint
├── colors_and_type.css          ← CSS variables: colors, type, spacing, shadows
├── assets/
│   ├── overlook-logo.png        ← square mountain+bay mark, 1000×1000
│   ├── overlook-business-card.png
│   └── icons/                   ← lucide SVGs, brand-tuned
├── preview/                     ← design-system tab cards
│   ├── palette-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   └── ...
├── ui_kits/
│   └── overlook-strategy-site/  ← agency marketing site UI kit
│       ├── README.md
│       ├── index.html
│       └── *.jsx
└── slides/                      ← (not built — no template attached)
```

---

## Content fundamentals

**Voice.** Measured, plain-spoken, confident. We write the way a good strategist talks in a second meeting — we have an answer, and it's the simplest one that's still true. Short declarative sentences. Almost no adjectives. No hype words ("unlock," "empower," "supercharge," "leverage"). No rhetorical questions. Never ever exclamation points.

**Person.** Second person ("you") in calls-to-action; first-person plural ("we") when speaking as the studio; first-person singular ("I'm Finn") only in founder-voiced moments. Never "our team" — we say "the studio."

**Casing.**
- Body copy: sentence case.
- Eyebrows / kickers / button labels / nav: `UPPERCASE` with wide tracking (0.18em / 0.28em for tiny meta). This is the single most recognizable typographic move of the brand — inherited from the HUD labels in the portfolio codebase and the wordmark of the logo.
- Display headlines: `Title Case` in serif, often set in italic for pull-quotes and taglines.
- Proper nouns (Ventura, Overlook, Channel Islands) always cased correctly.

**Punctuation.** Em dashes ( — ) with spaces. Double-slashes (`//`) as decorative separators in meta/eyebrow text (`34.2746° N // 119.2290° W`), never in body copy. Oxford comma. No emoji.

**Numbers.** Tabular figures in meta and data. Prefer concrete specifics over vague quantifiers ("twelve years" > "a decade of").

**Example copy, in voice:**

> *Eyebrow:*     `OVERLOOK STRATEGY // AGENCY`
> *Headline:*    *Brand and digital systems, built at the coast.*
> *Body:*        We work with a small number of clients a year. Every engagement starts with a half-day on the bluff — phone off, notebook open — and ends with a system your team can actually run.
> *CTA:*         `START A PROJECT →`

**Things we don't say:** "crafted," "curated," "journey," "solutions," "ecosystem," "world-class," "best-in-class," "seamless." We also don't emoji.

---

## Visual foundations

**Palette.** Ink navy (logo color, #0E2439) + warm paper cream (#F4EEE2) is the base pairing — inverted for editorial moments (cream on ink). Pacific teal (#2F6E7B) and a single highlight tide (#4A9D97) carry accents. Warm sandstone (#C9A775, #916B3A) is the **only** non-cool color in the system and should be used sparingly — for dates, credit lines, small wayfinding. Fog neutrals for divider lines.

**Type.**
- **Serif display** (Cormorant Garamond, substituting for the business-card serif) — names, taglines, editorial pull-quotes. Light weights (300/400). Often italicized.
- **Sans wordmark / UI** (Questrial, substituting for the Futura-adjacent geometric sans of the logo wordmark). Used ALL CAPS with 0.18em tracking for buttons, eyebrows, navigation; sentence case for body.
- **Mono** (JetBrains Mono) — for HUD-style meta: coordinates, timestamps, file paths, status readouts. Never in body.
- **Display mono** (Space Mono) — a third display voice alongside the serif. Used ALL CAPS with very wide tracking (0.30em at display size, 0.22em at nav size) for personal names, portfolio titles, and editorial wordmarks where the serif feels too warm. Think Kelly Bennett–style portfolio hero: `KELLY BENNETT` centered in thin, airy type. Apply via `.display-mono`, `.display-mono-lg`, `.display-mono-sm`, or `.mono-nav`. Sits alongside — does not replace — the Inter wordmark or the serif headline.

**Backgrounds.** Cream paper is default. Ink inverse sections for impact (hero, footer). Full-bleed photography when available — always desaturated, high-contrast, cool-shifted (Ventura in the blue hour / morning fog). No gradients except extremely subtle paper-to-paper warm washes on hero sections. Never purple gradients. Never glass/blur except as a functional overlay on a photo hero.

**Animation.** Restrained. Fades (240ms), gentle lifts on entrance (16px translate + opacity, `cubic-bezier(0.22, 1, 0.36, 1)`), no bounces, no springs, no parallax tricks. Hover = color shift or a 1px underline appears. Press = color darkens, no scale. Scroll sections cross-fade rather than snap.

**Hover.** Text links pick up a solid underline in navy → pacific teal on hover. Buttons shift from ink/cream inverse to cream/ink on hover (polarity flip). Cards: border darkens from `paper-300` to `ink-900`, shadow deepens one step. No glows.

**Press.** Background color darkens; no scale transform. Focus ring is a 2px `ink-900` outline with 2px offset — never the system default.

**Borders.** 1px hairlines. Default border is `paper-300` on cream; `ink-700` on ink. A single 1px `ink-900` hairline is used as a structural rule in editorial layouts.

**Shadows.** Paper-like. Never neon or glowy. Four steps: `flat` (1px drop, barely there), `soft`, `card`, `lift`. All tinted with the ink navy for warmth.

**Transparency / blur.** Almost none. One exception: a thin ink scrim (`rgba(14,36,57,0.45)`) over hero photography so cream text reads. No backdrop-filter glass panels in content.

**Corner radii.** Small, architectural. Default card is **4px**. Buttons 4px or pill (for tiny utility pills only). Logo mark itself has 0 radius — we mirror that sharpness on hero images and feature blocks (0 radius on hero, 4px on everything below the fold).

**Cards.** Paper-on-paper. `paper-50` surface on `paper-100` page, 1px `paper-300` border, 4px radius, `shadow-soft` at rest → `shadow-card` on hover. No inner gradients. A thin `ink-900` rule at the top of the card is an optional editorial treatment.

**Layout rules.**
- 12-column grid, 96px max gutter, 1280px content max.
- Generous whitespace — sections breathe at 128px top/bottom (`--space-10`).
- Editorial asymmetry: titles hang left, meta pins bottom-right (like a book spread). Avoid centered single-column stacks except on heroes.
- Fixed navigation: thin, ink on paper (or transparent over hero), 72px tall with a hairline bottom border.

**Imagery mood.** Cool, misty, blue-hour. Long horizons. Water, sky, sparse architecture. No people-facing stock. Black-and-white acceptable when imagery is stark. A very subtle grain overlay (0.035 opacity SVG noise, inherited from the portfolio codebase) is available but optional — use on dark hero sections only.

---

## Iconography

**System:** [Lucide](https://lucide.dev) — 1.5px stroke, rounded caps, 24×24 viewBox. Substituted because the codebase has no standalone icon sprite; it leans on ad-hoc inline SVGs (corner brackets, arrows). **Flag to founder:** confirm or swap to preferred icon set.

Icons are always rendered in `currentColor` — never tinted. Inline SVG or CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="mountain" class="icon-md"></i>
```

**Custom brand glyphs** (copy into `assets/icons/`):
- `overlook-mark.svg` — the mountain+bay logo at icon size (32px → 64px).
- `compass-rose.svg` — occasional decorative mark for dividers.
- `hairline-arrow.svg` — the thin diagonal arrow used in link rows (→, ↗).

**Emoji:** never.
**Unicode glyphs as icons:** used occasionally — `→`, `↗`, `//`, `°`, `′`, `″` in meta text (e.g. coordinates). That's it.

**Usage rule:** icons never appear without a label or sit alone in a button. They are always *alongside* text, and the text does the primary work. Hero sections have zero icons.

---

## Products & UI kits

This system ships one UI kit:

| Kit | Folder | What it is |
|---|---|---|
| **Overlook Strategy marketing site** | `ui_kits/overlook-strategy-site/` | The agency's own marketing site — home, work, approach, contact. Editorial, cream-on-ink hero, paper body. |

Other Overlook properties (Overlook Audio studio site, the *Three Altitudes* portfolio) are **out of scope** — they have different visual vocabularies and would warrant separate design systems.

---

## Caveats

- **Font substitutions.** Real wordmark font (logo "OVERLOOK STRATEGY") and the serif used for "Finn Bennett" on the business card are unknown — substituted with Questrial (geometric sans) and Cormorant Garamond (transitional serif). Founder should confirm / provide originals.
- **Icons.** Substituted Lucide until Overlook provides a preferred set.
- **Imagery.** No brand photography was provided — UI kit uses placeholder blocks with captions noting "photo: Ventura coast, morning."
- **No slide template** was attached, so `slides/` was not built.

See `SKILL.md` for agent invocation.
