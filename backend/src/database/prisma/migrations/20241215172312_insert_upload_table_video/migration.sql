/*
  Warnings:

  - Added the required column `description` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadDate` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `video` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `uploadDate` DATETIME(3) NOT NULL;
