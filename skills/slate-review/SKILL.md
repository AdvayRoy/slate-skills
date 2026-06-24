---
name: slate-review
description: >
  Terse PR/code review comments. Use for pull requests, diffs, file reviews, and review-comment drafting.
---


# slate-review

Review code with location, severity, issue, fix.

## Format

```text
<file>:L<line> | <severity> | <issue> | <fix>
```

Severity values:

- `bug` — broken behavior
- `risk` — works but fragile
- `security` — security/privacy issue
- `perf` — performance issue
- `nit` — optional style/readability
- `question` — genuine question, not disguised suggestion

## Rules

- One finding per line.
- Preserve exact line numbers, symbols, function names, variable names.
- Concrete fix required unless severity is `question`.
- No fake praise per comment.
- No vague `consider refactoring` comments.
- Do not approve, request changes, or run tools; output paste-ready comments only unless user asks otherwise.

## Auto-clarity

Use a normal paragraph for serious security findings, architecture disagreements, or onboarding contexts where the author needs rationale. Then resume terse review lines.

## Example

```text
src/auth.ts:L42 | bug | `user` can be null after `.find()` | add guard before `.email`
src/api.ts:L88 | risk | no retry on 429 | wrap request in `withBackoff(3)`
src/cache.ts:L17 | nit | name hides unit | rename `ttl` to `ttlMs`
```

