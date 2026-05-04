---
title: "Idea — Notion Layout-Preserving Web Clipper"
type: business
status: blocked
tags: [business-idea, chrome-extension, notion, capture]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — Notion Layout-Preserving Web Clipper

A Chrome extension that clips a webpage into Notion as **a faithful reconstruction of the page's layout**, not just a URL drop. Unlocked by the [[paid-chrome-extensions]] thesis from [[isenberg-paid-chrome-extensions-2024]].

## The pain

The official [Notion Web Clipper](https://www.notion.com/web-clipper) is the incumbent and it's bad. It saves the page URL, the page title, and a flat dump of the body text into a new Notion page. The actual structure of the page — headings, callouts, columns, embeds, code blocks, image placement — is mostly lost. Most users end up with a database of titled URLs and re-open the source page anyway.

[[obsidian-web-clipper|Obsidian's web clipper]] does this better for Markdown, but Markdown can't express Notion-native layout primitives (columns, toggles, callouts with icons, synced blocks).

## The product

A Chrome extension that:

- Captures the current tab's DOM
- Maps semantic + structural elements to Notion blocks: `<h1/h2/h3>` → headings, `<blockquote>` → quote / callout, `<pre><code>` → code block, `<table>` → table or database, `<img>` → image with caption, multi-column CSS → Notion columns, `<details>` → toggle
- Preserves inline formatting (bold, italic, links, code spans)
- Handles common publication templates (Substack, Medium, NYT, blog-post-shaped pages) with hand-tuned rules
- Falls back to clean Markdown for pages that don't fit any rule

Authenticated via Notion OAuth, target page selectable per-clip, optional per-source rule overrides.

## Why Finn

He uses Notion daily for the Life OS, runs into the current clipper's limitations every time he wants to capture an article, and has a strong intuition for what "good capture" feels like (built [[finn-wiki-ingest|the wiki-ingest skill]] from scratch). The same instinct that produced the wiki vault would produce a more opinionated clipper.

## Build sketch

- Manifest V3 extension. Content script for DOM extraction; popup for target selection; background service worker for the Notion API call.
- DOM-to-block mapper as a pure TS module, testable against fixture pages.
- Notion OAuth flow on `notion.com` redirect. Public integration with the user's workspace.
- Possibly a small server (Vercel function) to handle the OAuth exchange so the client secret isn't shipped in the extension. Otherwise zero infra.

Estimated build: **2–3 weeks** for a v1 that handles the top 20 publication shapes. Open-ended after that — long-tail rules forever.

## Open questions

- **Blocks API coverage.** Confirm the public Blocks API can express columns, synced blocks, callouts with custom icons, and embed-type blocks. If not, the idea drops to "better markdown clipper" and the differentiation evaporates.
- **Pricing.** Free tier with N clips/month + paid unlimited at $4–8/mo? Or one-time $19 unlock? Test both — clipper users skew technical and may prefer the lifetime model.
- **Notion's own roadmap.** They could ship this themselves at any time. The bet is that they won't, because they haven't in five years and their AI roadmap is consuming engineering bandwidth.

## Status

`blocked` — not started. Highest-friction blocker is the Blocks API audit (1-hour task) which needs to happen before committing.

## Next Action

Spend an hour reading the Notion Blocks API docs to confirm columns / callouts / embeds are exposed. Decision gate.

## Blockers

- Notion Blocks API capability audit not yet done

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[notion]] — target downstream tool
- [[obsidian-web-clipper]] — adjacent capture pattern
- [[finn-wiki-ingest]] — Finn's existing capture-shaped tool
