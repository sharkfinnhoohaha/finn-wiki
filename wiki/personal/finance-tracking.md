---
title: "Finance Tracking"
type: personal
tags: [finance, notion, life-os, money]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc]], [[local_1cfa988a-77d5-42b5-acb8-90109fcff213]]
---

## TL;DR

Finn's personal finance lives in a Notion **Finance Hub / Transactions** database. Schema is **Type + Amount** (positive numbers, signed by the `Type` field), not signed amounts. Monthly Net is computed via formula. Income and expense streams below.

## Database schema

- Properties: `Type` (Income / Expense), `Amount` (positive number always), `Date`
- Net Amount formula:
  ```
  if(prop("Type") == "Income", prop("Amount"), -prop("Amount"))
  ```

> Important: expenses are stored as **positive** numbers, with `Type` distinguishing direction. Any future formula or chart must respect this — don't sum `Amount` directly assuming sign.

## Income streams

- **Dad/Kelly** (recurring transfers)
- **Ventura Forward retainer** — $300 (see [[pricing-and-rates]])
- **Music Licensing** (see [[music-production]])

## Recurring expenses

- **Fuel:** Chevron
- **Food (Variable):** McDonald's, Wendy's
- **Cards:** Capital One, Apple Card (NSF returns flagged — ending balance noted as $7.36 in seed data)
- **Subscriptions:** Adobe CC, Spotify, Vercel

## Notion API limitations encountered

From `local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc`:

- Chart views default to `count` aggregation; `Sum → Amount` must be toggled in the Notion UI manually
- Views are tabs on the same database block — cannot place a separate view *above* a board on the same page
- Filter pattern: `Date "is within" → "This month"` auto-rolls; or hard-code a date range to lock to a specific month
- Calculate footer: built-in sum row at the bottom of any table view

## Tie-in to Life OS

The `Life OS - March (1)` database (Notion page id `4b15dccf-343e-8376-b25a-071c0f2f1f45`) seeds finance entries through the [[csv-to-notion-pipeline]]. CSV schema: `Date,Item,Area,Category,Status,Amount,Hours,Note`. Categories include `Income`, `Variable`, `Transport`, `Fixed Bill`, `Subscription`. Statuses: `Completed`, `Paid`, `Received`.

## Open thread

- Whether `Net Amount` formula property has been added permanently — Claude offered, no confirmation in transcript.
- Manual aggregation toggles still needed in Notion UI on every new chart view.

## Direct quote from Finn

> "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."

(See [[token-conservation-mindset]] and [[csv-to-notion-pipeline]].)

## Sources

- `local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc` — "Add income and expense summary to Notion"
- `local_1cfa988a-77d5-42b5-acb8-90109fcff213` — "Build Life OS in Notion with Claude"
