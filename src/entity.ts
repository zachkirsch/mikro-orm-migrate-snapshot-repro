import { Entity, PrimaryKey, Property } from "@mikro-orm/decorators/legacy";

@Entity({ tableName: "account" })
export class Account {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "string", comment: "free-form notes" })
  notes!: string;
}
