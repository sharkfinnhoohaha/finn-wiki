---
title: "Karpathy at Sequoia AI Ascent 2026 — From Vibe Coding to Agentic Engineering"
type: source
tags: [andrej-karpathy, sequoia, ai-ascent-2026, vibe-coding, agentic-engineering, software-3-0, video, transcript]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [raw/karpathy-vibe-to-agentic.transcript.txt, raw/karpathy-vibe-to-agentic.en.vtt, raw/karpathy-vibe-to-agentic.info.json]
---

# Karpathy at Sequoia AI Ascent 2026 — From Vibe Coding to Agentic Engineering

**Source:** YouTube, [Sequoia Capital](https://www.youtube.com/@SequoiaCapital), 29:49.
**URL:** https://www.youtube.com/watch?v=96jN2OCOfLs
**Uploaded:** 2026-04-29
**Format:** Fireside interview, [[andrej-karpathy]] with Stephanie Zhan.

## TL;DR

The headline is that [[andrej-karpathy]] thinks the agentic-coding inflection landed in December 2025 — agent-written chunks "just came out fine" and he stopped correcting them — and the right discipline going forward is not [[vibe-coding]] but [[agentic-engineering]]: humans hold spec, taste, and oversight while agents do the implementation. He frames the whole stack as [[software-3-0]] (prompts as programs, LLMs as interpreters), warns that capability is jagged because RL trains around verifiable circuits, and lands on [[understanding-as-bottleneck]] — you can outsource thinking but not understanding. This is the worldview frame. The operator playbook lives in the companion source [[isenberg-howieliu-hyperagent-2026-04-29]].

## Chapter-by-chapter

### Introduction

Stephanie Zhan opens by enumerating Karpathy's range — co-founded OpenAI, ran Tesla Autopilot, coined [[vibe-coding]] — and pivots to the hook: a few months ago he said he had never felt more behind as a programmer.

> "[00:00:03] He has helped build modern AI, then explain modern AI, and then occasionally rename modern AI."

### Feeling Behind as a Coder

Karpathy describes December 2025 as a stark step-change. Agentic tooling had been "kind of helpful" for a year, then suddenly the chunks shipped clean and he stopped correcting them. He thinks people who only experienced AI through chat in 2024 missed it — the change is in the agentic coherent workflow, not the chatbox.

> "[00:01:16] December was this uh clear point where for me… the chunks just came out fine and then I kept asking for more and it just came out fine and then I can't remember the last time I corrected it and then I was I just you know trusted the system more and more and then I was vibe coding."

### Software 3.0 Explained

1.0 is explicit code, 2.0 is learned weights, 3.0 is the LLM as a programmable computer where the context window is your "lever over the interpreter." This is more than a speed-up — entire categories of code shouldn't exist anymore because the neural net does the work end-to-end. See [[software-3-0]].

> "[00:03:03] Software 3.0 know is kind of about uh you know your programming now turns to prompting and what's in the context window is your lever over the interpreter that is the LLM that is kind of like interpreting your context and uh performing computation in the digital information space."

### Agents as the Installer

Open Claude / Claude Code's install isn't a bash script — it's a copy-paste prompt you give the agent, which then reads your environment and debugs itself in. The instruction is the program; the agent supplies the intelligence.

> "[00:03:44] When openclaw came out [Claude Code] when you want to install openclaw you would expect that normally this is a bash script… But the thing is that… the open claw installation is a copy paste of a bunch of text that you're supposed to give to your agent."

> "[00:04:15] You're working now in the software 3.0 paradigm where you don't have to precisely spell out you know all the individual details of that setup. The agent has its own intelligence that it packages up and then it kind of like follows the instructions and it looks at your environment, your computer and it kind of like performs intelligent actions to make things work."

### Menu Gen vs Raw Prompts

Karpathy vibe-coded "Menu Gen" — a Vercel app that OCRs a menu and renders dishes as images. Then he saw the Software 3.0 version: hand the photo to Gemini, ask it to use Nano Banana to overlay images. Same output, no app needed. Lesson: stop reframing AI as an old-paradigm speed-up; look for what wasn't possible before. He flags LLM-built knowledge bases — see [[llm-wiki-pattern]] and [[knowledge-graph-llm-wiki]] — as the kind of category that only exists in 3.0.

> "[00:05:24] I saw the software 3.0 version of this which is which blew my mind which is literally just take your photo give it to Gemini and say use Nanobanana to overlay the things onto the menu… this blew my mind because actually all of my menu gen is spirious. It's working in the old paradigm that app shouldn't exist."

> "[00:07:08] Not only what can we do that existed that is faster now but I think there's new opportunities of just things that couldn't be possible before and I almost think that that's more exciting."

### What's Obvious by 2026

He extrapolates: classical computing emerged when neural nets could have. By the late 2020s the substrate may invert — neural nets become the host process, CPUs become co-processors, UIs are diffusion-rendered per moment, tool use is a "historical appendage" for deterministic tasks.

> "[00:08:50] You could imagine that uh a lot of this will flip and that the neural net becomes kind of like the host process and uh the CPUs become kind of like the co-processor… you could imagine something really weird and foreign when where neural nets are doing most of the heavy lifting. They're using tool use as this like you know um historical appendage for some kinds of like deterministic tasks."

### Verifiability and Jagged Skills

LLMs are jagged because frontier labs train them inside RL environments with verification rewards. Capability peaks where outputs are checkable (math, code) and stagnates where they aren't. Hence Opus 4.7 refactors a 100k-line codebase while telling him to walk to the car wash. See [[jaggedness-and-verifiability]].

> "[00:10:19] The way this works is that when frontier labs are training these LLMs these are giant reinforcement learning environments. So they are given verification rewards and then because of the way that these models are trained they end up basically uh progressing and creating these like jagged entities that really peak in capability in kind of like verifiable domains like math and code… and stagnate and are a little bit you know rough around the edges when uh things are not kind of like in that space."

> "[00:11:18] How is it possible that state-of-the-art Opus 4.7 will simultaneously refactor a 100,000 like codebase line codebase or find zero day vulnerabilities and yet tells me to walk to this car wash? This is insane."

> "[00:13:04] If you're in the circuits that were part of the RL, you fly. And if you're in the circuits that are out of the data distribution, uh you're going to struggle… if you're not in the circuits, then you have to really look at fine-tuning."

### Founder Advice and Automation

If you're in a verifiable domain, you can pull the RL/fine-tuning lever yourself. He hints there's a specific verifiable domain he's bullish on but won't name it ("I don't want to vape post on stage" — vibe-post). Eventually almost everything is verifiable via judge councils — directly the same idea Howie Liu ships as rubrics in [[isenberg-howieliu-hyperagent-2026-04-29]].

> "[00:14:20] If you are in a verifiable setting where you could create these RL environments or examples then that actually sets you up to potentially do your own fine tuning and you might benefit from that. But that is fundamentally technology that just works."

> "[00:15:06] Even for like things like writing or so on, you can imagine having a council of LLM judges and probably get to something reasonable… ultimately yeah everything is automatable."

### From Vibe Coding to Agent Engineering

This is the framing chapter. Vibe coding raises the floor. Agentic engineering preserves the professional quality bar — security, robustness, taste — while going much faster. The peak operator clears 10x easily. Hiring should change: stop with the puzzles, give a real project (a Twitter clone for agents) and have candidates defend it against red-team agents.

> "[00:16:15] Vibe coding is about raising the floor for everyone in terms of what they can do in software… But then I would say agentic engineering is about preserving the quality bar of what existed before in professional software."

> "[00:16:50] People used to talk about the 10x engineer previously I think that this is magnified a lot more 10x is uh is not uh the speed up you gain… people who are very good at this peak a lot more than 10x."

> "[00:18:46] Hiring has to look like give me a really big project and see someone implement that big project. Like let's write say a Twitter clone for agents and then make it really good make it really secure… I'm going to use 10 codecs [Codex] 5.4x for X high to try to break your website that you deployed and they're going to try to basically break it and they should not be able to break it."

> "[00:21:37] You're in charge of the taste, the engineering, the design… and that you're asking for the right things… the engineers are doing the fill in the blanks."

### Agents Everywhere and Learning

Most software is still written for humans — docs, install flows, settings menus. Karpathy wants agent-native infrastructure: docs that hand you the prompt, sensors and actuators over the world, agent-to-agent meeting scheduling. He closes on his Eureka Labs bet — outsourcing thinking is fine, outsourcing understanding is not, and human direction is bounded by what the human actually understands. This is the spine of his [[karpathy-llm-wiki-gist]] / [[llm-wiki-pattern]] work.

> "[00:25:51] I still use most of the time when I use uh different frameworks or libraries or things like that, they still have docs that are fundamentally written for humans. This is my favorite pet peeve. Like I don't uh why are people still telling me what to do? Like I don't want to do anything. What is the thing I should copy paste to my agent?"

> "[00:26:30] Decompose the workloads that need to happen into fundamentally sensors over the world, actuators over the world. How do we make it agent native?"

> "[00:28:09] You can outsource your thinking but you can't outsource your understanding."

> "[00:28:43] I'm becoming a bottleneck of just even knowing what are we trying to build why is it worth doing uh how do I direct my my agents… something has to direct the thinking and the processing and so on and that's still kind of fundamentally constrained by understanding."

## Why this matters for Overlook Strategy

The two-line summary of the talk is the agency thesis: the floor is raised (anyone vibe-codes a prototype), the ceiling rose much higher (a senior operator with [[agentic-engineering]] discipline clocks 30-50x), and everything in between — spec, taste, security, oversight, agent-native infrastructure — is unsold service work. That entire gap is where [[agentic-services-positioning]] sits. Karpathy supplies the legitimacy frame ("we're past the inflection; the discipline is agentic engineering, not vibe coding") and Howie Liu supplies the operating model in [[isenberg-howieliu-hyperagent-2026-04-29]]. The agency sells the gap between the two.

Connect into [[overlook-strategy-positioning]]: the four-line headline is *vibe coding raises the floor → agentic engineering preserves the quality bar → the bottleneck migrates to taste, then to understanding → the moat is operational discipline plus the human's ability to direct, both of which the agency provides as a service*.

## Concepts introduced

- [[software-3-0]] — programming becomes prompting; the context window is the program; the LLM is the interpreter.
- [[agentic-engineering]] — the discipline of going faster with agents while keeping pro-grade quality bars (security, robustness, spec discipline). The successor to [[vibe-coding]].
- [[ghosts-not-animals]] — Karpathy's framing for LLMs as statistical entities summoned via pretraining + RL, not motivated organisms. Behavior is shaped by training mix, not coaxing.
- [[jaggedness-and-verifiability]] — capability peaks in domains the labs trained verifier rewards over (math, code) and stagnates outside them. The jagged-skill profile is a function of "verifiable + labs care," not of raw intelligence.
- [[understanding-as-bottleneck]] — you can outsource thinking but not understanding; human direction is bounded by what the human actually understands. The Eureka Labs / [[llm-wiki-pattern]] bet sits here.
- [[agentic-inflection-late-2025]] — December 2025 (Karpathy) and Opus 4.5 in November 2025 (Howie) are the same step-change crossing the autonomy threshold.

## ASR-error notes

The auto-transcript has predictable Whisper failures. When you re-quote, normalize:

- "openclaw" / "open claw" / "cloth code" / "lot code" → Open Claude / Claude Code
- "Manis" → Manus
- "Vape post" / "VIP coding" → vibe-post / vibe coding
- "Codeex" / "codecs" / "codex 5.4x" → Codex / Codex 5.4
- "Nanobanana" → Nano Banana
- "Eisenberg" → Isenberg
- "ChachiPT" → ChatGPT
- "Andre" → Andrej
- "GD 5.4" / "GB 5.4" → GPT-5.4

## Companion source

- [[isenberg-howieliu-hyperagent-2026-04-29]] — the operator-side companion. Howie ships the same worldview as product: skills, rubrics, fleet-of-agents, opportunity-cost pricing.

## Related

- [[agentic-services-positioning]]
- [[karpathy-autoresearch]]
- [[karpathy-llm-wiki-gist]]
- [[vibe-coding]]
- [[knowledge-graph-llm-wiki]]
- [[llm-wiki-pattern]]
- [[mcp-protocol]]
- [[loopiness-framework]]
- [[overlook-strategy-positioning]]
