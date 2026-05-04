---
title: "Student discounts — what to activate while .edu is valid"
type: personal
tags: [education, discounts, credits, github-pack, infrastructure, finance, tooling]
created: 2026-04-28
updated: 2026-04-28
weight: high
node_size: 10
sources: [[student-discounts-research-2026-04]]
---

# Student discounts — what to activate while .edu is valid

Reference page for `.edu`-eligible discounts ([[berklee-online|Berklee Online]] gates these). **Audited and corrected April 28, 2026** after an earlier draft contained several factual errors. Where a deal has materially changed since training-data cutoff, that's flagged inline. Where T&Cs were unverifiable, that's flagged too.

> [!warning] This page now distinguishes "marketing claim" from "actual T&C"
> The `Fine print / not included` column is the load-bearing column. The first version of this page over-trusted vendor marketing copy. Specifically: claimed Notion Education Plus included AI (it doesn't), described Clerk's student deal as "Free Pro" (phone auth is excluded), and included the Apple Pro Apps Bundle as still active (Apple killed it Jan 29, 2026). Treat any claim without an explicit `[VERIFIED YYYY-MM-DD]` tag below as needing direct vendor confirmation before relying on it.

## Status legend

- **✓** activated by Finn as of April 28, 2026
- **☐** eligible, not yet activated
- **⚠** activated but with material exclusions / restrictions Finn should know about
- **✗** offer no longer exists / materially changed since training data
- **?** Finn says activated, but ambiguous which specific tier — needs confirmation

---

## Already activated by Finn

Pulled from Finn's confirmation. Annotated with what he's actually getting and what he's NOT getting under each plan.

| Service | Status | What he has | Material exclusions / fine print |
|---|---|---|---|
| **GitHub Student Developer Pack** | ✓ | Verified student account, gates ~86 Pack offers | Annual re-verification required; some Pack offers have separate annual renewals |
| **Spotify Premium Student** ([[spotify-premium]]) | ✓ | $6.99/mo Premium + **Hulu (with ads)** bundle | **4-year max cumulative**, must re-verify every 12 months. If verification fails mid-cycle plan may pause. Showtime no longer in bundle (removed late 2024) |
| **JetBrains All Products Pack** ([[jetbrains]]) — DataGrip + WebStorm downloaded | ⚠ | All IDEs free annually | **STRICTLY NON-COMMERCIAL.** JetBrains educational license cannot be used for paid client work, freelance, or projects with commercial intent. **For Overlook Strategy client engagements Finn needs a separate commercial license.** Personal hobby projects + Berklee coursework only. 40% graduation discount available for the personal commercial subscription afterward |
| **DigitalOcean** | ✓ | $200 platform credit | Credit expires **12 months from claim**. Auto-converts to pay-as-you-go after credit exhausted or expired. Valid on most DO services; excludes some legacy products |
| **Name.com** | ✓ | One free domain (.app/.dev/.live/.studio/.software) | Free for first year; renews paid at standard rate |
| **Namecheap** | ✓ | Free .me domain + 1 SSL cert | Same: free year one, paid renewal |
| **Sentry** | ✓ | 1-year Pro-equivalent (50K errors, 100K transactions, 1GB attachments, 3 team members) | Renewable annually via Pack re-verification. Replay quotas lower than commercial Pro. Cannot upgrade in-place if you outgrow it — would need to downgrade and re-upgrade on commercial plan |
| **Clerk** ([[clerk]]) | ⚠ | Free Pro plan via Pack | **Phone / SMS authentication is NOT included** (this is normally Clerk Pro's flagship feature). 10K MAU production cap. Allowlist + blocklist, RBAC, custom session duration, device tracking are included |
| **"Apple Pro"** | ? | Either: (a) the OLD lifetime Pro Apps Bundle (~$199.99 — Logic + Final Cut + Motion + Compressor + MainStage), or (b) the NEW Creator Studio Education subscription ($2.99/mo or $29.99/yr) | **Apple killed the lifetime Pro Apps Bundle on January 29, 2026** and replaced it with Creator Studio Education subscription. If Finn purchased before Jan 29 → grandfathered lifetime license, no action needed. If after → he has the subscription, which expires when `.edu` does. **Worth confirming which one** |
| **Notion** ([[notion]]) | ⚠ | Free **Notion Plus** education plan (1-member workspace, 1000 block limit, database backups, synced blocks, page history) | **Does NOT include Notion AI.** AI is gated behind a separate paid tier. Students get 50% off the AI add-on for first 12 months ($5/mo vs $10/mo) — unconfirmed if currently offered as add-on or only via Notion Business at $20/mo (sources conflict) |
| **Figma Education** ([[figma]]) | ✓ | Free Figma Professional for **2 years** (with renewal option for up to 4 years total) | Tied to active enrollment via SheerID. Some org-tier features excluded; Dev Mode and plugin development typically included but worth confirming for any team-feature dependency |
| **OpenAI Codex (student)** | ✓ | **$100 in ChatGPT credits**, redeemable in Codex via ChatGPT Plus/Free/Go/Pro | Credits **expire 12 months after grant date**. US + Canada students only. Verified via SheerID at chatgpt.com/codex/students. Not unlimited Codex — $100 is a credit grant, not a subscription |
| **Railway** | ✓ (account only) | **No specific student offer.** Railway doesn't run a student program | Standard new-user $5 trial credit applies but that's it. The Pack technically lists Railway but as far as Railway's own help docs say: no student discount. If Finn is paying for Railway, he's paying full rate |
| **Google** | ? | Most likely **Google AI Pro for Students** — Gemini 3.1 Pro free for 12 months ($28.99/mo retail), includes Deep Research, NotebookLM, Veo 3.1, 2TB storage | **Sign-up deadline is April 30, 2026** — if Finn activated this recently, he caught the window. SheerID verification. Confirm at one.google.com or gemini.google/students. After 12 months drops to standard pricing |

---

## What's left worth claiming

Filtered out anything Finn already has. Ranked by deadline urgency, then by actual value.

### Hard deadlines

| Offer | Deadline | What it is | Fine print |
|---|---|---|---|
| **GitHub Certification voucher** | **June 30, 2026** | Free Foundations or Copilot exam voucher | Email-bound, non-transferable. Schedule the exam by mid-June |
| **Google AI Pro for Students** | **April 30, 2026** sign-up | Gemini 3.1 Pro free for 12 months ($28.99/mo retail) | If Finn's "Google" activation IS this — done. If not, this is two days away. SheerID verification |

### High-value still-eligible

| Offer | Benefit | Fine print / what's NOT included |
|---|---|---|
| **GitHub Copilot Student plan** | Free Copilot premium features for verified students | **As of March 13, 2026, this is now a NEW "Copilot Student" plan, not Copilot Pro.** GPT-5.3-Codex was removed from the model picker April 27, 2026 (still available via auto-selection). **New sign-ups for Pro/Pro+/Student plans are temporarily paused as of April 20, 2026** — but existing users keep access. If Finn wants this he should check status of new-sign-up freeze |
| **MongoDB Atlas** | $50 credits + Compass + $150 cert voucher | One-time. Save until a project needs Mongo. Cert voucher expires per MongoDB policy |
| **Stripe** | Transaction fees waived on **first $1,000 in revenue processed** | **Not first $1,000 in transactions** — this caps at ~$30 in fee savings on a typical 2.9% + 30¢ rate. Less impactful than the previous draft implied. Live mode only |
| **Heroku** | $13/mo credit × 24 months | Auto-applies to verified Pack accounts. Worth claiming as Vercel/Railway backup |
| **Datadog (Pack)** | Pro-equivalent, 10 servers, 2 years | **Stated as "educational use only" in T&Cs.** Production deployment for paid client work may violate terms — verify before instrumenting Overlook portal in production. 2 years is non-renewable; downgrades to free tier after |
| **FrontendMasters** | All courses + workshops, 6 months free | Renews annually with Pack re-verification. No hidden caps |
| **Educative** | All courses, 6 months free + **30% lifetime discount** afterward | The 30% lifetime is the bigger win — survives `.edu` expiration |
| **GitKraken** | 6 mo Pro + **80% off Pro ongoing** | Same lifetime-discount logic as Educative |
| **1Password** | Full account + Developer Tools, 1 year | Renewable annually while pack active. Different from the SheerID-direct $1/mo Families student rate |
| **New Relic** | Free Pro ($300/mo retail value) | Alternative to Datadog. Same "educational use" caveat may apply — read T&C |
| **Microsoft 365 Education** | Word/Excel/PPT/Teams + 1TB OneDrive, free | `.edu` auto-detect at office.com/education. Direct, not via Pack. Useful for client deliverables that demand `.docx` |
| **`.tech` domain** | Free .tech domain, 1 year | Stack with Name.com + Namecheap = three free domains/year |
| **Polypane** | Education plan, 1 year | Responsive QA tool — actually useful for [[overlook-strategy-positioning|Overlook Strategy]] client work (within hobby/non-commercial bounds, or pay commercial when client work) |
| **LocalStack** | Pro tier, while student | AWS local emulator — useful before any AWS client engagement |
| **Termius** | Pro + Team features, while student | SSH manager with cross-device sync |
| **Zyte / Scrapy Cloud** | 1 free Forever Scrapy Cloud Unit | **Perpetual** — survives `.edu`. Useful for [[ai-newsroom-pipeline]] |
| **Requestly** | Pro plan ($270/yr value), 1 year | Modify/intercept HTTP requests for API debugging. Cheaper than Charles |
| **NYT Student** | $1/wk for 4 years | SheerID. Cheap news habit |

### Lower priority (claim only if directly relevant)

Cataloged in the [[student-discounts-research-2026-04|source page]] — Bootstrap Studio, IconScout, Icons8, Visme, ToDiagram, PomoDone, HazeOver, BrowserStack, LambdaTest, SQLGate, PopSQL, DeepScan, Codecov, DevCycle, POEditor, Travis CI, Imgbot, ConfigCat, CARTO, SimpleAnalytics, Pageclip, Blockchair, Honeybadger, AstraSecurity, Dashlane, Blackfire, DataCamp, Boot.dev, Codedex, Scrimba, GoRails, SymfonyCasts, InterviewCake, AlgoExpert.

---

## Materially changed since training data — corrections

Items that were on the previous draft and are now factually wrong.

| Offer | Old claim | Corrected |
|---|---|---|
| **Apple Pro Apps Bundle** | "$200 lifetime — Logic + Final Cut + Motion + Compressor + MainStage" | **REMOVED Jan 29, 2026.** Replaced with Creator Studio Education subscription ($2.99/mo or $29.99/yr). No more lifetime education licenses for these apps. Only people who bought before Jan 29 keep perpetual licenses |
| **Native Instruments Komplete** | "$99 student price for Komplete Standard, lifetime" | **No longer offered.** Per NI support: "None of the Komplete range is offered at a student discount." Only **Reaktor 6** has a 50% student discount ($199 → $99). Komplete is now only cheap during Black Friday / Summer of Sound sales, or via crossgrades |
| **Ableton Live Suite** | "$99 academic" | **~$375 academic** (50% off $749 retail). Genuinely lifetime perpetual license. Also has a 12-month rent-to-own option for students at ~$31/mo |
| **Notion Education Plus** | "Education plan + AI" | Plus only. **AI is NOT included.** Need separate AI add-on or Notion Business |
| **Clerk** | "Free Pro plan" | Free Pro tier with **phone/SMS authentication excluded**. 10K MAU production cap |
| **GitHub Copilot for students** | "Free Copilot Pro" | **As of March 13, 2026** it's the new "Copilot Student" plan, not Copilot Pro. Some model restrictions; new sign-ups paused April 20, 2026 |
| **JetBrains** | "All IDEs free; perfect for the stack" | All IDEs free, **but commercial use is strictly prohibited**. Cannot legally be used for paid Overlook Strategy client work. Personal/Berklee/learning only |
| **Stripe $1,000 waiver** | "$1,000 in transaction fees waived" | $1,000 in **revenue processed** has fees waived (~$30 savings at standard 2.9%+30¢ rate). Useful but not as big as previously framed |

---

## JetBrains heads-up — important for Overlook work

**Finn has DataGrip and WebStorm installed under the student license.** The license terms are explicit: educational license is "strictly for non-commercial educational purposes, including academic research." It cannot be used for "paid client work" or "freelance work" or "projects with commercial intent."

This means:
- Personal projects, learning, [[school-berklee|Berklee coursework]], non-commercial open source: ✓ allowed
- [[overlook-strategy-positioning|Overlook Strategy]] paid client engagements: ✗ technically not allowed under the license
- [[overlook-audio-positioning|Overlook Audio]] commercial product development: ✗ same

Practical options:
1. **Restrict student JetBrains use to personal projects + Berklee work** and use VS Code / Cursor for client work (no license violation since VS Code is free).
2. **Buy a personal commercial JetBrains subscription** for client work alongside the student license. The 40% graduation discount keeps the personal commercial price low for 2 years after student status ends.
3. **Risk-tolerate it** — JetBrains rarely audits individuals. But if Overlook ever takes external investment or undergoes due diligence, this would be a flag.

Most reasonable path is probably **(1)**: use student licenses for what they're allowed for, keep client work on free tools.

---

## Hard renewal calendar

| When | What |
|---|---|
| **April 30, 2026** | Confirm Google AI Pro for Students sign-up (if not yet activated) |
| **June 30, 2026** | Redeem GitHub Certification voucher — schedule exam by mid-June |
| **+12 months from each Pack-offer activation** | Pack re-verification (Copilot Student, Clerk Pro, JetBrains, Sentry, etc. — annual cadence) |
| **+12 months from DO claim** | DigitalOcean $200 credit expires |
| **+12 months from OpenAI Codex grant** | $100 ChatGPT credit expires |
| **+24 months from Datadog claim** | Datadog Pro 2-year window ends; downgrades to free tier |
| **+12 months from Spotify Student** | Re-verify every year for up to 4 cumulative years |
| **+24 months from Figma Education** | Renew via SheerID (allowed up to 4 years total) |
| **+12 months from Adobe CC student** (if claimed) | **Auto-renews at full $60/mo on year-2 anniversary** unless cancelled — set this reminder loud |

---

## Mapping discounts to current projects

How this entry is meant to be used: when starting a project, search for the relevant tool. Reverse mapping below.

| Project / context | Worth checking |
|---|---|
| New [[overlook-strategy-positioning\|Overlook Strategy]] client engagement | Figma Education (✓ allowed for client work — verify), Adobe CC student, Polypane (responsive QA — only for personal/non-commercial), Sentry (deploy monitoring — under "educational use" caveat for client production), Stripe ($1k fee waiver if first revenue), **NOT JetBrains for paid client work — use VS Code / Cursor instead** |
| New Next.js project on [[vercel-deployment\|Vercel]] | Copilot Student plan, JetBrains Webstorm (personal projects only), Sentry (within edu T&Cs), FrontendMasters refresher, [[clerk]] Pro (without phone auth) |
| FastAPI backend on [[railway-deployment\|Railway]] | DigitalOcean credit (backup hosting), Datadog Pro (educational-use caveat), JetBrains PyCharm (personal projects only), MongoDB credits if NoSQL is the right call |
| [[ai-newsroom-pipeline]] / scraper jobs | Zyte free unit (perpetual), DigitalOcean credit, OpenAI $100 Codex credit |
| Berklee assignment work ([[school-berklee]]) | Logic Pro (✓ if pre-Jan-29 Pro Apps Bundle, otherwise Creator Studio Education), Ableton Suite ($375 academic), Pro Tools academic, Splice student, JetBrains (educational use is allowed) |
| [[overlook-audio-positioning\|Overlook Audio]] firmware (commercial product) | Arduino Cloud, Adafruit IO+ — both via Pack, but **read each Pack offer's commercial-use terms** before relying on them in a shipping product |
| Hardware refresh (Mac/iPad/AirPods) | Apple Education Store ($100–$300 off MSRP), AppleCare+ student rate, seasonal AirPods promo (June–Sept) |
| Music listening / focus | ✓ Spotify Premium Student, Apple Music Student bundle |

---

## Open questions for Finn

Things that need a quick confirmation to make this page fully accurate.

- **Apple Pro:** when did you purchase it? Pre-Jan-29-2026 = lifetime Pro Apps Bundle (perpetual). Post = Creator Studio Education subscription
- **Google:** is the activated plan Google AI Pro for Students (Gemini 3.1 Pro free 12 months)? If yes, when did you sign up — close to the April 30 deadline matters for renewal timing
- **OpenAI Codex:** did you redeem the $100 student credit, or are you paying for ChatGPT Plus/Pro and using Codex through that?
- **Railway:** activated for what specifically? There's no Railway student deal that I can find — confirm whether you're on a paid plan or just using the free $5 trial credit
- **Apple Music Student:** included in your Apple Pro activation? Or separate?

---

## Sources

- GitHub Student Developer Pack inventory: https://education.github.com/pack (April 28, 2026)
- JetBrains educational license terms: https://www.jetbrains.com/legal/docs/toolbox/license_educational/ and https://sales.jetbrains.com/hc/en-gb/articles/11564854623378-I-m-a-student-and-I-work-part-time-Can-I-use-my-free-educational-license-for-my-work-apprenticeship-or-internship-projects [VERIFIED 2026-04-28]
- Notion Education plan terms: https://www.notion.com/help/notion-for-education (AI exclusion) [VERIFIED 2026-04-28]
- GitHub Copilot Student changes: https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students/ and https://github.com/orgs/community/discussions/189268 [VERIFIED 2026-04-28]
- Apple Pro Apps Bundle removal: https://www.macrumors.com/2026/01/29/apple-stops-selling-pro-apps-education-bundle/ and https://appleinsider.com/articles/26/01/29/apple-kills-off-pro-apps-for-education-in-favor-of-creator-studio-education-subscription [VERIFIED 2026-04-28]
- Apple Creator Studio Education: https://tidbits.com/2026/01/15/apple-bundles-pro-apps-into-new-creator-studio-subscription/ [VERIFIED 2026-04-28]
- Spotify Student Hulu bundle: https://support.spotify.com/us/article/hulu-premium-bundle/ and https://www.spotify.com/us/student/ [VERIFIED 2026-04-28]
- Native Instruments education program: https://support.native-instruments.com/hc/en-us/articles/210290885 [VERIFIED 2026-04-28]
- Ableton education pricing: https://www.ableton.com/en/shop/education/ [VERIFIED 2026-04-28]
- Clerk pricing: https://clerk.com/pricing [VERIFIED 2026-04-28]
- OpenAI Codex Students: https://chatgpt.com/codex/students/ and https://help.openai.com/en/articles/20001147-codex-credits-for-students-terms-of-service [VERIFIED 2026-04-28]
- Google AI Pro for Students: https://gemini.google/students/ and https://blog.google/products-and-platforms/products/gemini/google-one-ai-premium-students-free/ [VERIFIED 2026-04-28]
- Railway student status: https://station.railway.com/feedback/student-id-validation-36e84846 [VERIFIED 2026-04-28]

## Related

- [[github-copilot]] · [[clerk]] · [[notion]] · [[stripe]] · [[vercel-deployment]] · [[railway-deployment]] · [[sanity-patterns]]
- [[hardware-setup]] · [[finance-hub]] · [[gcp-credits]]
- [[overlook-strategy-positioning]] · [[overlook-audio-positioning]] · [[school-berklee]]
- Stub pages updated this audit: [[jetbrains]] · [[figma]] · [[spotify-premium]] · [[apple-pro-apps-bundle]]
