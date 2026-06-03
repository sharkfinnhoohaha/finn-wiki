---
title: "Hermes Agentic OS"
type: concept
status: active
tags: [hermes, agentic-os, claude-code, memory, automation, jack-roberts]
created: 2026-06-02
updated: 2026-06-02
weight: high
node_size: 10
sources: [[jack-roberts-hermes-videos-2026-06-02]]
---

# Hermes Agentic OS

An **Agentic OS** is a unified visual intelligence layer that sits above individual AI tools (Claude, ChatGPT, Gemini, Cursor, Hermes), solving the core problem of **context isolation**. Instead of each tool living in its own silo, the OS shares memory across all of them and unlocks capabilities no single assistant can provide alone.

Synthesized from Jack Roberts' Hermes video series (channel: UCxVxcTULO9cFU6SB9qVaisQ).

---

## Core Thesis

Most users suffer context isolation: Claude, ChatGPT, Gemini, Cursor, and Hermes all live in separate silos with no shared state. An Agentic OS unifies your AI footprint into a single brain that:

- Remembers conversations across tools
- Runs overnight "dreaming" — re-reading patterns, surfacing suggestions
- Tracks costs across all models in real time
- Generates morning briefs from all connected data
- Manages goals via a Mission Control dashboard

---

## Key Capabilities

### 1. Dreaming
The OS runs overnight, re-reading weekly conversation patterns, skills used, goals, and surfaces new suggestions without you asking. This is not a cron job — it's a semantic re-processing of your entire context graph.

### 2. Morning Brief
Auto-generated daily digest based on connected data: conversations across Hermes, Claude, ChatGPT, Gemini + your goals. Delivered to your primary channel (Telegram, email, etc.).

### 3. Cost Breakdown
Live by-the-hour / by-the-day spend tracking across models and tools. Helps identify waste and downgrade plans when context is underused.

### 4. Mission Control
Goal-setting prompt you paste into Hermes. It asks clarifying questions, builds mid-term plans (weeks-long), identifies what Hermes can automate vs. what you must do manually, and tracks progress in a dashboard.

### 5. Pantheon
Visual overview of all personas/skills. You can add personas (e.g., "Athena"), assign job descriptions, system prompts, and preferred models per persona.

### 6. Document Dashboard
Auto-captures anything created in Hermes (invoices, documents, plans) into a browsable dashboard. Installation: copy a prompt into Hermes; it sets the dashboard as the default save location.

---

## Hermes + Claude Code Handshake

The critical integration. Without this, you tell Hermes something on a walk, then re-type it into Claude Code — never to be seen again by the other system.

**Setup:**
1. Install/run Hermes locally (or via Docker/VPS)
2. Connect Claude Code operating system so Hermes knows everything happening in your coding sessions
3. Result: Hermes hears it → Claude Code knows it → shared memory across both environments

**Analogy:** Hermes is your Labrador (lives with you, learns you year over year). Claude Code is your contractor (brilliant for a job, no long-term memory). The handshake makes them share a brain.

---

## Memory Architecture

### memory.md
Plain markdown file with everything you are talking about. The living conversation history.

### peer cards
One card per person; covers tone and preferences. Enables Hermes to adapt its voice per relationship.

### fuzzy index
Enables recall across concepts. Not exact-match search — semantic proximity.

### 1h prompt cache
Keeps token usage lower by remembering recent conversation context. Prevents re-sending the same preamble.

### soul.md
Your personal context manual. Fill in who you are, where you live, how you want Hermes to behave. Non-negotiable for best results. See [[soul-md-pattern]] for Finn's implementation.

### Memory Vault / Obsidian
Connect Hermes to an Obsidian vault (or Pinecone) on your computer. Enables queries like: *"In my Obsidian memory system, I talk a lot about YouTube strategy — what are my current principles?"*

### GitHub Backup
Connect Hermes to GitHub so your entire agent config backs up daily. If you lose/change your machine, you can restore fully from the repo.

---

## Commands

| Command | Action |
|---------|--------|
| `/clear` | Start fresh to avoid token bleed across unrelated topics |
| `/steer` | Redirect the agent mid-task without killing its current flow |
| `/resume` | Pick up a previous session from where you left off |
| `/background` | Stack multiple tasks without interrupting the foreground task |
| `/stop` | Halt the current agent run |
| `/model` | Manually switch models on the fly |

---

## Deployment Options

| Mode | When to use |
|------|-------------|
| **Local machine** | Easiest, safest, no tunneling/attack surface. Run 24/7 on a Mac/desktop |
| **VPS** | Possible, but requires proper tunneling and security hardening; adds complexity |
| **Docker** | Use if you want isolation from your main filesystem. Sealed container, explicit allowlist |

---

## Integrations

### NotebookLM via N8N MCP
NotebookLM is a research/intelligence platform (250+ sources per notebook, podcasts, slide decks, mind maps). Wiring it into Hermes via N8N MCP gives you a 24/7 AI research agent.

- From your phone: *"Check my NotebookLM on YouTube strategy and give me 2 principles about hooks"*
- Hermes queries the notebook and returns the answer in Telegram
- Audio overviews, slide decks, mind maps delivered directly into chat

**Setup:**
1. In N8N, create an API token
2. Install the N8N MCP server into Hermes config
3. Enter Bearer token when prompted
4. Validate connection in Hermes
5. Use `reload MCP` in Telegram to refresh tools

### Zapier Connectors
- **Google Calendar**: check next events, create events, find busy periods
- **Gmail**: find emails, get attachments, add labels, create drafts
- **Principle of least access**: only grant minimum permissions required

### Apollo / Lead Enrichment
Paid lead-enrichment tool. Alternatives like Apify exist (free tiers with fewer fields).

### Firecrawl
Recommended web-scraping tool. Cuts scraping costs by ~80%. Agentic web search — consistently returns higher-quality structured data from HTML pages.

---

## Daily Loop

1. **Evening**: Wrap up work in Claude Code + Hermes
2. **Overnight**: OS "dreams" — reads conversations, skills used, goals, generates improvement suggestions
3. **Morning**: 
   - Receive morning brief (auto-generated)
   - Receive daily insight blast from NotebookLM via N8N workflow
   - Check Mission Control dashboard for goal progress
4. **Daytime**: Execute; use `/steer` and `/background` to manage parallel tasks
5. **Evening**: `/clear` if switching domains; review cost dashboard

---

## Cost Hygiene Checklist

- [ ] Review live usage dashboard daily
- [ ] `/clear` between unrelated projects
- [ ] Use pre-flight compression to confirm token thresholds
- [ ] Assign cheaper/free models to low-intelligence personas (cron jobs, autopilot)
- [ ] Use Firecrawl instead of naive web scraping

---

## Security / Deployment Checklist

- [ ] soul.md filled out with identity, preferences, and behavioral rules
- [ ] GitHub daily backup configured
- [ ] Obsidian or Pinecone memory vault connected
- [ ] If using Zapier/Gmail/Calendar: apply principle of least access
- [ ] If using VPS: harden tunneling and firewall rules (or prefer local/Docker)

---

## Sources

- Jack Roberts — Hermes Agentic OS is Insane... just watch (`zqUdtL5l9yM`)
- Jack Roberts — Every Hermes Concept explained for Normal People (`L0tQrTQBmjI`)
- Jack Roberts — 100 hours of Hermes Agent lessons in 23 minutes (`k5NhsF7t68M`)
- Jack Roberts — Hermes Agent has a NEW SuperPower (NotebookLM) (`9rXH2ssCe9E`)
- Jack Roberts — Hermes Agent just got 10X Better (Agentic OS) (`7xuWZ-3lyQE`)

---

## Related

- [[ollama-rag-pattern]] — RAG stack for local memory
- [[mcp-protocol]] — MCP server distribution strategy
- [[claude-max-arbitrage]] — Model routing for cost control
- [[soul-md-pattern]] — Finn's soul.md implementation
- [[productivity/voice-reply]] — Voice interface for mobile access
