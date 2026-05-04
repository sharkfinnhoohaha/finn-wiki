---
title: "Business Ideas — Backlog"
type: business
tags: [ideas, backlog, gearflip, overlook-strategy, three-altitudes, chrome-extensions]
created: 2026-04-24
updated: 2026-04-30
weight: high
node_size: 10
sources: [[local_1cfa988a-77d5-42b5-acb8-90109fcff213]], [[local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f]], [[local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]], [[local_65f6bd58-1447-4afc-948b-6b9efd97150a]], [[isenberg-paid-chrome-extensions-2024]]
---

## TL;DR

Captured ideas across Finance/Life OS, GearFlip, the Overlook AI features, and the [[three-altitudes]] portfolio. Not yet built.

## Finance / Life OS

- **CSV import button to simulate financial scenarios** — Finn explicitly wants to prompt Gemini → CSV → load into Notion to simulate "raise rates 20%, cut food spending, add music licensing income, etc." Pipeline already exists ([[csv-to-notion-pipeline]]) — the missing piece is a one-click trigger surface.
  > "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."

## GearFlip

From `local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f`:

- **Subscription tiers** — mentioned in the features grid on the new landing page, not yet built
- **AI normalization callouts** — landing copy already calls out Claude by name for normalization (`RawListing` → `NormalizedListing` interface in `lib/normalize.ts`, `parsePriceToCents` helper, Claude API enrichment call stubbed)
- Pitch surface area on landing: **4 marketplaces, 2,400+ listings/day, <5min alert delivery, 90-day price history**, AI normalization, arbitrage detection
- Tagline: **"Sell high."** (emerald highlighted)
- Example listing on demo card: **Apollo Twin X Duo** (gives the gear vertical: pro audio interfaces)
- Still empty: scraping pipeline, normalization runtime, alert creation flow, Stripe, Resend

## Three-altitudes / Portfolio

From `local_65f6bd58-1447-4afc-948b-6b9efd97150a`:

- **Spotify embed as "Sonic Artifact"** on portfolio (interaction pass)
- **3D Visual Pass:** Glass Wave Sculpture (crystalline `IcosahedronGeometry` + transmission), Vibrating Monolith, GLSL film grain shader
- **Cursor lens / refraction uniform** — interaction pass

## Overlook AI features (deferred enhancements)

From `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53`:

- **Streaming summary generation** — currently batch
- **Populate `prompt_tokens`** from Ollama `eval_count`
- **`slowapi` rate limiting on `/ask` endpoint** — only matters if portal AI gets re-enabled (currently `AskAIView` was removed from portal in favor of `FAQView`; component still exists)
- **Re-add `AskAIView` to client portal** — open question
- **Railway volume mount for uploads at `/data/uploads`** — flagged as a 30-second fix to survive redeploys

## Chrome Extensions (Isenberg / Schneider thesis, April 2026)

From [[isenberg-paid-chrome-extensions-2024]]. Each idea has its own page; this section is the index.

- **[[paid-chrome-extensions]]** — broader thesis: low build cost (AI scaffolds them), real distribution via Web Store, browser is a privileged surface for capture / transform / detect plays
- **[[business-ideas-notion-layout-clipper]]** — Chrome extension that reconstructs page layout as Notion blocks. Blocked on a Blocks API capability audit
- **[[business-ideas-music-key-tempo-detector]]** — detect key/BPM of audio in any tab, export to Logic. Berklee + audio engineering moat
- **[[business-ideas-taf-metar-decoder]]** — decode raw aviation weather strings inline. Smallest scope on the list, weekend project
- **[[business-ideas-ai-music-detector]]** — classify audio as human vs. AI-generated. Highest technical risk, highest [[overlook-audio]] brand leverage
- **[[business-ideas-audio-sampler]]** — Tape Notes-style audio clipper for browser tabs. UX is the moat
- **[[business-ideas-llm-wiki-clipper]]** — wraps [[finn-wiki-ingest]] as a one-click capture surface. Strategic alignment with [[llm-wiki-pattern]]

## Sources

- `local_1cfa988a-77d5-42b5-acb8-90109fcff213` — "Build Life OS in Notion with Claude"
- `local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f` — "GearFlip design progress update"
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` — "Clean up repository branches and merge fixes"
- `local_65f6bd58-1447-4afc-948b-6b9efd97150a` — "Evolve portfolio into cinematic autobiography"
- [[isenberg-paid-chrome-extensions-2024]] — "Business idea: Paid Chrome Extension" YT short, Greg Isenberg / Cody Schneider, June 2024
