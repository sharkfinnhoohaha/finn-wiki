---
title: "Orchestration as the new interface layer"
type: concept
tags: [concept, agents, orchestration, ux, belsky]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]]
---

# Orchestration as the new interface layer

[[scott-belsky]]'s frame, surfaced by [[greg-isenberg|Isenberg]] in [[isenberg-future-of-saas-30-step|the 30-step playbook]] (Step 17). The argument: the place users spend their day is no longer the GUI of any single app — it's the layer where they coordinate agents, validate outputs, and resolve issues. Whoever owns that coordination layer owns the workflow.

## Belsky's quote

> "The orchestration layer is the new interface layer as we spend our day coordinating agent workflows in a model agnostic fashion local and cloud and validating outputs human in the loop and resolving issues. The ultimate layer to own is where coordination takes place."

A reply Isenberg also reads: *"If coordination becomes the choke point, whoever owns that layer owns the flow."*

## Why this is non-obvious

Most "AI product" thinking still defaults to *"replace the form with a chat box."* Belsky is arguing something stronger: the form, the chat box, and the dashboard are *all* downstream artifacts. The actual interface is the orchestration surface — the dashboard for *which agents are running*, *which outputs need review*, *which workflows are stuck*, *which retries fired*.

The closest existing analog is something like Linear's My Issues view or GitHub's notification inbox — except instead of human-generated work items, the queue is agent-generated outputs needing approval, and the actions are *approve / retry / branch / kill.*

## What this implies for product surface design

If you're building an [[agent-native-saas]], the orchestration surface is your most important UI. Sketches of what that looks like:

| Element | What it shows | What it lets the user do |
|---|---|---|
| Run queue | Tasks the agent is currently executing | Pause, prioritize, kill |
| Output review | Completed tasks awaiting approval | Approve, edit, reject with feedback |
| Memory edit | What the agent has learned about this user | Correct, delete, pin |
| Failure log | Where retries are firing, why | Diagnose, change config, escalate |
| Adjacent suggestions | Workflows the agent thinks it could also run | Enable, defer |

This is roughly the surface area of [[openclaw|OpenClaw]]'s sessions-as-processes model ([[openclaw-architecture]]) — the talk argues for the same UX reorientation but inside an open-source agent runtime instead of a SaaS product.

## How this lands for Overlook

The [[overlook-portal-webapp|client portal]] is already partway there: it shows clients *what's happening on their account.* The agent-orchestration version would extend that to *what's the agent doing on your behalf right now, what does it need from you, what did it complete.* The Updates feed already has the right shape — what's missing is anything the agent can do autonomously, then surface for approval.

If Overlook ever productizes an [[agent-native-saas|agent-native]] line ([[ai-agency-niches]]), the portal IS the orchestration interface. Don't build a separate app — extend the one that's already shipped.

## Related concepts in the vault

- [[autonomous-agent-design-principles]] — Krentsel's design principles overlap heavily; closed control loops + sessions-as-processes is the same idea from the runtime side
- [[loopiness-framework]] — orchestration layer maps to Phase 4 (autonomous agents requiring closed loops)
- [[mcp-protocol]] — the wire that connects orchestration to actual tools
- [[openclaw-architecture]] — concrete reference implementation of an orchestration-first runtime

## Related

- [[isenberg-future-of-saas-30-step]]
- [[scott-belsky]]
- [[agent-native-saas]]
- [[autonomous-agent-design-principles]]
- [[openclaw-architecture]]
- [[client-portal-as-differentiator]]
