---
title: "Knowledge graph LLM wiki (InfraNodus pattern)"
type: concept
tags: [concept, llm-wiki, knowledge-graph, infranodus, obsidian]
created: 2026-04-24
updated: 2026-04-26
weight: high
node_size: 10
sources: [[notebooklm-overlook-strategy]], [[graphify-cheat-sheet]]
---

# Knowledge graph LLM wiki (InfraNodus pattern)

> [!warning]
> **Superseded by deployment** — this concept is no longer pending. As of April 2026, Finn shipped the overlay using [[graphify]] (not InfraNodus). The MCP server `graphify-finn-wiki` auto-loads in Claude Code from the vault, with terminal aliases (`wiki`, `wiki-ask`, `wiki-prep`, etc.) wired into `~/.zshrc`. The "wait until 300 pages" counter-argument below was overruled — Finn went ahead at the current scale because the graph proved cheap to build with `--update` and useful for cross-domain queries. See [[graphify]] for the operational entity, [[wiki-graph-querying]] for the workflow, [[graphify-cheat-sheet]] for the full reference.

A variant of the [[llm-wiki-pattern]] that overlays an explicit knowledge-graph layer (via InfraNodus or similar) on top of the markdown vault. The video *"Fix Karpathy's LLM Wiki with a Knowledge Graph \| Claude Code + Obsidian + InfraNodus"* in [[notebooklm-overlook-strategy]] is the canonical reference for the original framing. [[graphify]] is the implementation Finn actually deployed.

## Pitch

[[karpathy-llm-wiki-gist|Karpathy's gist]] uses `index.md` for navigation. At ~150 pages, multiple commenters reported the index becomes unwieldy and the Obsidian graph view takes over as primary navigation (already noted on [[karpathy-llm-wiki-gist]] under "Criticisms worth tracking"). The InfraNodus video pushes this further: instead of relying on the implicit graph from `[[wikilinks]]`, generate an *explicit* knowledge graph by extracting entities/relations and rendering it as a separate layer. Claude Code maintains both — the markdown wiki AND the graph.

## What this would buy this vault

Mostly clearer answers to questions like:

- "What concepts cluster around [[overlook-strategy]] but don't have direct wikilinks yet?"
- "Where are the contradictions between pages that share entities?"
- "What's the shortest path from [[gearflip]] to [[ventura-forward]]?"

Obsidian's native graph view does some of this but not the inferred-relation work. InfraNodus or a custom Dataview script could.

## Cost / value (resolved April 2026)

Shipped via [[graphify]] at roughly the current vault size, ahead of the originally-planned 300-page threshold. The deciding factor: `/graphify . --update` is cheap (SHA256 cache, only changed files re-extract), so the cost-of-being-wrong was low. Initial wins came from `wiki-cross` (cross-domain INFERRED edges between audio, aviation, dev) and `wiki-bridges` (god-node validation as a refactor signal).

## Counter-argument (overruled, kept for reference)

The [[karpathy-llm-wiki-gist|gist]]'s own wisdom says: don't add infrastructure until you feel its absence. The original take here was: this vault has ~120 pages right now — too small to need a knowledge-graph overlay. Revisit at 300+ pages.

In practice, the Tailscale Funnel mobile-access piece is still pending precisely on this principle ("worth building when mobile graph queries become an actual recurring pain") — see [[Finn-OS/ideas/backlog]].

## Related

- [[graphify]]
- [[graphify-cheat-sheet]]
- [[wiki-graph-querying]]
- [[llm-wiki-pattern]]
- [[karpathy-llm-wiki-gist]]
- [[index-file-navigation]]
- [[lint-workflow]]
- [[karpathy-autoresearch]]
- [[notebooklm-overlook-strategy]]
