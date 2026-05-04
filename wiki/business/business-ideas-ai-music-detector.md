---
title: "Idea — AI-Generated Music Detector Chrome Extension"
type: business
status: blocked
tags: [business-idea, chrome-extension, audio-engineering, ai-detection, classification]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — AI-Generated Music Detector Chrome Extension

A Chrome extension that **flags AI-generated music** (Suno, Udio, generative tools) playing in any browser tab — Spotify Web Player, YouTube, SoundCloud, TikTok, Reddit threads. Unlocked by the [[paid-chrome-extensions]] thesis.

## The pain

By 2026 Spotify and YouTube are flooded with AI-generated music. Listeners want to know what they're listening to (preference filter). Rights holders want to know what they're competing with (market intelligence). Music supervisors want to know what they're considering for sync (legal exposure). No browser-level tool exists. Identification today requires either intuition or a separate analysis tool.

This is also high-leverage for [[overlook-audio]] / [[overlook-strategy]] thought leadership — being the studio that ships the AI-music detector is the sort of free distribution that a niche audio brand can ride.

## The product

A Chrome extension that:

- Listens to audio from the active tab via `chrome.tabCapture`
- Runs a classifier that estimates probability of AI generation
- Surfaces a confidence score in a corner badge: green (likely human), yellow (ambiguous), red (likely AI)
- Optional history view: a feed of every track classified, source, score
- Optional public API for music supervisors / studios to bulk-classify a catalog

The classifier is the moat. Likely a fine-tuned audio model on artifacts known to leak from generative systems (specific phase-correlation patterns, narrow stereo field statistics, suspiciously perfect tempo grids, vocal artifacts).

## Why Finn

Audio engineering background gives him intuition for what artifacts to train on. Recording engineer experience means he knows what real human-recorded music statistically looks like (hint: it's noisier and less regular than AI output). Berklee Music Supervision context puts him in the audience that wants this tool.

## Build sketch

- The classifier is the hard part. Three options:
  - **Server-side inference.** Send a 30-second audio fingerprint to a hosted model. Best accuracy, ongoing infra cost, privacy concerns.
  - **Client-side WASM model.** Distill a teacher model into a small classifier that runs in a Web Worker. Lower accuracy, zero server cost, instant.
  - **Hybrid.** Quick client-side filter for obvious cases, send only ambiguous fingerprints to the server.
- Training data: scrape Suno + Udio public outputs, mix with curated human-music library, train a binary classifier on mel-spectrogram features. Validate against an unseen distribution.
- Extension shell same as [[business-ideas-music-key-tempo-detector|the key/tempo detector]] — `chrome.tabCapture`, Web Worker, popup UI.

Estimated build: **6–10 weeks** including training. Most of the time is data + training, not extension code.

## Pricing thesis

Freemium: N classifications/day free, paid pro tier at $5–9/mo for unlimited + history + bulk API. Studios / supervisors / labels are willing to pay enterprise rates ($50–200/mo) for an API that classifies their catalog.

## Risks

- **Adversarial arms race.** Generative-music providers will explicitly train against detection. The half-life of any specific classifier is short. The product needs continuous training pipeline, not a one-off model. This is a real ongoing cost.
- **False positives are reputationally bad.** Calling a real human song AI-generated is a worse error than missing an AI track. Tune the classifier toward high precision.
- **Suno / Udio could ship watermarking** that makes the question trivial. Hedge by positioning as multi-detector (watermark + classifier).

## Open questions

- Is the underlying problem better solved by *labeling* (Suno watermarks its own output, distribution platforms enforce labeling) or *detection*? Detection is more interesting but might be solved upstream by mid-2027.
- Tier 2 product: same classifier exposed as a music supervisor's pre-clearance tool (avoid syncing AI-generated music inadvertently). Different audience, higher willingness to pay.

## Status

`blocked` — not started. Highest technical risk on the list, also highest upside if the classifier works.

## Next Action

Spike: train a tiny binary classifier on a 200-sample / 200-sample dataset (Suno vs. real music). If it can hit > 80% accuracy in a half-day, the project is real. If not, shelve.

## Blockers

- Classifier feasibility unproven
- Training data corpus not assembled

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[business-ideas-music-key-tempo-detector]] — sibling audio-engineering idea
- [[overlook-audio]] — brand alignment for the launch
