---
title: "AI coding tools — Claude Code, Cursor, Codex, Aider, v0"
type: tech
tags: [stack, ai, agents, claude-code, cursor, codex, aider, v0, lovable]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# AI coding tools

The category that's moving fastest. Re-verify quarterly. Finn's hybrid stack is Claude Code (autonomy) + VS Code (editing) + Ollama for local cheap inference.

## Pick (Finn's stack)

- **Autonomous agent:** [[claude-code]] — terminal + Cowork desktop. Pro $20/mo or Max $100-200/mo.
- **In-editor AI:** none currently. VS Code with extensions covers the gap. Try Cursor 1-year-free if you want to A/B.
- **Local cheap inference:** [[ollama]] for embedding (`nomic-embed-text`) and grunt-work (`mistral`). See [[hybrid-local-llm-workflow]].

## Stack at a glance

| Tool | Cost (Apr 2026) | Sweet spot | Trap |
|---|---|---|---|
| **Claude Code** | $20 Pro / $100 Max / $200 Max | Multi-file refactors, planning, terminal autonomy, big-context reads (1M tokens with Opus 4.6) | Can be expensive on long sessions; budget with `/effort` levels |
| **Cowork** | Bundled with Claude Pro/Max | Cross-app desktop work (Notion, files, browser). Where this very session lives | Newer; some MCPs not connected by default |
| **Cursor** | $20 Pro (1yr free for [[student-discounts\|students]]); $200 Ultra | Tab autocomplete, in-editor AI flow, Composer for multi-file | Credit-based pricing surprises (reported $1,400 overages) |
| **Windsurf** (Cognition) | Free + $15 Pro | Cascade agent mode in editor, fast SWE-1.5 model | Smaller ecosystem; merging into Devin's flow |
| **GitHub Copilot** | $10 Pro / $39 Pro+ (June 2026 shift to credits) | Tab completion baseline; widely available | Declining relevance in 2026; Copilot Student new sign-ups paused April 20, 2026 |
| **Codex** (OpenAI) | Per-token; $100 Codex credit via [[student-discounts]] | Web + CLI + desktop surfaces, MCP, web search | GPT-5 expensive per-token vs Anthropic equivalents |
| **Aider** | Free (you pay LLM API) | Git-first CLI agent. Every edit commits | No GUI, terminal-only |
| **Continue.dev** | Free | VS Code/JetBrains extension, bring your own model (Ollama works) | Less polished than Cursor |
| **v0.app** (Vercel) | $20/mo Premium | UI-first generation, sandbox runtime, Git panel, DB integrations | Frontend-first; can't replace Claude Code for backend |
| **bolt.new** | $20/mo | Full-app browser IDE, flexible AI | Browser-only; can't bring to local |
| **Lovable** | $20/mo | Beginner-friendly planner, fastest 0→1 working app | Hand-off to "real" repo is rough |
| **Replit Agent** | $25/mo Core, usage-based | Full-stack in browser, beginner-friendly | Lock-in to Replit infra |
| **Devin** (Cognition) | $500/mo | Fully autonomous agent for backlog work | Overkill for individual dev. Cognition also owns Windsurf now |

## When to use what

- **Multi-step task across many files / "plan then execute":** Claude Code. The 1M context window + autonomous loop wins.
- **You want to feel the AI in your editor, not in a terminal:** Cursor (free for students this year — claim it).
- **Generating a UI from a screenshot or vibe:** v0.app. Then take the JSX into your real repo.
- **0→1 prototype to test an idea overnight:** Lovable or bolt.new. Throw away after, don't try to harden.
- **Daily edits where you just want better autocomplete:** Continue.dev with Ollama (free) or GitHub Copilot if you've got the Pack.
- **Cheap local embedding / classifier work:** Ollama. See [[ollama-rag-pattern]].

## Token discipline (per CLAUDE.md)

From [[CLAUDE]]:

> Prefer cheaper models for grunt work (parsing, formatting, file moves). Reserve Sonnet/Opus for synthesis, judgment, and tricky debugging. Don't retry the same failed approach — pivot or ask. Offer a "prompt to give to Codex/Copilot/Claude Code" rather than burning credits on trial-and-error.

This means in Claude Code: use `/effort low` for boilerplate, save `xhigh` for architecture decisions. Use Haiku-tier subagents for grep / file-listing / format conversion (see [[hybrid-local-llm-workflow]]).

## Worth knowing about

- **Cline** (formerly Claude Dev) — open-source VS Code extension that runs Claude as an agent inside the editor. Free to use, you supply API key. Worth trying.
- **Roo Code** — Cline fork with multi-mode workflows.
- **Goose** (Block / Square) — open-source agent CLI, similar to Claude Code shape.
- **OpenHands** (formerly OpenDevin) — open-source autonomous agent platform.
- **MCPs** — the protocol Claude Code uses to connect to services (Notion, Slack, Vercel, Common Room). Build your own for any service you use repeatedly. See [[mcp-builder]].

## Avoid / paid-default trap

- **GitHub Copilot Pro** if you already pay for Claude Pro / Cursor — overlap is too high. Pick one.
- **Devin** for solo dev — it's priced for teams replacing junior engineers.
- **Building a "Claude wrapper" for personal use** when Claude Code is already the wrapper. Save the build effort for actual product.

## Finn's current pick (as of 2026-04-29)

- **Claude Code** ($20 Pro) as primary agent.
- **Ollama** for local embedding + cheap inference (token discipline).
- **No editor AI subscription right now.** Cursor 1-year-free should be claimed via [SheerID](https://cursor.com/students) — it costs nothing to have.
- **v0.app** worth a one-off Premium month when sketching a new client landing page.

## Used by

- [[hybrid-llm-workflow]] — the canonical project for this stack, two-terminal cc-sonnet + cc-local pattern
- [[overlook-portal-webapp]] — [[ollama]] + pgvector embeddings (see [[ollama-rag-pattern]])
- [[gearflip]] — [[claude-code]] for development; no in-product AI yet
- [[pier-and-point]] — Mastra + Inngest + Kimi/Claude hybrid pipeline (see [[ai-newsroom-pipeline]])
- Effectively every coding project — Claude Code is the default agent

## See also

- [[student-discounts]] · [[claude-code]] · [[ollama]] · [[ollama-rag-pattern]] · [[hybrid-local-llm-workflow]] · [[stack/ides]] · [[token-conservation-mindset]]
- External: [Claude Code docs](https://code.claude.com/docs/en/overview) · [Cursor for students](https://cursor.com/students) · [v0.app](https://v0.app)
