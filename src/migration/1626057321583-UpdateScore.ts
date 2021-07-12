import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateScore1626057321583 implements MigrationInterface {
  name = 'UpdateScore1626057321583';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "awarded_date"`);
    await queryRunner.query(
      `ALTER TABLE "score" ADD "awarded_date" TIMESTAMP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "score" DROP COLUMN "awarded_date"`);
    await queryRunner.query(
      `ALTER TABLE "score" ADD "awarded_date" integer NOT NULL`,
    );
  }
}
