---
title: "Graph View Setup"
type: workflow
tags: [workflow, obsidian, graph, visualization]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[nate-herk-claude-code-video]], [[openclaw-deep-dive-krentsel]]
---

# Graph View Setup

How the Obsidian graph view is configured in this vault to give filtered, weighted visualizations of different slices of the wiki. Inspired by [[nate-herk]]'s "second brain" setup where big ideas show as bigger nodes and different views filter by domain.

## Architecture: master brain + filtered views

The LLM wiki (`wiki/`) is the master brain, the single source of truth. The graph views are read-only lenses over it:

- **Master Wiki** — everything, zoomed out, color-coded by type. For seeing the full shape of the vault and spotting orphans.
- **Brainstorming** — Finn-OS + concepts + in-progress projects + business. For seeing what's on your mind right now, what connects to what, and where the energy is.
- **Business & Clients** — business positioning + clients + ideas backlog + career. For Overlook Strategy planning and client relationship mapping.
- **Tech Stack** — tech patterns + tool/service entities. For seeing how stack decisions relate to each other.
- **Active Projects** — in-progress + unfinished (the 80% pile). For project triage and spotting stalled work.
- **Projects ↔ Stack** (added 2026-04-29) — projects + the [[stack/README|wiki/tech/stack/]] cheat sheet pages + bridging entities (vercel, neon, clerk, etc.). Color-coded by project status (in-progress green, unfinished orange, deployed gray, abandoned slate) with stack pages in teal and entity bridges in light gray. **For answering "what projects use [[neon]]?" or "what's our auth coverage?"** — surfaces the project↔stack relationship directly.

All six are saved as bookmarks in Obsidian. Open graph view → click Bookmarks icon (top right) → pick a view.

### How "Projects ↔ Stack" works

Filter query: `path:wiki/projects OR path:wiki/tech/stack OR path:wiki/entities` with `hideUnresolved: true` and `showOrphans: false`. The hide-orphans setting is doing the work — it strips out the ~70 entity pages NOT connected to either projects or stack pages, leaving just the actual bridges (Vercel, Neon, Clerk, Stripe, Wave, Claude Code, Ollama, Sanity, TinaCMS, etc.).

Each stack page has a "## Used by" section listing projects that use the category, which creates direct project↔stack edges in addition to the entity-bridge paths. Maintain this section during ingest when a project's stack changes.

## Node sizing: how "big ideas" get bigger

Two mechanisms control node size:

### 1. Connection count (automatic)

Obsidian's default: more wikilinks pointing to a page = bigger node. Hub pages like [[finn-bennett]], [[overlook-strategy]], [[claude-code]] naturally grow large because many pages reference them.

### 2. `node_size` frontmatter (manual override)

Every page has a `node_size` value in its frontmatter:

```yaml
weight: high
node_size: 15
```

Scale: `15` = hub page (identity, key projects, core concepts), `10` = high-weight, `5` = medium-weight, `2` = low-weight (sources, abandoned projects).

**Requires the Dynamic Node Size plugin** (see setup below). Without it, `node_size` is just metadata and Obsidian sizes purely by link count.

## Color coding

Pages are color-coded by path in the graph:

| Color | Category |
|---|---|
| Blue | Projects |
| Green | Concepts |
| Purple | Business & Clients |
| Teal | Tech patterns |
| Gray | Entities (people, tools, orgs) |
| Orange | Finn-OS (curated tier) |
| Burnt orange | Personal |
| Slate | Sources |
| Cyan | Workflows |
| Lavender | Design |

## One-time setup (Finn needs to do this)

### 1. Install a node sizing plugin

Two options, both in the Obsidian community plugin browser:

**Option A: Node Factor** (recommended, confirmed in browser)
Settings → Community plugins → Browse → search "Node Factor" → Install → Enable. This plugin lets you weight node size by character count, incoming links, outgoing links, and forward connection depth. Crank up "incoming links" weight to make hub pages (the ones everything links to) appear much larger. The `node_size` frontmatter values serve as a reference for Claude to maintain weight consistency, and the link-count-based sizing naturally reflects the same hierarchy.

**Option B: Custom Node Size** (if you want direct frontmatter control)
Search "Custom Node Size" in the browser. This one reads a frontmatter property directly to set node sizes. If you install this, the `node_size` values already in every page will take effect immediately.

### 2. Enable the CSS snippet

Settings → Appearance → CSS snippets → toggle on "graph-views". The snippet file is already at `.obsidian/snippets/graph-views.css`.

### 3. Reload Obsidian

Close and reopen Obsidian (or Cmd+R). Bookmarked views, color groups, and CSS should all load.

## How Claude maintains this

During [[ingest-workflow]], Claude assigns `weight` and `node_size` to every new page. The weekly [[wiki-weekly-maintenance]] pass audits weight distribution to prevent inflation (if everything is "high", nothing is).

## Related

- [[nate-herk-claude-code-video]]
- [[llm-wiki-pattern]]
- [[setup-obsidian-vault]]
- [[lint-workflow]]
- [[status-dashboard]]
