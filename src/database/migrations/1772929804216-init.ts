import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1772929804216 implements MigrationInterface {
    name = 'Init1772929804216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "description" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD "name" character varying(75) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "description" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(75) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(125) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "column_entity" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "column_entity" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "description" character varying NOT NULL`);
    }

}
