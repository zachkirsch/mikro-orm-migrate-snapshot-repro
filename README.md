# `migrator.up()` overwrites the committed snapshot

## Repro

```
npm install
npm run migrate
git diff
```

Expected: clean `git diff` (the committed snapshot already matches the entities + migration).

Actual: `src/migrations/.snapshot-sqlite.json` is rewritten — the `notes` column's `"comment"` flips from `"free-form notes"` to `null`.
