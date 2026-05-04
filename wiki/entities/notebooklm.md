---
title: "NotebookLM"
type: entity
tags: [tool, google, knowledge-management, llm]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[notebooklm-mastering-agentic-workflows]], [[notebooklm-overlook-strategy]], [[notebooklm-simple-ui-viral-ai]]
---

# NotebookLM

Google's research / synthesis app. Users curate sources (PDFs, Google Docs, YouTube videos, pasted text), and Gemini generates summaries, audio overviews, mind maps, and Deep Research reports grounded in those sources. Free tier is generous; URL-shareable notebooks.

## How Finn uses it

As a per-topic research pile that NotebookLM auto-summarizes. Three notebooks captured into this wiki on 2026-04-24:

- [[notebooklm-mastering-agentic-workflows]] — 12 sources on agentic Claude Code workflows
- [[notebooklm-overlook-strategy]] — 47-source pile on Overlook's positioning + the Karpathy ecosystem
- [[notebooklm-simple-ui-viral-ai]] — 4 sources + Deep Research report on solo-founder AI businesses

## NotebookLM vs. this wiki

The two patterns are complementary, not competitive:

| | NotebookLM | This wiki ([[llm-wiki-pattern]]) |
|---|---|---|
| Synthesis style | Re-derives at query time (RAG-ish) | Compiles once into persistent pages |
| Source curation | User uploads, owned by NotebookLM | User-curated markdown in `raw/` |
| Output | Notes, audio overviews, study guides | Wiki + Finn-OS pages, owned in git |
| Best for | First-pass triage of new topic | Long-term knowledge that compounds |

Workflow: use NotebookLM to triage a topic, then `/finn-wiki-ingest` the notebook(s) here when the synthesis is worth keeping.

## Limitations encountered

- **No API.** Notebooks must be share-linked + scraped via Chrome. See `references/source-types.md` in the [[finn-wiki-ingest]] skill.
- **Source URLs hidden.** YouTube source URLs aren't exposed in the share view; only titles.
- **Audio overviews aren't transcribed.** Captured 4 audio overviews across the 3 notebooks; none extracted.
- **Deep Research must be imported manually.** Until the user clicks Import, the report body isn't accessible from the share link. Finn pasted the 2026-04-24 report directly to work around this.

## Related

- [[claude-code]]
- [[obsidian]]
- [[karpathy-llm-wiki-gist]]
- [[llm-wiki-vs-rag]]
