---
title: "Three.js Patterns"
type: tech
tags: [threejs, react-three-fiber, glsl, three-altitudes, animation, frontend]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_45eaf1ea-d0f9-4ee4-8813-17b00232e0f4, local_65f6bd58-1447-4afc-948b-6b9efd97150a]
---

Three.js + React Three Fiber patterns from [[three-altitudes]], the cinematic 4-stage scroll portfolio. Atmosphere components are the recurring shape: one component per scroll stage, scroll progress drives uniforms and visibility, mouse position drives subtle parallax. See [[next-js-patterns]] for the sticky-200vh scroll architecture.

## Compound silhouettes via mergeGeometries

For the airplane silhouettes in the Engine Room stage (`VectorAtmosphere.tsx`): build the plane out of fuselage + wings + tail + fin geometries and merge into one mesh. Cheaper than 4 meshes per plane, and one material call.

```ts
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';

const planeGeo = mergeGeometries([
  fuselageGeo,
  wingsGeo,
  tailGeo,
  finGeo,
]);
```

Randomize per-instance heading / bank / pitch for a swarm feel.

## Vertex displacement ocean wave

Single high-res `PlaneGeometry` with layered sine waves on the vertex shader (or in JS if you're not writing GLSL). For the Pocket stage ocean wave (`FluidAtmosphere.tsx`):

- `PlaneGeometry(50, 24, 96, 48)` — 50×24 world units, 96×48 segments
- Four layered passes: swell + cross-swell + chop + micro detail
- `MeshPhysicalMaterial`: deep navy `#0a1a3a`, emissive `#061430`, metalness `0.7`, roughness `0.12`
- Mouse Y modulates wave amplitude via `mouseRef`, lerp smoothing `0.04` for a "relaxed" feel (slower lerp = more inertia = more cinematic)

The combination of metalness 0.7 + low roughness 0.12 gives the dark mirror-like ocean surface. Higher roughness reads as foam/chop instead.

## Snare-beat pulse uniform

For the Pocket stage filaments (65 amber `CylinderGeometry` filaments), pulse intensity at 4 Hz with a sharp attack:

```glsl
float pulse = pow(sin(t * 3.14159265 * 4.0), 8.0);
```

The `pow(..., 8)` is the load-bearing trick — it crushes the sine into a sharp peak per beat, almost like a snare hit. Plain `sin()` would be too smooth.

## MouseRef lerp inertia

Standard pattern across atmosphere components:

```ts
const mouseRef = useRef({ x: 0, y: 0 });

useFrame(() => {
  mouseRef.current.x += (targetX - mouseRef.current.x) * 0.04;
  mouseRef.current.y += (targetY - mouseRef.current.y) * 0.04;
});
```

`0.04` = relaxed / cinematic. Higher (`0.1`+) feels twitchy. Used in `HorizonAtmosphere` for flight horizon parallax.

## Lighting

Stage-specific accent point lights, swapped by colour to match the mood:

- Original Engine Room: amber `#ff8c00`
- Updated to match navy ocean: deep blue `#1a4a8a`

`MainCanvas.tsx` is where the lights live. `MeshPhysicalMaterial` reads them; `MeshBasicMaterial` won't.

## Atmosphere component naming (4 stages)

After the `local_65f6bd58` rewrite:

- `KineticAtmosphere` → `ShorelineAtmosphere` (48×24 wave plane, sin displacement at 0.18-0.38 Hz, 28 foam particles)
- `FluidAtmosphere` → `PocketAtmosphere` (the 65 amber filaments + snare pulse)
- `VectorAtmosphere` split into `EngineRoomAtmosphere` (14 grey wireframe modules) + `HorizonAtmosphere` (3 line objects forming flight horizon)

## GhostingCode (RAF, no React)

For animations that don't need React's render pipeline (fast, frequent, deterministic), write directly to `style.transform` from a `requestAnimationFrame` loop. The `GhostingCode` component on three-altitudes does this for 7 TypeScript/Next.js code fragments — RAF loop, direct DOM `transform` writes, zero React re-renders. Keeps frame budget clean during scroll.

## Transition shader

`TransitionPass` is a custom GLSL wave-wipe shader, bell curve at scroll progress `0.25` (was `0.33`, retuned). Combined with `wave-transition.mp4` triggered at 24-32% scroll (resets at 18%) for the Stage 1 → Stage 2 handoff.

## Files touched (three-altitudes)

```
components/atmosphere/ShorelineAtmosphere.tsx
components/atmosphere/PocketAtmosphere.tsx   (formerly FluidAtmosphere)
components/atmosphere/EngineRoomAtmosphere.tsx
components/atmosphere/HorizonAtmosphere.tsx  (formerly VectorAtmosphere split)
components/MainCanvas.tsx
components/MediaLayers.tsx
components/GhostingCode.tsx
components/TransitionPass.tsx
```

## Gotchas (hit personally)

- **`npm run build` blocked in Cowork sandbox.** Can't pull SWC ARM binary. Use `tsc --noEmit` for type check; let Finn run `npm run dev` locally.
- **`MeshBasicMaterial` ignores lights.** If colours look flat, you're on Basic. Switch to `MeshStandardMaterial` or `MeshPhysicalMaterial`.
- **High segment counts add up fast.** 96×48 PlaneGeometry = ~4600 verts per ocean wave. One is fine, ten will tank an M1 Max in a debug build.
- **Lerp values feel arbitrary until they don't.** `0.04` is the magic "relaxed cinematic" number for this site. `0.1` reads as snappy, `0.02` reads as drugged.

## Source citations

Sessions: `local_45eaf1ea` (ocean wave + airplane silhouettes pass, exact PlaneGeometry params, lighting swap, commit `1784ef4`), `local_65f6bd58` (full Environmental Behaviors rewrite, atmosphere component renames, GhostingCode, TransitionPass, snare-beat pulse formula).
