---
title: "Three.js"
type: entity
tags: [tool, library, 3d, webgl, frontend]
created: 2026-04-26
updated: 2026-04-26
weight: low
node_size: 2
sources: []
---

# Three.js

JavaScript library for rendering 3D graphics in the browser via WebGL. Used on [[three-altitudes]] for the cockpit/altitude visualization sequences.

## Where it's used

- [[three-altitudes]] — primary three.js consumer; the project name is itself a nod to the library plus the aviation altitude-tier framing.

## Patterns and gotchas

- Combined with [[gsap]] for scroll-driven 3D camera animations on the three-altitudes hero.
- Loaded via standard npm package rather than CDN.
- Three.js scenes get heavy fast on M1 Max even with 64GB RAM — Finn's pattern is to dev with HMR off for three.js routes.

## Related

- See [[three-js-patterns]] for the in-depth tech notes
