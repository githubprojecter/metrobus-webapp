/*
  Warnings:

  - You are about to drop the column `tipoMime` on the `FotoIncidente` table. All the data in the column will be lost.
  - Added the required column `heridos` to the `ReporteIncidente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FotoIncidente` DROP COLUMN `tipoMime`;

-- AlterTable
ALTER TABLE `ReporteIncidente` ADD COLUMN `heridos` BOOLEAN NOT NULL;
