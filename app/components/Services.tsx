'use client';

import {
  Tv,
  Laptop,
  Wrench,
  Monitor,
  ShieldCheck,
  HardDrive
} from 'lucide-react';

const services = [
  {
    icon: Tv,
    title: 'Reparación de Televisores LED / Smart TV',
    description:
      'Diagnóstico y reparación de fallas de imagen, sonido, tarjetas y pantallas.'
  },
  {
    icon: Laptop,
    title: 'Reparación de Laptops',
    description:
      'Solución de problemas de encendido, sobrecalentamiento, hardware y software.'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Preventivo',
    description:
      'Limpieza interna, optimización y revisión completa para prolongar la vida útil.'
  },
  {
    icon: Monitor,
    title: 'Cambio de Pantallas',
    description:
      'Reemplazo profesional de pantallas dañadas en laptops y televisores.'
  },
  {
    icon: ShieldCheck,
    title: 'Eliminación de Virus',
    description:
      'Limpieza profunda de malware, spyware y optimización del sistema.'
  },
  {
    icon: HardDrive,
    title: 'Formateo e Instalación de Software',
    description:
      'Instalación de sistema operativo, drivers y programas esenciales.'
  }
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones técnicas confiables para tus equipos electrónicos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}