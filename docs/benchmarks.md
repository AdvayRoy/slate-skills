# Benchmarks

V1 does not claim measured token savings yet.

Use this repo's examples as qualitative before/after demos until a reproducible eval harness is added.

Planned benchmark method:

1. Collect normal agent outputs for fixed prompts.
2. Collect slate outputs for same prompts.
3. Count output tokens with a local tokenizer.
4. Report average, range, and raw data.
5. Never claim hidden reasoning token savings.

Important:

`slate` targets visible output and reusable context files. It does not control provider-side hidden reasoning tokens.
