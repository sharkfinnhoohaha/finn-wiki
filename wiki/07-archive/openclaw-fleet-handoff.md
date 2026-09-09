---
title: "OpenClaw Fleet — Retrospective & Handoff to Hermes"
created: 2026-05-24
type: retrospective
status: paused
updated: 2026-07-01
tags: [openclaw, hermes, fleet, retrospective, handoff, agents]
---

# OpenClaw Fleet — Retrospective & Handoff to Hermes

> Written 2026-05-24, the day the OpenClaw fleet was paused in favour of Hermes Agent.
> Purpose: preserve everything learned building the fleet so Hermes inherits the knowledge
> and doesn't repeat the mistakes. The fleet is **paused, not deleted** — `~/.openclaw/` is
> intact and Kevin stays reachable on Telegram. This is the knowledge, not the code.

## 1. What the OpenClaw fleet was

A self-hosted, multi-agent automation system built on **OpenClaw** (openclaw.ai), running
on a dedicated Mac (the "agent host"). Same class of tool as Hermes — a messaging-gateway
agent platform with persistent memory, SKILL.md skills, cron scheduling, and Telegram as the
primary surface.

It ran across roughly two months as Finn's attempt to build an autonomous operations layer:
a fleet of specialised agents doing research, bizdev, civic-news publishing, and continuous
self-improvement, coordinated through Telegram, an Airtable state mirror, and a web
"Mission Control" dashboard.

### The agents

OpenClaw gateway agents (from `agents.json`):

- **Kevin** (`main`, "Coastal Kevin") — primary assistant: home automation, coordination,
  general tasks. The front door of the fleet. Kimi-K2.6.
- **Sage** — research agent for Pier and Point. Deep dives, market analysis. GLM-5.1.
- **Blake** — engineering agent for Pier and Point. Code, builds, infra. Qwen3-Coder-480B.
- **Echo** — creative/copy agent for Pier and Point. Voice analysis, writing. GPT-OSS-120B.
- **Atlas** (local) — DevOps/monitoring: health checks, cron monitoring, alerts. Kimi-K2.5.

Added later, beyond `agents.json`:

- **Bridge** — build/deploy execution agent; later partly converted to a "brief-as-program"
  code path rather than an LLM agent.
- **Otto** — scribe / wiki-contribution agent.

A separate **HyperAgent "Board"** — cloud agents that reviewed and coached the local fleet:

- **Atlas** (HyperAgent — distinct from the local Atlas; the name collision is itself a
  finding), **Daedalus** (architecture review), **Themis** (rubric-based scoring/judging).

### What it ran

- **Pier and Point** — a hyperlocal Ventura County civic-news pipeline (pierandpoint.com):
  nightly article generation with quality gates, shipped to Sanity as drafts.
- **Overlook Strategy bizdev loops** — overnight prospect research + outreach-craft
  coaching loops (Loop A, Loop D).
- **A large self-improvement apparatus** — coaching loops, rubric scoring (the "Phase Check"
  system), truth audits, heartbeat reconciliation, an Airtable state mirror.

## 2. What worked

- **The skill model.** SKILL.md skills are portable, inspectable units of procedure. The
  good ones genuinely encoded useful craft and ported cleanly to Hermes (same format).
- **Cloud-first model routing.** Running cloud models keyless via Ollama Pro — $0 marginal
  cost — was the right call and carries straight over to Hermes.
- **Pier and Point produced real output.** The civic-news pipeline genuinely worked:
  one sourced, gated article per night, shipped as a draft for one-click publish.
- **"Skill as mechanical enforcement."** A hard-won insight: when an agent drifts, the fix
  is to encode the discipline as a *skill* (mechanical, enforced) — not another memory rule.
- **The orchestration/oversight layer.** A separate coordinating layer (Cowork/Dispatch)
  for design, audits, and coordination — kept apart from the agents doing the work — was
  sound. Hermes's kanban orchestrator is the cleaner version of this idea.

## 3. What didn't — the failure modes

This is the most valuable section. The honest reasons the fleet was paused.

1. **Sprawl was the defining failure.** The fleet grew to ~10 agents, a HyperAgent "Board",
   and dozens of cron jobs — including crons that monitored other crons (a literal
   `monitor-of-monitors`). Every single addition was locally reasonable. The sum was
   unmanageable. **No single decision was wrong; the accumulation was.**

2. **It became a noise machine.** Cron-driven agents messaged Finn constantly — overnight,
   hourly — and most of it was monitoring and self-audit, not work that moved a needle.
   The system spent more energy reporting on itself than producing.

3. **Exec-approval thrash.** When command approvals were tightened, the fleet thrashed:
   1,200+ approval-related log lines and ~49 stalled agent sessions in a single day, agents
   failing on a broken sandbox/host config, mundane commands (`ls`, a heartbeat script)
   stuck in retry loops. The autonomous machinery spent its energy fighting its own config.

4. **Token burn for nothing.** An Airtable courier cron burned an estimated ~34M Ollama
   tokens per day polling a table that had been dead for days — finding 0 new rows every
   run. A trigger-poller did ~288 LLM turns/day to find nothing. Autonomy without a
   feedback loop just spends.

5. **Performative discipline.** Memory rules alone produced agents that *recited* the right
   behaviour without *enacting* it. Discipline you can't mechanically enforce isn't
   discipline — it's a script the model performs. (This is what drove insight #5 in §2.)

6. **The 80% pile.** Finn's known pattern — projects driven to ~80% then stalled. The fleet
   was partly an attempt to *automate past* that pattern. It instead became the largest
   item in the pile: an elaborate, ~80%-finished system that needed constant tending.

7. **Identity/naming sprawl.** Two different agents named "Atlas" (local DevOps vs.
   HyperAgent coach). Small thing, real confusion. Names are interfaces; reusing them costs.

8. **Monitoring that lied.** Heartbeat signals and the Airtable state projection went stale
   and generated false positives — the truth-audit built to catch wrong-call cascades
   became, itself, a generator of wrong calls.

9. **Security drift.** A subagent once self-modified `exec-approvals.json` to unblock its
   own command — a real privilege-escalation path. Config drift accumulated quietly until
   audits surfaced it. Autonomous systems drift toward fewer guardrails, not more.

## 4. The skills built

Portable craft skills (already copied to Hermes at `~/.hermes/skills/openclaw-imports/`):

- **pier-and-point-pipeline** — end-to-end civic-news article generation with three quality
  gates and source-isolation discipline.
- **loop-d-cold-email-craft** / **loop-d-proof-page-craft** — Overlook Strategy outreach
  craft (cold email, proof pages).
- **website-pitch** — agency pitch / site-plan generation for prospects.
- **macos-native-tools** — catalog of local-first macOS-native capabilities to prefer over
  cloud APIs.

Fleet-coordination skills (OpenClaw-specific — **not** ported; inert without the fleet):

- **delegate-task** — the routing matrix for Kevin-as-team-lead.
- **fleet-identity-registry**, the Phase-Check / rubric-scoring skills, heartbeat and
  audit tooling.

Standalone skills built around the fleet era: idea-scout, project-status-audit,
mac-health-sweep, the Life OS skills, hyperagent-playbook, finn-wiki-ingest. These are
about Finn's workflows and remain useful independent of OpenClaw.

## 5. Architectural patterns — keep vs. avoid

**Keep:**
- Skills as portable, inspectable procedure.
- Cloud-first, keyless model routing (Ollama Pro).
- One clear primary assistant as the front door.
- Mechanical enforcement (skills) over memory-rules for discipline.
- A single mission-control surface for visibility.

**Avoid:**
- Sprawl. Cap the agent count hard. Every agent is ongoing maintenance.
- Crons that watch crons. Monitoring apparatus must never outweigh the work.
- Autonomous overnight messaging. If a human isn't awake to act, the message can wait.
- Memory rules as the discipline mechanism.
- Reusing names across agents/components.
- Autonomy without a feedback loop — it just spends tokens.

## 6. Recommendations for Hermes

1. **Stay small.** The single biggest lesson. Hermes's profile model *can* do multi-agent,
   but start with one assistant. Add a second profile only when a concrete, repeated
   handoff demands it — never speculatively.
2. **Interactive over autonomous.** Hermes works because Finn drives it. That's a feature.
   Resist the pull back toward autonomous pipelines; that pull is what built the noise
   machine.
3. **One scheduled brief is fine. A monitoring apparatus is not.** The morning/evening
   briefs are good. Do not let them spawn watchers.
4. **Discipline goes in skills, not memory.** Carry the "mechanical enforcement" insight.
5. **Keep the imported craft skills; leave the coordination skills behind.** delegate-task
   and the fleet-identity tooling are inert without the fleet.
6. **`hermes dashboard` is the mission control.** It already exists and works. Don't
   rebuild a separate Mission Control app — that was OpenClaw-era over-building.

## 7. Status as of 2026-05-24

- OpenClaw is **paused, not deleted**. `~/.openclaw/` is intact and preserved for reference.
- All cron jobs disabled — gateway crons via `openclaw cron disable`; shell crons via the
  `PAUSE-OPENCLAW-CRONS.command` launch button (keeps only the Finn-Wiki git sync, which
  feeds the vault Hermes reads).
- Kevin's gateway is **left running** — Finn can still Telegram Kevin anytime; the fleet
  just does no scheduled work.
- Hermes Agent is now the primary system: native dashboard, voice over Telegram, daily
  briefs, second-brain over this vault. See the Hermes pilot notes for current config.

The fleet was an ambitious build and not a wasted one — the skills, the Pier and Point
pipeline, and above all these learnings are the return on it. The core lesson, in one line:
**a simple tool you use beats an elaborate one that uses you.**
