---
title: "WhisperX"
type: entity
tags: [tool, ai, transcription, audio, self-hosted]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# WhisperX

Open-source automatic speech recognition (ASR) built on OpenAI's `whisper-large-v3` + pyannote diarization. Self-hosted on Finn's [[hardware-setup]] (M1 Max 64GB) with no API costs per inference.

Benchmarks: 88–92% word error rate (WER) on muffled council meeting audio in independent testing. Used in [[ai-newsroom-pipeline]] for transcribing Granicus video pulls of Ventura City Council and County Supervisor meetings.

Self-hosting is viable because a single council meeting is 1–2 hours of audio, not a continuous ingestion stream. Run it as an async cron job post-video-download rather than hitting Whisper API at $0.006/minute or AssemblyAI at ~$0.27/hour.

Adjacent to Finn's [[music-production]] audio engineering background.

## See also

- [[ai-newsroom-pipeline]]
- [[hardware-setup]]
- [[music-production]]
