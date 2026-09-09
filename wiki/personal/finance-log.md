---
attention: 0
title: "Finance Log"
type: personal
tags: [finance, life-os, money, log]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 5
sources: []
---

## TL;DR

Append-only ledger of cash-position events that drive the **Cash** vital sign on the [[finn-life-os|Life OS dashboard]]. Replaces the old Notion-only finance read in [[finn-life-os-daily]] — wiki is now canonical for *qualitative* cash status (NSF events, low-balance flags, big payments). The Notion Finance Hub continues to be the system of record for the underlying *quantitative* transaction stream — see [[finance-tracking]] for that schema.

> [!tip] When to log here
> Log events that change your read on cash health: NSF returns, missed payments, big payouts cleared, balance-low warnings. Don't log every line item — that's what Notion is for. This file is the human-readable summary the daily skill uses to set the Cash pulse to ok / warn / danger.

## Format contract (read by `finn-life-os-daily`)

The daily skill parses the `## Entries` section. One bullet per event, in this exact format:

```
- YYYY-MM-DD · <kind> · <source> · <signed-amount> · "<note>"
```

| Field | Notes |
|---|---|
| `YYYY-MM-DD` | ISO date. Required. |
| `<kind>` | One of: `NSF` · `Income` · `Expense` · `Transfer` · `LowBalance` · `Resolved` |
| `<source>` | Vendor / card / account. Free text. |
| `<signed-amount>` | `+$300.00` for inflow, `-$45.00` for outflow. Always include the dollar sign. Use `$0` for `LowBalance` / `Resolved` events that don't move money. |
| `"<note>"` | Optional, in straight quotes. Operator tone (no motivational filler). |

### Pulse rules the skill applies

The skill scans entries with `date ≥ today - 14d` and computes:

- **`Critical`** — any `NSF` event in the 14-day window AND no matching `Resolved` event with date later than the latest `NSF`.
- **`Tight`** — at least one `LowBalance` event in the 14-day window with no later `Resolved`, OR ≥3 `Expense` events ≥ $200 in 7d with no offsetting `Income`.
- **`Healthy`** — neither of the above. Default state.

The skill never writes to this file. To clear an `NSF` flag, append a `Resolved` entry with a later date and a note describing the resolution. To clear a `LowBalance`, do the same.

### Examples (do not delete — these illustrate the format)

```
- 2026-04-15 · NSF · Apple Card · -$35.00 · "first NSF in 3mo, watch for cascading"
- 2026-04-18 · NSF · Apple Card · -$35.00 · "2nd return, balance went negative"
- 2026-04-22 · Income · Ventura Forward retainer · +$300.00 · "April invoice cleared"
- 2026-04-23 · Resolved · Apple Card · $0 · "balance positive, no further returns"
- 2026-04-26 · LowBalance · Capital One · $0 · "ending balance $7.36 — cover before next auto-pay"
```

## Entries

<!-- finn-life-os-daily reads everything below this line until end of section -->

- 2026-04-28 · LowBalance · Capital One · $0 · "placeholder until first real entry — replace or delete"

## Income streams (reference)

Pulled from [[finance-tracking]]. Update if a stream is added or dropped.

- **Dad/Kelly** (recurring transfers)
- **Ventura Forward retainer** — $300/mo (see [[pricing-and-rates]])
- **Music Licensing** (see [[music-production]])

## Recurring expenses (reference)

- **Cards:** Capital One, Apple Card (NSF history flagged)
- **Subscriptions:** Adobe CC, Spotify, Vercel
- **Fuel:** Chevron
- **Food (variable):** McDonald's, Wendy's

## Open threads

- Decide whether to mirror NSF entries from Notion's finance hub automatically via [[life-os-update]] reverse-direction sync, or keep manual entry as the source of truth here.
- After 30 days of real entries, evaluate whether the format is right or needs more fields (e.g., balance snapshot column).

## Related

- [[finance-tracking]] — Notion Finance Hub schema (the underlying transaction stream)
- [[finn-life-os-daily]] — daily Life OS dashboard refresh that reads this file
- [[life-os-update]] — weekly Notion sync skill
- [[apple-card]] — flagged in past NSF returns

## Sources

- This page is the canonical record. Sources for individual entries should be added inline in the `<note>` field if non-obvious.
