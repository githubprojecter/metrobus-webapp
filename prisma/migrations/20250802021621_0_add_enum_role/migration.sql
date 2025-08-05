/*
  Warnings:

  - You are about to alter the column `role` on the `UserRole` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[idFirebase]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `UserRole` MODIFY `role` ENUM('Coordinador', 'Operador', 'Supervisor', 'Dirección', 'Patio') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `UserRole_idFirebase_key` ON `UserRole`(`idFirebase`);
