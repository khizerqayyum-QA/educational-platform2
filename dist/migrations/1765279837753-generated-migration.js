"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedMigration1765279837753 = void 0;
class GeneratedMigration1765279837753 {
    constructor() {
        this.name = 'GeneratedMigration1765279837753';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."test-customer_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-customer" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "country" text NOT NULL, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "zipCode" text NOT NULL, "phoneNumber" text, "createdBy" text, "status" "public"."test-customer_status_enum" NOT NULL DEFAULT 'Active', CONSTRAINT "PK_a22cff6f86fb957823c8c121705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."test-facility_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-facility" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "contactName" text, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "zipCode" text NOT NULL, "status" "public"."test-facility_status_enum" NOT NULL DEFAULT 'Active', "weight" text NOT NULL, "customerId" integer, CONSTRAINT "PK_6873adb5994ed222f1e21134b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "enrollment_date" date NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instructor" ("id" SERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "hire_date" date NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, "start_date" date NOT NULL, "end_date" date NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assignment" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, "deadline" date NOT NULL, CONSTRAINT "PK_43c2f5a3859f54cedafb270f37e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test-facility" ADD CONSTRAINT "FK_019deaff3c8726ce53cf857aebf" FOREIGN KEY ("customerId") REFERENCES "test-customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test-facility" DROP CONSTRAINT "FK_019deaff3c8726ce53cf857aebf"`);
        await queryRunner.query(`DROP TABLE "assignment"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "instructor"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "test-facility"`);
        await queryRunner.query(`DROP TYPE "public"."test-facility_status_enum"`);
        await queryRunner.query(`DROP TABLE "test-customer"`);
        await queryRunner.query(`DROP TYPE "public"."test-customer_status_enum"`);
    }
}
exports.GeneratedMigration1765279837753 = GeneratedMigration1765279837753;
//# sourceMappingURL=1765279837753-generated-migration.js.map