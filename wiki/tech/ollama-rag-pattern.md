---
title: "Ollama RAG Pattern"
type: tech
tags: [ollama, rag, pgvector, ai, embeddings, mistral, overlook]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53, local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af]
---

Local-LLM RAG stack used inside the [[overlook-strategy]] portal admin: [[Ollama]] for generation + embeddings, pgvector on Postgres for storage, FastAPI endpoints for the workflow. Cost-conscious by design — local model handles the bulk, [[anthropic]] / Sonnet only when judgment is needed. Same philosophy as [[hybrid-local-llm-workflow]].

## Models

- **Generation:** `mistral` (via Ollama) — for weekly summaries, document Q&A, triage
- **Embeddings:** `nomic-embed-text` (via Ollama) — chunks + queries

Ollama base URL: `http://localhost:11434` (default). Both models pulled with `ollama pull <name>`.

## Master switches

Two env vars, one each side:

- `ENABLE_AI=true` — backend (FastAPI / Railway). Without this, AI routers don't register.
- `NEXT_PUBLIC_ENABLE_AI=true` — frontend (Next.js / Vercel). Without this, AI components are hidden in the admin UI.

Both must be `true` for the AI features to be functional end-to-end. Either one false = features hidden or 404.

## Storage

[[postgres]] with **pgvector** extension. Chunks + embeddings live in the same DB as the rest of the portal data, on [[Railway]]. See [[railway-deployment]] for the volume mount note (`/data/uploads` for the source documents).

## Document upload → index workflow

1. Admin uploads PDF / DOCX / TXT via `DocumentManager` UI
2. Hit "Index" button
3. Backend chunks the document
4. Each chunk embedded with `nomic-embed-text`
5. Embeddings stored in pgvector
6. Document searchable via `AskAIView` (currently removed from portal — replaced with `FAQView` — but component still exists)

## Weekly summary draft → review → publish

For project status updates:

1. Cron / on-demand: generate weekly summary as **unpublished draft** with `mistral`
2. Admin reviews `AISummaryPanel` in admin dashboard
3. Admin edits + publishes
4. Published summary becomes a `FeedPost` (see [[alembic-postgres-patterns]] for the model)

The draft-then-review step is deliberate — never auto-publish AI content to clients.

## Admin status page

`/admin/ai` — shows model availability, embedding counts, last index run, ENABLE_AI flag state.

## CLI

`scripts/overlook-ai.py` — standalone CLI for the same primitives:

```bash
python scripts/overlook-ai.py status
python scripts/overlook-ai.py summarize
python scripts/overlook-ai.py triage
```

Daily routine concept floated in `local_dec9a139`: morning sweep with `summarize` then `triage`.

## Components touched

- `AISummaryPanel.tsx` — weekly summary review UI in admin
- `DocumentManager.tsx` — upload + index UI
- `AskAIView.tsx` — Q&A view (currently removed from portal, kept in repo)
- `FAQView.tsx` — replacement for `AskAIView` on portal side
- `scripts/overlook-ai.py` — CLI

## Future enhancements (not yet pursued)

Flagged in `local_dec9a139` but not built:

- Streaming summary generation (currently blocking call)
- Populate `prompt_tokens` from Ollama `eval_count`
- `slowapi` rate-limiting on `/ask` endpoint if portal-side AI is re-enabled

## Gotchas (hit personally)

- **Both env vars or nothing.** `ENABLE_AI=true` on backend without `NEXT_PUBLIC_ENABLE_AI=true` on frontend = backend ready, UI hidden. Confusing.
- **Volume mount.** Without `/data/uploads` mounted on Railway, indexed documents disappear on redeploy. See [[railway-deployment]].
- **Ollama is local.** This stack runs on Finn's M1 Max for dev. Production would need Ollama running somewhere reachable from Railway, or a swap to a hosted embedding API.
- **`AskAIView` removed but file kept.** If you rip it out fully, save the component first — Finn may want to re-add it.
- **`mistral` is small.** Good enough for summaries and triage; not a Sonnet replacement for nuanced judgment. Reach for Sonnet/Opus for creative or analytical tasks.

## Source citations

Sessions: `local_dec9a139` (full AI architecture audit, ENABLE_AI flags, Ollama base URL, model names, document → index → ask flow, weekly summary draft pattern, CLI), `local_2c4ac600` (hybrid local LLM + Sonnet workflow philosophy, "vibe coder" framing).
