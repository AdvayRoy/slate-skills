# Eval plan

Goal: measure visible output-token reduction and information retention.

Arms:

1. Baseline agent answer
2. Generic `be concise` answer
3. slate skill answer

Prompts:

- debug failed auth test
- summarize code diff
- review PR for security issue
- write commit message
- compress project notes

Metrics:

- output token count
- required fields present
- exact command/error preservation
- safety warning preservation
- human readability score

Do not measure or claim hidden reasoning-token savings.
