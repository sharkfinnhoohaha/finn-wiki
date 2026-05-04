---
title: "Sanity"
type: entity
tags: [tool, service, cms, headless]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-caea5222]], [[session-a2022942]], [[session-8ca674ce]], [[session-65f6bd58]]
---

# Sanity

Headless CMS Finn uses on the [[three-altitudes]] portfolio site. Studio v3, embedded in Next.js, dataset `production`. Paired with [[tinacms]] (used on [[somliøya]]) as the two CMS choices in Finn's stack.

## How it's used

- Content for `three-altitudes`: `devProject`, `audioWork`, `hero`, `aviation`, `siteSettings`
- Studio mounted at `/studio` route inside the Next.js app
- Visual editing wired via `@sanity/visual-editing`, conditional on draft mode
- Presentation tool for live previews
- GROQ for queries
- Webhook → [[vercel]] deploy hook on publish

## Gotchas Finn has hit

- **`basePath: '/studio'`** must be set in `defineConfig` when embedding Studio in Next.js. PR #6 fixed "Tool not found: studio".
- **`navigate` prop is invalid** on `presentationTool`. Had to be removed (PR #7) to clear a TypeScript build error.
- **Tokens shown once.** "Preview Read Token" with Viewer perms — copy at creation, can't retrieve later. Regenerate if lost.
- **Token plumbing into [[vercel]]:** placeholders in `.env.local` get mirrored to Vercel and produce 500 Unauthorized on `/api/draft-mode/enable`. Real token must be pasted into Vercel env, then redeploy.
- **Server vs client tokens.** `SanityLive` `browserToken` in `src/lib/sanity/live.ts` needs `NEXT_PUBLIC_SANITY_API_READ_TOKEN`, not the server-only `SANITY_API_READ_TOKEN` — otherwise it falls back to ~4s polling instead of WebSocket. The polling causes Studio to refresh every few seconds, making it impossible to edit.
- **Scroll-triggered Studio refresh.** Diagnostic ladder: (1) Next.js App Router scroll restoration — try `experimental: { scrollRestoration: false }` in `next.config.js` or `export const dynamic = 'force-static'` on Studio route. (2) Custom input components missing `useEffect` cleanup. (3) `@sanity/presentation` iframe interference. Use DevTools Network tab — full document request on scroll = router; otherwise React re-render.
- **Webhook config (Sanity → Vercel)** when Publish isn't a trigger option:
  - Trigger on: Create + Update
  - Filter: `!(_id in path("drafts.**"))` — fires only on published transitions, not draft keystrokes
  - Projection: blank (Vercel ignores body)
  - Method: POST. Secret/headers: blank
- **Draft model:** `drafts.<id>` vs published `<id>`. Publish promotes draft to published; webhook + Vercel build is required to push live.

## GROQ patterns Finn finds useful

- Projections to avoid over-fetching: `*[_type == "devProject"] { name, num, status }`
- Image deref: `"photos": photos[].asset->url`
- Combined singletons: `{ "hero": *[..][0]{..}, "settings": *[..][0]{..} }`
- Array filtering inside docs: `disciplines[code == "AUDIO"][0]`
- `coalesce(role, "CONTRIBUTOR")` for fallbacks
- Mental model: `->` deref, `[]` filter/index, `{}` shape, `|` order/slice

Finn explicitly noted he feels he's "missing out on functionality" by not understanding GROQ — wants tutorials grounded in the actual schema, not generic.

## See also

- [[tinacms]]
- [[vercel]]
- [[three-altitudes]]
- [[groq-patterns]]
