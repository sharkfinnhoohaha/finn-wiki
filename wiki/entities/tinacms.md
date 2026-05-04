---
title: "TinaCMS"
type: entity
tags: [tool, service, cms, git-based, headless]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-1cfa988a]]
---

# TinaCMS

Git-based headless CMS. Content lives in the repo as markdown/JSON, edited through a visual UI but versioned with git like any other source file. Finn uses it on [[somliøya]] (Next.js + TinaCMS). It's the git-based counterpart to [[sanity]] in his CMS toolkit.

## How it fits

- **Sømliøya** is the active TinaCMS project — Next.js frontend, content committed to the repo
- The choice between [[sanity]] and TinaCMS is project-by-project: TinaCMS for projects where git-based content makes sense (small teams, content-as-code), Sanity for projects that want a richer schema and live Studio editing

## Gotchas

None captured in extracts yet.

## See also

- [[sanity]]
- [[somliøya]]
- [[vercel]]
