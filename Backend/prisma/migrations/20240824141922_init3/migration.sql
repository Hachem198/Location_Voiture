/*
  Warnings:

  - Added the required column `imgUrl` to the `Voiture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `voiture` ADD COLUMN `imgUrl` VARCHAR(191) NOT NULL;
