---
title: "Idea — llm-wiki-ingest Chrome Extension"
type: business
status: blocked
tags: [business-idea, chrome-extension, llm-wiki, capture, internal-tooling]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — llm-wiki-ingest Chrome Extension

A Chrome extension that **drops the current page into the wiki's `raw/` and triggers an ingest** — the [[finn-wiki-ingest]] skill, exposed as a one-click browser action. Unlocked by the [[paid-chrome-extensions]] thesis.

## The pain

Today the wiki ingest flow is:

1. Find a worth-keeping article in the browser
2. Use [[obsidian-web-clipper]] to drop the page into `raw/`, or copy-paste the URL into a Cowork session
3. Open Cowork, type "ingest this", point at the file
4. Wait

Two friction points: switching out of the browser to start the ingest, and the manual step of telling Cowork what to do. The clipper handles the file drop but not the trigger.

## The product

A Chrome extension that:

- One-click "ingest to Finn-Wiki" button on any page
- Captures the page as clean Markdown (using a Readability-style extractor)
- Drops the file into `raw/` with proper frontmatter (title, source URL, date)
- Triggers a Cowork session with a pre-filled "run /finn-wiki-ingest on `<file>`" prompt, OR posts to a webhook that a scheduled task picks up

Personal infra first. If the [[llm-wiki-pattern]] catches on with other people running the same vault structure, this becomes the **default capture surface** for anyone running Karpathy-style LLM wikis.

## Why Finn

Already maintains [[finn-wiki-ingest]] as the canonical capture skill. Already runs the wiki at scale (200+ pages). Knows exactly what the ingest workflow needs because he uses it daily. Generalizing this from "internal tool for me" to "extension other LLM-wiki users install" is incremental.

## Build sketch

- MV3 extension. Content script extracts page → clean Markdown via Mozilla's [Readability.js](https://github.com/mozilla/readability) (the same engine Firefox Reader Mode uses).
- Frontmatter generated from page metadata + ingest date.
- Two trigger paths:
  - **Local:** the extension writes to `raw/` directly via the [Native Messaging API](https://developer.chrome.com/docs/extensions/develop/concepts/native-messaging) talking to a small local helper. Higher friction to install but works offline.
  - **Cloud:** the extension posts to a Cowork webhook / scheduled-task endpoint that picks up the URL and runs the ingest. Lower friction to install but requires Cowork to be online.
- Settings: vault path, default subfolder, frontmatter template.

Estimated build: **1–2 weeks** for v1 (cloud trigger only). Add 1 week for the native-messaging helper.

## Why this is interesting beyond personal use

If [[llm-wiki-pattern]] becomes a real category — and given the recent activity around personal LLM wikis (Karpathy's gist, Nate Herk's video, the growing Obsidian + Claude Code crowd), it might — the *capture* extension is the leverage point. Most users won't write [[finn-wiki-ingest|an ingest skill]], but they'll all install a clipper. Owning that surface positions Overlook as the studio that ships the wiki tooling, parallel to how 1Password owned password capture.

## Pricing thesis

- Free for personal use. Open-source the extension, monetize the orchestration / cloud-ingest backend at a tiny per-month cost ($3–5/mo for hosted ingest, more for teams).
- B2B angle: ingest extension + custom skill set + portal access for client knowledge bases. Aligns with [[agentic-services-positioning]].

## Open questions

- Should the extension be Finn-Wiki-shaped or generic? Generic ("any Obsidian / Logseq / file-system vault") is more useful but loses the opinionated ingest flow.
- Does this collapse into [[business-ideas-notion-layout-clipper]]? They're different downstream targets (file system vs. Notion) but the same capture mechanic. Possibly a single extension with pluggable destinations.

## Status

`blocked` — not started. Lowest direct revenue potential; highest strategic alignment with [[llm-wiki-pattern]] and [[overlook-strategy]] positioning.

## Next Action

Decide: ship as a personal tool first (1-week build, no monetization), or design for the public release from day one. If personal-first, start the ingest helper next. If public-first, finalize the architecture spec before code.

## Blockers

- Personal-vs-public framing decision
- Native messaging vs. webhook architecture decision

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[finn-wiki-ingest]] — the skill this extension would wrap
- [[llm-wiki-pattern]] — the broader category
- [[obsidian-web-clipper]] — incumbent capture surface
- [[business-ideas-notion-layout-clipper]] — possible merger
