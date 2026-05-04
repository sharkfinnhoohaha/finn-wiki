---
title: "PostgreSQL"
type: entity
tags: [entity, tool, database, sql]
created: 2026-04-26
updated: 2026-04-26
weight: medium
node_size: 5
---

# PostgreSQL

Primary relational database. Hosted on [[railway]] for [[overlook-portal-webapp]]. Also used with [[pgvector]] for embedding storage in the [[ollama]]-based RAG pipeline. Managed via [[sqlalchemy]] + [[alembic]]. See [[alembic-postgres-patterns]] for deployment patterns.
