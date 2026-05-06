---
title: "OpenClaw Fleet"
type: project
status: active
aliases: [openclaw-agent-fleet, fleet]
tags: [openclaw, agent-fleet, agent-infrastructure, hyperagent, atlas, kevin, otto, bridge, internal-tooling]
created: 2026-05-05
updated: 2026-05-05
weight: high
node_size: 12
sources: [[hyperagent-playbook]], [[openclaw-deep-dive-krentsel]], [[youtube-jack-roberts-openclaw-antigravity]]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 4
effort_score: 9
roi_score: 0
icon: "🤖"
area: agent-infrastructure
last_touched: 2026-05-05
next_action: "Atlas is in Phase 1 silent ingest (days 1–7). Land Bridge secrets in parallel."
blocker: "Bridge is staged on three missing secrets (GH_TOKEN_BRIDGE_OVERLOOK, BRIDGE_GIT_EMAIL, TAILSCALE_AUTHKEY_BRIDGE)."
---

# OpenClaw Fleet

Finn's local OpenClaw-shaped agent fleet — the daemon stack that turns Finn's MacBook Pro into a multi-agent operator. This page is the project index: which agents exist, where they run, and what they're for. It sits below [[mission-control]] (the dashboard surface) and above the per-agent live state in `~/agent/workspace/`.

The fleet pattern follows [[openclaw-architecture|the OpenClaw architecture]] (Connector → Gateway Controller → Agent Runtime) but is built on Finn's stack: [[hyperagent|HyperAgent]] for hosted runtime, Telegram as the connector layer (six channels — Atlas, Fleet Coach, Exec, Kevin Asks, Otto Asks, Observations, plus the shared *Openclaw Fleet Ops*), GitHub-backed [[living-config-files]], and Tailscale SSH between Finn's MacBook and Kevin's Mac.

## Roster

- [[atlas-agent|Atlas]] — meta-coach / Professor. HyperAgent-hosted. Just landed 2026-05-05. Currently Day 2 of Phase 1 silent ingest. Surface: Telegram. Hard Rule #10 sets six channels and grants Atlas channel-admin on *Openclaw Fleet Ops*.
- [[kevin-agent|Kevin]] — pipeline operator. Runs the [[pier-and-point-post|Pier and Point]] publishing pipeline plus auxiliary scribe duties. Online and contributing wiki entries (`wiki/agent-contributions/kevin/`).
- [[otto-agent|Otto]] — scribe agent. Wiki-contribute test fire kicked off 2026-05-05; not verified end-to-end yet.
- [[bridge-agent|Bridge]] — webdev specialist. Staged but blocked on three missing secrets only Finn can supply.
- [[mission-control]] — separate project (the dashboard, not a fleet member). Audited on its own track.

## Current state

Dated progress notes in chronological order (newest first):

- [[openclaw-fleet-2026-05-05-atlas-online]] — Atlas onboarding lands; first agent-contribution from Kevin; Otto/Bridge state
- [[openclaw-fleet-timeline-atlas-rollout]] — Atlas Phase 1 → Day 22 rollout schedule and Finn's punch list

## What this page is for

A persistent index. Updated as agents come online or change roles. Per-day operational notes live in their own dated pages (linked above) so this page stays scannable.

## See also

[[openclaw|OpenClaw]] (the upstream tool) · [[openclaw-architecture]] · [[mission-control]] · [[hyperagent-playbook]] · [[hyperagent]] · [[fleet-of-agents]] · [[living-config-files]]
