---
title: "Hearst Assembly"
type: entity
tags: [entity, tool, ai-newsroom, transcription, journalism, internal-tooling]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 5
sources: [[automated-news-playbook-civic-operators]]
---

## TL;DR

Hearst's internal AI tool for government meeting transcription + chapter extraction. Internal tooling, not a product. **Transcribed 13,119 hours of government meetings across all Hearst newsrooms between May 2024 and April 2025** — single most striking benchmark for what's achievable inside a major-publisher tooling stack.

Reporters click hyperlinked timestamps to verify before publishing. The compass artifact ([[automated-news-playbook-civic-operators]]) names this as the proof-point that AI-assisted civic transcription scales when the human-in-the-loop is real.

## Why it matters for Pier and Point

The volume number is the relevant comparison. **One operator (Pier and Point, ~1 council/board meeting per night) at ~150–200 meetings/year = ~300–600 hours.** Hearst's 13,119 hours / year is 20–40x that across an enterprise newsroom. The tooling pattern (transcribe, chapter, click timestamp to verify) is the same — just at different scale. Pier and Point can run at 1/40th of Hearst's volume with the same disclosure + verification posture.

The structural lesson: **even at enterprise scale with named newsrooms, the click-timestamp-to-verify human gate is mandatory.** Don't shortcut it on a smaller operation just because the volume is more manageable.

## Related

[[citymeetings-nyc]] — [[ai-newsroom-pipeline]] — [[pier-and-point-execution]] — [[automated-news-playbook-civic-operators]] — [[whisperx]]

## Sources

[[automated-news-playbook-civic-operators]] — sections 1, 2, 7
