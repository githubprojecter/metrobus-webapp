/*
  Warnings:

  - The values [MATUTINO,VESPERTINO,NOCTURNO] on the enum `ReportenseCall_turno` will be removed. If these variants are still used in the database, this will fail.
  - The values [MATUTINO,VESPERTINO,NOCTURNO] on the enum `ReportenseCall_turno` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `ReportenseCall` MODIFY `turno` ENUM('T1', 'T2', 'T3', 'T4', 'T5') NOT NULL;

-- AlterTable
ALTER TABLE `TurnoProgramado` MODIFY `turno` ENUM('T1', 'T2', 'T3', 'T4', 'T5') NOT NULL;
