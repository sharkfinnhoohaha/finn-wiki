---
title: "Nate Herk Claude Code video"
type: source
tags: [source, implementation, walkthrough, video]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
source_url: https://www.youtube.com/watch?v=sboNwYmH3AY
source_author: "[[nate-herk]]"
source_date: 2026-04-05
---

# Nate Herk Claude Code video

A 17-minute YouTube walkthrough titled "Andrej Karpathy Just 10x'd Everyone's Claude Code," published the day after [[karpathy-llm-wiki-gist|the gist]]. [[nate-herk]] demonstrates the pattern end-to-end in [[obsidian]] + [[claude-code]].

## TL;DR

Five-minute setup. Two folders, `raw/` and `wiki/`. Paste Karpathy's gist into [[claude-code]] as the schema. Start ingesting. A single source typically produces 15 to 25 linked pages. Nate shows two production wikis of his own and compares the approach to traditional RAG.

## Concrete numbers from the video

- Setup time: ~5 minutes from empty folder to working vault
- AI 2027 article as worked example: 23 wiki pages produced in ~10 minutes
- Nate's YouTube transcript wiki: 36 videos ingested in ~14 minutes
- Karpathy's own setup, as cited in the video: ~100 articles, ~500K words, no embeddings, just [[index-file-navigation]]

## Two example wikis Nate demonstrates

1. **YouTube transcript wiki.** 36 of his own videos, transcribed and ingested. Entity pages for tools, techniques, people, concepts, all cross-referenced. Lets him answer "which videos covered n8n?" without rewatching.
2. **Personal second brain.** Meeting recordings, business notes, ClickUp summaries. His executive-assistant AI reads from it for personal context.

## The RAG comparison

Nate claims a ~95% token reduction versus traditional RAG. This claim is contested in the [[karpathy-llm-wiki-gist|gist's]] comment thread, where a commenter notes the comparison is really "organized files vs. unorganized files" rather than wiki vs. RAG architecturally. Treat the number as directional, not audited. See [[llm-wiki-vs-rag]] for the full comparison.

## Where this departs from the gist

The gist is abstract. Nate commits to specifics: `raw/` and `wiki/` as the two folders, Claude Code as the maintainer, Obsidian Web Clipper as the capture tool. Those are good defaults but not requirements.

## Related

- [[karpathy-llm-wiki-gist]]
- [[setup-obsidian-vault]]
- [[ingest-workflow]]
- [[llm-wiki-vs-rag]]
