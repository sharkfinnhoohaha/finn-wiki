---
title: "Outscraper"
type: entity
tags: [entity, tool, scraping, google-maps, data-acquisition, directories]
created: 2026-05-06
updated: 2026-05-06
weight: low
node_size: 2
sources: [[isenberg-frey-chu-directory-2025]]
---

# Outscraper

Web scraping service used to extract Google Maps business listings as structured data. [[frey-chu|Frey Chu]]'s default tool for the data-acquisition step of [[profitable-directory-pattern]].

## Why it's in the wiki

It's the canonical step-3 tool in [[frey-chu|Frey]]'s methodology. Not affiliated, just what he's always used. URL: `outscraper.com`.

## Capabilities (per the source episode)

- Google Maps category-based scraping (e.g. "dog park" exact match)
- Freeform query scraping (returns ~6× the rows with junk — use exact category match where possible)
- Configurable fields: name, phone, address, postal code, state, hours, reviews, **street view image**, **location URL**
- Pricing surfaced before run — shows row count + cost estimate for confirmation

## Quirks Frey called out

- Time estimates are wildly off. Frey notes a 6,245-row dog-park scrape that quoted "12–30 hours" actually completed in ~2.
- Freeform queries pull a lot of junk. He pruned 119K rows → 5K on his first build. For dog parks he recommends: (a) drop rows with no address, (b) drop rows with <10 reviews, then (c) feed the remaining set to Claude / ChatGPT for category-fit classification.

## Why the **location URL** matters

The location URL field is load-bearing for AI-driven enrichment. Frey is building a tool that reads each listing's Google Maps URL, fetches the underlying review content, and prompts Claude to populate boolean feature columns ("does this dog park have shade?"). Without the location URL, the AI step requires manual review-mining.

## Alternatives

- Apify (more general scraping platform, Google Maps actor exists)
- Phantombuster (similar)
- Google Places API directly (cleaner but rate-limited, more expensive at scale, no review scraping)
- SerpApi (lighter — for SERP results, not detail-page scraping)

For a one-off directory build, Outscraper is the lowest-friction option. For a programmatic operation, Apify or rolling your own scraper on the Google Places API both win on long-run cost.

## Related

- [[profitable-directory-pattern]] — methodology this tool slots into
- [[frey-chu]] — operator who recommends it
- [[isenberg-frey-chu-directory-2025]] — source episode
