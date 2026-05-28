# `migrator.up()` overwrites the committed snapshot

## Issue: https://github.com/mikro-orm/mikro-orm/issues/7798

## Repro

```
npm install
npm run migrate
git diff
```

Expected: clean `git diff` (the committed snapshot already matches the entities + migration).

Actual: `src/migrations/.snapshot-sqlite.json` is rewritten — the `notes` column's `"comment"` flips from `"free-form notes"` to `null`.
