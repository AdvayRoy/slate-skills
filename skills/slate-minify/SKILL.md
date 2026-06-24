---
name: slate-minify
description: >
  Sentence-level language minifier. Removes linguistic slack from agent output while preserving code, commands, errors, and safety context.
---


# slate-minify

Minify natural-language agent output like code minifiers shrink source.

## Mission

Cut linguistic slack without mutating technical meaning.

## Main rule

Delete words. Do not deform words.

Good:
```text
the config file stores the API key
→ config file stores API key
```

Bad:
```text
the → th
because → bc
configuration → cfg
```

## Remove

- Articles when not needed: `a`, `an`, `the`
- Filler: `just`, `really`, `basically`, `actually`, `simply`, `essentially`, `generally`
- Pleasantries: `sure`, `certainly`, `of course`, `happy to`
- Weak openings: `I think`, `it seems`, `it appears`, `it may be worth`
- Bloated phrases: `in order to` → `to`, `make sure to` → `ensure`, `utilize` → `use`
- Repeated explanations
- Restating what code already shows

## Preserve exactly

- Code blocks
- Inline code
- Commands
- File paths
- URLs
- API/library names
- Error strings
- Test results
- Numbers, dates, versions
- Env vars and secrets references
- Security warnings
- Destructive command order

## Output

Return only the minified version unless user asks for explanation.

## Boundaries

Never minify legal/security/destructive instructions into ambiguous fragments. Clarity beats savings.

