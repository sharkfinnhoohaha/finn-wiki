---
title: "CSV-to-Notion Pipeline"
type: workflow
tags: [workflow, notion, csv, gemini, life-os, finance]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[local_1cfa988a-77d5-42b5-acb8-90109fcff213]]
---

## TL;DR

Gemini prompt template generates realistic CSV → `notion_csv_importer.py` posts rows to the Notion API. Used to seed the `Life OS - March (1)` database and to simulate financial what-ifs. Aim is **~30–40 rows/week** with a **50% routine / 30% income / 20% variable** mix.

## Pipeline

1. Run the Gemini prompt template — output is a CSV
2. Save as `.csv`
3. Run `notion_csv_importer.py` (Python script that posts to Notion API)
4. Rows land in `Life OS - March (1)` database (Notion page id `4b15dccf-343e-8376-b25a-071c0f2f1f45`)

## CSV schema (fixed)

```
Date,Item,Area,Category,Status,Amount,Hours,Note
```

## Vocabulary (use exactly these)

### Areas

- Finance
- Overlook Strategy
- Overlook Audio
- School
- Aviation
- Health
- Ventura Forward

### Categories

- Sleep
- Income
- Variable
- Transport
- Fixed Bill
- Subscription
- Deep Work
- Camarillo Instruction
- Berklee Online
- Completed

### Statuses

- Completed
- Paid
- Received

## Rules to follow when generating

- **Amount is always positive.** Direction is determined by `Type` (Income vs Expense) — see [[finance-tracking]]. Don't sign amounts.
- Mix target: **50% routine / 30% income / 20% variable**
- Volume: ~30–40 rows/week
- See [[finance-tracking]] for which vendors recur (Chevron, McDonald's, Wendy's, Capital One, Adobe CC, Spotify, Vercel) and which income sources to vary (Dad/Kelly, [[ventura-forward|Ventura Forward $300]], Music Licensing).

## Why this exists

Connects to [[token-conservation-mindset]]:

> "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."

Cheap model (Gemini) handles the structured-data generation; expensive compute (Claude / Sonnet) is reserved for synthesis and analysis on top of the loaded data.

## Use cases beyond seeding

Finn wants this pipeline to support **financial scenario simulation**:

- Raise rates 20%
- Cut food spending
- Add music licensing income

That's the open enhancement on the [[business-ideas-backlog|ideas backlog]] — a CSV import button that triggers a fresh Gemini run with scenario parameters.

## Source

- `local_1cfa988a-77d5-42b5-acb8-90109fcff213` — "Build Life OS in Notion with Claude"
