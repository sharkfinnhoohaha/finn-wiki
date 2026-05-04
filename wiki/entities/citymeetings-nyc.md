---
title: "Citymeetings.nyc"
type: entity
tags: [entity, civic-news, ai-newsroom, solo-operator, nyc, pier-and-point-template]
created: 2026-04-28
updated: 2026-04-28
weight: high
node_size: 10
sources: [[automated-news-playbook-civic-operators]]
---

## TL;DR

One-person AI-assisted civic news operation covering NYC public meetings. Built and run by [[vikram-oberoi]] with custom Python + LLM pipeline. Processes ~80 meetings, ~3,000 chapters, and ~150 hours of video over a typical two-month window — roughly one meeting per day. **The clearest replicable template for what [[pier-and-point]] is being built to be**, and the source the April 28 [[automated-news-playbook-civic-operators|compass artifact]] points to as the canonical solo-operator model.

URL: <https://citymeetings.nyc>
Prompts published openly: <https://citymeetings.nyc/nyc-school-of-data-2024>

---

## The pipeline

Oberoi pulls meeting video directly from NYC Legistar. He **skips Legistar's official transcripts** because they lack timestamps and arrive days late. He runs his own transcription with sentence-level timestamps, then a three-step LLM chain:

1. **Speaker identification** — who's talking
2. **Chapter extraction** — start/end times and chapter types
3. **Meeting summary** — final synthesis

The load-bearing design choice: **purpose-built human review UIs *between each LLM step*, not just at the end.** Speaker correction panel after step 1. Chapter boundary panel after step 2. By the time the summary lands, the prior layers have been verified by a human. This is materially different from a typical "AI drafts → human approves" gate where errors propagate undetected through the chain.

Time per meeting after the system was built: a fraction of human-only review.

## Why this matters for [[pier-and-point]]

The April 25 research already pointed at Citymeetings.nyc as a directional inspiration. The April 28 compass artifact promotes it to **the canonical solo-operator template**. Specific lifts:

- **Three-step LLM chain (speaker ID → chapter extraction → summary)** maps directly onto Pier and Point's planned Granicus/PrimeGov ingest pipeline. See [[ai-newsroom-pipeline]].
- **Inter-step review UIs** sharpen the [[ai-newsroom-pipeline|TipTap admin UI]] design from "approve the final draft" to "approve each layer as it lands." Each of: speaker labels, chapter boundaries, claim verification needs its own review surface.
- **Skipping the official transcript source in favor of self-transcribed video** is the right call for Pier and Point too. [[whisperx]] on the M1 Max handles this without paid APIs. Mirror Oberoi's design choice.
- **Public prompts page** is the disclosure pattern that survived scrutiny. Pier and Point's `/methods` page should publish prompts (and the chain) openly, not just summarize them.

## Comparable scale

| Operator | Volume | Headcount |
|---|---|---|
| Citymeetings.nyc | ~80 meetings / 3,000 chapters / 2 mo | 1 (Oberoi) |
| 6AM City core market | 1 daily newsletter / market | ~3.4 |
| Hoodline | 5–20 stories/day across ~25 cities | unknown (AI personas + small team) |
| Hearst Assembly | 13,119 hrs of meetings May 2024 → Apr 2025 | enterprise newsroom-wide |

Above 50 published items/day per site without distinct editorial value, [[ai-news-failures-curriculum|penalty risk dominates]]. Citymeetings.nyc is well below that threshold by design.

## What Citymeetings.nyc does NOT do

- No newsletter — meetings are surfaced via the website
- No paid tier — value is the searchable archive
- No commentary or editorial — extraction-only

This is a difference from Pier and Point, which is being designed newsletter-first with editorial voice. Citymeetings.nyc is the *processing pipeline* template, not the *audience and revenue* template. For audience and revenue patterns, see [[6am-city]], [[block-club-chicago]], [[berkeleyside]].

## Related

[[pier-and-point]] — [[pier-and-point-execution]] — [[ai-newsroom-pipeline]] — [[vikram-oberoi]] — [[whisperx]] — [[6am-city]] — [[hearst-assembly]] — [[ai-news-failures-curriculum]] — [[transparency-premium-as-traffic-strategy]]

## Sources

[[automated-news-playbook-civic-operators]] — sections 2 and 7
