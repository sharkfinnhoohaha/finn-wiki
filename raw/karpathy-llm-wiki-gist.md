# Karpathy LLM Wiki gist

**URL:** https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
**Author:** Andrej Karpathy
**Published:** 2026-04-04
**Captured:** 2026-04-24

This is a raw-source stub. For the full text, use Obsidian Web Clipper on the URL above or fetch the raw markdown from the gist. What follows is structural notes for the wiki maintainer.

## Structure of the gist

The gist is organized into these sections:

1. **The core idea.** Frames the pattern as different from RAG. Instead of retrieving chunks at query time, the LLM builds and maintains a persistent wiki that sits between the human and the raw sources. The wiki compounds; knowledge gets compiled once and kept current rather than re-derived on every query.

2. **Example domains.** Personal tracking, research, reading a book, team wikis, competitive analysis, trip planning. Anything where knowledge accumulates over time.

3. **Architecture.** Three layers: raw sources (immutable), the wiki (LLM-maintained markdown), the schema (a config file like `CLAUDE.md` or `AGENTS.md` that defines conventions and workflows).

4. **Operations.** Three verbs: ingest, query, lint.

5. **Indexing and logging.** Two special files. `index.md` is content-oriented, a catalog updated on every ingest. `log.md` is chronological, append-only, parseable with `grep "^## \[" log.md`.

6. **Optional CLI tools.** Mentions `qmd` for local hybrid search over markdown once the wiki outgrows the index file.

7. **Tips and tricks.** Obsidian Web Clipper, local image downloading, graph view, Marp plugin, Dataview plugin, the wiki as a git repo.

8. **Why this works.** The bottleneck in knowledge base maintenance is bookkeeping, not thinking. LLMs handle bookkeeping cheaply; humans don't.

9. **Memex reference.** Vannevar Bush's 1945 concept of associative trails between documents. Bush couldn't solve who does the maintenance; the LLM does.

10. **Note.** Karpathy explicitly leaves the pattern abstract. Exact directory structure, page formats, and tooling depend on the domain. The gist communicates the idea; the LLM instantiates the specifics.

## Key claims to propagate to wiki pages

- The wiki is a persistent, compounding artifact (not a query-time index).
- The human never writes the wiki. The LLM does all of it.
- A single source touches 10 to 15 wiki pages.
- The index file approach works "surprisingly well" at ~100 sources, hundreds of pages, no embedding infrastructure needed.
- The pattern is modular. Skip the parts you don't need.
