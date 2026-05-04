---
title: "Idea — TAF / METAR Decoder Chrome Extension"
type: business
status: blocked
tags: [business-idea, chrome-extension, aviation, weather, training]
created: 2026-04-30
updated: 2026-04-30
weight: medium
node_size: 5
sources: [[isenberg-paid-chrome-extensions-2024]]
---

# Idea — TAF / METAR Decoder Chrome Extension

A Chrome extension that decodes raw TAF and METAR strings into plain English **wherever they appear in the browser** — aviationweather.gov, ForeFlight web, SkyVector, AOPA flight planner, Reddit r/flying, training material PDFs. Unlocked by the [[paid-chrome-extensions]] thesis.

## The pain

TAF and METAR are dense, encoded weather formats every pilot has to read. A line like:

```
KSBA 301751Z 28015G24KT 10SM FEW040 SCT250 18/06 A2998 RMK AO2 SLP155 T01780061
```

…contains wind direction + speed + gust, visibility, cloud layers + bases, temperature + dewpoint, altimeter, and remarks. Student pilots decode this manually with a worksheet. Even experienced pilots find raw strings annoying outside a dedicated EFB app.

The browser is where most ground-school weather decoding actually happens — pilots read aviationweather.gov on a laptop more often than in ForeFlight when they're at home planning. There's no good in-browser decoder.

## The product

A Chrome extension that:

- Scans page text for TAF and METAR patterns (well-defined, regex-friendly: `[A-Z]{4} \d{6}Z ...` for METAR, `TAF ... \d{4}/\d{4}` for TAF)
- Highlights each match in the page
- On hover, shows a popover with the decoded translation: wind, visibility, ceiling, conditions, altimeter, temp / dew / spread, remarks
- Optional sidebar mode for batch decoding when planning a multi-leg flight
- Handles non-US variants (UK / EU / Australia AIP additions like `BECMG`, `TEMPO`, `PROB30`)

Free extension or freemium with a pro tier for batch / planning mode and personalization (preferred units, density-altitude calc, runway crosswind component for the user's home airport).

## Why Finn

Active flight training. He's the user. Aviation extensions on the Chrome Web Store are mostly abandoned hobby projects with 4-star ratings and no recent updates — there's a niche-but-loyal audience and a clear competence moat (you have to actually understand aviation weather to ship a correct decoder).

## Build sketch

- Manifest V3, content script-only. No background service needed.
- Decoder is a pure TS module — fully testable against the FAA's published METAR / TAF spec + a corpus of real-world strings. Open-source the decoder (BSD license) as marketing, paywall the UI.
- Tooltip / popover via [Floating UI](https://floating-ui.com/).
- Sidebar via Chrome's side-panel API.
- Distribution: Chrome Web Store, demo on aviation YouTube channels, post in r/flying after a few weeks of polish.

Estimated build: **1–2 weeks** for v1 of the decoder + extension. Decoder is the work; extension shell is trivial.

## Pricing thesis

Free with all decoding, paid pro tier ($3–5/mo or $19 lifetime) for: persistent home-airport setup, density altitude calc, crosswind component, batch planning UI. Aviation tools price low — pilots are budget-sensitive, but the audience is loyal once you're in.

## Open questions

- **Worth shipping standalone, or as a feature in a larger tool?** Could roll up into a broader "pilot productivity" extension (TAF decoder + flight log capture from FAA Wings + ForeFlight bookmarks). Bigger scope, more interesting business.
- **ForeFlight / Garmin already do this in their apps** — the wedge is "in any browser," not "decoder exists." Make sure the positioning emphasizes that wedge.

## Status

`blocked` — not started. Smallest-scope idea on the list, would be a clean weekend project before deciding whether to invest more.

## Next Action

Sketch the decoder grammar against a 50-string METAR + 50-string TAF corpus. Confirm the rule set is small enough to ship in a weekend.

## Blockers

- None substantive — this is a "ready when scheduled" idea

## Related

- [[paid-chrome-extensions]] — parent thesis
- [[finn-bennett]] — pilot-in-training, the user
