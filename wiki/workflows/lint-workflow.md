---
title: "Lint workflow"
type: workflow
tags: [workflow, maintenance]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[karpathy-llm-wiki-gist]]
---

# Lint workflow

Periodic wiki audit. See [[lint-operation]] for why this matters.

## Cadence

No fixed schedule. Reasonable triggers:

- Every 10 to 20 ingests
- Before a deep query session
- When the graph view looks tangled
- When you catch a contradiction organically (treat it as a prompt to look for others)

## Step 1: run the audit

From the vault root in [[claude-code|Claude Code]]:

```
Lint the wiki. Report:
- Contradictions between pages
- Stale claims superseded by newer sources
- Orphan pages with no inbound links
- Concepts mentioned in prose but lacking their own page
- Broken wikilinks
- Data gaps a web search could fill
- Redundant pages covering the same entity

Output as a checklist. Don't fix anything yet.
```

## Step 2: triage

The output should be a checklist, not silent changes. Go through it:

- **Contradictions.** Usually mean a newer source updated an older claim without the old claim being revised. Have the agent reconcile and note the change in `log.md`.
- **Orphans.** Either link them in from somewhere relevant, merge them into a parent page, or delete them.
- **Missing pages.** If a concept keeps showing up in other pages, give it its own page.
- **Broken links.** Obsidian's "Check for broken links" option finds most. The agent finds the rest.
- **Data gaps.** Candidate sources for next ingest.
- **Redundant pages.** Merge. Pick the better page, fold the other in, update links.

## Step 3: apply fixes

One category at a time. After each:

```
git add .
git commit -m "lint: resolve contradictions" # or whatever category
```

Small, reviewable commits. Easier to roll back a specific fix than to unpick a giant lint sweep.

## Optional: Dataview queries for mechanical checks

[[dataview|Dataview]] can catch certain lint targets without LLM help. Drop these in a scratch file while linting:

**Orphan entities (no inbound links):**

````markdown
```dataview
LIST
FROM "wiki/entities"
WHERE length(file.inlinks) = 0
```
````

**Pages not updated in 90+ days:**

````markdown
```dataview
LIST updated
FROM "wiki/"
WHERE date(today) - date(updated) > dur(90 days)
SORT updated ASC
```
````

**Source pages missing source_url in frontmatter:**

````markdown
```dataview
LIST
FROM "wiki/sources"
WHERE !source_url
```
````

Use these to spot issues the LLM might miss because they're structural rather than semantic.

## See also

- [[lint-operation]]
- [[dataview]]
