---
title: "TipTap"
type: entity
tags: [tool, editor, prosemirror, typescript]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# TipTap

ProseMirror-based rich text editor. Mature TypeScript API, strong extension ecosystem. First-party Liveblocks integration for collaborative editing.

Used in [[ai-newsroom-pipeline]] for the admin review UI: split pane with sources + prior drafts on the left, TipTap editor on the right. Inline fact-check chips color-code claim confidence (red/yellow/green based on citation count and source tier weighting). Approve / Request Revision / Reject / Publish action buttons trigger Inngest events.

Lexical was considered; TipTap won on extension maturity and Liveblocks integration out-of-the-box.

## See also

- [[ai-newsroom-pipeline]]
