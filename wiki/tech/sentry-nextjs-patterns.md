---
title: "Sentry — Next.js Patterns"
type: tech
tags: [sentry, nextjs, monitoring, error-tracking, observability, app-router]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 5
sources: [[sentry-ingest-2026-04-28]]
---

# Sentry — Next.js Patterns

Config reference for `@sentry/nextjs` ≥8.28.0 on Next.js 13+ App Router. For the entity overview and which projects to instrument first, see [[sentry]]. For the wizard-guided setup, invoke the `sentry-nextjs-sdk` skill.

## Four files, three runtimes

```
instrumentation-client.ts   ← browser
sentry.server.config.ts     ← Node.js (via instrumentation.ts)
sentry.edge.config.ts       ← Edge runtime (via instrumentation.ts)
instrumentation.ts          ← dispatches server/edge at runtime
```

`instrumentation.ts` is stable in Next.js 14.0.4+. For 13.x you need `experimental.instrumentationHook: true` in `next.config.ts`.

## `instrumentation-client.ts` (browser)

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
  replaysSessionSampleRate: 0.1,   // 10% of all sessions
  replaysOnErrorSampleRate: 1.0,   // 100% of error sessions
  sendDefaultPii: true,
  enableLogs: true,
  integrations: [Sentry.replayIntegration()],
});

// App Router only: hook into navigation transitions
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
```

> `sendDefaultPii: true` includes IP addresses and request headers. Fine for internal tools and client portals; consider omitting or masking for public-facing sites with strict privacy requirements.

## `sentry.server.config.ts` (Node.js)

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
  includeLocalVariables: true,    // attach local var values to stack frames
  sendDefaultPii: true,
  enableLogs: true,
});
```

`includeLocalVariables: true` is the biggest debugging force-multiplier on the server side. It shows the actual values of variables at crash time — e.g. `token = "abc123"`, `client_id = null` — which turns a vague traceback into an immediately diagnosable crash. Server-only feature.

## `sentry.edge.config.ts` (Edge)

Same as server but without `includeLocalVariables` (not supported in Edge runtime):

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
  sendDefaultPii: true,
  enableLogs: true,
});
```

## `instrumentation.ts` (dispatch hook)

```typescript
import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

// Requires @sentry/nextjs >= 8.28.0
export const onRequestError = Sentry.captureRequestError;
```

`onRequestError` automatically captures all unhandled server-side request errors. It's the reason to stay on ≥8.28.0.

## App Router: `app/global-error.tsx`

Catches root-layout errors and React render crashes — the errors that would otherwise just white-screen with no visibility:

```tsx
"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
```

`"use client"` must be the very first line or it won't work.

## `next.config.ts` — `withSentryConfig()`

```typescript
import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // existing config
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",   // bypass ad-blockers
  silent: !process.env.CI,
});
```

If you have a `middleware.ts`, exclude the tunnel route from auth redirects:

```typescript
export const config = {
  matcher: ["/((?!monitoring|_next/static|_next/image|favicon.ico).*)"],
};
```

## Source maps

`.env.sentry-build-plugin` (gitignored):

```
SENTRY_AUTH_TOKEN=sntrys_eyJ...
```

This file is picked up automatically by `withSentryConfig` on `next build`. Also set `SENTRY_AUTH_TOKEN` in Vercel project settings so CI builds upload maps too.

No source maps = minified stack traces = undebuggable production errors. Always wire this up.

## Turbopack caveat

`withSentryConfig`'s `webpack.treeshake.*` options are webpack-only. If a project uses Turbopack (Next.js 15+ with `--turbopack`), omit the treeshake config or the build will break.

## Filtering noise (prevent quota burn)

```typescript
Sentry.init({
  // ...
  beforeSend(event) {
    // drop errors from browser extensions and bots
    if (event.exception?.values?.[0]?.value?.includes("ResizeObserver loop")) {
      return null;
    }
    return event;
  },
});
```

On the GitHub Pack plan (50K errors/mo), a single noisy error type can exhaust quota in hours. Add `beforeSend` filters early.

## Distributed tracing (Vercel → Railway)

To trace a request from the Next.js frontend through to the FastAPI backend on Railway, set `tracePropagationTargets` in the client init:

```typescript
Sentry.init({
  tracePropagationTargets: [
    "localhost",
    /^https:\/\/claudeoverlook-webapp-production\.up\.railway\.app/,
  ],
  // ...
});
```

And initialize Sentry in FastAPI with `sentry-sdk[fastapi]`. This gives you a single trace that spans both services — you can see the Vercel function call that triggered the slow Railway query.

## AI Monitoring (Overlook portal AI features)

```typescript
import * as Sentry from "@sentry/nextjs";
import { OpenAI } from "openai";

const client = Sentry.wrapOpenAi(new OpenAI());
// or for Vercel AI SDK:
Sentry.init({ integrations: [Sentry.vercelAIIntegration()] });
```

Captures token counts, latency, model used, and errors per LLM call. Useful for the [[overlook-portal-webapp]] AI summary pipeline and any [[pier-and-point]] draft generation.

## Verification

After setup, throw a test error and confirm it appears in the Sentry dashboard within ~30s:

```typescript
// Server action or API route — delete after confirming
throw new Error("Sentry test — delete me");
```

Check: client errors, server errors, edge errors, source maps (readable filenames in stack traces), session replay in Replays tab.

## Related

- [[sentry]] — entity page, plan details, which projects to instrument
- [[next-js-patterns]] — broader Next.js cheat sheet
- [[vercel-deployment]] — frontend hosting
- [[railway-deployment]] — FastAPI backend; distributed tracing bridge
- [[overlook-portal-webapp]] — highest-priority instrumentation target
