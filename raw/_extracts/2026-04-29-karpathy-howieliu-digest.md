# 2026-04-29 — Karpathy & Howie Liu digest

Source files:
- `raw/karpathy-vibe-to-agentic.transcript.txt` (Sequoia AI Ascent 2026, ~30 min, with Stephanie Zhan)
- `raw/isenberg-howieliu-hyperagent.transcript.txt` (Greg Isenberg pod with Howie Liu, ~65 min)

ASR notes: both transcripts contain "openclaw" / "open claw" — this is a Whisper/auto-caption error for **Open Claude / Claude Code**. "Lot code" → "Claude Code". "Codeex" → "Codex". "Manis" → "Manus". "Vape post" / "VIP coding" → "vibe coding". "Hyperagent" / "Hyper Agent" → HyperAgent. "Cloth code" → "Claude Code". "Air Table" → "Airtable". "Howy Lou", "Howie", "Howe" → Howie Liu. "Andre" → Andrej (Karpathy). "Eisenberg" → Isenberg. "Granola" is a real product (meeting-notes app), not an ASR error. "Medv" / "Hermes" — likely product names mis-transcribed; left as-is. "GD 5.4" / "GB 5.4" / "codecs 5.4x" → GPT-5.4 / Codex 5.4. "Opus 4.7", "Opus 4.6", "Opus 4.5" — referenced as real model versions in 2026.

---

## A. Karpathy — chapter-by-chapter

### Introduction
Stephanie Zhan opens by describing Karpathy's range — co-founded OpenAI, ran Tesla Autopilot, coined "vibe coding" — and flags the hook: a few months ago he said he's never felt more behind as a programmer.

> "[0:03] He has helped build modern AI, then explain modern AI, and then occasionally rename modern AI."

> "[0:03] You all know him for having coined the term vibe coding last year, but just in the last few months, he said something even more startling. That he's never felt more behind as a programmer."

### Feeling Behind as a Coder
Karpathy says December 2025 was a stark inflection: agentic coding tools had been "kind of helpful" for a year, but in December the chunks of code "just came out fine" and he stopped correcting them. He thinks most people who only saw AI as a ChatGPT-adjacent thing missed this. Side-projects exploded.

> "[1:16] December was this uh clear point where for me… the chunks just came out fine and then I kept asking for more and it just came out fine and then I can't remember the last time I corrected it and then I was I just you know trusted the system more and more and then I was vibe coding."

> "[1:47] A lot of people experienced AI last year as ChachiPT [ChatGPT] adjacent thing. Uh but you really had to look again and you had to look as of December uh because things have changed fundamentally and uh especially on this like agentic coherent workflow uh that really started to actually work."

Concepts: **agentic coherent workflow**, **the December 2025 inflection**.

### Software 3.0 Explained
1.0 = explicit code. 2.0 = learned weights / training data. 3.0 = prompting an LLM as a programmable computer; the context window is your "lever over the interpreter." This is more than a speed-up — entire categories of code shouldn't exist anymore because the neural net does the work end-to-end.

> "[3:03] Software 3.0 know is kind of about uh you know your programming now turns to prompting and what's in the context window is your lever over the interpreter that is the LLM that is kind of like interpreting your context and uh performing computation in the digital information space."

Concepts: **Software 1.0 / 2.0 / 3.0**, **context as program**, **LLM as interpreter**.

### Agents as the Installer
The Claude Code install isn't a shell script — it's a copy-paste prompt you give the agent, which then debugs into your environment. The "instruction" is now the program; the agent supplies the intelligence.

> "[3:44] When openclaw came out [Open Claude / Claude Code] when you want to install openclaw you would expect that normally this is a bash script… But the thing is that… the open claw installation is a copy paste of a bunch of text that you're supposed to give to your agent."

> "[4:15] You're working now in the software 3.0 paradigm where you don't have to precisely spell out you know all the individual details of that setup. The agent has its own intelligence that it packages up and then it kind of like follows the instructions and it looks at your environment, your computer and it kind of like performs intelligent actions to make things work."

Concepts: **agent-as-installer**, **prompt-as-program**.

### Menu Gen vs Raw Prompts
He vibe-coded "menugen" — a Vercel app that OCRs menus and renders dish images. Then he saw a Software 3.0 version: hand the photo to Gemini, tell it to use Nano Banana to overlay images. Output is the same; the app shouldn't exist. The lesson: don't reframe AI as old-paradigm speedup, look for things that weren't possible before — e.g., LLM-generated wikis from raw documents.

> "[5:24] I saw the software 3.0 version of this which is which blew my mind which is literally just take your photo give it to Gemini and say use Nanobanana to overlay the things onto the menu… this blew my mind because actually all of my menu gen is spirious. It's working in the old paradigm that app shouldn't exist."

> "[7:08] Not only what can we do that existed that is faster now but I think there's new opportunities of just things that couldn't be possible before and I almost think that that's more exciting."

Concepts: **menu gen** (his pet vibe-coded app, also a metaphor for old-paradigm code), **Nano Banana** (Google image gen), **LLM knowledge bases** (LLM-built wikis as a 3.0-only category).

### What's Obvious by 2026
Extrapolation: classical computing emerged when neural nets could have. By 2030-ish you could see neural nets as the host process and CPUs as co-processors — UIs rendered by diffusion in real time per moment. Tool use becomes the "historical appendage."

> "[8:50] You could imagine that uh a lot of this will flip and that the neural net becomes kind of like the host process and uh the CPUs become kind of like the co-processor… you could imagine something really weird and foreign when where neural nets are doing most of the heavy lifting. They're using tool use as this like you know um historical appendage for some kinds of like deterministic tasks."

Concepts: **neural-host architecture**, **diffusion-rendered UI**, **tool use as appendage**.

### Verifiability and Jagged Skills
LLMs automate fastest where outputs are verifiable, because frontier labs train them inside RL environments with verifier rewards. Hence the jaggedness: peaks in math/code, valleys in unmodeled domains. "Verifiable + labs care" predicts what works. Famous example: the strawberry-letter count, now patched, replaced by "should I drive 50m to the car wash?" — Opus 4.7 says walk while simultaneously refactoring 100k-line codebases.

> "[10:19] The way this works is that when frontier labs are training these LLMs these are giant reinforcement learning environments. So they are given verification rewards and then because of the way that these models are trained they end up basically uh progressing and creating these like jagged entities that really peak in capability in kind of like verifiable domains like math and code… and stagnate and are a little bit you know rough around the edges when uh things are not kind of like in that space."

> "[11:18] How is it possible that state-of-the-art Opus 4.7 will simultaneously refactor a 100,000 like codebase line codebase or find zero day vulnerabilities and yet tells me to walk to this car wash? This is insane."

> "[13:04] If you're in the circuits that were part of the RL, you fly. And if you're in the circuits that are out of the data distribution, uh you're going to struggle… if you're not in the circuits, then you have to really look at fine-tuning."

Concepts: **verifiability**, **jaggedness**, **verifiable + labs care**, **RL circuits**, **chess-data anecdote** (GPT-3.5→GPT-4 chess jump came from someone adding chess data to pretraining, not generic capability gain).

### Founder Advice and Automation
If you're in a verifiable domain, you can pull the RL/fine-tuning lever yourself. He hints there's one specific verifiable domain he's bullish on but won't name it ("don't want to vape post" — vibe-post — "on stage"). Eventually almost everything is verifiable, e.g., council-of-LLM-judges for writing.

> "[14:20] If you are in a verifiable setting where you could create these RL environments or examples then that actually sets you up to potentially do your own fine tuning and you might benefit from that. But that is fundamentally technology that just works. You can pull a lever if you have huge amount of diverse data sets of RL environments etc."

> "[15:06] Even for like things like writing or so on, you can imagine having a council of LLM judges and probably get to something reasonable… ultimately yeah everything is automatable."

Concepts: **council of LLM judges** (writing/subjective tasks become verifiable via LLM-judge ensembles — directly mirrors Howie's rubrics), **fine-tuning lever**.

### From Vibe Coding to Agent Engineering
Vibe coding raises the floor. Agentic engineering preserves the quality bar professionals had — security, robustness — while going faster. He thinks the ceiling is much higher than 10x. Hiring should change: stop giving puzzles, give a real project ("Twitter clone for agents") and have people defend it against red-team agents.

> "[16:15] Vibe coding is about raising the floor for everyone in terms of what they can do in software… But then I would say agentic engineering is about preserving the quality bar of what existed before in professional software."

> "[16:50] People used to talk about the 10x engineer previously I think that this is magnified a lot more 10x is uh is not uh the speed up you gain… people who are very good at this peak a lot more than 10x."

> "[18:46] Hiring has to look like give me a really big project and see someone implement that big project. Like let's write say a Twitter clone for agents and then make it really good make it really secure… I'm going to use 10 codecs [Codex] 5.4x for X high to try to break your website that you deployed and they're going to try to basically break it and they should not be able to break it."

> "[20:34] You have to work with your agent to design a spec that is very detailed and maybe it's basically the docs and then get the agents to write them and you're in charge of the oversight and the top level categories, but the agents are doing a lot of the under the hood."

> "[21:37] You're in charge of the taste, the engineering, the design… and that you're asking for the right things… the engineers are doing the fill in the blanks."

Concepts: **agentic engineering** (the discipline), **floor vs ceiling**, **spec-driven development**, **taste/oversight as the human role**, **interns metaphor** (agents as high-recall but spec-needing interns), **agent hiring rubric**.

### Agents Everywhere and Learning
Everything is still written for humans — docs, install flows, settings menus. He wants agent-native infrastructure: docs that say "here's the prompt to copy-paste," sensors+actuators over the world, agent-to-agent meeting scheduling. Eureka Labs / LLM knowledge bases is his bet on understanding-as-bottleneck — you can outsource thinking but not understanding.

> "[25:51] I still use most of the time when I use uh different frameworks or libraries or things like that, they still have docs that are fundamentally written for humans. This is my favorite pet peeve. Like I don't uh why are people still telling me what to do? Like I don't want to do anything. What is the thing I should copy paste to my agent?"

> "[26:30] Decompose the workloads that need to happen into fundamentally sensors over the world, actuators over the world. How do we make it agent native?"

> "[27:01] I do think we're going towards a world where there's agent representation for people and for organizations and you know I'll have my agent talk to your agent uh to figure out some of the details of our meetings."

> "[28:09] You can outsource your thinking but you can't outsource your understanding."

> "[28:43] I'm becoming a bottleneck of just even knowing what are we trying to build why is it worth doing uh how do I direct my my agents… something has to direct the thinking and the processing and so on and that's still kind of fundamentally constrained by understanding."

Concepts: **agent-native infrastructure**, **sensors and actuators**, **agent representation**, **outsource thinking ≠ outsource understanding**, **understanding-as-bottleneck**, **synthetic-data-from-articles wiki workflow**.

### Karpathy's mental model of the next 5 years (synthesis)
- The substrate inverts. Neural nets become host process; classical CPUs become deterministic co-processors. UIs may be diffusion-rendered per-moment.
- Verifiability is the gating function for capability. Whatever the labs put in the RL mix flies; everything else is jagged. Founders win by either (a) building inside an RL-tractable verifiable domain the labs haven't touched, or (b) making subjective domains verifiable via judge councils.
- Vibe coding raises the floor; agentic engineering raises the ceiling. The peak operator is way past 10x.
- The bottleneck migrates: from typing speed → to spec/oversight/taste → ultimately to *understanding*. He bets the moat is the human's ability to direct, which is bounded by what they actually understand. Eureka Labs is positioned around that bottleneck — tools that turn information into understanding (his LLM-built wikis, "synthetic data generation over fixed data").
- All infrastructure has to be rewritten agent-native. Docs, installers, settings, deployment flows. There's a long surface of "this URL workflow should just be a prompt."
- Agents become representatives — your agent talks to mine to schedule. The agent-native economy is a sensor/actuator graph.
- He treats LLMs as **ghosts, not animals**: statistical entities summoned via pretraining + RL, not motivated organisms. Yelling at them does nothing. Mindset = suspicion + exploration of where the RL circuits are.

---

## B. Howie Liu — chapter-by-chapter

### Intro
Greg pitches the dual structure: trillion-dollar agent opportunity, then HyperAgent show-and-tell. Howie has committed $1M of free credits to the audience ($1k per first 1,000 builders).

> "[0:38] Hyperagent is an AI agent builder that allows you to build digital employees, allows you to build apps on different ideas."

### Sequoia's AI agent deployment chart reaction
Sequoia chart: software engineering ~50% agent deployment, back office 9%, marketing 4%, sales 4.3%. Howie: 50% is an *underestimate*, because frontier teams don't even use IDEs anymore.

> "[2:22] If you took like frontier agents today and deployed them into every one of these categories, you should get to 100%."

> "[3:05] The way I develop on hyper agent is I have like 30 different cloud code [Claude Code] instances running in parallel and each one is coupled up to like a browser fully autonomous. It can go and like get other agents to comment on any uh PRs it creates."

> "[4:15] Many companies and many industries and many functions are barely catching up to like the three-year ago state-of-the-art let alone disrupting themselves and their industry with the new state-of-the-art."

Concepts: **frontier agentic development**, **30 parallel Claude Code instances**, **3-year-old SOTA gap**.

### Copilot vs Autopilot territory and the $1T+ opportunity
The breakthrough was Opus 4.5, ~4-5 months ago — first time a model autonomously shipped clean PRs on multi-hour-to-multi-day human tasks. TAM is not "$1T" — it's the entire white-collar GDP of the western hemisphere, "many tens of trillions."

> "[5:16] Opus 4.5 just kind of set a new high water mark of like, wo, this thing for the first time really feels like a true software engineer that's able to work on a task that would have taken a real human engineer maybe many hours if not days. It can go do it completely autonomously and it ships me a perfect clean PR that I can just review like a reviewer would."

> "[6:26] The TAM for that is like not even a trillion. It's like probably like the whole GDP of like all white collar labor which is like obviously many tens of trillions, right? Like in even the western hemisphere alone."

> "[7:33] Until you actually experience the full power and autonomy of these frontier agents um you know I think it's hard to fully extrapolate like what types of companies can be built now that weren't possible before structurally how could you build like a multi-billion revenue business with one human and like hundreds of agents."

Concepts: **copilot vs autopilot**, **Opus 4.5 inflection**, **white-collar-GDP TAM**, **using-is-believing**.

### Agent economics vs human labor costs
Stop benchmarking token cost against $20 SaaS subs. Benchmark against the human's time. His example: a $150 board memo that his investors said was the best he'd ever written, in 1/10th the time.

> "[9:25] We have to get over this hump of anchoring our price expectations for AI on like traditional subscription software where it's like, oh my god, I have to pay like 20 bucks for like Netflix per month… instead, think of this as how much would it have cost a human to do the thing."

> "[10:01] Even if it cost me, let's call it like $150 of tokens to generate that output, like think about the opportunity it cost my time."

> "[10:36] Anchor it around value. What's the value I'm getting out of that?"

Concepts: **opportunity-cost pricing**, **value anchor not subscription anchor**, **board-memo example**.

### Fastest enterprise adoption curve in history
OpenAI + Anthropic combined ARR ~$80B from zero in a few years. Two strategies for capturing the cash grab: (1) PLG products, (2) Palantir-style top-down "we'll fix your AI problem" $100M+ enterprise checks. CEO game theory: pay $100M and risk getting fired vs do nothing and definitely get fired.

> "[12:33] What in the history of software has there ever been an industry where any company let alone in aggregate across all the companies you got a category that went from zero to like 80 billion plus."

> "[13:45] Come in top down Palunteer [Palantir] style… go pitch to every enterprise board and CEO like we will fix your AI problem. Pay us a massive check like give us a $100 million plus check… on a game theory level, it's like everybody's going to pay it right now."

> "[14:20] A business that probably could be run now with like five people maybe instead of like 50,000."

Concepts: **two-cash-grab playbook (PLG vs Palantir-style)**, **CEO existential risk math**, **5-vs-50,000 ratio**.

### The agent command center and fleet of 20 agents
A fleet of 20 agents — customer intel, content, comp research, lead enrichment — is the future of work, in one image. Agents converge on humanoid org-chart roles for the same reason humanoid robots fit human-built environments: context-window physics + matching legacy infrastructure.

> "[15:26] Every company will have a fleet of agents… agents are converging on these purposeful like they almost map to job roles that humans were playing right."

> "[16:42] I just don't think we're ever going to get to a point to where like an AI model can have infinite context window… there's like a physics to that… for the same reason why we partition humans into different roles… the same is true for agents."

Concepts: **agent command center**, **fleet of agents = org chart**, **humanoid-form-factor analogy**, **context-window physics**.

### What is HyperAgent?
HyperAgent = Macintosh to Open Claude / Claude Code's Linux. Cloud-native, no Mac mini, secure by default, UX-obsessed (same DNA as Airtable's no-code-app-builder distillation).

> "[18:41] If all of these other agent products out there like Open Cloud, etc. are kind of more like Linux. Like Hyper Agent is our take on like the Mac version of it."

> "[19:16] We were very inspired by like the Macintosh, the GUI, like taking terminal-based command line computing and making it into something that like people could just gro [grok] immediately."

Concepts: **Macintosh-to-Linux positioning**, **low floor + high ceiling**.

### Live demo: hyperlocal real estate market reports
HyperAgent took one of Greg's open-source startup ideas (hyperlocal real-estate market reports), ran market research, Reddit validation, competitive analysis, V1 build, marketing site, ad creative — for $35 of tokens.

> "[20:22] It can access your Slack and Granola and email. It can send stuff if you want it to on your behalf or just pre-draft emails."

> "[20:58] These what I would call medium-sized markets… not like a hundred billion dollar market… you can build a very lucrative business even capturing like a double digit percent chunk of this like you can make a few hundred million per year and yet it's small enough to where really big guys are not coming after it."

Concepts: **medium-market thesis**, **end-to-end founder workflow in one thread**.

### HyperAgent as the founder, not just the developer
> "[22:39] App building is just a feature now. It's a commoditized feature… Hyper Agent is the founder in this case. It's not just the developer."

Concepts: **app-building is commoditized**, **agent-as-founder**.

### Street View, Zillow redesigns, and visual tool power
HyperAgent has Google Maps, Street View, image/video gen as first-class tools. Can grab a Street View seed image and use it for an AI image gen pass; can pull Zillow interior shots and redesign a house.

> "[23:21] It can actually go and find real street view imagery of billboard locations… and then to take that image and use that as a reference seed image for AI image generation."

Concepts: **visual tools as first class**, **seed-image workflows**.

### Command center view across a fleet of agents
Multiple agents with roles (content marketer, market researcher, customer email responder), with the ability to deploy any of them into Slack as an always-on coworker.

> "[25:23] Your Slack co-workers are now agents in addition to humans and they're really smart and they have their own expertise and context. Like you get that with a single click out of any agent that you build in hyper agent."

Concepts: **Slack-deployed agent coworker**, **always-on listening**.

### Skills as the key primitive for frontier agents
Skills = playbooks. The Einstein analogy: a generally smart model needs domain briefings to operate as a domain expert. Skills are composable, pinnable, evergreen.

> "[25:48] Skills are I think like the most important concept or primitive in the frontier agents world. Meaning the models are generally intelligent enough. It's like Albert Einstein who's obviously super smart in a general sense and he may not know how to solve problems in real estate, but if you gave him just the right briefing on like here's a playbook, here's a manual to learn everything you need to know to do this job in real estate, he's going to figure it out pretty well."

Concepts: **skills as primitive**, **Einstein analogy**, **playbook-as-skill**.

### Building the Greg Isenberg contrarian AI skill live
Howie spins up a "Greg Isenberg contrarian AI" skill — agent researches Greg's actual posts, distills voice into a reusable skill pinned to an agent. Generated rules: "Greg's voice is a smart friend at dinner saying the quiet part out loud, not a corporate communicator." "Hook in the first 7 words." "Never end with 'what do you think.'"

> "[35:28] Greg's voice is a smart friend at dinner saying the quiet part out loud. Uh not a corporate communicator."

> "[36:04] These skills should be evergreen, right? Like it's not like you do one and done. The whole point is like every time I use a skill… you can interactively tweak and improve the skills and performance of the agent over time."

Concepts: **voice-distillation skill**, **evergreen skills**, **interactive skill iteration**.

### HyperAgent vs Perplexity Computer, Manus, OpenClaw, Codex
Codex = dev tool, narrower. Open Claude / Claude Code = raw, technical, configuration-heavy. Perplexity Computer + Manus = closest comps; HyperAgent's edges: more powerful default tools, UX, scalability/deployability from day one.

> "[28:52] Against codex it's quite simple — hyper agent is a more general purpose agent platform… against open openclaw [Open Claude] this is much more turnkey ready to go safe and secure by default cloud native… open claw when you actually have to go into configuration or like editing memories or any kind of curation or configuration it's quite raw."

> "[29:45] Manus when it first came out it's truly groundbreaking. It was the first kind of real holy crap yolo agent like look at everything it did, kind of like before even openclaw."

Concepts: **competitive landscape**, **YOLO agent (Manus origin)**, **Linux/Mac framing**.

### The arbitrage of persistence
99% give up after one shot. The persistent 1% become top operators. Door-to-door knife seller vs early-SEM builder parable: hit a reset moment, accept short-term zero revenue, compound.

> "[37:32] What's the value of having an always-on now employee that just like does the things that you care about behind the scenes at all times and runs for trivial costs relative to the cost of hiring a new employee."

> "[38:08] The truth is 99% of people don't are not putting in the work to get to the great outputs… this is the arbitrage. It's for people to actually invest in spending time to optimize and get it to a place where it's high quality."

> "[40:30] You kind of have to hit a reset moment and what feels like maybe experimentation and not actually bringing home the bacon actually is the most profound thing you can do to create real business leverage in the not even like two-year time frame, but maybe even like the six month time frame."

Concepts: **arbitrage of persistence**, **knife-seller parable**, **reset moment**.

### Confidence milestones (Greg's frame)
> "[41:31] When you make your first internet dollar, no matter what it is, it rewires your brain… once you get to like 10k a month, just something about that number, you're probably quitting your job."

> "[42:06] Commit to 30 days, 60 days, 90 days. Every single day, it's like in your calendar… that's what gets you to be a top 1% agent builder."

Concepts: **first-internet-dollar**, **$10K/month threshold**, **calendar-as-commitment**.

### Reviewing contrarian tweet drafts live
Greg's feedback on agent output: "tweets that tend to do well sound very friend-to-friend… these feel a little too formal or stiff." Howie: that becomes either a skill update, a regenerated draft, or a rubric.

### Giving the agent feedback and building rubrics
Rubrics = eval rubric pinned to agent, with separate LLM-as-judge scoring outputs along defined dimensions. Lets you scale a fleet without watching every output. Also: model-cost optimization (drop Opus → Sonnet, watch the score).

> "[31:27] We actually have this concept of what we call rubrics… It's like an eval rubric. And what you can do with rubrics that's really powerful is actually like define what does good look like for a certain type of task… every time my agent runs… I want to score that content along the dimensions that you care about using a separate LLM as judge."

> "[33:07] If I pinned the eval rubric to any one of these agents, I would see like the trend line of how it's scoring. I could then automatically suggest hey maybe I can reduce the model quality so I drop from opus to sonnet get a five times reduction in cost and the score didn't go much down."

> "[33:44] If you're using Manus who is the judge around the output the judge is you the human being right it's not opus 4.6."

> "[34:20] As you scale up if you're the CEO of a business like you just literally don't have time to go and like look at every single thing… so you need to create like better automated checks and balances to oversee what the agents are doing."

Concepts: **rubric-as-eval**, **LLM-as-judge**, **fleet observability**, **management-101-applied-to-agents**, **cost-quality optimization loop**.

### Connectors, OAuth, and building custom API skills
OAuth connectors (Notion, Slack, Granola, email) work in-thread; for any obscure API, the agent reads docs and builds a custom skill itself.

> "[51:32] You could basically have hyper agent go and learn that API… consult helped me build a custom skill to integrate with Twilio via API. It can go and research the Twilio API docs, create a skill for itself to use the API and then actually ask me to enter my credentials in a safe way."

> "[52:14] A frontier agent should be able to literally do anything right but it's just a matter of like you have to give it access to the right context and you have to tell it like hey, you should build a skill for this so then it can do it every single future time effortlessly."

Concepts: **agent builds its own connectors**, **API → skill compilation**.

### How to get started with HyperAgent
Hardest part isn't the product — it's picking the right problem. New onboarding offers to read your Gmail/Slack/Notion/Granola and suggest use cases.

> "[55:18] The whole idea is that hyper agent itself can help you identify use cases or you could come in just with a really broad prompt like kind of interested in building a solopreneur business."

> "[56:27] You're sort of investing in an ecosystem."

Concepts: **blank-canvas problem**, **agent ecosystems as platform bets**, **"live mode"** (always-on heartbeat agents — about-to-ship).

### Closing — $100B with <5 employees
> "[1:04:46] I want to see your listener base generate a hundred billion dollar legit companies with like less than five employees."

Concepts: **$100B/<5-employee company**.

### Howie's thesis on the agent economy (synthesis)
- **TAM is not $1T, it's all white-collar GDP** ("many tens of trillions in the western hemisphere alone").
- **Threshold crossed Nov 2025 with Opus 4.5**: agents shipping clean PRs on multi-hour-to-day tasks autonomously. This is the autonomy line, not capability line.
- **Agent economics replace labor economics, not SaaS economics**. Anchor on opportunity cost ($150 board memo > 1/10th human time), never on $20/mo subs.
- **Fleet > single agent**. The mental model is org chart — one human plus a fleet mapped to job roles. Humanoid-form-factor reasoning: matches existing infra (and matches context-window physics — there's no infinite context).
- **Skills are the central primitive**. Frontier model + domain playbook = expert. Skills are composable, pinnable, evergreen, interactively improved.
- **Rubrics + LLM-as-judge are the observability layer**. Without them, the human is the judge and you don't scale. With them, you also get cost-quality dials (Opus → Sonnet at 5x cost reduction without score drop).
- **Two enterprise plays**: PLG (Open Claude / Claude Code mode — billions of tokens, no monetization yet) or Palantir-style top-down ($100M+ checks, CEO game theory makes this a slam dunk).
- **HyperAgent's wedge**: low floor + high ceiling, command center, deploy-to-Slack one-click, rubric/eval/observability, agent self-builds connectors. Macintosh, not Linux.
- **The arbitrage is persistence, not intelligence**. 30/60/90-day daily practice → top 1%.
- **Goal: $100B companies with <5 employees**.

---

## C. Where they agree, diverge, complement

**Agree (different vocab, same idea):**
- *The threshold was crossed late 2025.* Karpathy: "December was a stark transition." Howie: "Opus 4.5, four to five months ago." Same inflection.
- *Verifiability/judges scale subjective tasks.* Karpathy: "council of LLM judges." Howie: "rubrics + LLM-as-judge." Identical concept, separate vocabularies — Karpathy is theoretical, Howie is shipped product.
- *Humans become spec-and-oversight, not implementers.* Karpathy: "you're in charge of taste, the agents fill in the blanks." Howie: "management 101 applied to agents — you can't look at every output."
- *Old infra is wrong.* Karpathy: docs are written for humans, install flows are for humans, settings menus suck. Howie: HyperAgent rewrites the agent-native UX from scratch.
- *Quality bar is preserved, not lowered.* Karpathy: "agentic engineering preserves the quality bar." Howie: rubrics are how you preserve it at fleet scale.
- *Fleet of agents.* Karpathy: "agent representation for people and orgs." Howie: "every company will have a fleet of agents."
- *Anti-one-shot.* Karpathy: explore where the RL circuits are. Howie: 99% give up after one shot, the arbitrage is persistence.
- *Skills/spec ≈ knowledge bases.* Karpathy's "LLM knowledge bases" are skill-shaped (synthetic data over a fixed corpus); Howie's skills are knowledge-shaped (playbooks pinned to agents).

**Diverge / different emphasis:**
- *Where the moat is.* Karpathy locates it at understanding ("can't outsource understanding") — pessimistic about taste being commoditized soon, but expects it eventually. Howie locates it at product/UX (low-floor + high-ceiling tooling) and at the persistent-operator-with-rubrics — bet that the human moat is operational discipline, not understanding per se.
- *Tone on incumbents.* Karpathy is product-philosophical, almost detached. Howie is sales-savvy: $100M Palantir checks, CEO game theory, $1M of free credits as adoption gambit.
- *Pricing frame.* Karpathy doesn't talk pricing; Howie's central reframe is opportunity-cost pricing.
- *Verifiability.* Karpathy stresses *labs care* as the limiter — you're at the mercy of pretraining mix. Howie barely discusses pretraining; he assumes frontier is good enough and the action is at skills + rubrics.
- *End-state.* Karpathy: neural-host computers, diffusion-rendered UIs, sensors-and-actuators world. Howie: org-chart-mapped fleets running businesses with <5 humans.

**Complement (synthesis for the positioning page):**
- Karpathy gives you the *why now* and the *worldview frame* (Software 3.0, ghosts not animals, agentic engineering, verifiability, understanding-as-bottleneck).
- Howie gives you the *operator stack*: skills, rubrics, fleet, command center, opportunity-cost pricing, persistence arbitrage.
- An agency positioning page can stand on Karpathy's frame ("we're past the inflection; the discipline is agentic engineering, not vibe coding") and sell Howie's stack as the operating model the client adopts. Karpathy supplies legitimacy; Howie supplies the playbook.

---

## D. Quotes for the pitch deck

1. Karpathy [1:16] — *"The chunks just came out fine and then I kept asking for more and it just came out fine and then I can't remember the last time I corrected it."* **Use:** lead slide / "the threshold was crossed."
2. Karpathy [1:47] — *"A lot of people experienced AI last year as ChatGPT-adjacent thing. But you really had to look again as of December because things have changed fundamentally."* **Use:** objection handler for "we already tried AI."
3. Karpathy [16:15] — *"Vibe coding is about raising the floor for everyone… agentic engineering is about preserving the quality bar of what existed before in professional software."* **Use:** the framing slide that justifies the agency's existence.
4. Karpathy [16:50] — *"People used to talk about the 10x engineer. People who are very good at this peak a lot more than 10x."* **Use:** ROI slide / why hire the agency vs DIY.
5. Karpathy [21:37] — *"You're in charge of the taste, the engineering, the design… the engineers are doing the fill in the blanks."* **Use:** what the client's job becomes.
6. Karpathy [26:30] — *"Decompose the workloads into sensors over the world, actuators over the world. How do we make it agent native?"* **Use:** services-page header / what the agency actually does.
7. Karpathy [28:09] — *"You can outsource your thinking but you can't outsource your understanding."* **Use:** closer / why the client still matters.
8. Howie [6:26] — *"The TAM is not even a trillion. It's the whole GDP of all white-collar labor — many tens of trillions in the western hemisphere alone."* **Use:** TAM slide / urgency.
9. Howie [10:01] — *"Even if it cost me $150 of tokens to generate that output, think about the opportunity cost of my time."* **Use:** pricing-objection handler.
10. Howie [14:20] — *"A business that probably could be run now with five people instead of 50,000."* **Use:** transformation slide / what's actually on the table.
11. Howie [15:26] — *"Every company will have a fleet of agents… agents are converging on purposeful roles that map to job roles humans were playing."* **Use:** "what we build for you" framing.
12. Howie [25:48] — *"Skills are the most important concept or primitive in the frontier agents world… give Einstein the playbook for real estate and he'll figure it out."* **Use:** skills-as-product page lead.
13. Howie [31:27] — *"Rubrics. It's like an eval rubric pinned to the agent. Every time my agent runs I score that content along the dimensions I care about using a separate LLM as judge."* **Use:** observability/quality slide — proof you operate at scale.
14. Howie [38:08] — *"99% of people are not putting in the work to get to the great outputs. This is the arbitrage."* **Use:** why-an-agency slide / persistence as service.
15. Howie [40:30] — *"You have to hit a reset moment. What feels like experimentation is the most profound thing you can do to create real business leverage in the six-month time frame."* **Use:** call-to-action / the cost of waiting.
16. Howie [22:39] — *"App building is just a feature now. It's a commoditized feature. HyperAgent is the founder in this case, not just the developer."* **Use:** repositioning the deliverable — you're not selling apps.
17. Howie [1:04:46] — *"I want to see your listener base generate $100 billion legit companies with less than five employees."* **Use:** vision slide / aspirational close.

---

## E. Loose-end glossary (wiki-page candidates)

| Term | Gloss | Source |
|---|---|---|
| **Software 3.0** | Programming paradigm where the program is the prompt/context and the LLM is the interpreter. | Karpathy |
| **Vibe coding** | Karpathy's 2025 coinage: trusting the agent's code without correcting it. Raises the floor. | Karpathy |
| **Agentic engineering** | Discipline of going faster with agents while preserving professional quality bars. | Karpathy |
| **Ghosts not animals** | LLMs are statistical entities summoned via pretraining + RL, not motivated organisms — Karpathy's framing essay. | Karpathy |
| **Jaggedness** | The peaks-and-valleys capability profile of LLMs across domains. Driven by RL coverage. | Karpathy |
| **Verifiability gap** | The lag between domains where outputs are easy to verify (math/code) and those where they aren't (taste, writing). | Karpathy |
| **Verifiable + labs care** | Karpathy's two-part filter for predicting model performance in a domain. | Karpathy |
| **Council of LLM judges** | Karpathy's name for ensemble LLM-as-judge — Howie's "rubrics" are this in product form. | Karpathy |
| **Menu Gen** | Karpathy's vibe-coded restaurant-menu OCR + image-gen app; also a metaphor for old-paradigm code that shouldn't exist. | Karpathy |
| **Nano Banana** | Google's image-gen model. Karpathy used it to obsolete his own Menu Gen app. | Karpathy |
| **LLM knowledge bases** | Karpathy's pet project — LLMs build wikis from raw documents; "synthetic data generation over fixed data." Likely the spine of Eureka Labs. | Karpathy |
| **Eureka Labs** | Karpathy's current company. Education-focused, betting on understanding-as-bottleneck. | (intro / context) |
| **Spec-driven agent dev** | Detailed spec/docs become the program; agent fills in implementation. | Karpathy |
| **Sensors and actuators** | Karpathy's framing for agent-native infra: read-the-world + act-on-the-world primitives. | Karpathy |
| **Outsource thinking ≠ outsource understanding** | Karpathy's closing thesis. | Karpathy |
| **December 2025 inflection** | Both Karpathy and Howie point to late 2025 as the crossover. | Both |
| **Opus 4.5 inflection** | Howie's named version that crossed the autonomy threshold; Karpathy implicitly references the same window. | Howie (also Karpathy refs Opus 4.7) |
| **Open Claude / Claude Code** | Anthropic's CLI agent. (Transcribed throughout as "openclaw" / "open claw" / "cloth code" — ASR error.) | Both |
| **Codex** | OpenAI's coding agent CLI. Mentioned alongside Claude Code. | Both |
| **Manus** | Chinese-origin "YOLO" autonomous agent — Howie credits as the first real autonomous agent product, pre-Claude-Code. (Transcribed "Manis".) | Howie |
| **Perplexity Computer** | Closest comp to HyperAgent per Howie. | Howie |
| **HyperAgent** | Howie's product. Cloud-native agent platform with skills, rubrics, fleet view, OAuth connectors, Slack-deploy. Macintosh to Open Claude / Claude Code's Linux. Hyperagent.com. Built inside Airtable. | Howie |
| **Airtable** | Howie's company. ~$500M ARR, $1B cash, profitable; HyperAgent is launched within it. | Howie |
| **Skill (HyperAgent primitive)** | Reusable playbook pinned to an agent. Composable, evergreen, interactively iterated. | Howie |
| **Rubric / LLM-as-judge** | Eval rubric pinned to agent; separate LLM scores every run on chosen dimensions. Enables fleet observability and cost-quality optimization. | Howie |
| **Command center** | HyperAgent fleet view — multiple role-mapped agents with deploy/oversight controls. | Howie |
| **Live mode** | About-to-ship HyperAgent feature: always-on heartbeat agents that push proactively. Inspired by Open Claude / Claude Code's heartbeat behavior. | Howie |
| **Sequoia "trillion-dollar agent" chart** | Sequoia AI Ascent 2026 chart — agent deployment by domain, software eng ~50%, others single digits. Howie says it understates. | Howie |
| **Sequoia AI Ascent 2026** | The conference where Karpathy spoke. | Karpathy |
| **Stephanie Zhan** | Sequoia partner, Karpathy interviewer. | Karpathy |
| **Greg Isenberg** | Host. Solopreneur podcast / Late Checkout / Vibe Marketer / Idea Browser. | Howie |
| **Howie Liu** | CEO/co-founder Airtable + HyperAgent. @howietl. | Howie |
| **Andrej Karpathy** | OpenAI co-founder, ex-Tesla AI lead, Eureka Labs founder. | Karpathy |
| **Vercel** | Where Karpathy deployed Menu Gen. Mentioned as friction. | Karpathy |
| **Granola** | Meeting notes app, integrated with HyperAgent. | Howie |
| **Paperclipip / paperclip** | App Howie mentions playing with that builds an org-chart metaphor for agents. (Spelling uncertain.) | Howie |
| **Medv** | Mentioned in tweet drafts as a startup whose "billion-dollar story" turned out to be illegitimate. ASR error possible — could be "Medv", "Medve" or another company name. Worth verifying. | Howie |
| **Hermes agent** | Briefly mentioned by Greg as another agent platform someone discussed on his pod. | Howie |
| **AGENTS.md** | Not explicitly mentioned in either transcript. (Worth flagging — you asked about it; absent.) | — |
| **Stripe Agent SDK** | Not explicitly mentioned. Karpathy references Stripe only in his "agent matched email addresses across Stripe and Google" anecdote. | — |
| **Zola** | Not mentioned. | — |
| **Twilio** | Used as the live-demo example for HyperAgent building a custom API skill. | Howie |
| **Reset moment** | Howie's parable for why sustained AI adoption beats incremental. | Howie |
| **Knife-seller parable** | Howie's door-to-door vs SEM allegory for early-internet dynamics applied to AI. | Howie |
| **YOLO mode / full YOLO** | Howie's term for letting agents auto-post/auto-act without human review. He doesn't recommend it for content. | Howie |
