import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1772928188196 implements MigrationInterface {
    name = 'Init1772928188196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "columnId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "column_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "priority" integer NOT NULL, "teamId" character varying, CONSTRAINT "PK_45a473cb99131da825f25086ffb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "teamsId" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f56fe6f2d8ab0b970f764bd601b" FOREIGN KEY ("columnId") REFERENCES "column_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92" FOREIGN KEY ("teamsId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92"`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f56fe6f2d8ab0b970f764bd601b"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "column_entity"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
