---
title: "Software 3.0"
type: concept
tags: [concept, software-3-0, karpathy, ai-development, paradigm]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Software 3.0

Karpathy's three-paradigm frame for what programming is. 1.0 is explicit code — humans hand-write logic. 2.0 is learned weights — training data shapes a model that does the work. 3.0 is the prompt and the context window as the program, with the LLM as the interpreter that reads the program and performs computation in information space.

> "[3:03] Software 3.0 is kind of about your programming now turns to prompting and what's in the context window is your lever over the interpreter that is the LLM that is interpreting your context and performing computation in the digital information space." — Karpathy, Sequoia AI Ascent 2026

The point isn't speedup. The point is that whole categories of code shouldn't exist. Karpathy's worked example: he vibe-coded "Menu Gen" — a Vercel app that OCRs restaurant menus and generates dish images. Then he saw the 3.0 version — hand the menu photo to Gemini, tell it to use Nano Banana to overlay images. Same output. Zero app. The OCR pipeline, the image-gen pipeline, the routing, the deploy — all of it spurious.

> "[5:24] This blew my mind because actually all of my Menu Gen is spurious. It's working in the old paradigm. That app shouldn't exist." — Karpathy

The corollary: hunting for new opportunities means looking for things that weren't possible before, not for old things made faster. LLM-built wikis from raw documents (Karpathy's Eureka Labs bet) are 3.0-only — they have no 1.0 analog. See [[llm-wiki-pattern]] and [[knowledge-graph-llm-wiki]] for the shape that takes inside this vault.

The agent-as-installer pattern is downstream of this. Claude Code's install isn't a bash script — it's a copy-paste prompt the agent reads and executes against your environment. Instruction is the program; the agent supplies the intelligence. This is why every doc, every settings menu, every install flow Finn touches as a developer is mis-shaped — it's written for humans when it should be written as a prompt for an agent. See [[agent-native-saas]].

For the studio, Software 3.0 is the frame that justifies refusing to build certain projects. If a client wants a single-purpose AI feature that's already a one-prompt call to Gemini or Claude, the right answer isn't to wrap it in a Vercel app. It's to point at the wrapper and say: this shouldn't exist. The deliverable becomes the agent skill, not the SaaS surface. See [[agentic-services-positioning]] and [[ghosts-not-animals]] for the worldview underneath.

## Related

- [[vibe-coding]]
- [[agentic-engineering]]
- [[ghosts-not-animals]]
- [[agent-native-saas]]
- [[llm-wiki-pattern]]
- [[knowledge-graph-llm-wiki]]
- [[agentic-services-positioning]]
- [[karpathy-vibe-to-agentic-2026-04-29]]
