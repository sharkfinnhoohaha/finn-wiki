---
title: "Document AI as the OCR layer for the document-analysis niche"
type: tech
tags: [gcp, document-ai, ocr, pgvector, ollama, document-analysis, agent-native-saas, article]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]], [[notebooklm-simple-ui-viral-ai]]
---

# Document AI as the OCR layer for the document-analysis niche

**Article 3 of 4 on the [[gcp-credits|$300 GCP credits]] series.** Estimated burn: **$60–$120.**

## The hypothesis

[[ai-agency-niches|The agency niche table]] flags **document analysis** as the highest revenue ceiling option ($3K–$30K MRR per the [[deep-research-strategic-arbitrage|Deep Research briefing]]) and a strong fit for Overlook because the existing [[overlook-portal-webapp|portal]] already runs [[ollama]] + [[pgvector]] for embeddings.

The missing piece in the existing stack: **OCR + structure extraction on real-world messy PDFs.** Ollama doesn't do this. Tesseract works for clean scans but falls over on rotated pages, hand-scribbled annotations, multi-column legal docs, and stamped insurance forms. Document AI handles all of those out of the box.

Use the $300 credit to spike the document-analysis niche with one real vertical's worth of documents — without committing to building the productized service until the OCR quality is proven.

## What you actually get

Document AI processors come in three flavors:

| Processor | Use case | Approximate price |
|---|---|---|
| **Form Parser** | Generic structured forms (insurance, intake, applications) | ~$1.50 per 100 pages |
| **OCR Processor** | Plain text extraction from any scanned doc | ~$1.50 per 1K pages |
| **Specialized parsers** | Invoice, contract, identity, lending docs | $30–$65 per 1K pages depending on parser |

For $60–$120 spike budget:

- ~4,000 pages through Form Parser, OR
- ~80,000 pages through plain OCR, OR
- ~2,000 pages through the specialized contract parser

That's enough to validate any single vertical at the depth needed to decide go/no-go.

## The candidate verticals from the wiki

From [[ai-agency-niches]] and Finn's surface area:

| Vertical | Document type | Volume per client | Why this might fit |
|---|---|---|---|
| **Entertainment law** | Contracts, riders, deal memos | 20–100 docs/mo | [[kelly-bennett]] is in this network — warm intro available |
| **Real estate (residential)** | Disclosures, inspection reports | 30–80 docs per transaction | [[ventura-forward|Ventura-area realtors]] are an adjacent market |
| **Aviation / flight schools** | Maintenance logs, currency forms, sign-offs | 50+ docs/mo per CFI | Finn knows the workflow ([[aviation-training]], [[johnson-aviation]]) |
| **Music supervision / cue sheets** | License agreements, cue lists | 10–30 docs per project | Berklee + [[extreme-music]] adjacency |

The aviation and music verticals are *deep* knowledge for Finn but *small* market. Entertainment law and real estate are *shallow* knowledge but *bigger* markets. The right pick depends on whether Finn wants to leverage existing relationships ([[kelly-bennett]]) or existing domain knowledge ([[aviation-training]]).

## The architecture

```
Client uploads PDF → Cloud Storage bucket
       │
       ▼
Cloud Function (Eventarc trigger on upload)
       │
       ├─→ Document AI processor (extract structured fields)
       │         │
       │         ▼
       │   Structured JSON
       │         │
       │         ├─→ Railway Postgres (extracted fields)
       │         └─→ Ollama nomic-embed (chunk + embed full text) → pgvector
       │
       └─→ Notify Overlook portal (Agents tab — see [[portal-orchestration-extension]])
```

Three layers:

1. **Document AI for OCR + structure.** GCP-side, $-per-page.
2. **Existing Ollama + pgvector for semantic indexing.** Railway-side, free.
3. **Existing Overlook portal for client review.** Vercel + Railway, already shipped.

Document AI is a **per-task cost** that scales linearly with client volume. That maps cleanly onto [[per-task-pricing]]: client pays $X per document processed, Overlook pays Document AI a fraction of that. Margin is observable per-task.

## Pricing model for the productized service

Walking the [[per-task-pricing]] math for a hypothetical real-estate-disclosure analysis service:

- **Customer time saved:** typical realtor reviews 30 disclosure docs per transaction at ~10 min each = 5 hours. At $200/hour realtor billable = $1,000 of time per transaction.
- **Service price:** $200 per transaction (review-and-flag-issues report).
- **Document AI cost:** 30 pages × $0.015 = $0.45.
- **Vertex AI Flash for summarization:** ~$0.05.
- **Sonnet for risk-flag judgment:** ~$0.30.
- **Total cost per execution:** ~$0.80. Margin: ~99.6% before fixed costs.

Even at 50% margin after Finn's review and ops overhead, this is the kind of unit economics [[claude-max-arbitrage|the briefing]] argues should be possible.

## What to spike with the credit

A 3-4 day experiment:

- **Day 1.** Pick one vertical. Get 20-50 sample PDFs (synthetic if needed; ideally real with names redacted).
- **Day 2.** Run them through Document AI. Eyeball extraction accuracy. Note where it fails (handwriting, stamps, tables).
- **Day 3.** Pipe the extracted text + structure into a Cowork session running the existing pgvector setup. Index, query, summarize.
- **Day 4.** Build the smallest possible "send PDF, get analysis" pipeline end-to-end. Test with one warm-network sample customer (e.g., a [[kelly-bennett]] referral or a realtor friend).

Acceptance criterion: by end of week, Finn has a numerical quality estimate (e.g., "Document AI extracts 92% of form fields correctly on real-estate disclosures") and one sample customer's feedback on whether the output is useful.

If both pass, this graduates to a [[ninety-day-launch-plan]] target. If either fails, the experiment is documented and the niche moves to "tested, didn't pursue."

## Caveats

> [!warning] PII and compliance
> Real client docs contain PII. Don't upload them to GCP without (a) a Data Processing Agreement in place, (b) proper IAM scoping, and (c) a retention policy. The spike should use synthetic or deeply redacted data. Production deployment requires legal review for any vertical Kelly would cover.

> [!warning] Document AI doesn't fix garbage in
> If the input is a phone-snapshot of a glare-y page, Document AI will return garbage. Production service needs a "rejected: please rescan" UX path. Don't ship without it.

> [!warning] Specialized parsers vs. Form Parser
> Specialized parsers (Invoice, Contract) are 20–40× more expensive but produce richer structured output. For a vertical-specific service, the specialized parser is usually correct; for a horizontal "generic PDF analyzer," it's wrong. Pick the parser to match the vertical, not the other way around.

## Related

- [[gcp-credits]]
- [[isenberg-future-of-saas-30-step]]
- [[ai-agency-niches]]
- [[claude-max-arbitrage]]
- [[deep-research-strategic-arbitrage]]
- [[ollama]]
- [[pgvector]]
- [[overlook-portal-webapp]]
- [[per-task-pricing]]
- [[ninety-day-launch-plan]]
- [[portal-orchestration-extension]]
- [[kelly-bennett]]
- [[gcp-vertex-gemini-mechanical-tier]]
- [[gcp-cloud-scheduler-agent-heartbeat]]
