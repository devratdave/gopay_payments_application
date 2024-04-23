/*
  Warnings:

  - You are about to drop the column `number` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_number_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "number";
