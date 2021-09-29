import {MigrationInterface, QueryRunner} from "typeorm";

export class init1632917761188 implements MigrationInterface {
    name = 'init1632917761188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quiz" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "authorId" uuid NOT NULL, "title" character varying NOT NULL, "description" text, "quizPhoto" text, "questionCount" integer NOT NULL DEFAULT '0', "isPublished" boolean NOT NULL DEFAULT false, "likeCount" integer NOT NULL DEFAULT '0', "commentCount" integer NOT NULL DEFAULT '0', "bookmarkCount" integer NOT NULL DEFAULT '0', "takerCount" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_422d974e7217414e029b3e641d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_91b3636bd5cc303c7409c55088" ON "quiz" ("title") `);
        await queryRunner.query(`CREATE INDEX "IDX_764b168daba5f280d75441869b" ON "quiz" ("description") `);
        await queryRunner.query(`CREATE TABLE "question" ("id" uuid NOT NULL, "question" character varying NOT NULL, "questionPhoto" text, "choices" jsonb NOT NULL, "answer" character varying NOT NULL, "explanation" text, "hint" text, "quizId" uuid, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follow" ("followedId" uuid NOT NULL, "followerId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e746877023d5b76b9550ba0ea38" PRIMARY KEY ("followedId", "followerId"))`);
        await queryRunner.query(`CREATE TABLE "score" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "totalItems" integer NOT NULL, "score" integer NOT NULL, "percentage" double precision NOT NULL DEFAULT '0', "answered" TIMESTAMP NOT NULL DEFAULT now(), "authorId" character varying NOT NULL, "quizId" uuid NOT NULL, "takerId" uuid NOT NULL, CONSTRAINT "PK_1770f42c61451103f5514134078" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('SUPER_ADMIN', 'ADMIN', 'USER', 'VISITOR')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "googleId" text, "facebookId" text, "username" text NOT NULL, "email" text NOT NULL, "password" text, "avatar" text, "coverPhoto" text, "firstName" text NOT NULL, "lastName" text, "birthday" date, "gender" text, "country" text, "bio" text, "social" jsonb, "role" "user_role_enum" NOT NULL, "followedCount" integer NOT NULL DEFAULT '0', "followerCount" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
        await queryRunner.query(`CREATE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
        await queryRunner.query(`CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON "user" ("lastName") `);
        await queryRunner.query(`CREATE TABLE "like" ("quizId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_3e13a23a8eef94d99a497c2fb30" PRIMARY KEY ("quizId", "userId"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "description" character varying NOT NULL, "tagPhoto" text, CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b" UNIQUE ("name"), CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "result" ("id" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "resultPhoto" text, "minimumPercent" integer NOT NULL, "quizId" uuid, CONSTRAINT "PK_c93b145f3c2e95f6d9e21d188e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "quizId" uuid NOT NULL, "authorId" uuid NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bookmark" ("quizId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_fbd1e3f41232e80aa052beb1da6" PRIMARY KEY ("quizId", "userId"))`);
        await queryRunner.query(`CREATE TABLE "quiz_tags_tag" ("quizId" uuid NOT NULL, "tagId" uuid NOT NULL, CONSTRAINT "PK_55b75f55f019e1c14fab77b8717" PRIMARY KEY ("quizId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_967a66c52a31d3fdef7d8600a4" ON "quiz_tags_tag" ("quizId") `);
        await queryRunner.query(`CREATE INDEX "IDX_39656912e32038fc8ec251f24a" ON "quiz_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "quiz" ADD CONSTRAINT "FK_82f71b10f6749c8e9d3e835668b" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_4959a4225f25d923111e54c7cd2" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_f4a9d59861c87ba252ead40d84d" FOREIGN KEY ("followedId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_550dce89df9570f251b6af2665a" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_ac6acfe5f5c4586d82b534725c6" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "score" ADD CONSTRAINT "FK_595a5db55aeee659f71bae0801f" FOREIGN KEY ("takerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_75e7ea3f6f576900b3e39704805" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "result" ADD CONSTRAINT "FK_ee18239cf6832f54ad345bb87e1" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_a5c36304a97ebfa5df85cb49eb6" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookmark" ADD CONSTRAINT "FK_1348b7d6180038afc8e5c0639d7" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookmark" ADD CONSTRAINT "FK_e389fc192c59bdce0847ef9ef8b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quiz_tags_tag" ADD CONSTRAINT "FK_967a66c52a31d3fdef7d8600a49" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "quiz_tags_tag" ADD CONSTRAINT "FK_39656912e32038fc8ec251f24a3" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quiz_tags_tag" DROP CONSTRAINT "FK_39656912e32038fc8ec251f24a3"`);
        await queryRunner.query(`ALTER TABLE "quiz_tags_tag" DROP CONSTRAINT "FK_967a66c52a31d3fdef7d8600a49"`);
        await queryRunner.query(`ALTER TABLE "bookmark" DROP CONSTRAINT "FK_e389fc192c59bdce0847ef9ef8b"`);
        await queryRunner.query(`ALTER TABLE "bookmark" DROP CONSTRAINT "FK_1348b7d6180038afc8e5c0639d7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_276779da446413a0d79598d4fbd"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_a5c36304a97ebfa5df85cb49eb6"`);
        await queryRunner.query(`ALTER TABLE "result" DROP CONSTRAINT "FK_ee18239cf6832f54ad345bb87e1"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_75e7ea3f6f576900b3e39704805"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_595a5db55aeee659f71bae0801f"`);
        await queryRunner.query(`ALTER TABLE "score" DROP CONSTRAINT "FK_ac6acfe5f5c4586d82b534725c6"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_550dce89df9570f251b6af2665a"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_f4a9d59861c87ba252ead40d84d"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_4959a4225f25d923111e54c7cd2"`);
        await queryRunner.query(`ALTER TABLE "quiz" DROP CONSTRAINT "FK_82f71b10f6749c8e9d3e835668b"`);
        await queryRunner.query(`DROP INDEX "IDX_39656912e32038fc8ec251f24a"`);
        await queryRunner.query(`DROP INDEX "IDX_967a66c52a31d3fdef7d8600a4"`);
        await queryRunner.query(`DROP TABLE "quiz_tags_tag"`);
        await queryRunner.query(`DROP TABLE "bookmark"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "result"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "like"`);
        await queryRunner.query(`DROP INDEX "IDX_f0e1b4ecdca13b177e2e3a0613"`);
        await queryRunner.query(`DROP INDEX "IDX_58e4dbff0e1a32a9bdc861bb29"`);
        await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "score"`);
        await queryRunner.query(`DROP TABLE "follow"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP INDEX "IDX_764b168daba5f280d75441869b"`);
        await queryRunner.query(`DROP INDEX "IDX_91b3636bd5cc303c7409c55088"`);
        await queryRunner.query(`DROP TABLE "quiz"`);
    }

}
