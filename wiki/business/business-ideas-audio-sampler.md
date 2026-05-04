---
title: "Idea — Audio Sampler / Browser-Tab Clipper (Tape Notes-style)"
type: business
status: blocked
tags: [business-idea, chrome-extension, audio-engineering, clipper, capture, ux]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — Audio Sampler / Browser-Tab Clipper (Tape Notes-style)

A Chrome extension that **clips audio from any browser tab with a great UI** — like Tape Notes, but for the browser. Unlocked by the [[paid-chrome-extensions]] thesis.

## The pain

Audio capture from a browser tab is a UX disaster:

- macOS: enable Loopback / BlackHole, route output, hit record in QuickTime, stop, trim, export. 2–3 minutes per clip.
- iOS: hold play, screen-record, extract audio, trim. Worse.
- Existing Chrome extensions either record full sessions (not clip), have terrible UIs, or break with every Manifest V3 update.

Tape Notes (the iOS app for capturing voice memos with annotations) showed what a great UI for audio capture looks like — the *clipping* is the feature, not just the recording. Nothing equivalent exists for the browser.

Use cases: capturing a podcast moment, sampling a song for production reference, archiving a streaming radio set, pulling a quote from a YouTube interview, saving a beat from a livestream.

## The product

A Chrome extension that:

- Always-on listener on the active tab (with explicit permission)
- "Clip last 30s / 60s / 5min" hotkey — captures the buffer that just played
- Mark in/out points on a waveform after capture
- Add label, source URL, timestamp, optional notes
- Export to .wav / .mp3, copy to clipboard, send to Logic Pro, sync to iCloud Drive / Dropbox
- Library view of all clips with search

The UX is the moat. The recording piece is simple (`chrome.tabCapture` + `MediaRecorder`). Most existing tools fail because they treat audio capture like screen recording. This treats it like *note-taking with audio*.

## Why Finn

Heavy use of audio capture for music production, [[berklee-music-supervision-1|Berklee Music Supervision]] reference work, and audio engineering. Strong UI sensibility from the [[overlook-strategy|Overlook Strategy]] design discipline. Knows what producers actually want a clip workflow to look like (vs. what the audio-engineering community has settled for).

## Build sketch

- MV3 extension. Background service worker keeps a circular audio buffer (last 5 minutes) of the active tab's audio. Clipping pulls from the buffer.
- React-based UI for the clip editor — waveform via [WaveSurfer.js](https://wavesurfer.xyz/), in/out trim, label, tags.
- Local IndexedDB library for clips, optional cloud sync via the user's own iCloud / Dropbox / Drive (no Overlook-side storage needed).
- Export: encode to MP3 client-side via [lamejs](https://github.com/zhuker/lamejs) or WAV directly. Drag-out support so users can drag a clip onto Logic / Pro Tools / Finder.

Estimated build: **3–4 weeks** for v1. The waveform editor is most of the work.

## Pricing thesis

This is a workflow tool with daily-use intent. Position as a one-time purchase ($29 lifetime) or low-tier monthly ($4–6/mo) with cloud sync. Free tier with N clips/month at low quality and watermark — converts well in tools like this.

## Risks

- **Audio capture permissions get more restrictive every Chrome release.** What works in 2026 may not in 2027.
- **DRM-protected streams (Spotify, Apple Music) block tab capture.** Position the tool around the un-protected long tail: podcasts, YouTube, livestreams, Bandcamp, SoundCloud.
- **Copyright posture.** A clipper for personal-reference use is fine, but the marketing matters — don't position as "rip songs from Spotify." Position as "sample-grab for producers and supervisors."

## Open questions

- Is there a parallel iOS / iPadOS opportunity, or is this Chrome-only? Tape Notes itself is iOS, so the natural extension is to ship a complementary mobile app and call it a workflow product, not an extension.
- Pair with [[business-ideas-music-key-tempo-detector|the key/tempo detector]]? Each clip auto-tagged with detected key/tempo. Same audio pipeline, double the value.

## Status

`blocked` — not started. UX sketch needed before code.

## Next Action

Sketch the clip editor UI in Figma / [[overlook-strategy-design|the Overlook design system]]. Decide whether the editor is the differentiator before committing.

## Blockers

- UX sketch not done
- Could be merged with [[business-ideas-music-key-tempo-detector]] — pending decision

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[business-ideas-music-key-tempo-detector]] — sibling, possible merge
- [[overlook-audio]] — brand alignment
