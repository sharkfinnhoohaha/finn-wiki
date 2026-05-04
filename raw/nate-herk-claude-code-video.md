# Nate Herk Claude Code video

**URL:** https://www.youtube.com/watch?v=sboNwYmH3AY
**Channel:** Nate Herk | AI Automation
**Title:** Andrej Karpathy Just 10x'd Everyone's Claude Code
**Published:** 2026-04-05
**Captured:** 2026-04-24

Raw-source stub. The full transcript was not retrievable (YouTube bot protection); what follows was assembled from the video description, chapter markers, and third-party summaries.

## Chapters

- 0:00 What we're building
- 1:40 Karpathy's LLM Wiki idea
- 3:12 Why it matters and how it works
- 5:39 Setting up Obsidian and Claude Code
- 8:35 Ingesting your first article
- 13:02 Querying and connecting projects
- 15:36 LLM Wiki vs. traditional RAG
- 17:20 Final thoughts

## Key points

- Implementation takes roughly five minutes. Create an Obsidian vault with two subfolders, `raw/` and `wiki/`. Paste Karpathy's gist into Claude Code as the schema. Done.
- Nate demonstrates two live wikis:
  - A YouTube transcript wiki built from 36 of his own videos, ingested in ~14 minutes, producing cross-linked entity pages for tools, techniques, people, and concepts.
  - A personal second brain with meeting recordings, business notes, ClickUp summaries. His executive-assistant agent reads from it for context.
- Ingest demo: the [AI 2027](https://ai-2027.com/) article was used as a worked example. A single article produced 23 wiki pages in about 10 minutes.
- Compares the pattern to traditional RAG. Claim: 95% reduction in tokens vs. query-time RAG. This claim should be flagged as vendor-adjacent and contested in the gist comments (see [[llm-wiki-vs-rag]]).
- Karpathy's own usage, as described in the video: roughly 100 articles, ~500K words, no embedding-based retrieval, just `index.md`.

## Notes for maintenance

This is a walkthrough, not a primary source. Treat it as a concrete implementation example rather than authoritative on the pattern. When it contradicts the gist, the gist wins.
