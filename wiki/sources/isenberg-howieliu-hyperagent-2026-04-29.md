---
title: "Howie Liu (Airtable / HyperAgent) on Greg Isenberg — Making $$ with AI Agents"
type: source
tags: [howie-liu, airtable, hyperagent, greg-isenberg, agent-economy, video, transcript]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [raw/isenberg-howieliu-hyperagent.transcript.txt, raw/isenberg-howieliu-hyperagent.en.vtt, raw/isenberg-howieliu-hyperagent.info.json]
---

# Howie Liu (Airtable / HyperAgent) on Greg Isenberg — Making $$ with AI Agents

**Source:** YouTube, [Greg Isenberg](https://www.youtube.com/@GregIsenberg), 1:05:11.
**URL:** https://www.youtube.com/watch?v=nyO60uzTnP4
**Uploaded:** 2026-04-29
**Format:** Long-form interview. Howie Liu = CEO/co-founder of Airtable, just launched HyperAgent inside it. Greg Isenberg = solopreneur/Late Checkout host.

## TL;DR

This is the operator-and-builder companion to [[karpathy-vibe-to-agentic-2026-04-29]]. Howie reframes the [[agentic-inflection-late-2025]] in dollars: the TAM isn't a trillion, it's the entire white-collar GDP of the western hemisphere — "many tens of trillions" — because Opus 4.5 in late 2025 was the first model that ships clean PRs on multi-hour-to-day human tasks autonomously. The playbook he ships inside HyperAgent is the operator stack: [[skills-as-primitive]] (playbooks pinned to agents), [[rubrics-and-llm-as-judge]] (eval rubrics scored by a separate judge LLM), [[fleet-of-agents]] (org-chart-mapped roles), [[opportunity-cost-pricing]] (anchor on human time, not the $20 SaaS sub), and a $1M HyperAgent credit giveaway aimed at pulling 1,000 builders into the platform.

## Chapter-by-chapter

### Intro and the trillion-dollar opportunity

Greg pitches the dual frame: trillion-dollar agent opportunity, then HyperAgent show-and-tell. Howie has committed $1M of free credits to listeners — $1k for the first 1,000 builders — which sets up the whole episode as a pull marketing motion as much as a product demo.

> "[00:00:38] Hyperagent is an AI agent builder that allows you to build digital employees, allows you to build apps on different ideas."

### Sequoia's agent-deployment chart

Sequoia's AI Ascent chart shows software engineering at ~50% agent deployment, back office 9%, marketing 4%, sales 4.3%. Howie says 50% is *under*-stated, because frontier teams have stopped using IDEs altogether — he develops HyperAgent through 30 parallel Claude Code instances each coupled to a browser. The point: most companies are 3 years behind frontier, and the gap is widening.

> "[00:03:05] The way I develop on hyper agent is I have like 30 different cloud code [Claude Code] instances running in parallel and each one is coupled up to like a browser fully autonomous. It can go and like get other agents to comment on any uh PRs it creates."

> "[00:04:15] Many companies and many industries and many functions are barely catching up to like the three-year ago state-of-the-art let alone disrupting themselves and their industry with the new state-of-the-art."

### Copilot vs autopilot, and the white-collar-GDP TAM

The threshold crossed with Opus 4.5, ~4-5 months ago: first model that autonomously ships clean PRs on multi-hour-to-day human tasks. The TAM isn't $1T — it's all white-collar labor, "many tens of trillions in the western hemisphere alone." Until you actually run an autonomous agent on a real task, you can't extrapolate the company shapes that become possible.

> "[00:05:16] Opus 4.5 just kind of set a new high water mark of like, wo, this thing for the first time really feels like a true software engineer that's able to work on a task that would have taken a real human engineer maybe many hours if not days. It can go do it completely autonomously and it ships me a perfect clean PR that I can just review like a reviewer would."

> "[00:06:26] The TAM for that is like not even a trillion. It's like probably like the whole GDP of like all white collar labor which is like obviously many tens of trillions, right? Like in even the western hemisphere alone."

### Agent economics vs SaaS economics

Stop benchmarking token cost against $20/mo Netflix. Benchmark against the human's hourly rate. His example: a $150 board memo (in tokens) that his investors said was the best he'd ever written, in a tenth of the time. This is the core reframe behind [[opportunity-cost-pricing]] and [[per-task-pricing]].

> "[00:09:25] We have to get over this hump of anchoring our price expectations for AI on like traditional subscription software where it's like, oh my god, I have to pay like 20 bucks for like Netflix per month… instead, think of this as how much would it have cost a human to do the thing."

> "[00:10:01] Even if it cost me, let's call it like $150 of tokens to generate that output, like think about the opportunity it cost my time."

### Fastest enterprise adoption curve in history

OpenAI + Anthropic combined ARR went from zero to ~$80B in a few years — no software category has ever done this. Two ways to capture it: (1) PLG products (Claude Code, ChatGPT) that ship billions of tokens, (2) Palantir-style top-down "we'll fix your AI problem" $100M+ enterprise checks. The CEO game theory: pay $100M and risk getting fired vs do nothing and definitely get fired.

> "[00:12:33] What in the history of software has there ever been an industry where any company let alone in aggregate across all the companies you got a category that went from zero to like 80 billion plus."

> "[00:13:45] Come in top down Palunteer [Palantir] style… go pitch to every enterprise board and CEO like we will fix your AI problem. Pay us a massive check like give us a $100 million plus check… on a game theory level, it's like everybody's going to pay it right now."

> "[00:14:20] A business that probably could be run now with like five people maybe instead of like 50,000."

### Fleet-of-agents and humanoid form factor

Every company will run a fleet of role-mapped agents — customer intel, content, comp research, lead enrichment — and the form factor will look like an org chart for the same reason humanoid robots fit human-built environments. Plus context-window physics: there's no infinite context, so you partition by role like you partition humans. This is [[fleet-of-agents]].

> "[00:15:26] Every company will have a fleet of agents… agents are converging on these purposeful like they almost map to job roles that humans were playing right."

> "[00:16:42] I just don't think we're ever going to get to a point to where like an AI model can have infinite context window… there's like a physics to that… for the same reason why we partition humans into different roles… the same is true for agents."

### What HyperAgent is — Macintosh to Claude Code's Linux

HyperAgent's positioning: cloud-native, no Mac mini, secure by default, UX-obsessed — Macintosh to Open Claude / Claude Code's Linux. Same DNA as Airtable's no-code distillation: low floor, high ceiling. See [[orchestration-as-interface]] and [[portal-orchestration-extension]] for adjacent patterns.

> "[00:18:41] If all of these other agent products out there like Open Cloud, etc. are kind of more like Linux. Like Hyper Agent is our take on like the Mac version of it."

> "[00:19:16] We were very inspired by like the Macintosh, the GUI, like taking terminal-based command line computing and making it into something that like people could just gro [grok] immediately."

### Live demo — hyperlocal real-estate market reports

HyperAgent took one of Greg's open-source startup ideas (hyperlocal real-estate market reports), did market research, Reddit validation, competitive analysis, V1 build, marketing site, and ad creative — for $35 in tokens. App-building, Howie argues, is now a commoditized feature. HyperAgent is the founder, not the developer.

> "[00:20:22] It can access your Slack and Granola and email. It can send stuff if you want it to on your behalf or just pre-draft emails."

> "[00:22:39] App building is just a feature now. It's a commoditized feature… Hyper Agent is the founder in this case. It's not just the developer."

### Visual tools as first-class — Street View, Zillow redesigns

HyperAgent has Google Maps, Street View, image gen, and video gen as first-class tools. Pull a Street View image of a billboard location, use it as a seed image for AI image gen. Pull a Zillow interior, redesign it. The visual tools dimension is what most agent platforms still leave on the table.

> "[00:23:21] It can actually go and find real street view imagery of billboard locations… and then to take that image and use that as a reference seed image for AI image generation."

### Command center and Slack-deployed coworkers

The HyperAgent "command center" view shows a fleet of role-mapped agents (content marketer, market researcher, customer email responder) with one-click deploy to Slack as an always-on coworker. This is the operator analog of Karpathy's "agent representation for people and orgs."

> "[00:25:23] Your Slack co-workers are now agents in addition to humans and they're really smart and they have their own expertise and context. Like you get that with a single click out of any agent that you build in hyper agent."

### Skills as the central primitive

Skills = playbooks pinned to agents. The Einstein analogy: a generally intelligent model is Einstein-smart in general but doesn't know real estate; give it the right briefing and it will figure it out. Skills are composable, pinnable, interactively iterated. This is [[skills-as-primitive]] — and it maps directly onto Karpathy's "spec-driven agent development" in the companion source.

> "[00:25:48] Skills are I think like the most important concept or primitive in the frontier agents world. Meaning the models are generally intelligent enough. It's like Albert Einstein who's obviously super smart in a general sense and he may not know how to solve problems in real estate, but if you gave him just the right briefing on like here's a playbook, here's a manual to learn everything you need to know to do this job in real estate, he's going to figure it out pretty well."

### Building the Greg-Isenberg-contrarian-AI skill live

Howie spins up a "Greg Isenberg contrarian AI" skill — agent researches Greg's posts, distills voice into a reusable skill pinned to an agent. Generated rules: "smart friend at dinner saying the quiet part out loud, not a corporate communicator," "hook in the first 7 words," "never end with 'what do you think.'" Skills are evergreen — interactive iteration, not one-shot prompts.

> "[00:35:28] Greg's voice is a smart friend at dinner saying the quiet part out loud. Uh not a corporate communicator."

> "[00:36:04] These skills should be evergreen, right? Like it's not like you do one and done. The whole point is like every time I use a skill… you can interactively tweak and improve the skills and performance of the agent over time."

### Rubrics, LLM-as-judge, and fleet observability

Rubrics = eval rubrics pinned to agents, scored by a separate LLM-as-judge on every run along chosen dimensions. Lets you scale a fleet without watching every output, and gives you a cost-quality dial — drop Opus to Sonnet at 5x cost reduction, watch the score, decide. Without rubrics, the human is the judge and the fleet doesn't scale. This is the observability layer behind [[rubrics-and-llm-as-judge]].

> "[00:31:27] We actually have this concept of what we call rubrics… It's like an eval rubric. And what you can do with rubrics that's really powerful is actually like define what does good look like for a certain type of task… every time my agent runs… I want to score that content along the dimensions that you care about using a separate LLM as judge."

> "[00:33:07] If I pinned the eval rubric to any one of these agents, I would see like the trend line of how it's scoring. I could then automatically suggest hey maybe I can reduce the model quality so I drop from opus to sonnet get a five times reduction in cost and the score didn't go much down."

> "[00:34:20] As you scale up if you're the CEO of a business like you just literally don't have time to go and like look at every single thing… so you need to create like better automated checks and balances to oversee what the agents are doing."

### Competitive landscape — Codex, Claude Code, Manus, Perplexity Computer

Codex = dev-only, narrower. Open Claude / Claude Code = raw, technical, configuration-heavy. Perplexity Computer + Manus = closest comps. HyperAgent's edge: more powerful default tools, UX, deployability from day one. Manus gets explicit credit as the first "holy crap YOLO agent" before Claude Code.

> "[00:28:52] Against codex it's quite simple — hyper agent is a more general purpose agent platform… against open openclaw [Claude Code] this is much more turnkey ready to go safe and secure by default cloud native… open claw when you actually have to go into configuration or like editing memories or any kind of curation or configuration it's quite raw."

> "[00:29:45] Manus when it first came out it's truly groundbreaking. It was the first kind of real holy crap yolo agent like look at everything it did, kind of like before even openclaw."

### The arbitrage of persistence

99% give up after one shot. The persistent 1% become top operators. Door-to-door knife seller vs early-SEM builder parable: hit a reset moment, accept short-term zero revenue, compound. This is the "agency" psychological frame, and it directly justifies productized services — see [[productized-services]].

> "[00:38:08] The truth is 99% of people don't are not putting in the work to get to the great outputs… this is the arbitrage. It's for people to actually invest in spending time to optimize and get it to a place where it's high quality."

> "[00:40:30] You kind of have to hit a reset moment and what feels like maybe experimentation and not actually bringing home the bacon actually is the most profound thing you can do to create real business leverage in the not even like two-year time frame, but maybe even like the six month time frame."

### Confidence milestones — first-internet-dollar and 30/60/90

Greg's frame: making your first internet dollar rewires your brain; $10k/month is the quitting threshold. Howie's frame: commit 30/60/90 days, daily, on the calendar — that's what produces a top-1% agent builder.

> "[00:41:31] When you make your first internet dollar, no matter what it is, it rewires your brain… once you get to like 10k a month, just something about that number, you're probably quitting your job."

> "[00:42:06] Commit to 30 days, 60 days, 90 days. Every single day, it's like in your calendar… that's what gets you to be a top 1% agent builder."

### Connectors and agent-built API skills

OAuth connectors (Notion, Slack, Granola, email) work in-thread. For obscure APIs, the agent reads the docs and builds itself a custom skill — Twilio is the live example. This collapses the connector roadmap into prompt time. Adjacent pattern: [[mcp-protocol]].

> "[00:51:32] You could basically have hyper agent go and learn that API… consult helped me build a custom skill to integrate with Twilio via API. It can go and research the Twilio API docs, create a skill for itself to use the API and then actually ask me to enter my credentials in a safe way."

### Onboarding and live mode

The hard part isn't the product — it's picking the right problem. New onboarding offers to read your Gmail/Slack/Notion/Granola and suggest use cases. "Live mode" — always-on heartbeat agents that push proactively — is about to ship. Closes with a vision number: $100B legitimate companies with fewer than five employees.

> "[01:04:46] I want to see your listener base generate a hundred billion dollar legit companies with like less than five employees."

## Why this matters for Overlook Strategy

Howie ships the operator stack the agency adopts. [[agentic-services-positioning]] is built on exactly the four moves he names: pick the right problem (the agency's discovery service), wire skills + rubrics (the agency's setup deliverable), deploy a fleet of role-mapped agents to Slack (the agency's command-center handoff), and pre-commit the client to 30/60/90 days of daily practice (the agency's retainer shape). Karpathy supplies the worldview, Howie supplies the playbook, the agency sells the execution.

Specific operator levers to pull through into client work:

- Reframe price discussions on opportunity cost, never on $20/mo SaaS.
- Default deliverable is *skills + rubrics + fleet*, not "an app."
- Use the Palantir-style $100M check / PLG split as the client-segmentation lens.
- Build the persistence-arbitrage frame into the engagement: 30/60/90 calendar commitment is the contract.
- The $1M HyperAgent credit giveaway is a free dev-platform on-ramp for client work.

## Concepts introduced

- [[skills-as-primitive]] — domain playbooks pinned to agents, composable and evergreen. Frontier model + skill = expert. Direct sibling of Karpathy's spec-driven dev.
- [[rubrics-and-llm-as-judge]] — eval rubrics pinned to agents, scored by a separate judge LLM on every run. The observability layer that lets a single human supervise a fleet.
- [[fleet-of-agents]] — org-chart-mapped agents with role-specific skills, deployed via a command center. The operating model behind [[per-task-pricing]] economics.
- [[opportunity-cost-pricing]] — anchor agent pricing on the cost of the human task it replaces, not on subscription comps. $150 of tokens vs $X of human time.
- [[agentic-inflection-late-2025]] — the autonomy threshold crossed with Opus 4.5 in November 2025; same step-change Karpathy names as December 2025. Not a capability inflection, an autonomy inflection.

## Operator playbook

- **Two cash-grab plays.** PLG (Claude Code mode — billions of tokens, monetization later) vs Palantir-style top-down ($100M+ enterprise checks). CEO game theory makes the second a near-certainty for any large incumbent.
- **Opportunity-cost pricing.** Sell against the human's hour. The $150 board memo is the canonical artifact — see [[per-task-pricing]] and [[opportunity-cost-pricing]].
- **Skills + rubrics as the deliverable.** Skills are how you make a generalist model expert at the client's domain. Rubrics are how you keep it expert at fleet scale. Together they are the productized service.
- **Command center.** The interface the client lives in: a fleet view, with role-mapped agents, deployable to Slack as always-on coworkers. The agency builds this, then hands over the keys.
- **Persistence arbitrage.** 99% give up after one shot. The agency's actual moat is doing the work the client won't — daily iteration over 30/60/90 days. Sell it as discipline, not magic.
- **$1M HyperAgent credit giveaway.** $1k each for the first 1,000 builders — a free platform on-ramp the agency can route client experimentation through before any platform commitment.
- **30/60/90 commitment frame.** Calendared, daily, non-negotiable. Both the client engagement and the agency's internal practice run on this rhythm. This is the contract shape.

## ASR-error notes

Whisper failures across this transcript are heavy. Normalize before re-quoting:

- "openclaw" / "open claw" / "cloth code" / "lot code" → Open Claude / Claude Code
- "Manis" → Manus
- "Codeex" / "codex 5.4x" → Codex
- "Air Table" → Airtable
- "Granola" — real product (meeting notes)
- "Nanobanana" → Nano Banana
- "Howy Lou" / "Howe" → Howie Liu
- "Verscell" → Vercel
- "ChachiPT" → ChatGPT
- "Palunteer" → Palantir
- "gro" → grok

## Companion source

- [[karpathy-vibe-to-agentic-2026-04-29]] — the worldview companion. Karpathy frames *why now* and the discipline ([[agentic-engineering]], verifiability, [[understanding-as-bottleneck]]); Howie ships the operating model.

## Related

- [[agentic-services-positioning]]
- [[per-task-pricing]]
- [[opportunity-cost-pricing]]
- [[skills-as-primitive]]
- [[rubrics-and-llm-as-judge]]
- [[fleet-of-agents]]
- [[orchestration-as-interface]]
- [[portal-orchestration-extension]]
- [[isenberg-future-of-saas-30-step]]
- [[productized-services]]
- [[overlook-strategy-positioning]]
- [[mcp-protocol]]
