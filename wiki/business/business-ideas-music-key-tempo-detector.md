---
title: "Idea — Music Key + Tempo Detector with Logic Pro Export"
type: business
status: blocked
tags: [business-idea, chrome-extension, audio-engineering, logic-pro, music-production]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — Music Key + Tempo Detector with Logic Pro Export

A Chrome extension that detects the **key and tempo of audio playing in any browser tab** and exports those values into Logic Pro project settings. Unlocked by the [[paid-chrome-extensions]] thesis.

## The pain

Producers and music supervisors regularly sample, transcribe, or score against audio they're listening to in a browser — YouTube reference tracks, Spotify search results, sound design clips, live streams, archival recordings. Today the workflow is:

1. Hear something in a browser tab
2. Open a separate app (Mixed In Key, Tunebat, an iZotope plugin, a music-theory DAW plugin) or guess by ear
3. Tap tempo, identify key
4. Manually enter both into a Logic project

Steps 2–4 take 30–90 seconds and break flow. For a music supervisor pulling 50 references for a [[alchemy|CBS Alchemy]]-shaped project, that's an hour of context-switching per session.

## The product

A Chrome extension that:

- Captures audio from the active tab via `chrome.tabCapture`
- Runs key detection + BPM detection client-side using Web Audio API + a WASM-compiled DSP pipeline (Essentia.js or a custom port of librosa's `beat_track` / `key_estimation`)
- Displays detected key + tempo in a small overlay
- Optionally writes a Logic Pro `.logicx` project stub or updates an open project's `tempo` and `key signature` via Logic's scripter / OSC bridge
- Caches results per source URL so revisiting the same YouTube video skips re-analysis

## Why Finn

Three overlapping competencies:

- [[berklee-online|Berklee]] coursework in Music Supervision and audio engineering — knows what a music supervisor's actual workflow is
- Working knowledge of Logic Pro project structure (the `.logicx` bundle, project XML, tempo + signature tracks)
- Recording engineer experience at studios → understands what producers want vs. what the existing tools (Mixed In Key) ship

This is the kind of niche where domain expertise is the moat. A generalist could build the detector, but only someone in the workflow knows that "tap tempo while the YouTube ad plays in the same tab" is the actual UX bug.

## Build sketch

- Manifest V3 extension, MV3-compatible audio tap (use `chrome.tabCapture` API, which requires explicit user gesture and an active tab).
- DSP pipeline: Essentia.js for key estimation, an FFT + autocorrelation BPM detector. Both run in a Web Worker to keep the UI responsive.
- Logic export options:
  - **Easy path:** generate a `.logicx` template file, ship a button that downloads it and triggers Logic to open via custom URL scheme
  - **Better path:** small companion macOS helper app that listens on localhost, receives the key/tempo, and uses AppleScript or Logic Scripter to update the open project. Crosses the "small extension" boundary but produces a much better UX.
- Fallback: copy detected values to clipboard formatted as `Cmaj 124 BPM` for manual paste.

Estimated build: **3–4 weeks** for the extension + a v1 download-template export. Add 2–3 weeks for the macOS helper.

## Pricing thesis

This is a deep-niche extension where users have explicit budget for tools — Mixed In Key is $58, Tunebat Pro is $5/mo, every plugin developer charges $100+. Position as freemium: 5 detects/day free, $7/mo or $59 one-time for unlimited + Logic export. The macOS helper is a separate $20 unlock.

## Open questions

- **Detection accuracy on compressed audio.** YouTube and Spotify both serve heavily compressed audio. Test Essentia.js detection on the real distribution of source material (vs. clean WAV) before committing.
- **`tabCapture` reliability.** It's been flaky historically and needed permission re-prompts on every site. Worth a 2-hour spike before any further investment.
- **Apple's Logic Pro extension story.** Is there an officially-blessed plugin / scripting surface in 2026, or is AppleScript still the only path? If the former, the helper-app architecture changes.

## Status

`blocked` — not started. Two technical-feasibility spikes need to happen before this is real.

## Next Action

Spike: load Essentia.js into a throwaway extension, capture audio from a YouTube tab, log the detected key + BPM. 2 hours, decides whether the core works.

## Blockers

- Detection-accuracy spike on real (compressed) browser audio
- `chrome.tabCapture` permission UX spike

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[overlook-audio]] — sibling brand context
- [[berklee-music-supervision-1]] — domain context
- [[alchemy]] — example real workflow this would have helped
