---
title: "Obsidian"
type: entity
tags: [tool, software, markdown]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Obsidian

Desktop and mobile note-taking app built around a folder of local markdown files. Vaults are plain directories on disk, which is why it pairs cleanly with an LLM-maintained wiki.

## Why it fits the pattern

- **Files on disk, not a database.** The LLM can read and write them with normal file operations. No API required.
- **Native wikilinks.** `[[page]]` syntax generates backlinks and powers the graph view.
- **Graph view.** Shows the shape of the wiki, what's connected, what's orphaned. At around 150 pages, several practitioners report the graph view replacing `index.md` as primary navigation.
- **Plugin ecosystem.** [[dataview]] for frontmatter queries, [[marp]] for slide decks, Obsidian Web Clipper ([[obsidian-web-clipper]]) for capture.
- **Local-first.** Vaults are just folders. Version with git, sync with whatever, back up however.

## Settings worth changing for this pattern

From [[karpathy-llm-wiki-gist]]:

- **Attachment folder path.** Settings → Files and links → set to a fixed directory like `raw/assets/`. Keeps downloaded images with the raw sources.
- **Download attachments hotkey.** Settings → Hotkeys → search "Download" → bind "Download attachments for current file" to something like Ctrl+Shift+D. Useful after clipping articles.

## Obsidian as front end, LLM as back end

The practitioner's setup is typically:

- Obsidian open on one side, showing the vault
- LLM agent ([[claude-code]] usually) open on the other side
- You talk to the agent, watch the vault update, browse results in real time

[[andrej-karpathy]] frames this as: Obsidian is the IDE, the LLM is the programmer, the wiki is the codebase.

## See also

- [[obsidian-web-clipper]]
- [[dataview]]
- [[marp]]
- [[setup-obsidian-vault]]
