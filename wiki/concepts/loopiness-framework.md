---
title: "Loopiness Framework"
type: concept
tags: [concept, agents, ai-history, framework, openclaw]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 15
sources: [[openclaw-deep-dive-krentsel]]
---

# Loopiness Framework

[[alex-krentsel]]'s model for understanding the progression of AI systems, introduced in his [[openclaw-deep-dive-krentsel|OpenClaw deep dive]]. The core claim: all agentic systems boil down to LLM calls. The difference across generations is how much context gets provided and how many loops the system runs before returning control. Progress = increasing "loopiness."

## The four phases

| Phase | Label | Era | Examples | Loop depth |
|---|---|---|---|---|
| 1 | Next-token predictors | 2018–2020 | BERT, GPT-1/2/3, LAMDA | Single inference, no loop |
| 2 | Fine-tuned assistants | 2022–2024 | ChatGPT, Claude, Gemini | Multi-turn conversation |
| 3 | Scoped agents | 2024–2025 | [[claude-code]], Codex, Cursor, LangChain, AutoGen, CrewAI | Tool-calling loops with fixed toolsets |
| 4 | Autonomous agents | 2025–2026 | [[openclaw]], ??? | Tool-calling + dynamic tool discovery + env ownership |

The visual metaphor: a Matryoshka doll. Each phase wraps the previous one. Phase 4 agents still use Phase 1 transformer inference under the hood, they just add more recursive context layers.

## What separates Phase 3 from Phase 4

Phase 3 agents (like Claude Code, Cursor) have tool-use but operate within a scoped session. You invoke them, they work, they return results.

Phase 4 agents own their environment. They run continuously, discover new tools at runtime, manage their own memory across sessions, schedule future actions via cron, and can spawn sub-agents. [[openclaw]] is the reference implementation: it has Connectors (always-on communication), a Gateway Controller (sessions, memory, heartbeat), and an Agent Runtime.

## Relationship to existing wiki framing

> [!warning] Numbering mismatch with [[phase-3-agents]]
> The existing [[phase-3-agents]] page (from the [[deep-research-strategic-arbitrage|Deep Research briefing]]) uses Phase 0–3. Krentsel uses Phase 1–4. Same progression, different labels. Krentsel's Phase 4 = the existing page's Phase 3. Neither numbering is canonical industry standard. This page uses Krentsel's 1–4 because it's the primary source for this concept.

## Why this matters for Finn

The framework gives a clean way to evaluate tools and position services. When a client asks "what can AI do for us?", the answer depends on what phase of agent they're willing to deploy. Phase 2 (chatbot) is commodity. Phase 3 (Claude Code doing scoped work) is Finn's current workflow. Phase 4 (autonomous agent running 24/7) is the frontier, and the architecture patterns from OpenClaw are worth understanding even if Finn stays on Claude Code/Cowork.

## Related

- [[phase-3-agents]]
- [[openclaw]]
- [[claude-code]]
- [[living-config-files]]
- [[karpathy-autoresearch]]
