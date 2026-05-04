---
title: "Project Status Audit"
type: concept
tags: [skill, workflow, projects, audit]
created: 2026-04-26
updated: 2026-04-26
weight: medium
node_size: 5
sources: []
---

# Project Status Audit

Anthropic-skill that sweeps every coding surface Finn touches — Cowork sessions, Claude Code project directories, Vercel deployments, on-disk folders — and classifies each project into four status buckets: in-progress, unfinished, abandoned, deployed. Output is the structure currently visible at `wiki/projects/{in-progress,unfinished,abandoned,deployed}`.

The skill exists specifically to surface Finn's "80% pile" — projects that got close to done and silently stalled. Pattern recognition: he ships ~70% of starts, sets aside ~20%, abandons ~10%. Without explicit visibility the unfinished pile grows.

## How it runs

Triggered by phrases like "audit my projects", "what am I working on", "where's my 80% pile", or any variant suggesting taking stock. Also fires when Finn mentions feeling overwhelmed about scope.

## Outputs

- `wiki/projects/` reorganized into the four-bucket folder layout
- A status dashboard (typically a single page summarizing counts and per-bucket highlights)
- Frontmatter `status` field synced across project pages

## Linked from

- [[mcp-protocol]]
- [[wiki-graph-querying]]
