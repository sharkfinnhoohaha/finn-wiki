---
title: "Query workflow"
type: workflow
tags: [workflow, query]
created: 2026-04-24
updated: 2026-04-26
weight: medium
node_size: 5
sources: [[karpathy-llm-wiki-gist]], [[graphify-cheat-sheet]]
---

# Query workflow

Asking questions against the wiki and filing useful answers back. See [[query-operation]] for the conceptual framing.

## Step 1: ask

From the vault root in [[claude-code|Claude Code]]:

```
What does the wiki say about X?
```

Or more pointed:

```
Compare how [[source-a]] and [[source-b]] frame Y.
```

Or for synthesis:

```
What's the strongest argument against the position in [[page-z]]?
```

The maintainer reads [[index-file-navigation|index.md]] first, then drills into relevant pages, then synthesizes.

## Step 2: get an answer with citations

Good answers cite wiki pages inline: `([[page-name]])`. If an answer has no citations, push back. Claims should trace to somewhere.

If the wiki doesn't cover the question, the agent should say so explicitly, not hallucinate. Options then:
- Accept that the wiki has a gap, flag it for next ingest
- Ask the agent to web-search, then ingest the result as a new source if it's worth keeping
- Rephrase to a question the wiki can answer

## Step 3: file good answers back

This is where the pattern compounds beyond ingest. If the answer is substantive and reusable, file it. Say:

```
File that as a new page in wiki/comparisons/ (or concepts/, etc.)
```

The agent writes the page with frontmatter, links it from the pages it drew from, and updates `index.md` and `log.md`.

What to file:
- Comparisons that took meaningful synthesis
- Analyses that connect multiple sources
- New framings or terminology you introduced during the conversation
- Anything you'd want to reference again

What not to file:
- One-off lookups you won't need again
- Conversational clarifications
- Anything specific to a transient context

## Step 4: link from the asking page

If the query grew out of reading a specific page, add a link to the new page from there. Two-way linking is what makes the graph view useful.

The agent should do this automatically if the schema requires it. If not, ask.

## Structural questions: prefer the graph

For "how does X relate to Y", "what's adjacent to this concept", or "shortest path from A to B" — reach for the [[graphify]] layer instead of the prose-level workflow above. Use `wiki-ask "..."` from any terminal, or stay in interactive mode with `wiki`. Templates and the grep-vs-graph decision rule live in [[wiki-graph-querying]].

## See also

- [[query-operation]]
- [[lint-workflow]] for when answers degrade over time
- [[wiki-graph-querying]] for the graph-traversal layer
