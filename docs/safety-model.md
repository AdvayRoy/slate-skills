# slate safety model

## Core law

Compress noise. Never compress risk.

## Preserve exactly

- code blocks
- inline code
- commands
- file paths
- URLs
- API names
- error strings
- test results
- env vars
- dates
- versions
- numeric values
- security warnings
- destructive command order
- uncertainty

## Switch to clear mode for

- secrets
- auth/security findings
- production deploys
- data deletion
- database migrations
- payment flows
- legal/compliance guidance
- live trading or real capital workflows
- irreversible operations

## Good compression

```text
I think the issue is likely caused by the auth middleware not checking token expiry.
→ Cause: auth middleware skips token expiry check.
```

## Bad compression

```text
DROP TABLE users after backup if confirmed
→ drop users backup maybe
```

Order and confirmation became ambiguous. Do not compress.
