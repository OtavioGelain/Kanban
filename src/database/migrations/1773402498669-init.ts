import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1773402498669 implements MigrationInterface {
    name = 'Init1773402498669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "column_entity" DROP CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d"`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD "teamId" integer`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92"`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "PK_f57d8293406df4af348402e4b74"`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(125) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "teamsId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "teamsId" integer`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92" FOREIGN KEY ("teamsId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92"`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "teamsId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "teamsId" character varying`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "PK_f57d8293406df4af348402e4b74"`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4b88160bb40c1acff3d60c2ae92" FOREIGN KEY ("teamsId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD "teamId" character varying`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD CONSTRAINT "FK_62bcfd8edaf479af954dad2e58d" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
