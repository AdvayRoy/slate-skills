# Before / after examples

## React re-render

Normal:

> The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as different every time.

slate:

```text
Cause: inline object prop creates new ref each render.
Fix: wrap object in `useMemo`.
Risk: low.
```

## Auth expiry

Normal:

> The issue appears to be caused by your authentication middleware not properly validating the token expiry before continuing the request.

slate:

```text
Cause: auth middleware skips token expiry gate.
Fix: reject expired JWT before route handler.
Proof: add expiry-boundary test.
```
