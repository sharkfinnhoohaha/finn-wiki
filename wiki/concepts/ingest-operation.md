---
title: "Ingest operation"
type: concept
tags: [operation, workflow]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Ingest operation

The act of bringing a new source into the wiki. One of three core operations alongside [[query-operation]] and [[lint-operation]].

## What happens

You drop a source into `raw/` and tell the LLM to ingest it. The LLM:

1. Reads the source end to end.
2. Discusses key takeaways in chat, asks what to emphasize (optional, depending on your preferred tempo).
3. Writes a summary page in `wiki/sources/`.
4. Walks the existing wiki and updates any page the source touches: entity pages get new facts, concept pages get new framings, summaries get revised.
5. Creates new pages for substantive new material (entities, concepts, workflows).
6. Updates [[index-file-navigation|index.md]] with entries for new pages.
7. Appends to [[log|log.md]].

A single source typically touches 10 to 15 pages. [[nate-herk-claude-code-video|Nate Herk reports]] the AI 2027 article produced 23 pages in ~10 minutes.

## Involvement spectrum

Two styles, both valid:

- **High-touch.** One source at a time. You read the summary, check the updates, guide emphasis. Good for dense material or when you're still calibrating the schema.
- **Batch.** Drop many sources, let the LLM process them unsupervised. Faster, less controlled. Good for clearly-bounded sources like a backlog of transcripts.

Most practitioners start high-touch until the [[CLAUDE|schema]] is dialed in, then shift toward batch.

## Failure modes

- **Silent contradiction.** If the LLM resolves conflicts between sources without flagging them, you lose the disagreement. Schema should require inline `> [!warning]` callouts, not silent resolution.
- **Orphan pages.** New entity pages created without inbound links from other pages. Catch with [[lint-operation]].
- **Drift from source.** Over many ingests, wiki claims can drift from what the raw sources actually said. Citing wiki pages back to source pages in frontmatter helps.
- **Over-fragmentation.** Creating a new page for every minor entity. Set a threshold in the schema: a page needs meaningful content or it goes in a parent page as a subsection.

## See also

- [[ingest-workflow]] for the concrete steps
- [[three-layer-architecture]]
