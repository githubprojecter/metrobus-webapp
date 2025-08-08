// prisma/seed.ts
import { PrismaClient } from '@/lib/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Crear 10 nuevos UserRole
  const userRoles = await Promise.all([
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-1', role: 'Operador', nombre: 'Juan', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', telefono: '5512345678', correo: 'juan@metrobus.com' }}),
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-2', role: 'Operador', nombre: 'Ana', apellidoPaterno: 'Hernández', apellidoMaterno: 'Ramírez', telefono: '5523456789', correo: 'ana@metrobus.com' }}),
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-3', role: 'Operador', nombre: 'Carlos', apellidoPaterno: 'Gómez', apellidoMaterno: 'Vega', telefono: '5534567890', correo: 'carlos@metrobus.com' }}),
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-4', role: 'Operador', nombre: 'María', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Flores', telefono: '5545678901', correo: 'maria@metrobus.com' }}),
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-5', role: 'Operador', nombre: 'Luis', apellidoPaterno: 'Díaz', apellidoMaterno: 'Ortiz', telefono: '5556789012', correo: 'luis@metrobus.com' }}),
    prisma.userRole.create({ data: { idFirebase: 'firebase-uid-6', role: 'Operador', nombre: 'Laura', apellidoPaterno: 'Jiménez', apellidoMaterno: 'Navarro', telefono: '5567890123', correo: 'laura@metrobus.com' }}),
  ]);

  // Crear Operadores relacionados
  const operadores = await Promise.all(userRoles.map((user, index) =>
    prisma.operador.create({
      data: {
        userRoleId: user.id,
        unidadAsignada: `MB-${100 + index}`,
        rutaAsignada: `Ruta ${index + 1}`,
      },
    })
  ));

  // Coordenadas de Puebla y CDMX
  const ubicaciones = [
    [19.0414, -98.2063], [19.0500, -98.2000], [19.0300, -98.2100], [19.0600, -98.2200], [19.0700, -98.1800],
    [19.4326, -99.1332], [19.4400, -99.1200], [19.4200, -99.1500], [19.4500, -99.1400], [19.4100, -99.1300],
  ];

  // Crear botones de pánico
  await Promise.all(ubicaciones.map((coords, index) =>
    prisma.botonPanico.create({
      data: {
        operadorId: operadores[index % operadores.length].id,
        motivo: `Motivo simulado ${index + 1}`,
        atendido: index % 2 === 0,
        latitud: coords[0],
        longitud: coords[1],
      },
    })
  ));

  // Crear patios
  const patios = await Promise.all([...Array(3)].map((_, i) =>
    prisma.userRole.create({
      data: {
        idFirebase: `patio-firebase-${i}`,
        role: 'Patio',
        nombre: `Patio ${i}`,
        apellidoPaterno: `Admin ${i}`,
        apellidoMaterno: 'Patio',
        telefono: `550000000${i}`,
        correo: `patio${i}@metrobus.com`,
        patio: { create: {} },
      },
    })
  ));

  // Crear asignaciones y registros de salida
  await Promise.all(operadores.map((op, i) => {
    const patioId = patios[i % patios.length].patio?.id || (i % patios.length) + 1;
    return Promise.all([
      prisma.asignacionUnidad.create({
        data: {
          operadorId: op.id,
          patioId,
          unidad: `MB-${200 + i}`,
          ruta: `Ruta Especial ${i}`,
        },
      }),
      prisma.registroSalidaUnidad.create({
        data: {
          operadorId: op.id,
          patioId,
          unidad: `MB-${200 + i}`,
          fechaSalida: new Date(),
          horaInicio: '06:30',
          vueltas: 3,
          kmInicial: 10000 + i * 100,
          kmFinal: 10000 + i * 100 + 50,
          condiciones: 'Buena',
        },
      }),
    ]);
  }));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
