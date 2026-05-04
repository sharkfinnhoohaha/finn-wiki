---
title: "pgvector"
type: entity
tags: [tool, postgres, embeddings, rag]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-dec9a139]]
---

# pgvector

Postgres extension for vector embeddings. Finn uses it as the embedding store for the document-RAG feature on [[overlook-portal-webapp]]. Sits inside the same Postgres instance hosted on [[railway]] — no separate vector DB.

## How it's used

- Documents (PDF/DOCX/TXT) are uploaded → chunked → embedded with [[ollama]]'s `nomic-embed-text` → stored in pgvector
- Queries hit the embedding column via cosine similarity for the AI Q&A path

## See also

- [[ollama]]
- [[railway]]
- [[overlook-portal-webapp]]
