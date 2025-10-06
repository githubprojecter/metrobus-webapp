/*
  Warnings:

  - You are about to drop the column `ambulancia` on the `ReporteIncidente` table. All the data in the column will be lost.
  - You are about to drop the column `heridos` on the `ReporteIncidente` table. All the data in the column will be lost.
  - You are about to drop the column `policia` on the `ReporteIncidente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ReporteIncidente` DROP COLUMN `ambulancia`,
    DROP COLUMN `heridos`,
    DROP COLUMN `policia`;
