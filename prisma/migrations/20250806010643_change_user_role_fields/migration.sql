/*
  Warnings:

  - You are about to drop the column `apellidos` on the `Coordinador` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `Coordinador` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Coordinador` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Coordinador` table. All the data in the column will be lost.
  - You are about to drop the column `apellidos` on the `Operador` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `Operador` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Operador` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Operador` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Supervisor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Coordinador` DROP COLUMN `apellidos`,
    DROP COLUMN `correo`,
    DROP COLUMN `nombre`,
    DROP COLUMN `telefono`;

-- AlterTable
ALTER TABLE `FotoIncidente` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Operador` DROP COLUMN `apellidos`,
    DROP COLUMN `correo`,
    DROP COLUMN `nombre`,
    DROP COLUMN `telefono`;

-- AlterTable
ALTER TABLE `Supervisor` DROP COLUMN `nombre`;

-- AlterTable
ALTER TABLE `UserRole` ADD COLUMN `apellidoMaterno` VARCHAR(191) NULL,
    ADD COLUMN `apellidoPaterno` VARCHAR(191) NULL,
    ADD COLUMN `correo` VARCHAR(191) NULL,
    ADD COLUMN `nombre` VARCHAR(191) NULL,
    ADD COLUMN `profilePhotoUrl` VARCHAR(191) NULL,
    ADD COLUMN `telefono` VARCHAR(191) NULL;
