---
title: "Berklee Music Supervision 1 — OMBUS-495.02"
type: project
status: active
tags: [school, berklee, music-supervision, deliverables]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [[local_4d1ab0f2-2c30-4017-be7a-4bb9f275e22e]], [[local_6c1ef462-60ce-4809-86de-0ecbebfb7f4b]]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 2
effort_score: 4
roi_score: 0
icon: "🎓"
area: school
last_touched: 2026-04-24
next_action: "Resolve Alchemy snippet deliverable and submit Lessons 10/11/12 PDFs to portal"
blocker: ""
---

## Next Action

Resolve Alchemy snippet deliverable (:00–:30 clips vs full sync), then submit Lessons 10/11/12 PDFs to Berklee portal. None submitted yet.

## Blockers

- Finn must submit to portal manually (agent can't access Berklee portal). Video/audio sync for Lesson 12 requires DAW — can't be done in sandbox.

## TL;DR

Berklee Online OMBUS-495.02 Music Supervision 1 — Lessons 10, 11, 12 final-stretch deliverables. The assignment subject is **Alchemy**, a CBS TV Movie produced by **Black Sand Pictures**, release ~May 9 2026. Submissions show **"Finlay Bennett"** (Berklee uses the legal first name; Finn goes by Finn). Tight deadline — original due dates Mar 22 / Mar 29 / Apr ~6, doing them all at once.

## Course

- **Code:** OMBUS-495.02
- **Title:** Music Supervision 1
- **School:** [[berklee-online]]
- **Portal name:** Finlay Bennett
- **Subject:** Alchemy (CBS TV Movie, Black Sand Pictures)
- **Lessons in scope:** 10, 11, 12

## Deliverables

| Lesson | Deliverable |
|--------|-------------|
| 10 | Spotting notes + 2 MP3 choices per scene |
| 11 | Approved MP3s + budget breakdown ($7,500 across 4 scenes) + license request for 1 scene + song/rights info for remaining 3 |
| 12 | Video with music synced to picture + completed cue sheet |

## Tools / pattern

- **PDF generation:** Python + reportlab
- **Productivity skill:** `/productivity:update` invoked mid-session — manages TASKS.md and `memory/` directory
- **`.docx` building:** directly from template XML structure (preserves fonts, formatting, field layout). Caught a curly-quotes nesting bug — `"Bass Clef Club"` double-quoted in RE line, fixed manually
- **Validation:** PDF rasterization for visual QA before delivery
- **Source files:** WAVs + source MP4 `MS1_L08_Alchemy_DLG_FX_CenterChannel_CafeBoxing.mp4` provided by Finn (originally agent expected MP3s)
- **Streaming/DRM walls** block direct audio pulls — Finn must upload manually

## Songs / rights worked

### "Touch of Blue"
- Composer (BMI): **Brad Hatfield** (100% writer)
- Publisher (BMI): **Brad Hatfield Music Collective** (100%)
- Performer: **John DePaola Quartet** (trumpet version chosen — album has both guitar and trumpet)

### "Heavy Berry"
- Composer (BMI, IPI 489625400): **Scott Robinson** (also performer)
- Publishers: **Bayham Music Library** (50% BMI) + **Brillant-Musik Switzerland** (50% SUISA)
- Library: **Extreme Music** — XCD085_01, ISRC GBBPP0308501

## Letterhead / packaging

- Cue sheets / license templates use **Amblin Television** (assignment licensee) and **[[overlook-audio]]** as a co-branded letterhead — Finn comfortable using Overlook Audio branding inside academic work
- Template dated March 22, 2026

## Constraints

- **Cannot do video/audio sync** in agent sandbox — needs DAW + clips
- **Cannot submit to Berklee portal** — Finn submits manually
- Workspace was empty at start of batch-1 session 5 — agent built from scratch

## Open threads

- Are there any instructor-approved songs from feedback, or is the agent picking 4 fresh from libraries?
- Which ad to use (m85s)?
- Deliverable for the Alchemy snippets unresolved at end of batch-3 session 1 — :00–:30 snippets vs full sync to video vs full mixdown
- PDFs in flight: spotting notes, budget, license request, cue sheet
- None submitted to portal yet

## Quotes from Finn

> "I see two versions of 'touch of blue' on that album, a guitar version and a trumpet version. Which one are you reffering to?"

> "Here are the two audio files, and the original video clip it needs to be synced to"

## Related

- [[berklee-online]]
- [[overlook-audio]]
- [[finn-bennett]] — submits as "Finlay Bennett"
- Other Berklee courses (active): Script Analysis, Artist Management

## Sources

- `local_4d1ab0f2-2c30-4017-be7a-4bb9f275e22e` — Complete assignments and deliver PDFs (batch-1 session 5)
- `local_6c1ef462-60ce-4809-86de-0ecbebfb7f4b` — Find audio snippets or links (batch-3 session 1)
