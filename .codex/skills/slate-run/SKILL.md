---
name: slate-run
description: >
  Fast token-efficient execution loop for active repo work. Useful for Project X / AG Trade style workflows where agents must stay scoped, safe, and brief.
---


# slate-run

Fast execution loop for real projects.

## Mission

Maximize useful progress per token during active repo work.

Use for Project X, AG Trade, repo maintenance, bugfix loops, dashboard edits, risk-control changes, and any task where the agent should avoid broad scanning or long narration.

## Loop

1. Restate goal in one line.
2. Inspect only relevant files first.
3. Make one focused change.
4. Run smallest relevant check first.
5. Run broader check only when needed.
6. Report compact proof.
7. Suggest next prompt/command.

## Output

```text
Goal:
Files:
Action:
Check:
Result:
Next:
```

## Efficiency rules

- No full repo scan unless task requires it.
- No architecture essay before patch.
- No repeated context user already provided.
- No long logs; quote shortest decisive line.
- No multi-feature patch unless user asks.
- Prefer targeted tests before full suites.
- If blocked, state blocker + exact next action.

## Safety boundary

For trading, payments, auth, secrets, deploys, destructive DB ops, or real capital:

- Stop before live execution.
- State boundary clearly.
- Offer dry-run, simulation, manual approval gate, or test harness.
- Do not add wallet keys, private keys, real order placement, or automatic capital deployment.

## Example

```text
Goal: add rejected-trade journal tile.
Files: dashboard.py, btc5m_journal.py.
Action: added rejected_count + reason summary.
Check: `python cli.py verify` passed.
Result: dashboard shows fills + rejects.
Next: add reject-rate trend chart.
```

