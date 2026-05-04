---
title: "Discord Hub Pattern"
type: concept
tags: [concept, agents, workflow, multi-project, openclaw]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 10
sources: [[openclaw-deep-dive-krentsel]]
---

# Discord Hub Pattern

A workflow pattern for managing complex, multi-project agent workflows, mentioned in [[alex-krentsel]]'s [[openclaw-deep-dive-krentsel|OpenClaw deep dive]].

The idea: use a Discord server as the coordination hub where [[openclaw]] (or any always-on agent) receives instructions, reports progress, and manages handoffs across multiple concurrent projects. Each project gets its own channel, the agent monitors all of them, and the human checks in asynchronously.

## Why Discord specifically

Discord gives you:
- Persistent channels per project/topic
- Threading for focused sub-conversations
- Bot APIs that are well-documented and free
- Mobile notifications so the human can steer from their phone
- File uploads and embeds for sharing artifacts

This is one of OpenClaw's Connector patterns (see [[openclaw-architecture]]): the agent reverse-engineers (or legitimately uses) a human communication platform as its interface layer.

## Relevance to Finn

Finn already uses a similar pattern with Cowork's Dispatch mode, where tasks spin up as separate sessions and report back. The Discord Hub pattern is the open-source equivalent for [[openclaw]] users. Worth noting if Finn ever wants to run a dedicated agent outside Cowork, or if a client wants autonomous agent workflows without being locked into Anthropic's ecosystem.

## Related

- [[openclaw]]
- [[loopiness-framework]]
- [[phase-3-agents]]
- [[cowork-sandbox-limits]]
