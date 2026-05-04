---
title: "AI agency niches (2026)"
type: concept
tags: [concept, ai-agency, productized-services, business-model, overlook-strategy]
created: 2026-04-24
updated: 2026-04-25
weight: high
node_size: 10
sources: [[notebooklm-simple-ui-viral-ai]], [[deep-research-strategic-arbitrage]], [[notebooklm-overlook-strategy]], [[isenberg-future-of-saas-30-step]]
---

# AI agency niches (2026)

A reference table of viable services an AI-leveraged solo studio could sell in 2026, drawn from Finn's NotebookLM Deep Research and supporting sources. Used as a menu when deciding what [[overlook-strategy]] should productize next.

## The reference table

| Niche | Implementation fee / MRR | Difficulty | Fit for Overlook |
|---|---|---|---|
| Custom AI chatbot agency (e-comm, healthcare, real estate) | $5K–$50K per build | Intermediate | Medium — would need HIPAA-compliant infra story for healthcare |
| Document analysis / summarization (legal, finance, research) | $3K–$30K MRR | Intermediate | Strong — Finn already runs Ollama + pgvector for [[overlook-portal-webapp]]; same pattern |
| AI code review / QA tooling | $5K–$40K MRR | Advanced | Weak — devtools is a different GTM than service agency |
| Specialized knowledge base builders | (range not given) | Intermediate | Very strong — this vault IS one. See [[llm-wiki-pattern]]. Could productize the pattern. |
| Resume / career service | $2K–$12K MRR | Beginner | Off-brand for Overlook |
| BI dashboards | $5K–$45K MRR | Advanced | Medium — overlaps with [[overlook-portal-webapp]] surface |
| AI-ready website conversion (`llms.txt`, schema, structured data) | ~$2K per project | Beginner-Intermediate | **Very strong** — natural extension of existing client web work |
| Automated sales proposal generators | (range not given) | Intermediate | Strong — could be an Overlook internal tool first, then productize |
| Lead generation agency (Claude Code + Apify) | (range not given) | Intermediate | Medium — outbound work isn't Finn's energy historically |
| Legal tech: intake, demand letters, lead scoring | (range not given) | Advanced | Weak unless [[kelly-bennett]]'s entertainment-law network opens a wedge |

## Filtering rule

The [[deep-research-strategic-arbitrage|Deep Research briefing]] frames the choice this way: pick a niche where Claude Code's strengths (long context, code generation, dynamic tooling) compound with a *high-stakes regulated industry* OR a *high-volume admin task*. Marketing fluff doesn't make money; legal docs and BI dashboards do.

## What this means for Overlook in particular

Three niches stand out as natural extensions of Finn's existing surface:

1. **AI-ready website conversion** — `llms.txt`, schema markup, structured data for service businesses already on WordPress. $2K/project, fast, leverages existing branding skills. Low risk to test.
2. **Specialized knowledge base builders** — productize the Karpathy/Nate-Herk LLM wiki pattern as a deliverable for clients with messy institutional knowledge. Finn already runs the pattern personally; the productization gap is small.
3. **Document analysis** — extend the Ollama + pgvector setup from [[overlook-portal-webapp]] into a vertical service (e.g., "we read your contracts"). Highest revenue ceiling, requires a vertical pick.

Idea seeds appended to [[Finn-OS/ideas/backlog]]; any of these graduating to active pursuit gets a row in [[Finn-OS/career/opportunities]].

## See also: counter-evidence

The [[notebooklm-overlook-strategy]] cluster includes "How to Sign AI Workflow Clients (With 0 Followers)" and "If you struggle with attracting high paying clients, watch this. (ZERO cold outreach)" — these argue the *bottleneck is not niche selection but client acquisition*. Worth weighing before optimizing the menu vs. the funnel.

## A fourth axis: pricing model

The niches above are scoped by *what you sell*. The 2026-04-25 [[isenberg-future-of-saas-30-step|Isenberg]] ingest adds a parallel question: *how you price it.* Each niche can be sold as:

- A bespoke project (current Overlook default)
- A productized fixed-price service ([[productized-services]])
- An [[agent-native-saas]] charged per task or per outcome ([[per-task-pricing]])

The third pricing model is what unlocks the LTVs the [[deep-research-strategic-arbitrage]] briefing uses to argue for productization in the first place — but only after [[services-first-saas|the services-first phase]] has proven the workflow. Treat the niche table above as the *what*, [[build-niche-agent-saas]] as the *how to sequence it.*

## Related

- [[productized-services]]
- [[ninety-day-launch-plan]]
- [[boring-business-automation]]
- [[claude-max-arbitrage]]
- [[overlook-strategy-positioning]]
- [[agent-native-saas]]
- [[per-task-pricing]]
- [[build-niche-agent-saas]]
- [[notebooklm-simple-ui-viral-ai]]
- [[deep-research-strategic-arbitrage]]
- [[isenberg-future-of-saas-30-step]]
