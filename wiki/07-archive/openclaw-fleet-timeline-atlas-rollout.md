---
title: "OpenClaw Fleet Timeline — Atlas Rollout (May 2026)"
type: project
status: active
tags: [openclaw, atlas, kevin, timeline, roadmap, agent-infrastructure]
created: 2026-05-05
updated: 2026-05-05
weight: high
node_size: 6
sources: [[hyperagent-playbook]]
---

# OpenClaw Fleet Timeline — Atlas Rollout (May 2026)

When [[atlas-agent|Atlas]] and [[kevin-agent|Kevin]] start chatting and learning together — and what has to be true for that to happen safely. All times Pacific.

## Timeline

### Phase 1 — silent ingest (2026-05-05 → 2026-05-12, days 1–7)

Atlas ingests the corpus and observes the fleet. **He posts nothing to *Openclaw Fleet Ops* during this window.** Cowork-Claude protects the discipline by not pinging him for analysis. Today is Day 2 of 7.

Finn's parallel work for the week:

- Land Bridge secrets: `GH_TOKEN_BRIDGE_OVERLOOK`, `BRIDGE_GIT_EMAIL`, `TAILSCALE_AUTHKEY_BRIDGE`.
- Verify Otto wiki-contribute fires end-to-end (file actually lands in `wiki/agent-contributions/otto/`).
- Design the command-receiver webhook contract for Atlas (the Day-22 prerequisite).
- Define and wire Atlas's read path to Kevin's `MEMORY/processed.jsonl` plus the cron logs.
- Build `spend.jsonl` cost telemetry (Phase-1-sized).
- Smoke-test *Kevin Asks* and *Otto Asks* channel routing into Atlas.

### Phase 1 close (EOD 2026-05-12)

Atlas signals ingest complete. **Cowork-Claude pushes the 5 starter lessons one at a time, awaiting Atlas's ack between each.** Order matters:

1. Pipeline Reporting Discipline
2. Telegram Emission Discipline
3. Rubric Axis Validation
4. Python Parallelism Discipline
5. Token Rotation Discipline

If any lesson stalls (no ack, or ack with concerns), pause and surface to Finn before pushing the next.

### Phase 2 — observer + coach (2026-05-13 → 2026-05-26, days 8–21)

Atlas operates as observer + coach. He reads Kevin's logs, files lessons in the Asks channels, and **Kevin starts asking Atlas questions when stuck** — this is the moment "Atlas and Kevin chatting and learning" becomes real. Lessons land as **proposed BOOTSTRAP / MEMORY edits** that Finn reviews before merging. No autonomous edits yet.

### Day 22 gate (2026-05-27 — operational)

Atlas can autonomously commit MEMORY and skill edits without Finn approval. Bidirectional Atlas ↔ Kevin loop is fully live. [[otto-agent|Otto]] is next in line for the same trajectory.

## To-do (Finn's plate)

Live punch list — keep it pruned as items land.

**This week (5/5–5/12):**

- [ ] Bridge: drop `GH_TOKEN_BRIDGE_OVERLOOK` into the secret store
- [ ] Bridge: set `BRIDGE_GIT_EMAIL`
- [ ] Bridge: mint and store `TAILSCALE_AUTHKEY_BRIDGE`
- [ ] Wiki-contribute crontab entries — install locally on Finn's Mac (TCC blocks SSH)
- [ ] Otto wiki-contribute verification — confirm an entry actually lands in `wiki/agent-contributions/otto/`
- [ ] Atlas read-path setup — `MEMORY/processed.jsonl` + cron logs accessible to Atlas
- [ ] Command-receiver webhook contract — design doc + scaffold (must exist before Day 22)
- [ ] Smoke-test *Kevin Asks* + *Otto Asks* channels into Atlas
- [ ] Cost telemetry — `spend.jsonl` writer + reader

**Phase 1 close (5/12):**

- [ ] Confirm Atlas signals ingest complete
- [ ] Push the 5 starter lessons in order, awaiting ack between each (Cowork-Claude executes; Finn watches)

**Phase 2 (5/13–5/26):**

- [ ] Review proposed BOOTSTRAP / MEMORY edits as Atlas files them
- [ ] Watch for Kevin → Atlas question patterns; capture the first few back into the wiki

**Day 22 gate (5/27):**

- [ ] Flip the autonomous-commit flag for Atlas
- [ ] Begin Otto's analogous trajectory

## See also

[[openclaw-fleet]] · [[openclaw-fleet-2026-05-05-atlas-online]] · [[hyperagent-playbook]] · [[mission-control]]
