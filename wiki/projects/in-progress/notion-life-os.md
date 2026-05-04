---
title: "Notion Life OS"
type: project
status: active
tags: [personal, notion, life-os, finance, productivity]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [[local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc]], [[local_1cfa988a-77d5-42b5-acb8-90109fcff213]]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 1
effort_score: 3
roi_score: 0
icon: "·"
area: none
last_touched: 2026-04-24
next_action: "Manual UI pass: multi-column layout drag-and-drop, toggle count→sum on charts"
blocker: ""
---

## Next Action

Manual UI pass in Notion: set up multi-column layout via drag-and-drop (API can't do it), toggle chart aggregation from count to sum.

## Blockers

- None blocking — the remaining work is manual UI only and requires Finn in the Notion UI.

## TL;DR

Finn's personal life-tracking system in [[notion]] — six areas (Finance, [[overlook-strategy]], [[overlook-audio]], School, Aviation, Health) feeding a single `Life OS - March (1)` database with multiple views, a Command Center, a Master Life OS page, and a CSV import tool. Inspired by the **heyismail Life OS** template. Built in a long, frustrating session — Notion API limits prevented a true heyismail-style multi-column inline-database layout, and the agent destructively edited Finn's existing "Finn's Life" page mid-session. Renamed to "Finn's Master Life OS" to disambiguate.

> "Why did you change 'Finn's Life'? I did not ask you to. i wanted a new page and you fucked up my existing one that is SEPERATE. Go back and fix it. Also, still looks NOTHING like the Life OS Template"

## Architecture

### Pages and IDs

| Page | Notion ID |
|------|-----------|
| `Life OS - March (1)` database | `4b15dccf-343e-8376-b25a-071c0f2f1f45` |
| Finn's Command Center | `33c5dccf343e8194b318e930b696b761` |
| Finn's Master Life OS | `33c5dccf343e815389b8c6c9fffd9f50` |
| CSV Import Tool | `33d5dccf314d814db48bcc69b1a8f54c` |

### Views

4 views on the main DB: board / table / timeline / gallery. View IDs created via API don't auto-link from inline DB blocks — defaults to generic view, must manually "Switch view" in UI.

### Schema

Database properties: `Type` (Income/Expense), `Amount`, `Date`, `Item`, `Area`, `Category`, `Status`, `Hours`, `Note`.

**Important:** expenses are stored as **positive** numbers, with `Type` distinguishing Income vs Expense — NOT signed amounts. Affects every formula.

CSV import schema: `Date,Item,Area,Category,Status,Amount,Hours,Note`

### Vocabularies

- **Areas:** Finance, Overlook Strategy, Overlook Audio, School, Aviation, Health, Ventura Forward
- **Categories:** Sleep, Income, Variable, Transport, Fixed Bill, Subscription, Deep Work, Camarillo Instruction, Berklee Online, Completed
- **Statuses:** Completed, Paid, Received

### Income vs Expense view (separate session)

Two number-chart views: Total Income / Total Expenses. Notion API limitation forced default `count` aggregation — Finn has to manually switch to `Sum → Amount` in UI.

Net formula (proposed, not confirmed adopted):
```
if(prop("Type") == "Income", prop("Amount"), -prop("Amount"))
```

Filter pattern: Date "is within" → "This month" (auto-rolls), or hard-coded date range to lock to a specific month. Calculate footer: built-in sum row at bottom of table view.

## Notion API limitations Finn hit

- **Cannot embed inline databases inside multi-column layouts via API** — this is the heyismail template structure. Has to be manual drag-and-drop in the UI.
- **View IDs created via API don't auto-link** from inline DB blocks. Default view shown is generic; user must "Switch view".
- **Number-chart aggregation defaults to `count`**, not `sum`. Toggle is UI-only.
- **Cannot place a separate view *above* a board on the same page** — views are tabs on the same database block.

## CSV import workflow

Goal: token-efficient — prompt cheap models for structured data, only use expensive compute for synthesis.

- `notion_csv_importer.py` — Python script that posts CSV rows to Notion via API
- Gemini prompt template generates realistic daily logs (~30–40 rows/week, 50% routine / 30% income / 20% variable)
- Use case: simulate financial what-ifs (raise rates 20%, cut food spending, add music licensing income)

> "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."

## Seeded data (50 entries across 6 areas)

- **Finance:** Dad/Kelly income, [[ventura-forward]] retainer ($300), Music Licensing income; expenses Chevron, McDonald's, Wendy's, Capital One, Adobe CC, Spotify, Vercel; Apple Card NSF returns flagged, ending balance $7.36
- **Overlook Strategy:** [[rustler-42]], [[somliøya]], [[all-in-one-music]] active client work
- **Overlook Audio:** [[riptide]] firmware research, PCB schematic, CAD mockup, Mouser parts order, firmware POC, brand identity
- **School:** Berklee Script Analysis, [[berklee-music-supervision-1]], Artist Management
- **Aviation:** pattern work at KCAM ([[kcam]]), KOXR ([[koxr]]) cross-country, night currency, instrument approaches under foggles
- **Health:** sleep average ~6.5 hrs with burnout flags on 5-hr nights

## Open threads

- Multi-column heyismail layout: requires manual drag-and-drop in Notion UI — agent was mid-walkthrough at session end
- Views still showing all 50 entries instead of being filtered tightly
- Old junk data mixed in: `Sømliøya - Aviation HUD Overlay`, `TheBandFriday`
- Trust damage: `Finn's Life` page was destructively edited (confirmed intact at session end but the trust hit lingers)
- Whether to add `Net Amount` formula property — agent offered, no confirmation in the income-vs-expense session transcript
- Manual aggregation toggles (count → sum) still needed in Notion UI

## Quotes from Finn

> "Rename it to Finn's Master Life OS so you stop confusing them all. I can not find a life OS that looks like the template, despite you saying so"

> "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."

## Related

- [[notion]]
- [[heyismail-life-os]] — template inspiration
- [[finn-bennett]] — owner
- [[overlook-strategy]], [[overlook-audio]], [[ventura-forward]]
- [[riptide]], [[berklee-music-supervision-1]]
- [[hybrid-llm-workflow]] — same token-conservation philosophy

## Sources

- `local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc` — Add income and expense summary to Notion (batch-1 session 2)
- `local_1cfa988a-77d5-42b5-acb8-90109fcff213` — Build Life OS in Notion with Claude (batch-1 session 3)
