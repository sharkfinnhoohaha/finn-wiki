---
title: "Wiki graph querying"
type: workflow
tags: [workflow, graphify, knowledge-graph, query]
created: 2026-04-26
updated: 2026-04-26
weight: medium
node_size: 5
sources: [[graphify-cheat-sheet]]
---

# Wiki graph querying

Day-to-day patterns for using the [[graphify]] knowledge graph to answer structural questions about Finn-Wiki. Complements the conceptual [[query-workflow]] (which covers querying the wiki's prose) with the graph-traversal layer.

## When to reach for the graph instead of grep

| Question shape | Tool |
|---|---|
| Literal phrase, exact filename | grep / `ls -t` |
| "What's adjacent to X" | `wiki-prep "X"` |
| "How does A relate to B" | `wiki-ask "..."` or `/graphify path "A" "B"` |
| "What does graphify know about X" | `/graphify explain "X"` |
| "Are these projects drifting toward abandoned communities" | `wiki-ask "..."` with a community-level prompt |
| "Top leverage points in the vault" | `wiki-bridges` |
| "What's grown into an accidental god node" | `wiki-stale` |

If the question is about *what's connected to what*, graph wins. If it's about *finding the file you edited yesterday*, grep wins.

## The two workhorses

### `wiki-prep "<topic>"` — context surface for a topic

Use before client meetings, before starting project docs, before anything that needs you to be loaded on a specific topic. Surfaces every wiki entry, raw source, and Finn-OS framework adjacent to the topic.

```
wiki-prep "Pier and Point"
wiki-prep "Sømliøya"
wiki-prep "per-task pricing"
```

### `wiki-ask "<question>"` — free-form graph question

Use anywhere you'd otherwise grep. Claude picks the right combination of `query_graph`, `get_neighbors`, `shortest_path` based on the question shape.

```
wiki-ask "what raw sources fed into the OpenClaw thinking"
wiki-ask "which abandoned projects still connect to active client work"
wiki-ask "what bridges Pier and Point to my abandoned projects pile"
```

## Query templates

Drop into `wiki-ask "..."` or paste in interactive mode (`wiki`).

**Project momentum check**

```
For each project I'm currently working on, count edges to active vs abandoned communities. Flag any project that mostly connects to abandoned work, signal it may be drifting.
```

**Idea-to-execution provenance**

```
Trace every node connecting to "[idea]" with EXTRACTED edges. Group by community. Show me which raw sources, transcripts, or notes seeded the idea.
```

**Cross-domain transfer (essay seeds)**

```
Find INFERRED semantically_similar_to edges with confidence > 0.8 spanning audio, aviation, and dev domains. These are essay seeds.
```

**Routing decision for new content**

```
If I write a note about "[topic]", which community should it live in to maximize useful connections? List 3 candidate parent nodes.
```

**Pre-meeting briefing (30 minutes out)**

```
shortest_path between "[client]" and the top 5 god nodes. Include rationale nodes. I have a meeting in 30 minutes.
```

## Rebuild rhythm

- After a batch of new content → `wiki-rebuild`, run `/graphify . --update` (cheap; SHA256 cache means only changed files re-extract).
- Quarterly, or when the graph feels stale → `/graphify . --mode deep --wiki` (expensive; full re-extraction).
- Don't rebuild after every edit. Token cost compounds.

## Monthly hygiene loop

The graph reveals what your vault is doing versus what you think it's doing. Three habits:

1. `wiki-bridges` — confirm top god nodes match intuition. Mismatch is a refactor signal.
2. `wiki-stale` — audit accidental god nodes. Promote to canonical or split.
3. `wiki-rebuild` after cleanup so the next graph reflects current reality.

Add a quarterly pass with `wiki-abandoned` when the unfinished pile feels overwhelming — see [[project-status-audit]] for the broader context on the 80% pile.

## Token discipline

Each `wiki-*` alias spawns a fresh Claude Code session. Cheap individually, not free. For chained queries, drop into interactive mode with `wiki` and stay in one session. See [[token-conservation-mindset]].

## Filing answers back

Same rule as [[query-workflow]]: if a graph-driven answer is substantive and reusable, file it. Especially valuable to capture:

- Refactor signals from `wiki-bridges` (canonical vs accidental hub disagreements)
- Cross-domain INFERRED edges that suggest new comparison or concept pages
- AMBIGUOUS edges that resolved into a clear claim

Run `/graphify . --update` after filing so the new page enters the graph.

## Related

- [[graphify]]
- [[graphify-cheat-sheet]]
- [[query-workflow]] (prose-level querying)
- [[lint-workflow]]
- [[graph-view-setup]] (Obsidian native graph)
- [[project-status-audit]]
