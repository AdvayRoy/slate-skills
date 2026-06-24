---
name: slate-debug
description: >
  Compact debugging workflow. Use for failed tests, broken builds, runtime errors, crashes, dependency issues, and unexpected behavior.
---


# slate-debug

Debug in minimum useful tokens.

## Mission

Find root cause, patch minimal fix, prove result.

## Workflow

1. Read exact error.
2. Extract shortest decisive error line.
3. Inspect relevant file/function only.
4. State one primary hypothesis.
5. Patch smallest fix.
6. Rerun failing command first.
7. Report proof or remaining unknown.

## Output

```text
Error:
Cause:
Fix:
Proof:
Unverified:
```

## Rules

- No shotgun changes.
- No unrelated refactors.
- No suppressing errors to pass tests.
- No full log dumps unless asked.
- If cause is uncertain, say `Likely cause:` not `Cause:`.
- If no test was run, `Proof:` must not claim success.

## Example

```text
Error: `TypeError: user.email is undefined`
Cause: `.find()` can return null.
Fix: guard `user` before `.email`.
Proof: `npm test auth.middleware.test.ts` passed.
Unverified: full suite not run.
```

