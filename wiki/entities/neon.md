---
title: "Neon"
type: entity
tags: [tool, service, database, postgres, serverless]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# Neon

Serverless Postgres provider. Launch tier $19/month. Standout feature: Git-style branching for safe schema changes per pull request — branch a database off production, make schema changes, test, merge back with zero downtime.

pgvector support built in for embeddings. Recommended in [[ai-newsroom-pipeline]] for the editorial queue (state machine with `ingested|drafted|under_review|approved|published|rejected` enum) and RAG embeddings for voice-matching past coverage.

Same wire protocol as Finn's existing [[railway]] Postgres, so SQLAlchemy/Drizzle ORM patterns carry over without vendor lock-in.

## See also

- [[railway]]
- [[ai-newsroom-pipeline]]
