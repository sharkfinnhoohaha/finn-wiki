---
title: "Ollama Cloud Migration"
type: tech
tags: [ollama, infrastructure, models, migration, config]
created: 2026-06-29
updated: 2026-06-29
---

# Ollama Cloud Migration — 2026-06-29

Migrated all cloud models from Nous Portal to Ollama Cloud as primary provider. Flat-rate $20/mo, GPU-time based, 3 concurrent models, usage resets every 5h/7 days.

## What changed

- **Primary provider:** Ollama Cloud for all 4 cloud models (glm-5.2, deepseek-v4-flash, minimax-m3, gemini-3-flash-preview)
- **Fallback:** Nous Portal (z-ai/glm-5.2) for redundancy
- **Auxiliary slots:** Upgraded from deepseek-v3.2 to deepseek-v4-flash (compression, search, curator, triage, kanban, background review, session search). Reasoning disabled (reasoning_effort: none) — these slots don't need thinking tokens.
- **All 6 profiles:** Upgraded to deepseek-v4-flash
- **Delegation:** Upgraded to deepseek-v4-flash, reasoning kept on
- **Monitor slot:** Stays on local llama3.2:3b (2GB, free, appropriate for 16GB Mac)

## Why

Ollama Cloud is flat-rate $20/mo with no per-token cost. GLM-5.2 on Ollama Cloud is 2x faster sustained output than Nous Portal for the same model. The migration eliminates per-token billing anxiety and gives better performance.

## Verification

All 4 cloud models verified responding on Ollama Cloud. Gateway restarted (PID 21459), config live.

## Limitations

No API endpoint for usage tracking. The usage page at ollama.com/settings is the only way to check. Ollama sends an email at 90% usage. See [[ollama-pro-usage-tracking]] for the investigation.

## Related

- [[glm-5.2-vs-deepseek-v4]]
- [[ollama]]