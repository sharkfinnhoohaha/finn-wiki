---
title: "Ingest workflow"
type: workflow
tags: [workflow, ingest]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Ingest workflow

Step-by-step for adding a new source to the wiki. Also see [[ingest-operation]] for the conceptual framing.

## Step 1: capture

Get the source into `raw/` in a format the LLM can read.

Options by source type:

- **Article or blog post.** Use [[obsidian-web-clipper]]. Clip into `raw/`.
- **PDF or paper.** Drop the PDF directly into `raw/`. Modern agents can read PDFs.
- **YouTube video.** Paste the transcript as markdown. If the transcript isn't available, at minimum save metadata: URL, title, channel, date, description. A summary from a third party counts as a lower-fidelity source, flag it in the raw file.
- **Meeting recording.** Transcribe first (Whisper works, or use your preferred tool), then drop the transcript in `raw/`.
- **Slack or chat export.** Raw JSON or markdown export. Save it as-is.

## Step 2: ingest

In [[claude-code|Claude Code]] from the vault root:

```
ingest raw/your-source.md
```

The maintainer follows the workflow defined in [[CLAUDE]]. For this vault, that means:

1. Read the source end to end
2. Summarize in chat, ask what to emphasize
3. Write a summary page in `wiki/sources/`
4. Update existing pages the source touches (entity pages get new facts, concept pages get new framings)
5. Create new pages for substantive new material
6. Update `index.md`
7. Append to `log.md`

Typical output: one source touches 10 to 15 pages, takes ~5 to 10 minutes of agent time.

## Step 3: review

Don't skip this. Open Obsidian and:

- Read the new summary page
- Spot-check two or three updated pages
- Look at the graph view. New nodes should be connected, not orphaned.
- Check `log.md` for the new entry
- Optionally: `git diff` to see everything that changed

If something looks off, fix it in the same session. It's cheaper to correct now than to let it compound.

## Step 4: commit

```
git add .
git commit -m "ingest: <source title>"
```

Every ingest gets its own commit. You can rewind any time.

## Tempo

Two tempos work:

- **One at a time, supervised.** Read the chat summary, push back if the LLM is emphasizing the wrong things, check the updates. Good for dense material or when the schema is still evolving.
- **Batch.** Drop many sources, run ingest in a loop, review the diffs at the end. Faster but less controlled.

Most people start supervised and shift to batch as trust in the schema grows.

## See also

- [[ingest-operation]]
- [[lint-workflow]] to catch what slipped through
