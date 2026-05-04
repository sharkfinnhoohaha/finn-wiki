---
title: "Fleet of agents"
type: concept
tags: [concept, fleet, howie-liu, karpathy, org-chart, agentic-services]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-howieliu-hyperagent-2026-04-29]], [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Fleet of agents

Howie Liu's operating model for what every company looks like in 2027 and beyond. Not one agent that does everything — a fleet of around twenty role-mapped agents, each with its own context, skills, rubrics, and tools, run from a command-center view by one human. The roles converge on a humanoid org chart for the same reason humanoid robots converge on humanoid form factor: the legacy infrastructure (Slack, email, calendars, CRM, browsers) was built for humans, and the agent has to fit through it.

> "[15:26] Every company will have a fleet of agents… agents are converging on these purposeful, like they almost map to job roles that humans were playing." — Howie Liu

There's a physics constraint underneath the org-chart shape: context windows aren't infinite, and probably never will be. You partition agents the same way you partition humans — by role, scope, and the shape of their working memory.

> "[16:42] I just don't think we're ever going to get to a point to where an AI model can have infinite context window… there's a physics to that… for the same reason why we partition humans into different roles, the same is true for agents." — Howie Liu

Karpathy's version is the same idea in his vocabulary — agents become representatives of people and organizations.

> "[27:01] I do think we're going towards a world where there's agent representation for people and for organizations and you know I'll have my agent talk to your agent to figure out some of the details of our meetings." — Karpathy

The HyperAgent demo shape is the canonical example of what a fleet looks like as a product: customer intel, content marketer, comp researcher, lead enricher, customer-email responder. Each one a role. Each one a tab in the command center. Any of them deployable into Slack as an always-on coworker with one click.

> "[25:23] Your Slack co-workers are now agents in addition to humans and they're really smart and they have their own expertise and context. Like you get that with a single click out of any agent that you build in HyperAgent." — Howie Liu

The implication for Overlook is the studio's productized deliverable. A Skill Pack Build is — at a higher level of abstraction — a fleet topology. The audit ([[workflow-audit-service]]) maps the client's workflows to roles. The build pins the right [[skills-as-primitive|skills]] and [[rubrics-and-llm-as-judge|rubrics]] to each role. The portal ([[client-portal-as-differentiator]], [[portal-orchestration-extension]]) becomes the command center the client actually sees — same primitive Howie ships, but built per-client and woven into Overlook's ongoing relationship.

This is also why [[orchestration-as-interface]] is the right frame for the next-gen product surface. The command center isn't a dashboard with charts — it's an orchestration layer where the human sits above the fleet, dispatching, reviewing, and tuning. See [[agentic-services-positioning]] for how that sells.

## Related

- [[skills-as-primitive]]
- [[rubrics-and-llm-as-judge]]
- [[orchestration-as-interface]]
- [[agentic-services-positioning]]
- [[portal-orchestration-extension]]
- [[client-portal-as-differentiator]]
- [[workflow-audit-service]]
- [[agent-native-saas]]
- [[autonomous-agent-design-principles]]
- [[isenberg-howieliu-hyperagent-2026-04-29]]
- [[karpathy-vibe-to-agentic-2026-04-29]]
