-- CreateTable
CREATE TABLE `TurnoProgramado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `turno` ENUM('MATUTINO', 'VESPERTINO', 'NOCTURNO') NOT NULL,
    `supervisorId` INTEGER NOT NULL,
    `coordinadorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TurnoProgramado_fecha_turno_supervisorId_key`(`fecha`, `turno`, `supervisorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReportenseCall` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coordinadorId` INTEGER NOT NULL,
    `turno` ENUM('MATUTINO', 'VESPERTINO', 'NOCTURNO') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorId` INTEGER NOT NULL,
    `callId` INTEGER NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `latitud` DOUBLE NOT NULL,
    `longitud` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TurnoProgramado` ADD CONSTRAINT `TurnoProgramado_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TurnoProgramado` ADD CONSTRAINT `TurnoProgramado_coordinadorId_fkey` FOREIGN KEY (`coordinadorId`) REFERENCES `Coordinador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReportenseCall` ADD CONSTRAINT `ReportenseCall_coordinadorId_fkey` FOREIGN KEY (`coordinadorId`) REFERENCES `Coordinador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presente` ADD CONSTRAINT `Presente_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presente` ADD CONSTRAINT `Presente_callId_fkey` FOREIGN KEY (`callId`) REFERENCES `ReportenseCall`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
