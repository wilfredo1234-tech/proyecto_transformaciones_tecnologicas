'use client';

import {
  BadgeCheck,
  Shield,
  PackageCheck,
  Truck,
  Clock
} from 'lucide-react';

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Más de 25 años de experiencia',
    description:
      'Trayectoria comprobada en reparación de equipos electrónicos con altos estándares de calidad.'
  },
  {
    icon: Shield,
    title: 'Garantía por escrito',
    description:
      'Cada servicio incluye garantía formal para tu tranquilidad y respaldo.'
  },
  {
    icon: PackageCheck,
    title: 'Repuestos originales',
    description:
      'Utilizamos componentes de calidad para asegurar un funcionamiento duradero.'
  },
  {
    icon: Truck,
    title: 'Atención a domicilio',
    description:
      'Servicio rápido y eficiente en la comodidad de tu hogar o empresa.'
  },
  {
    icon: Clock,
    title: 'Diagnóstico rápido',
    description:
      'Evaluación técnica precisa en el menor tiempo posible.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ¿Por qué elegir Transformaciones Tecnológicas?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            No solo reparamos equipos, brindamos confianza y respaldo en cada servicio.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}