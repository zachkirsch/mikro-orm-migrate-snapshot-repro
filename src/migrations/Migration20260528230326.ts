import { Migration } from '@mikro-orm/migrations';

export class Migration20260528230326 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table \`account\` (\`id\` integer not null primary key autoincrement, \`notes\` text not null);`);
  }

}
