---
attention: 0
entity_role: self-reference
updated: 2026-09-09
---

# Kevin Ops — How Hermes Agent Works (this instance)

> Authoritative docs: https://hermes-agent.nousresearch.com/docs
> Machine-readable index: /docs/llms.txt (curated) and /docs/llms-full.txt (complete)

## Architecture (verified from docs + local install)
- Hermes Agent by Nous Research: autonomous agent, self-improving (creates skills from experience, persists knowledge, builds user model across sessions). Not tied to an IDE or laptop.
- This instance: gateway on Finn's closet server Mac (launchd `ai.hermes.gateway`), reached via Telegram/WhatsApp/webhook. Desktop or CLI available but server is the primary.
- v0.21.1. Update via `hermes update`, then gateway restart.

## Memory layers (in order of load)
1. **MEMORY.md / USER.md** — tiny always-in-context files (8k/1.5k chars). Durable identity + hard rules only. Keep lean: volatile project state goes to the holographic store.
2. **Holographic store** — semantic recall, auto-surfaced when relevant. Holds business/project facts.
3. **Wiki knowledge graph** — Obsidian-style pages at ~/Code/Finn-Wiki, graphified nightly (graphify MCP `graphify-finn-wiki`). This hierarchy lives there.
4. **Session search** — full transcripts, searchable. 16MB, local, permanent.

## Skills
- Procedural memory: skills are how-to files loaded when relevant. Create via skill_manage. Open standard (agentskills.io).
- Key skills: delegation-debrief, research-verification, stop-after-n, escalation-chain, git-tree-hygiene.

## Tools
- 60+ built-in; MCP servers extend (graphify-finn-wiki registered). Nous Portal OAuth bundles web search, image gen, TTS, browser.
- `--help` FIRST before guessing CLI flags (hermes moa create does not exist; `hermes auth`, `hermes model`, `hermes setup` are the real commands).

## Config
- /Users/Finn/.hermes/config.yaml — surgical YAML edits only (dotted model names break `hermes config set`). Delegation: max_iterations 40, child_timeout 900s, cap 2-3 concurrent children (Ollama congestion).