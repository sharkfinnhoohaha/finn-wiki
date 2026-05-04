---
title: "Setup Obsidian vault"
type: workflow
tags: [workflow, setup]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Setup Obsidian vault

Getting from nothing to a working LLM-maintained wiki. Budget: roughly five minutes if you already have Obsidian and [[claude-code|Claude Code]] installed.

## Prerequisites

- [[obsidian|Obsidian]] installed
- [[claude-code|Claude Code]] installed and authenticated
- A folder where the vault will live (any local directory works)

## Steps

1. **Create the vault folder.** Any path, e.g. `~/vaults/llm-wiki/`.

2. **Create the subfolders.**
   ```
   mkdir -p raw wiki/{sources,concepts,entities,workflows,comparisons}
   ```

3. **Open the folder in Obsidian.** File → Open vault → Open folder as vault → select the directory. Trust the author when prompted.

4. **Write the schema.** Create `CLAUDE.md` at the vault root. Paste Karpathy's gist as a starting point, then edit to your preferences. Or copy [[CLAUDE|this vault's CLAUDE.md]] as a template; it already encodes page conventions, frontmatter, and workflows.

5. **Create the navigation files.** Empty but structured:
   - `index.md` with section headers for Sources, Concepts, Entities, Workflows, Comparisons
   - `log.md` with a single init entry: `## [YYYY-MM-DD] init | vault scaffolded`

6. **Install the essential plugins.**
   - [[obsidian-web-clipper|Obsidian Web Clipper]] browser extension, configured to save into `raw/`
   - [[dataview|Dataview]] community plugin
   - [[marp|Marp]] community plugin (optional)

7. **Configure attachments.** Obsidian → Settings → Files and links → Attachment folder path → `raw/assets/`. Bind "Download attachments for current file" to a hotkey like Ctrl+Shift+D.

8. **Initialize git.**
   ```
   git init
   git add .
   git commit -m "scaffold llm-wiki vault"
   ```
   Every ingest becomes a diff you can review.

9. **Point Claude Code at the vault.**
   ```
   cd ~/vaults/llm-wiki
   claude
   ```
   Claude picks up `CLAUDE.md` automatically.

10. **Test ingest.** Clip an article with Web Clipper into `raw/`. In Claude Code: `ingest raw/your-article.md`. Watch Obsidian update in real time.

## What you should see after the first ingest

- A summary page in `wiki/sources/`
- Several new pages in `wiki/entities/` and `wiki/concepts/`
- Updates to `index.md`
- A new entry in `log.md`
- The graph view in Obsidian lighting up with cross-references

If any of that doesn't happen, your `CLAUDE.md` needs tightening. See [[CLAUDE]] for a working reference.

## Optional: add the explicit graph layer

Once the vault has settled and there's enough content to make structural queries useful, layer [[graphify]] on top. Rough setup:

```bash
uv tool install graphifyy
graphify install
cd <vault-root>
python3 -m venv .venv
.venv/bin/pip install "graphifyy[mcp]"
graphify claude install
claude
# inside: /graphify . --mode deep --wiki
```

Wire shell aliases into `~/.zshrc` (`wiki`, `wiki-ask`, `wiki-prep`, etc. — see [[graphify-cheat-sheet]]). Day-to-day usage is captured in [[wiki-graph-querying]].

## See also

- [[ingest-workflow]]
- [[query-workflow]]
- [[lint-workflow]]
- [[graphify]]
- [[wiki-graph-querying]]
