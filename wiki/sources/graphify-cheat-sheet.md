---
title: "Graphify cheat sheet"
type: source
tags: [source, graphify, knowledge-graph, mcp, obsidian, claude-code]
created: 2026-04-26
updated: 2026-04-26
weight: medium
node_size: 5
sources: [[graphify-cheat-sheet]]
---

# Graphify cheat sheet

Reference doc for the [[graphify]] knowledge-graph layer Finn has running over this vault. Lives at `raw/graphify-cheat-sheet.md`. The graph itself is at `Finn-Wiki/graphify-out/`; the MCP server (`graphify-finn-wiki`) auto-loads when Claude Code is launched from the vault.

Significance for the wiki: this supersedes the "wait until 300 pages" stance in [[knowledge-graph-llm-wiki]]. The graph overlay is no longer theoretical — it's wired up and load-bearing.

## TL;DR

- One terminal alias for vague structural questions: `wiki-ask "..."`. Runs from any directory, auto-routes to the right MCP tool.
- One alias for sustained exploration: `wiki`. Drops into interactive Claude Code inside the vault.
- Rebuild with `wiki-rebuild` only after batches of writing — not after every session. Token cost compounds.
- Eight more `wiki-*` aliases for stats, bridges, abandoned-project audits, cross-domain edges, stale god nodes, briefing prep.
- Five `/graphify` slash commands inside the interactive session: full rebuild, incremental rebuild, query, path, explain.
- Seven MCP tools on the `graphify-finn-wiki` server: `graph_stats`, `god_nodes`, `get_node`, `get_neighbors`, `get_community`, `query_graph`, `shortest_path`.
- Edges carry provenance: EXTRACTED (1.0 confidence, explicit in source), INFERRED (0.0–1.0, LLM semantic), AMBIGUOUS (review backlog).

## What this source did to the wiki

- Created [[graphify]] entity page with the alias table, MCP tool list, edge type reference.
- Created [[wiki-graph-querying]] workflow with the query templates and the grep-vs-graph decision rule.
- Added a `> [!warning]` callout to [[knowledge-graph-llm-wiki]] noting the supersede — it's deployed, not pending.
- Updated [[llm-wiki-pattern]], [[mcp-protocol]], [[setup-obsidian-vault]], [[query-workflow]], [[hardware-setup]] with cross-refs.
- Filed Tailscale Funnel mobile-access plan as a backlog idea in [[Finn-OS/ideas/backlog]].

## Key facts to preserve

**Vault root:** `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/`

**Artifacts:**
- Graph artifacts: `Finn-Wiki/graphify-out/`
- Per-community wiki articles: `Finn-Wiki/graphify-out/wiki/`
- Interactive HTML viewer: `Finn-Wiki/graphify-out/graph.html`
- Audit report: `Finn-Wiki/graphify-out/GRAPH_REPORT.md`

**Config:**
- MCP config: `Finn-Wiki/.mcp.json` (paths relative to launch dir — must launch from vault root)
- Permission allowlist: `Finn-Wiki/.claude/settings.local.json` (pre-approves `mcp__graphify-finn-wiki`)
- Always-on instructions: graphify section at the bottom of `Finn-Wiki/CLAUDE.md`
- Ignore patterns: `Finn-Wiki/.graphifyignore`
- Aliases live in `~/.zshrc` under the block titled "Finn-Wiki / graphify shortcuts"
- Python venv: `Finn-Wiki/.venv/` with `graphifyy[mcp]` installed

**Setup recap (in case of rebuild from scratch):**

```bash
uv tool install graphifyy
graphify install
cd "$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki"
python3 -m venv .venv
.venv/bin/pip install "graphifyy[mcp]"
graphify claude install
claude
# inside: /graphify . --mode deep --wiki
```

## Open thread carried forward

Mobile / web access to the graph requires wrapping `graphify.serve` in HTTP/SSE transport and exposing via Tailscale Funnel for use as a custom connector in claude.ai. Filed as a side project in [[Finn-OS/ideas/backlog]] — worth building "when mobile graph queries become an actual recurring pain."

## Troubleshooting reference

- `/mcp` not showing graphify-finn-wiki → launched outside the vault. Use the `wiki` alias.
- MCP calls silently failing → `.mcp.json` paths are relative; launch from vault root.
- `python -m graphify.serve` ModuleNotFoundError → `uv tool install` isolated the module from system Python; the `.mcp.json` already points to `.venv/bin/python`. Don't run manually outside that venv.
- Stale graph → `wiki-rebuild`, then `/graphify . --update` (SHA256 cache means only changed files re-extract).
- Repeated MCP permission prompts → verify `.claude/settings.local.json` pre-approves `mcp__graphify-finn-wiki`.

## Related

- [[graphify]]
- [[wiki-graph-querying]]
- [[knowledge-graph-llm-wiki]]
- [[llm-wiki-pattern]]
- [[mcp-protocol]]
- [[graph-view-setup]]
- [[setup-obsidian-vault]]

## Source

- `raw/graphify-cheat-sheet.md` (last updated April 2026 by Finn — "If alias names change in `~/.zshrc`, update this page so future Finn isn't confused.")
