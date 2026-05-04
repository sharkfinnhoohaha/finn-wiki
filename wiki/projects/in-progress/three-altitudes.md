---
title: "three-altitudes"
type: project
status: active
tags: [portfolio, nextjs, sanity, threejs, gsap, vercel]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 15
sources: [[local_65f6bd58-1447-4afc-948b-6b9efd97150a]], [[local_45ea f1ea-d0f9-4ee4-8813-17b00232e0f4]], [[local_caea5222-5b4f-47a6-8897-b6ba7acef893]], [[local_a2022942-a761-444d-923c-2bf3f7653600]], [[local_8ca674ce-c9d1-4e6b-b0c8-859d7c1f878c]]

# --- life-os-daily contract ---
revenue_type: speculative
revenue_score: 4
effort_score: 5
roi_score: 2
icon: "🌐"
area: none
last_touched: 2026-04-24
next_action: "Complete 3D visual pass — glass wave sculpture + GLSL film grain"
blocker: ""
---

## Next Action

Complete 3D visual pass — glass wave sculpture (`IcosahedronGeometry` + transmission), Vibrating Monolith, and GLSL film grain shader. See `## Open threads`.

## Blockers

- None currently.

## TL;DR

Finn's personal portfolio site, evolving from a "project cards" layout into a **cinematic four-stage scrolling autobiography** — Shoreline → Pocket → Engine Room → Horizon. Stack is Next.js + React Three Fiber + GSAP + Lenis + GLSL shaders, content via Sanity Studio embedded at `/studio`. Deployed on Vercel from the `norm` branch. The site is built around the idea that "Finn Bennett" is the anchor identity and [[overlook-strategy]] / [[overlook-audio]] are sub-modules of his creative logic.

> "We are pivoting away from 'Artifacts' and moving toward Environmental Behaviors. Instead of 3D models of planes or pre-amps, the site will communicate who you are through how it reacts to the user."

> "The site should feel like a short film directed by the user's scroll wheel."

## Stack

- **Framework:** Next.js (App Router), React, TypeScript
- **3D:** [[three-js]] + React Three Fiber, EffectComposer, GLSL shaders
- **Scroll/animation:** GSAP, Lenis (smooth scroll)
- **CMS:** [[sanity]] Studio v3 embedded at `/studio`, dataset `production`
- **Hosting:** [[vercel]] auto-deploy from `norm` branch (`three-altitudes.vercel.app`)
- **Local repo:** `~/Downloads/three-altitudes`
- **Production URL:** `https://three-altitudes.vercel.app`

## Architecture: four scroll zones

Sticky-section pattern — 4 × 200vh = 800vh total. Each zone has its own atmosphere component, color rail entry, and media overlays.

| Zone | Range | Color | Atmosphere component |
|------|-------|-------|----------------------|
| Shoreline | 0–25% | Deep Ventura Teal `#003838` (bumped from `#002b2b`) | `ShorelineAtmosphere` (was `KineticAtmosphere`) |
| Pocket | 26–50% | Near-black `#0a0609` | `PocketAtmosphere` (was `FluidAtmosphere`) |
| Engine Room | 51–75% | Terminal Grey | `EngineRoomAtmosphere` (split from `VectorAtmosphere`) |
| Horizon | 76–100% | Hangar White `#f5f5f7` | `HorizonAtmosphere` |

### Atmosphere details

- **ShorelineAtmosphere** — 48×24 wave plane, sin displacement at 0.18–0.38 Hz, 28 foam particles. Later upgraded to a high-res `PlaneGeometry 50x24, 96x48 segments` with four layered sine wave passes (swell + cross-swell + chop + micro detail), deep navy `#0a1a3a` material, emissive `#061430`, metalness 0.7, roughness 0.12. Mouse Y modulates wave amplitude with lerp `0.04` for a "relaxed" feel.
- **PocketAtmosphere** — 65 amber `CylinderGeometry` filaments with a snare-beat pulse: `pow(sin(t * π * 4.0), 8)`. Originally the orange "sound wave" — replaced in batch-2 session 4 by the ocean-wave plane after Finn asked for the wave aesthetic.
- **EngineRoomAtmosphere** — 14 grey wireframe modules. Previously `BoxGeometry` cubes — replaced with merged airplane silhouettes (fuselage + wings + tail + fin via `mergeGeometries`, randomized heading/bank/pitch). Accent `pointLight` swapped from amber `#ff8c00` to deep blue `#1a4a8a`.
- **HorizonAtmosphere** — 3 line objects forming a flight horizon, mouseRef lerp `0.04` inertia.

### Identity layer

- HUD coordinates: `34.2746° N  119.2290° W` (Ventura, CA)
- Cycling identity tag: PILOT / PRODUCER / DEVELOPER, 2.2s interval, fade-up entrance
- Typography: Cormorant Garamond (300/400/600) for serif title cards, JetBrains Mono for HUD; `serif-text` global class
- Film grain: animated SVG noise filter via `body::after`, `mix-blend-mode: overlay`, opacity 0.035
- `GhostingCode` component — 7 TypeScript/Next.js fragments, RAF loop with direct DOM `style.transform` writes (no React re-renders) for performance

### Media layers

`MediaLayers.tsx` orchestrates overlays:

- `wave-teal.png` — Stage 1, opacity 0.14, mix-blend-mode overlay, fade 22–32%
- `wave-transition.mp4` — plays once at 24–32% scroll, resets at 18%
- `code-bg.mp4` — Stage 3, opacity 0.06, mix-blend-mode screen
- `finn-surf-paddle-bw.jpg` + `finn-surf.jpg` — Stage 1 flanking, ~20% opacity, screen blend
- `finn-drums-mint.jpg` + `finn-drums-live.jpg` — Stage 2 flanking, 35% opacity, screen blend
- `overlook-logo.png` — 36×36 in Stage 3 module cards, opacity 0.4
- `la-altitude.jpg` — Stage 4 full-bleed, multiply blend, opacity 0.12

`TransitionPass` — GLSL wave-wipe shader, bell at 0.25 (was 0.33), ambient water refraction in Shoreline, clean pass starts at 0.72.

## Sanity setup

- Studio embedded at `/studio` with `basePath: '/studio'` in `defineConfig` (PR #6)
- Visual editing via `@sanity/visual-editing`, conditional on draft mode
- `presentationTool` — invalid `navigate` prop had to be removed (PR #7)
- Schema includes: `devProject`, `audioWork`, `hero`, `aviation`, `siteSettings`
- Schema additions (batch-2 session 6): Hero Shoreline Background Media (2 image/video slots), Aviation Background Media (2 slots), Site Settings Engine Room Background Video with static fallback to `code-bg.mp4`

### Sanity → Vercel webhook

- Trigger on: Create + Update (Publish wasn't an option in Finn's UI — only Create/Update/Delete)
- Filter: `!(_id in path("drafts.**"))` — only fires on published transitions, not draft keystrokes
- Method: POST. Projection blank. Secret/headers blank.

### GROQ patterns Finn now knows

- Projections: `*[_type == "devProject"] { name, num, status }`
- Image dereferencing: `"photos": photos[].asset->url`
- Combined singletons: `{ "hero": *[..][0]{..}, "settings": *[..][0]{..} }`
- Array filtering: `disciplines[code == "AUDIO"][0]`
- Fallbacks: `coalesce(role, "CONTRIBUTOR")`
- Mental model: `->` deref, `[]` filter/index, `{}` shape, `|` order/slice

> "Can you give me a few functional ways that I could utilize GROQ for my three-altitudes website? i feel like I am missing out on functionality by not understanding it"

## Files / paths / repos

- Local: `~/Downloads/three-altitudes`
- Branch: `norm` (production)
- Key files:
  - `FluidAtmosphere.tsx` (Pocket) — replaced sound wave with ocean wave
  - `VectorAtmosphere.tsx` (Engine Room) — boxes → merged airplane silhouettes
  - `MainCanvas.tsx` (lighting changes)
  - `MediaLayers.tsx`
  - `TransitionPass`
  - `GhostingCode.tsx`
  - `lib/queries.ts` — `getSiteSettings` added in batch-2 session 6
  - `src/lib/sanity/live.ts` — `SanityLive browserToken` config
- Commit referenced: `1784ef4` (batch-2 session 4, on `norm`)

## Gotchas

- **Sandbox can't push to GitHub.** Recurring pattern — agent commits locally, Finn runs `cd ~/Downloads/three-altitudes && git push origin norm` from his terminal. See [[cowork-sandbox-limits]].
- **`SANITY_API_READ_TOKEN` is server-only.** `SanityLive browserToken` was using it, undefined in browser bundle, fell back to ~4s polling instead of WebSocket. Fix: switch to `NEXT_PUBLIC_SANITY_API_READ_TOKEN`.
- **Sanity tokens shown once.** For `/api/draft-mode/enable` 500 Unauthorized, the only fix was regenerating "Preview Read Token" with Viewer perms, copying value, updating Vercel env, redeploy.
- **Scroll-triggered Studio refresh** — likely Next.js scroll restoration / custom input cleanup / Presentation iframe issue. Diagnosis path: DevTools Network tab — full document request on scroll = router issue, otherwise React re-render. Fixes: `experimental: { scrollRestoration: false }` in `next.config.js` or `export const dynamic = 'force-static'` on Studio route.
- **`npm run build` blocked by sandbox** (can't pull SWC ARM binary). Finn runs `npm run dev` locally for preview. `tsc --noEmit` works fine.

## Open threads

- 3D Visual Pass not yet done: Glass Wave Sculpture (crystalline `IcosahedronGeometry` + transmission), Vibrating Monolith, GLSL film grain shader
- Interaction Pass: cursor lens/refraction uniform, Spotify embed as a "Sonic Artifact"
- Whether `norm` is actually production branch or if a PR to `main` is needed — flagged but unresolved
- Original blueprints/image upload (batch-2 session 6) never came through — Finn dropped it

## Quotes from Finn

> "I want to make the 'boxes' look like they are planes (giving the user the feeling they are flying) and I want the orange sound wave to be a much more smooth, relaxed, mesmerising dark blue wave that replicates that of an ocean wave."

> "Identity First: The name 'Finn Bennett' is the anchor. 'Overlook Strategy' and 'Overlook Audio' are sub-modules—outputs of his creative logic, not the primary identity."

> "Physics of the Swell: Stage 1 must feel 'heavy' and fluid like a Pacific swell."

> "I switched the model to opus because it is a big task, make sure you are caught up on the original instructions"

> "forget about the blueprint, can. you just push and commit the changes you made?"

> "Brainstorm ways to improve my portfolio website. It looks too basic, I want it to feel like an experience."

## Related

- [[overlook-strategy]] — referenced as `MODULE_01` sub-output on the site
- [[overlook-audio]] — referenced as `MODULE_02` sub-output
- [[sanity]], [[vercel]], [[three-js]], [[gsap]]
- [[cowork-sandbox-limits]]

## Sources

- `local_65f6bd58-1447-4afc-948b-6b9efd97150a` — Evolve portfolio into cinematic autobiography (batch-3 session 6)
- `local_45ea f1ea-d0f9-4ee4-8813-17b00232e0f4` — Modify 3D website animations and effects (batch-2 session 4)
- `local_caea5222-5b4f-47a6-8897-b6ba7acef893` — Fix Sanity refresh issue and publishing (batch-2 session 6)
- `local_a2022942-a761-444d-923c-2bf3f7653600` — Debug Sanity setup and studio errors (batch-3 session 2)
- `local_8ca674ce-c9d1-4e6b-b0c8-859d7c1f878c` — Enhance portfolio website with Sanity CMS (batch-4 session 1, sparse transcript)
