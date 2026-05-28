import { Migrator } from "@mikro-orm/migrations";
import { defineConfig } from "@mikro-orm/sqlite";

import { Account } from "./entity.ts";

export default defineConfig({
  dbName: ":memory:",
  entities: [Account],
  extensions: [Migrator],
  migrations: {
    path: "src/migrations",
    snapshot: true,
    snapshotName: ".snapshot-sqlite",
  },
});
