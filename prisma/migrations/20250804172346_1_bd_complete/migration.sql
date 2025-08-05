-- CreateTable
CREATE TABLE `Operador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userRoleId` INTEGER NOT NULL,
    `unidadAsignada` VARCHAR(191) NULL,
    `rutaAsignada` VARCHAR(191) NULL,

    UNIQUE INDEX `Operador_userRoleId_key`(`userRoleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BotonPanico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `operadorId` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `motivo` VARCHAR(191) NULL,
    `atendido` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supervisor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userRoleId` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Supervisor_userRoleId_key`(`userRoleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UbicacionSupervisor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorId` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `latitud` DOUBLE NOT NULL,
    `longitud` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordinador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userRoleId` INTEGER NOT NULL,

    UNIQUE INDEX `Coordinador_userRoleId_key`(`userRoleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IncidenteAsignado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorId` INTEGER NOT NULL,
    `fechaAsignacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `reporteIncidenteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReporteIncidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supervisorId` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descripcion` VARCHAR(191) NOT NULL,
    `ambulancia` BOOLEAN NOT NULL DEFAULT false,
    `policia` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FotoIncidente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reporteId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `tipoMime` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userRoleId` INTEGER NOT NULL,

    UNIQUE INDEX `Patio_userRoleId_key`(`userRoleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegistroSalidaUnidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patioId` INTEGER NOT NULL,
    `unidad` VARCHAR(191) NOT NULL,
    `operadorId` INTEGER NOT NULL,
    `fechaSalida` DATETIME(3) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `vueltas` INTEGER NOT NULL,
    `kmInicial` INTEGER NOT NULL,
    `kmFinal` INTEGER NULL,
    `condiciones` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AsignacionUnidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patioId` INTEGER NOT NULL,
    `operadorId` INTEGER NOT NULL,
    `unidad` VARCHAR(191) NOT NULL,
    `ruta` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Operador` ADD CONSTRAINT `Operador_userRoleId_fkey` FOREIGN KEY (`userRoleId`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BotonPanico` ADD CONSTRAINT `BotonPanico_operadorId_fkey` FOREIGN KEY (`operadorId`) REFERENCES `Operador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Supervisor` ADD CONSTRAINT `Supervisor_userRoleId_fkey` FOREIGN KEY (`userRoleId`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UbicacionSupervisor` ADD CONSTRAINT `UbicacionSupervisor_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coordinador` ADD CONSTRAINT `Coordinador_userRoleId_fkey` FOREIGN KEY (`userRoleId`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IncidenteAsignado` ADD CONSTRAINT `IncidenteAsignado_reporteIncidenteId_fkey` FOREIGN KEY (`reporteIncidenteId`) REFERENCES `ReporteIncidente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IncidenteAsignado` ADD CONSTRAINT `IncidenteAsignado_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReporteIncidente` ADD CONSTRAINT `ReporteIncidente_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Supervisor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FotoIncidente` ADD CONSTRAINT `FotoIncidente_reporteId_fkey` FOREIGN KEY (`reporteId`) REFERENCES `ReporteIncidente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patio` ADD CONSTRAINT `Patio_userRoleId_fkey` FOREIGN KEY (`userRoleId`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroSalidaUnidad` ADD CONSTRAINT `RegistroSalidaUnidad_patioId_fkey` FOREIGN KEY (`patioId`) REFERENCES `Patio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroSalidaUnidad` ADD CONSTRAINT `RegistroSalidaUnidad_operadorId_fkey` FOREIGN KEY (`operadorId`) REFERENCES `Operador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsignacionUnidad` ADD CONSTRAINT `AsignacionUnidad_patioId_fkey` FOREIGN KEY (`patioId`) REFERENCES `Patio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsignacionUnidad` ADD CONSTRAINT `AsignacionUnidad_operadorId_fkey` FOREIGN KEY (`operadorId`) REFERENCES `Operador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
