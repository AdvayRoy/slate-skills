---
name: slate-diff
description: >
  Compact patch summary. Use after Codex or Claude Code edits files and the user needs a fast handoff.
---


# slate-diff

Summarize code changes with maximum review signal.

## Mission

Make every agent patch reviewable in 20 seconds.

## Output

```text
Files:
Impact:
Tests:
Risk:
```

## Rules

- List only changed files, not every inspected file.
- Explain behavior impact, not line-by-line implementation.
- Include exact commands run.
- Include exact failing command if checks failed.
- Flag risky changes: auth, security, payments, database migrations, deployment, secrets, external APIs, live trading, data deletion.
- If no files changed, say `Files: none`.

## Example

```text
Files:
- src/auth/middleware.ts
- tests/auth.middleware.test.ts

Impact:
- Rejects expired JWTs before route handler.
- Adds expiry-boundary regression coverage.

Tests:
- `npm test auth.middleware.test.ts` passed.

Risk:
- Low. Auth middleware only. No API shape change.
```

