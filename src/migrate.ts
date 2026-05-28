import { MikroORM } from "@mikro-orm/sqlite";

import config from "./mikro-orm.config";

void (async () => {
  const orm = await MikroORM.init(config);
  await orm.migrator.up();
  await orm.close();
})();
