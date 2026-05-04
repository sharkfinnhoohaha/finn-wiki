---
title: "Quote-Then-Answer Pattern"
type: concept
tags: [concept, ai, anti-hallucination, anthropic, prompt-engineering, rag, reusable]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 5
sources: [[automated-news-playbook-civic-operators]]
---

## TL;DR

Anthropic's canonical anti-hallucination prompting structure. Wrap retrieved documents in `<documents>` XML, instruct the model to extract verbatim `<quotes>` first, then write `<answer>` referencing them. Stanford HAI baseline: **15–20% hallucination on factual queries without grounding, near-zero with governed RAG**. Combined with structured outputs (Pydantic/Zod), "according to" prompting, and explicit uncertainty constraints ("if unsure, respond 'I don't know.'"), it's the editorial floor for any AI workflow that publishes statements as fact.

Reusable across any RAG-backed AI feature in [[overlook-strategy]] work. Load-bearing for [[pier-and-point]]'s fact-check step.

---

## The pattern

```
<documents>
  <document index="1">
    <source>City Council Agenda 2026-04-15</source>
    <content>...source text...</content>
  </document>
  <document index="2">
    <source>Mayor's Press Release 2026-04-16</source>
    <content>...source text...</content>
  </document>
</documents>

Before answering, extract verbatim <quotes> from the documents that
support your answer. Then write your <answer> referencing them.
If the documents don't contain the answer, respond with "I don't know."
```

The model produces:

```
<quotes>
  <quote source="document 1">The council voted 5-2 to approve the rezoning.</quote>
  <quote source="document 2">"This is a victory for housing supply," said Mayor X.</quote>
</quotes>
<answer>
  The council approved the rezoning 5-2 on April 15. Mayor X called
  it "a victory for housing supply."
</answer>
```

## Why it works

1. **Forces the model to anchor every claim to text it actually saw.** Hallucinated quotes can't pass a verbatim extraction step.
2. **Surfaces the citation trail** for downstream verification. The post-generation citation-fidelity check (does the cited passage actually contain the claim?) is straightforward against the `<quotes>` block.
3. **Composes with structured outputs** (BAML, Pydantic, Zod). The `<answer>` tag becomes a typed field in the workflow.
4. **Defaults to "I don't know"** when the corpus doesn't support an answer. Models prompted without this constraint default to confabulation.

## Companion patterns

- **"According to" grounding**: prefix every assertion with "According to <source>". Makes hallucinated sourcing visually obvious.
- **LLM-as-judge with a different model family**: avoid self-preference bias. Sonnet drafts → GPT-5 judges, or vice versa.
- **Citation-fidelity check post-generation**: extract `[source: doc_id]` tags from the `<answer>`, then mechanically verify the cited document chunk actually contains the claim. Models can hallucinate citations themselves; the structured output is necessary but not sufficient.

## Where this applies in Finn's stack

- **[[ai-newsroom-pipeline|Pier and Point fact-check step]]** — every claim in a draft passes through quote-then-answer against ingested source documents + pgvector-retrieved past coverage. Anthropic Citations API automates the verbatim-extraction step; this pattern is the manual equivalent for non-Anthropic models.
- **[[overlook-portal-webapp|Overlook portal AI summary panel]]** — client-facing summaries of meeting transcripts or document uploads should use this structure. *Cohere* ruling makes substitutive summaries a copyright risk; quote-then-answer with explicit attribution mitigates it. See [[ai-journalism-legal-posture]].
- **Any RAG-over-documents feature** Overlook ships — the pattern applies regardless of model or surface.

## Hallucination benchmarks

| Setup | Hallucination rate |
|---|---|
| Factual queries without grounding | 15–20% (Stanford HAI) |
| Governed RAG with quote-then-answer | near-zero (Stanford HAI) |
| Endex pre-Citations-API | 10% source-hallucination |
| Endex post-Citations-API | 0% source-hallucination, 20% increase in references |
| Kimi K2.5 on AA-Omniscience | 65% (disqualifying for journalism) |
| Kimi K2.6 on AA-Omniscience | 39% (in-band with Opus 4.7's 36%) |

The pattern doesn't change model capability; it changes the prompt structure to make the model's output verifiable. Pair it with a model that has acceptable baseline hallucination rates ([[kimi-k2|K2.6+]] or Anthropic Sonnet/Opus) and the editorial floor is met.

## What this pattern does NOT do

- Catch model errors on quotes the document actually contains but presents in misleading context. The verbatim-extraction step verifies the quote exists; it doesn't verify the quote means what the answer claims.
- Replace human review for high-stakes claims. The `<answer>` still needs a human to read against the source for matters of public concern.
- Help with claims that require synthesis across multiple sources. For those, decompose the claim into atomic facts and run quote-then-answer per fact.

## Related

[[ai-newsroom-pipeline]] — [[pier-and-point]] — [[ai-journalism-legal-posture]] — [[overlook-portal-webapp]] — [[ollama-rag-pattern]] — [[hybrid-llm-workflow]] — [[kimi-k2]] — [[automated-news-playbook-civic-operators]]

## Sources

[[automated-news-playbook-civic-operators]] — section 2 (anti-hallucination patterns that work)
