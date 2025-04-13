-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Voiture` (
    `id` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `nombreSiege` INTEGER NOT NULL,
    `transmission` VARCHAR(191) NOT NULL,
    `climatisation` BOOLEAN NOT NULL,
    `prixParJour` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lieuDePriseEnCharge` VARCHAR(191) NOT NULL,
    `lieuDeRestitution` VARCHAR(191) NOT NULL,
    `dateDePriseEnCharge` DATETIME(3) NOT NULL,
    `dateDeRestitution` DATETIME(3) NOT NULL,
    `loueurID` VARCHAR(191) NOT NULL,
    `vehiculeID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_loueurID_fkey` FOREIGN KEY (`loueurID`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_vehiculeID_fkey` FOREIGN KEY (`vehiculeID`) REFERENCES `Voiture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
