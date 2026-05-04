---
title: "Index file navigation"
type: concept
tags: [pattern, scale]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Index file navigation

Using a single `index.md` as a content-oriented catalog of the wiki, instead of building embedding-based retrieval. Works surprisingly well at moderate scale and avoids RAG infrastructure entirely.

## How it works

`index.md` lists every wiki page organized by category (sources, concepts, entities, workflows, comparisons). Each entry has:

- A wikilink to the page
- A one-line summary
- Optionally: date, source count, tags

When the LLM answers a query, it reads `index.md` first to find candidate pages, then drills into them. The index is always fresher than the LLM's memory of the wiki.

## Why it scales further than you'd expect

Modern LLMs have long context windows. An index of hundreds of pages is still well under the limit. The LLM reads the whole index in one pass, picks the relevant pages, then loads those.

At ~100 sources and a few hundred pages, this is reportedly enough. No vector database, no chunking pipeline, no embedding costs. [[andrej-karpathy|Karpathy]] runs his personal wiki at roughly this scale.

## When the index approach breaks down

- Thousands of pages: the index itself becomes unwieldy to skim.
- Highly fragmented topics: the LLM can't tell from one-line summaries which pages matter.
- Multi-hop reasoning across many distant pages: the index doesn't help identify which hops to take.

When you hit those limits, options:

- Split the index by domain (`index-audio.md`, `index-aviation.md`) and have the LLM pick one.
- Add proper search. [[qmd]] is a local hybrid BM25 + vector search engine designed for this use case.
- Rely on the graph view for navigation (some practitioners report this happening around ~150 pages).

## In this vault

See [[index|index.md]] at the vault root. The schema ([[CLAUDE|CLAUDE.md]]) requires the LLM to update it on every ingest.

## Related

- [[compiled-knowledge]]
- [[llm-wiki-vs-rag]]
- [[qmd]]
