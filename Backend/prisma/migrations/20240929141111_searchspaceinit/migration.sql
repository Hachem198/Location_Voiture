/*
  Warnings:

  - You are about to drop the column `dateDePriseEnCharge` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `dateDeRestitution` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `lieuDePriseEnCharge` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `lieuDeRestitution` on the `location` table. All the data in the column will be lost.
  - Added the required column `pickUpDate` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpLocation` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDate` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnLocation` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `location` DROP COLUMN `dateDePriseEnCharge`,
    DROP COLUMN `dateDeRestitution`,
    DROP COLUMN `lieuDePriseEnCharge`,
    DROP COLUMN `lieuDeRestitution`,
    ADD COLUMN `pickUpDate` DATETIME(3) NOT NULL,
    ADD COLUMN `pickUpLocation` VARCHAR(191) NOT NULL,
    ADD COLUMN `returnDate` DATETIME(3) NOT NULL,
    ADD COLUMN `returnLocation` VARCHAR(191) NOT NULL;
