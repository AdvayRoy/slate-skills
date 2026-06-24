---
name: slate-commit
description: >
  Compact Conventional Commit generator. Use for commit messages, changelog snippets, and staged-change summaries.
---


# slate-commit

Write clean commit messages. Short subject. Body only when needed.

## Subject

```text
<type>(<scope>): <imperative summary>
```

Types:

- `feat`
- `fix`
- `refactor`
- `perf`
- `docs`
- `test`
- `chore`
- `build`
- `ci`
- `style`
- `revert`

## Rules

- Imperative mood: `add`, `fix`, `remove`, not `added` or `adds`.
- Prefer <=50 chars. Hard cap 72 chars.
- No trailing period.
- Body only for non-obvious why, breaking changes, migrations, security fixes, reverts, linked issues.
- Never include AI attribution unless project policy requires it.
- Output commit message in one code block.

## Examples

```text
fix(auth): reject expired JWTs
```

```text
feat(api)!: rename /v1/orders to /v1/checkout

BREAKING CHANGE: clients must migrate before 2026-06-01.
Old route returns 410 after cutoff.
```

## Boundary

Only generate commit message. Do not stage, commit, amend, or push.

