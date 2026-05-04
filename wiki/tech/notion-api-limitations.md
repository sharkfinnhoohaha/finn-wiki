---
title: "Notion API Limitations"
type: tech
tags: [notion, api, life-os, finance, gotchas]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_9366a9eb-2bc0-46d2-9bec-56a8df6c4fbc, local_1cfa988a-77d5-42b5-acb8-90109fcff213]
---

[[Notion]] is the Life OS / Finance Hub. The API is decent for content + database CRUD, but several layout and view features the Notion UI offers are simply unreachable from the API. Hit these enough times that they belong in one place.

## Chart views default to count, not sum

When creating a number-chart view (e.g. "Total Income") via the API, the aggregation defaults to **count**. Cannot set `sum` programmatically. **Has to be toggled in the UI** — open the view, switch aggregation to `Sum → Amount`.

This burned a chunk of `local_9366a9eb` building the income/expenses summary. The number-chart view was created fine; the value was just wrong until manually flipped.

## Can't embed inline databases inside multi-column layouts

The [[heyismail-life-os]] template uses a multi-column page layout with inline databases inside columns. The Notion API supports `<columns>`, `<column>`, and inline `<database>` blocks individually, but **cannot place an inline database block inside a column block via API**. The combination is UI-only.

Result: any "Life OS"-style template Claude scaffolds will look flat compared to the visual reference until Finn manually drag-and-drops the databases into columns. From `local_1cfa988a`:

> "I can not find a life OS that looks like the template, despite you saying so"

Walk Finn through the manual drag-and-drop step rather than promising the API will do it.

## View IDs from API don't auto-link

When you create a view via API and reference its ID in an inline database block, the inline DB defaults to a **generic** view, not the one you created. User has to "Switch view" manually to pick the right one.

## Views are tabs, not standalone blocks

Notion views are tabs on a single database block — you cannot place a separate view *above* a board view on the same page. If you want a chart above the transactions table, you need either:
- Two separate database blocks (with the same data source), or
- Put the chart on a parent page and embed/link the database below

## Page architecture (used in Life OS build)

Block types in play:

- `<columns>`, `<column>` — layout
- `<callout>` — highlighted info blocks
- `<synced_block>` — content shared across pages
- `<database>` (inline tag) — database blocks
- Gray italic subtitles for descriptions

## Database schema (Transactions / Life OS)

```
Date,Item,Area,Category,Status,Amount,Hours,Note
```

- **Areas:** Finance, Overlook Strategy, Overlook Audio, School, Aviation, Health, Ventura Forward
- **Categories:** Sleep, Income, Variable, Transport, Fixed Bill, Subscription, Deep Work, Camarillo Instruction, Berklee Online, Completed
- **Statuses:** Completed, Paid, Received

## Money convention

Expenses stored as **positive numbers**, with a `Type` field (Income / Expense) — NOT signed amounts. Important for any future formula. Net formula:

```
if(prop("Type") == "Income", prop("Amount"), -prop("Amount"))
```

## Filter pattern for monthly views

Date "is within" → "This month" auto-rolls each month. Hard-coded date range locks to a specific month. Calculate footer (built-in sum row at bottom of table view) is the cheapest way to get a month total without a chart.

## CSV import workflow

For seeding data without burning tokens on row-by-row API calls:

1. Prompt Gemini (or any cheap model) with the schema → get CSV
2. Run `notion_csv_importer.py` (Python script, posted in `local_1cfa988a`) which uses the Notion API to create pages from rows
3. Verify in UI

Suggested mix for realistic logs: ~30-40 rows/week, 50% routine / 30% income / 20% variable.

## Page IDs encountered

Useful for follow-up work:

- `Life OS - March (1)` database: `4b15dccf-343e-8376-b25a-071c0f2f1f45`
- Finn's Command Center: `33c5dccf343e8194b318e930b696b761`
- Finn's Master Life OS: `33c5dccf343e815389b8c6c9fffd9f50`
- CSV Import Tool: `33d5dccf314d814db48bcc69b1a8f54c`

## Gotchas (hit personally)

- **Don't promise the heyismail visual layout.** API cannot recreate it. Acknowledge upfront, then walk through manual setup.
- **Don't destructively edit existing Notion pages.** `local_1cfa988a` had a bad moment where "Finn's Life" page got edited when Finn wanted a separate page. Always verify target page ID before writing.
- **Number charts need UI follow-up.** Create the view, then tell Finn the exact toggle to flip ("open the view → aggregation → Sum → Amount").
- **Old / junk data mixes in.** Watch for stale entries like "Sømliøya - Aviation HUD Overlay", "TheBandFriday" in seeded data.
- **Cheaper models for CSV generation.** This is the canonical "use Gemini, not Claude" task — see [[hybrid-local-llm-workflow]].

## Source citations

Sessions: `local_9366a9eb` (count vs sum aggregation, view-tab limitation, monthly filter patterns, net amount formula), `local_1cfa988a` (full Life OS build, multi-column layout failure, view ID auto-link issue, CSV importer + Gemini prompt template, page IDs, the destructive-edit incident).
