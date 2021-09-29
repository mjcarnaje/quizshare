import { MigrationInterface, QueryRunner } from "typeorm";

export class sessionInit1632917680778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "session" (
        "sid" varchar NOT NULL COLLATE "default",
          "sess" json NOT NULL,
          "expire" timestamp(6) NOT NULL
      )
      WITH (OIDS=FALSE);
      
      ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
      
      CREATE INDEX "IDX_session_expire" ON "session" ("expire");
      `);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
