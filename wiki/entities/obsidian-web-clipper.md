---
title: "Obsidian Web Clipper"
type: entity
tags: [tool, browser-extension, capture]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# Obsidian Web Clipper

Official Obsidian browser extension that converts web articles to clean markdown and drops them into a vault folder.

## Why it matters for this pattern

Capture is the rate-limiting step in knowledge work. If getting a source into `raw/` takes more than a few seconds, you stop doing it, and the wiki stops compounding.

The clipper:
- Pulls clean markdown from most article-style pages
- Can be configured to save directly into `raw/` of your vault
- Handles metadata (source URL, author, date) as frontmatter
- Pairs with the "download attachments for current file" hotkey to localize images, so the LLM can see them rather than rely on potentially-broken URLs

## Configuration worth doing once

1. Install from the Chrome Web Store, Firefox Add-ons, or Safari Extensions.
2. In the clipper settings, set the default save folder to your vault's `raw/` directory.
3. In Obsidian → Settings → Files and links, set "Attachment folder path" to `raw/assets/` (or wherever you want images).
4. In Obsidian → Settings → Hotkeys, bind "Download attachments for current file" to something memorable.

After that, the flow is: clip → open file in Obsidian → hit the hotkey → tell [[claude-code|Claude Code]] to ingest.

## Alternatives

- Clipboard watchers (see the OpenWiki Tauri app mentioned in the gist comments) that capture copied URLs automatically
- Manual download of article markdown, if you prefer the control
- RSS-to-markdown pipelines for batch capture from feeds

The clipper is the default because it's low-friction and official.

## See also

- [[obsidian]]
- [[setup-obsidian-vault]]
- [[ingest-workflow]]
- [[business-ideas-llm-wiki-clipper]] — the design ref for an `llm-wiki-ingest` extension that would extend this pattern with a one-click ingest trigger
- [[business-ideas-notion-layout-clipper]] — sibling idea for a Notion-targeted layout-preserving clipper
- [[paid-chrome-extensions]] — broader thesis on the category
