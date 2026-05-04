# Graphify Cheat Sheet — Finn-Wiki 🕸️

> Reference for the graphify knowledge graph layered over Finn-Wiki. The graph lives at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/graphify-out/`. MCP server auto-loads when you launch `claude` from the vault.

## TL;DR

For a vague structural question, run `wiki-ask "..."` from any terminal. For sustained exploration, run `wiki` and stay interactive. Rebuild with `wiki-rebuild` after batches of new content, never after every session.

---

## Terminal aliases

All defined in `~/.zshrc`. Available from any directory.

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

### The two workhorses

**`wiki-prep "Pier and Point"`** surfaces every wiki entry, raw source, and Finn-OS framework adjacent to a topic. Stops you from rebuilding context from scratch.

**`wiki-ask "what raw sources fed into the OpenClaw thinking"`** is free-form. Use it whenever you'd otherwise grep the vault. Claude picks the right combination of `query_graph`, `get_neighbors`, `shortest_path` based on the question shape.

---

## Inside Claude Code

Launched via `wiki`, you also have slash commands:

| Command | What it does | Cost |
| --- | --- | --- |
| `/graphify .` | Full rebuild, LLM extraction over all files | Expensive |
| `/graphify . --update` | Re-extract only changed files via SHA256 cache | Cheap |
| `/graphify query "..."` | One-shot graph traversal, returns subgraph | Free, local |
| `/graphify path "A" "B"` | Shortest path between two nodes | Free, local |
| `/graphify explain "X"` | Everything graphify knows about a node | Free, local |

Natural language works too. CLAUDE.md instructs Claude to route graph-shaped questions through the MCP tools automatically, so you can just ask: *"what bridges Pier and Point to my abandoned projects pile?"*

---

## MCP tools available

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

---

## Edge type reference

Every edge carries provenance:

- **EXTRACTED**, confidence 1.0: explicit in source. Wikilinks, citations, see-also references.
- **INFERRED**, confidence 0.0 to 1.0: LLM-inferred semantic similarity, shared concepts, structural patterns.
- **AMBIGUOUS**: flagged for review, not omitted.

Filter EXTRACTED only when you want hard evidence. Use INFERRED for surprises. Treat AMBIGUOUS as a vault-hygiene to-do list.

---

## Best practices

### When to rebuild

- **Cheap, run often**: `/graphify . --update` after a batch of new content
- **Expensive, run rarely**: `/graphify . --mode deep --wiki` quarterly, or when the graph feels stale
- **Don't** rebuild after every edit. Token cost compounds. Batch a few writing sessions, then rebuild.

### Token discipline

Each `wiki-*` alias spawns a fresh Claude Code session that consumes tokens. Cheap individually, not free. If chaining queries, drop into interactive mode (`wiki`) and stay in one session.

### Graph hygiene loop

The graph reveals what your vault is doing versus what you think it's doing. Three monthly habits:

1. Run `wiki-bridges`, confirm top god nodes match intuition. Mismatch is a refactor signal.
2. Run `wiki-stale`, audit accidental god nodes. Promote to canonical or split.
3. Run `wiki-rebuild` after cleanup so the next graph reflects current reality.

### When the graph wins vs grep

Graph is better for:

- How does X relate to Y, structural
- What's adjacent to this concept, neighborhood
- What connects two seemingly unrelated areas, path
- Which abandoned projects still matter, community-level diagnostic

Grep is better for:

- Find the exact phrase, literal search
- File I edited yesterday, filesystem question (`ls -t`)
- Latest version of this draft, git log

---

## Common query templates

Drop into `wiki-ask "..."` or paste in interactive mode.

**Project momentum check**

```
For each project I'm currently working on, count edges to active vs abandoned communities. Flag any project that mostly connects to abandoned work, signal it may be drifting.
```

**Idea-to-execution provenance**

```
Trace every node connecting to "[idea]" with EXTRACTED edges. Group by community. Show me which raw sources, transcripts, or notes seeded the idea.
```

**Cross-domain transfer**

```
Find INFERRED semantically_similar_to edges with confidence > 0.8 spanning audio, aviation, and dev domains. These are essay seeds.
```

**Routing decision for new content**

```
If I write a note about "[topic]", which community should it live in to maximize useful connections? List 3 candidate parent nodes.
```

**Pre-meeting briefing**

```
shortest_path between "[client]" and the top 5 god nodes. Include rationale nodes. I have a meeting in 30 minutes.
```

---

## File locations

| What | Where |
| --- | --- |
| Vault root | `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/` |
| Graph artifacts | `Finn-Wiki/graphify-out/` |
| Wiki articles per community | `Finn-Wiki/graphify-out/wiki/` |
| Interactive viewer | `Finn-Wiki/graphify-out/graph.html` |
| Audit report | `Finn-Wiki/graphify-out/GRAPH_REPORT.md` |
| MCP server config | `Finn-Wiki/.mcp.json` |
| Permission allowlist | `Finn-Wiki/.claude/settings.local.json` |
| Always-on instructions | `Finn-Wiki/CLAUDE.md`, graphify section at bottom |
| Ignore patterns | `Finn-Wiki/.graphifyignore` |
| Aliases | `~/.zshrc`, block titled `Finn-Wiki / graphify shortcuts` |
| Python venv | `Finn-Wiki/.venv/` |

---

## Troubleshooting

**`/mcp` doesn't show graphify-finn-wiki**

You launched `claude` outside the vault. `cd` in first, or just use the `wiki` alias.

**MCP tool calls fail silently**

Path in `.mcp.json` is relative to launch directory. Always launch from vault root.

**`python -m graphify.serve` fails with ModuleNotFoundError**

`uv tool install` isolated the module from system Python. The `.mcp.json` already points to `.venv/bin/python`, which has it. Don't run the command manually outside that venv.

**Graph feels stale**

Run `wiki-rebuild`, execute `/graphify . --update` inside. SHA256 cache means only changed files re-extract.

**Claude Code keeps prompting for MCP permissions**

Verify `.claude/settings.local.json` exists in the vault and pre-approves `mcp__graphify-finn-wiki`.

---

## Future: mobile access via Tailscale Funnel

The MCP server is currently stdio only, so Claude Code desktop only. To query the graph from claude.ai web or mobile:

1. Install Tailscale on the M1 Max (already done if not)
2. Wrap `graphify.serve` in an HTTP/SSE transport, small Python shim
3. Expose via `tailscale funnel` to get a public HTTPS endpoint
4. Add as a custom connector in claude.ai

Worth building when mobile graph queries become an actual recurring pain. Currently slotted as a side project.

---

## Setup recap, in case you ever rebuild from scratch

```bash
# 1. Install graphify CLI
uv tool install graphifyy
graphify install

# 2. In vault: venv with MCP extras
cd "$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki"
python3 -m venv .venv
.venv/bin/pip install "graphifyy[mcp]"

# 3. Always-on hook + CLAUDE.md
graphify claude install

# 4. Build the graph (overnight)
claude
# inside: /graphify . --mode deep --wiki

# 5. MCP config and permission allowlist already in place from initial setup
# 6. Aliases already in ~/.zshrc
```

---

*Last updated: April 2026. If alias names change in `~/.zshrc`, update this page so future Finn isn't confused.*
