---
title: "Lint operation"
type: concept
tags: [operation, maintenance]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]]
---

# Lint operation

Periodic health check on the wiki. The third core operation alongside [[ingest-operation]] and [[query-operation]]. Without it, the wiki accumulates cruft the same way any long-lived codebase does.

## What to look for

- **Contradictions** between pages. New source said X, old page still says not-X.
- **Stale claims** superseded by newer sources but never updated.
- **Orphan pages** with no inbound links. Either they need linking in, or they shouldn't exist.
- **Missing pages** for concepts mentioned often in prose but lacking their own home.
- **Broken wikilinks** from renames or deletions. Obsidian catches most of these; a sweep catches the rest.
- **Data gaps** the wiki gestures at but doesn't fill. Candidates for a web search or a new source.
- **Redundant pages** covering the same entity from slightly different angles. Merge.
- **Drifted summaries** where a source page's TL;DR no longer matches the raw source.

## Cadence

There's no fixed schedule. Good triggers:

- Every 10 to 20 ingests
- Before a major query session, to surface issues you'd otherwise trip on
- When the graph view starts looking messy
- When you find a contradiction organically, as a prompt to check for others

## How to run it

Ask the LLM to audit. The output should be a checklist, not silent fixes. You decide what gets resolved and how. The LLM can propose fixes but shouldn't commit them without review.

Example prompt: "Lint the wiki. Report contradictions, orphans, stale claims, missing cross-references, and concepts without their own page."

## What good lint output looks like

```
## Contradictions (2)
- [[page-a]] claims X, [[page-b]] claims not-X. Newer source is [[source-c]].
- ...

## Orphans (3)
- [[page-d]]: no inbound links. Suggest linking from [[page-e]].
- ...

## Missing pages (4)
- "tool Y" mentioned in [[page-a]], [[page-b]], [[page-c]]. Candidate for entity page.
- ...
```

## Why this matters

Without lint, the wiki degrades. Slowly at first, then faster. The pattern's main promise, that the maintenance cost is near zero, depends on lint actually happening. See [[llm-wiki-pattern]] for the full framing.

## See also

- [[lint-workflow]] for the concrete steps
