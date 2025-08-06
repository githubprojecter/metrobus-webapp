/*
  Warnings:

  - You are about to drop the column `reporteIncidenteId` on the `IncidenteAsignado` table. All the data in the column will be lost.
  - You are about to drop the column `latitud` on the `ReporteIncidente` table. All the data in the column will be lost.
  - You are about to drop the column `longitud` on the `ReporteIncidente` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[incidenteAsignadoId]` on the table `ReporteIncidente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `latitud` to the `IncidenteAsignado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitud` to the `IncidenteAsignado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `panicId` to the `IncidenteAsignado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `incidenteAsignadoId` to the `ReporteIncidente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `IncidenteAsignado` DROP FOREIGN KEY `IncidenteAsignado_reporteIncidenteId_fkey`;

-- DropIndex
DROP INDEX `IncidenteAsignado_reporteIncidenteId_fkey` ON `IncidenteAsignado`;

-- AlterTable
ALTER TABLE `IncidenteAsignado` DROP COLUMN `reporteIncidenteId`,
    ADD COLUMN `latitud` DOUBLE NOT NULL,
    ADD COLUMN `longitud` DOUBLE NOT NULL,
    ADD COLUMN `panicId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ReporteIncidente` DROP COLUMN `latitud`,
    DROP COLUMN `longitud`,
    ADD COLUMN `incidenteAsignadoId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ReporteIncidente_incidenteAsignadoId_key` ON `ReporteIncidente`(`incidenteAsignadoId`);

-- AddForeignKey
ALTER TABLE `IncidenteAsignado` ADD CONSTRAINT `IncidenteAsignado_panicId_fkey` FOREIGN KEY (`panicId`) REFERENCES `BotonPanico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReporteIncidente` ADD CONSTRAINT `ReporteIncidente_incidenteAsignadoId_fkey` FOREIGN KEY (`incidenteAsignadoId`) REFERENCES `IncidenteAsignado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
