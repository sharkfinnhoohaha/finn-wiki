# Finn-Wiki

Finn Bennett's personal LLM-maintained knowledge base, built on the [[llm-wiki-pattern]] from Andrej Karpathy. The LLM maintains the wiki, Finn curates the sources.

This vault persists context across Claude/Cowork sessions so future agents don't have to be re-primed every time. Projects, clients, stack decisions, life-OS, business ideas, and creative work all live here.

## Quickstart

1. **Open this folder as an Obsidian vault.** File → Open vault → select `Finn-Wiki` inside iCloud's Obsidian Documents folder.
2. **Install recommended plugins.** Obsidian Web Clipper (browser extension), Dataview (queries frontmatter), Marp (optional, slide decks).
3. **Point Claude Code at this folder.** `cd` into the vault root and run `claude`. The `CLAUDE.md` tells Claude how to maintain everything.
4. **Start ingesting.** Drop a source (article, transcript, doc) into `raw/`, then ask Claude to ingest it. It'll summarize, file pages, update the graph, log the action.

## Structure

- `CLAUDE.md`: schema and workflows for the maintainer agent. Edit as preferences develop.
- `index.md`: catalog of every wiki page. Start here when navigating.
- `log.md`: chronological history of ingests, queries, lint passes.
- `raw/`: immutable sources. The LLM reads, never modifies.
  - `raw/_extracts/`: structured extracts from prior chat sessions.
- `wiki/`: LLM-generated pages, organized by type (projects, clients, entities, tech, personal, business, workflows, concepts, sources, comparisons).

## What's already here

Seeded from two passes:

- **Pattern docs** (Karpathy gist + Nate Herk video) — meta-content about how the wiki itself works.
- **Chat history ingest** (2026-04-24) — 22 prior Claude/Cowork sessions parsed into raw extracts and synthesized into project, client, entity, tech, personal, and business pages.

Open the graph view in Obsidian to see the shape of it.

## Going further

- Rename pages freely, just update wikilinks (Obsidian handles most of this automatically).
- Add new top-level folders under `wiki/` for new domains as needed.
- Periodically ask Claude to lint the wiki. See `CLAUDE.md` → Workflows → Lint.
- Version the whole vault in git. Every ingest becomes a diff.
