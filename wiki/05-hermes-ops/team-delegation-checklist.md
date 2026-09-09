---
attention: 0
entity_role: team-ops-checklist
updated: 2026-09-09
---

# Kevin Team Ops — Delegation Checklist

> Strict rules for who gets what. Read this before dispatching.

## The roster (verified specialties, 09-09 battery)
- **deepseek-v4-flash:0731-cloud** — cheap workhorse. Retrieval, verification, structured extraction. Fast, flat-rate, low hallucination. DEFAULT for research grunt work.
- **deepseek-v4-pro:cloud** — heavy research lead. Superior retrieval instincts (found the $750k settlement no one else did). Use for primary-source digging.
- **T-models (coder via Kanban)** — code tasks. default_assignee=coder.
- **MoA war-room preset** (kimi-k2.6 + qwen3.5:397b + minimax-m3 + deepseek-v4-pro → glm-5.3 aggregator) — ESCALATION ONLY. Multi-angle analysis, editorial ranking, anything where deliberation beats speed.

## Dispatch checklist (run top to bottom)
1. **Is it buildable/mechanical?** → delegate. Finn wants CEO-mode: I orchestrate, team builds. Do not hand-build what a subagent can.
2. **Config.yaml edits, destructive ops, external side-effect writes, anything Finn-gated** → me, never a child.
3. **Pick model by task:**
   - fact-lookup / verify / scrape → flash
   - deep research with citations → v4-pro (ALWAYS inject research-verification template: verbatim quotes, 3-source rule, confidence labels)
   - code → coder/Kanban
   - deliberation / ranking / editorial → MoA preset (escalation only)
4. **Concurrency: max 2-3 children at once.** Stagger waves. Ollama congests and children stall at 'waiting for model response'.
5. **Cap: 40 iterations, 900s per child.** If it can't finish in that, split the task.
6. **Inject everything needed in context** — children know nothing of this conversation.
7. **After any non-trivial batch:** dated debrief to ~/Code/hermes-team/TEAM-LOG.md (task/outcome/worked/differently/specialty signal). 3+ repeat weaknesses = systemic gap, escalate to Finn.

## Never
- Same failure twice without changing strategy (see stop-after-n, escalation-chain).
- Ask a child to ask Finn — children can't.
- Accept a child's "done" on external side effects without verifying (URL, ID, or absolute path back).
- Guess CLI flags: `--help` first.