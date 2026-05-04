---
title: "Notion"
type: entity
tags: [tool, service, notes, database, life-os]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-9366a9eb]], [[session-1cfa988a]]
---

# Notion

Workspace tool Finn runs his [[notion-life-os]] in. Houses the Finance Hub / Transactions database, the Master Life OS, the Command Center, and the CSV Import Tool. Finn pushes content via the Notion API (often through Claude or a Python importer) and edits in the UI.

## How it's used

- **Master Life OS** page (id `33c5dccf343e815389b8c6c9fffd9f50`) — tracks 6 areas: Finance, Overlook Strategy, Overlook Audio, School, Aviation, Health
- **Life OS - March (1)** database (page id `4b15dccf-343e-8376-b25a-071c0f2f1f45`) — seeded with 50 entries across the 6 areas
- **Command Center** page (id `33c5dccf343e8194b318e930b696b761`)
- **CSV Import Tool** page (id `33d5dccf314d814db48bcc69b1a8f54c`) — Python script `notion_csv_importer.py` posts CSV rows via API, paired with a Gemini prompt template for generating realistic daily logs
- **Transactions database** with `Type` (Income/Expense), `Amount`, `Date` properties — see [[finance-hub]]

## API limitations Finn has hit

- **Chart aggregation defaults to count, not sum.** Number-chart views created via API show `count` and there's no way to set `sum` programmatically — Finn has to manually toggle `Sum → Amount` in the UI for every view. Live constraint, not a bug.
- **No inline databases inside multi-column layouts via API.** This blocked the heyismail-style Life OS replication. The `<columns><column><database>` structure works in the UI but the API can't create inline-DB blocks inside columns. Finn has to drag-and-drop manually.
- **View IDs created via API don't auto-link from inline DB blocks.** They default to a generic view; the user has to manually "Switch view" to the named one. So even when views are pre-created, the page won't render them.
- **No view-above-board on the same database block.** Views are tabs on the same database — you cannot place a separate aggregated view *above* a board on the same page. Workaround: a separate "summary" mini-database synced or duplicated.

## Schemas in use

- **CSV schema:** `Date,Item,Area,Category,Status,Amount,Hours,Note`
- **Areas:** Finance, Overlook Strategy, Overlook Audio, School, Aviation, Health, Ventura Forward
- **Categories:** Sleep, Income, Variable, Transport, Fixed Bill, Subscription, Deep Work, Camarillo Instruction, Berklee Online, Completed
- **Statuses:** Completed, Paid, Received
- **Net amount formula** (since expenses are stored as positive numbers with a `Type` flag, not signed): `if(prop("Type") == "Income", prop("Amount"), -prop("Amount"))`
- **Filter pattern for "this month":** Date "is within" → "This month" (auto-rolls), or hard-coded date range to lock to a specific month

## Trust note

The Life OS build session (see session-1cfa988a) included a destructive edit: Claude modified the existing "Finn's Life" page when Finn wanted a separate page. Trust was damaged, page got renamed to "Finn's Master Life OS" to disambiguate. Be very careful about which Notion page you're editing — duplicate-name confusion is a real risk.

> [!warning]
> Finn's quote: "Why did you change 'Finn's Life'? I did not ask you to. i wanted a new page and you fucked up my existing one that is SEPERATE."

## See also

- [[notion-life-os]]
- [[finance-hub]]
- [[csv-import-workflow]]
