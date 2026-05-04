---
title: "Graphify"
type: entity
tags: [tool, knowledge-graph, mcp, claude-code, obsidian]
created: 2026-04-26
updated: 2026-04-26
weight: high
node_size: 10
sources: [[graphify-cheat-sheet]]
---

# Graphify

CLI + MCP server that builds and queries an explicit knowledge graph layered over Finn-Wiki. Installed via `uv tool install graphifyy`. Lives at `Finn-Wiki/graphify-out/`. The MCP server (`graphify-finn-wiki`) auto-loads when [[claude-code|Claude Code]] is launched from the vault.

Graphify is the operational answer to [[knowledge-graph-llm-wiki]]: instead of relying purely on Obsidian's implicit `[[wikilinks]]` graph, it extracts an explicit graph (EXTRACTED + INFERRED edges) and exposes traversal tools to Claude.

## Terminal aliases

All defined in `~/.zshrc` under "Finn-Wiki / graphify shortcuts". Available from any directory.

| Alias | What it does | When to use |
| --- | --- | --- |
| `wiki` | Opens Claude Code in the vault, interactive | Default entry point |
| `wiki-rebuild` | Opens Claude Code with reminder to run `/graphify . --update` | After a batch of edits |
| `wiki-stats` | Node/edge/community counts plus edge-type breakdown | Health check after rebuild |
| `wiki-bridges` | Top 5 highest-leverage nodes by betweenness centrality | Monthly review |
| `wiki-abandoned` | Abandoned-projects nodes ranked by live connections to active work | Quarterly, or when the unfinished pile feels overwhelming |
| `wiki-cross` | Cross-domain semantic similarity edges spanning audio, aviation, dev | Monthly, before content sprints |
| `wiki-stale` | Top 10 god nodes flagged for canonical-vs-accidental review | Quarterly vault hygiene |
| `wiki-prep "X"` | Briefing prep on a topic, client, or concept | Before client meetings, before starting project docs |
| `wiki-ask "..."` | Free-form graph question, auto-routes to the right MCP tools | Anytime you'd otherwise grep |

The two workhorses are `wiki-prep "<topic>"` (briefing-style context surface) and `wiki-ask "<question>"` (free-form, replaces grep for graph-shaped questions). See [[wiki-graph-querying]] for query templates.

## Slash commands (inside Claude Code, launched via `wiki`)

| Command | What it does | Cost |
| --- | --- | --- |
| `/graphify .` | Full rebuild, LLM extraction over all files | Expensive |
| `/graphify . --update` | Re-extract only changed files via SHA256 cache | Cheap |
| `/graphify query "..."` | One-shot graph traversal, returns subgraph | Free, local |
| `/graphify path "A" "B"` | Shortest path between two nodes | Free, local |
| `/graphify explain "X"` | Everything graphify knows about a node | Free, local |

Natural-language questions in interactive mode work too — CLAUDE.md instructs Claude to route graph-shaped questions through MCP tools automatically.

## MCP tools

Server name: `graphify-finn-wiki`. Verify with `/mcp` inside Claude Code.

| Tool | Returns |
| --- | --- |
| `graph_stats` | Aggregate counts and edge-type distribution |
| `god_nodes` | Highest-degree and highest-betweenness nodes |
| `get_node` | Full data on one node, including source file and rationale |
| `get_neighbors` | All edges from a node, with type and confidence |
| `get_community` | All nodes in a Leiden community |
| `query_graph` | BFS/DFS traversal from a starting node |
| `shortest_path` | Path between two nodes with intermediate edges |

## Edge types

Every edge carries provenance:

- **EXTRACTED** (confidence 1.0): explicit in source. Wikilinks, citations, see-also references.
- **INFERRED** (confidence 0.0–1.0): LLM-inferred semantic similarity, shared concepts, structural patterns.
- **AMBIGUOUS**: flagged for review. Treat as a vault-hygiene to-do list, not as noise.

Filter EXTRACTED only when you want hard evidence. Use INFERRED for surprises (cross-domain transfer between audio, aviation, dev). Resolve AMBIGUOUS when doing quarterly hygiene.

## File locations

| What | Where |
| --- | --- |
| Graph artifacts | `Finn-Wiki/graphify-out/` |
| Per-community articles | `Finn-Wiki/graphify-out/wiki/` |
| Interactive viewer | `Finn-Wiki/graphify-out/graph.html` |
| Audit report | `Finn-Wiki/graphify-out/GRAPH_REPORT.md` |
| MCP server config | `Finn-Wiki/.mcp.json` |
| Permission allowlist | `Finn-Wiki/.claude/settings.local.json` |
| Graphify section in CLAUDE.md | bottom of `Finn-Wiki/CLAUDE.md` |
| Ignore patterns | `Finn-Wiki/.graphifyignore` |
| Aliases | `~/.zshrc`, "Finn-Wiki / graphify shortcuts" block |
| Python venv | `Finn-Wiki/.venv/` |

## When the graph wins vs grep

Graph is better for: relational ("how does X relate to Y"), neighborhood ("what's adjacent to this concept"), pathfinding ("connects two seemingly unrelated areas"), community-level diagnostic ("which abandoned projects still matter").

Grep is better for: literal phrase search, filesystem questions (`ls -t`), git history.

## Token discipline

Each `wiki-*` alias spawns a fresh Claude Code session that consumes tokens. Cheap individually, not free. If chaining queries, drop into interactive mode (`wiki`) and stay in one session. See [[token-conservation-mindset]].

## Hygiene loop (monthly)

1. `wiki-bridges` — confirm top god nodes match intuition. Mismatch is a refactor signal.
2. `wiki-stale` — audit accidental god nodes. Promote to canonical or split.
3. `wiki-rebuild` after cleanup so the next graph reflects current reality.

## Limits

- **Stdio transport only.** Claude Code desktop only — no claude.ai web/mobile access today. Fix is the Tailscale Funnel side project (see [[Finn-OS/ideas/backlog]]).
- **Launch directory matters.** Paths in `.mcp.json` are relative to launch dir; must use the `wiki` alias or `cd` into the vault first.
- **Don't rebuild after every edit.** Batch a few writing sessions, then `wiki-rebuild`. The full deep rebuild is expensive; `--update` is cheap but still token cost.

## Related

- [[graphify-cheat-sheet]] (operational reference)
- [[wiki-graph-querying]] (query workflow + templates)
- [[knowledge-graph-llm-wiki]] (the concept this implements)
- [[llm-wiki-pattern]] (the parent pattern)
- [[mcp-protocol]]
- [[claude-code]]
- [[obsidian]]
- [[graph-view-setup]] (Obsidian's native graph view, complementary)
