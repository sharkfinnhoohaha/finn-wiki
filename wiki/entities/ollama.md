---
title: "Ollama"
type: entity
tags: [tool, llm, local-ai, hybrid-workflow]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-dec9a139]], [[session-2c4ac600]]
---

# Ollama

Local LLM runtime. Hosts open models on Finn's M1 Max for the cost-conscious half of his hybrid agent workflow. Models pulled: `mistral` (generation) and `nomic-embed-text` (embeddings). Default base URL: `http://localhost:11434`.

## Where it's used

- **[[overlook-portal-webapp]] AI features.** `mistral` for weekly project summaries (generated as unpublished drafts, admin reviews + publishes) and AI Q&A. `nomic-embed-text` to embed documents for RAG via [[pgvector]].
  - `AISummaryPanel`, `DocumentManager`, `AskAIView` (since removed from portal, replaced by `FAQView`)
  - CLI: `python scripts/overlook-ai.py status | summarize | triage`
  - Master switches: `ENABLE_AI=true` (backend), `NEXT_PUBLIC_ENABLE_AI=true` (frontend)
  - Admin status page at `/admin/ai`
- **Hybrid local LLM + Claude Code workflow.** Two parallel terminals: `cc-sonnet` for planning + complex synthesis, `cc-local` / `aider-local` for grunt work. Aliases configured. Global `~/.claude/CLAUDE.md` instructs Sonnet to split tasks and emit a `==== LOCAL MODEL TASKS ====` block for handoff. See [[hybrid-llm-workflow]].

## Gotchas

- **Document RAG flow:** upload PDF/DOCX/TXT → hit "Index" → chunks + embeddings via `nomic-embed-text` → [[pgvector]]
- Future enhancements flagged but not built: streaming summary generation, populating `prompt_tokens` from Ollama's `eval_count`, `slowapi` rate-limiting on `/ask` if portal AI returns

## See also

- [[pgvector]]
- [[hybrid-llm-workflow]]
- [[aider]]
- [[overlook-portal-webapp]]
