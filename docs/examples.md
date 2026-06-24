# slate examples

## slate

Verbose:

> I made the requested changes in the dashboard and also updated the journal parser. I ran the verification command and it passed.

Slate:

```text
Result: rejected-trade tile added.
Changed: dashboard.py, btc5m_journal.py.
Tests: `python cli.py verify` passed.
Risk: UI/reporting only. No live execution.
Next: add reject-rate trend.
```

## slate-debug

```text
Error: `ModuleNotFoundError: No module named 'risk'`
Cause: script run from wrong cwd or missing package path.
Fix: run from repo root or add package import path.
Proof: not run.
Unverified: exact repo layout.
```

## slate-review

```text
risk.py:L74 | bug | daily loss check runs after simulated fill | move check before position write
api.ts:L23 | risk | no 429 handling | wrap request in `withBackoff(3)`
```

## slate-commit

```text
fix(risk): gate paper fills before write
```

## slate-minify

```text
The paper engine is currently writing simulated positions before checking daily loss limits.
→ Paper engine writes simulated positions before daily-loss check.
```
