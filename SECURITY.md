# Security policy

`slate` is designed to be low-risk:

- no backend
- no API keys
- no telemetry
- no remote execution
- no model-provider dependency
- no required package install

V1 skills are Markdown instruction files. The optional installer only copies local files into `.agents/skills` and/or `.claude/skills`.

## Core safety rule

Compress noise. Never compress risk.

Skills must preserve:

- code
- commands
- file paths
- URLs
- API names
- error strings
- test results
- environment variables
- dates and version numbers
- security warnings
- destructive-command ordering
- uncertainty

## Do not use slate to hide risk

Do not aggressively compress:

- auth/security findings
- database migrations
- deploy instructions
- destructive operations
- payment flows
- secrets handling
- live trading / real capital workflows
- legal/compliance guidance

## Reporting issues

Open a GitHub issue with:

- skill name
- unsafe or ambiguous output
- expected safer wording
- minimal reproduction prompt
