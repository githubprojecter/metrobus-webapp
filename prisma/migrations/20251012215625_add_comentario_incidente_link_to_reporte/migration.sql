/*
  Warnings:

  - Added the required column `incidenteId` to the `IncidenteAsignado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `IncidenteAsignado` ADD COLUMN `estado` VARCHAR(191) NOT NULL DEFAULT 'En proceso',
    ADD COLUMN `incidenteId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorId` INTEGER NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ubicacionLat` DOUBLE NULL,
    `ubicacionLng` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComentarioFoto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comentarioId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComentarioIncidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reporteId` INTEGER NOT NULL,
    `supervisorId` INTEGER NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ComentarioIncidente_reporteId_idx`(`reporteId`),
    INDEX `ComentarioIncidente_supervisorId_idx`(`supervisorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComentarioIncidenteFoto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comentarioIncidenteId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ComentarioIncidenteFoto_comentarioIncidenteId_idx`(`comentarioIncidenteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComentarioFoto` ADD CONSTRAINT `ComentarioFoto_comentarioId_fkey` FOREIGN KEY (`comentarioId`) REFERENCES `Comentario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComentarioIncidente` ADD CONSTRAINT `ComentarioIncidente_reporteId_fkey` FOREIGN KEY (`reporteId`) REFERENCES `ReporteIncidente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComentarioIncidente` ADD CONSTRAINT `ComentarioIncidente_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComentarioIncidenteFoto` ADD CONSTRAINT `ComentarioIncidenteFoto_comentarioIncidenteId_fkey` FOREIGN KEY (`comentarioIncidenteId`) REFERENCES `ComentarioIncidente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
