'use client';

import { PhoneCall, MapPin, Wrench, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Agenda tu servicio',
    description:
      'Contáctanos por WhatsApp o llamada y cuéntanos el problema de tu equipo.'
  },
  {
    icon: MapPin,
    title: 'Vamos hasta tu ubicación',
    description:
      'Nos desplazamos hasta tu hogar o empresa en el horario acordado.'
  },
  {
    icon: Wrench,
    title: 'Diagnóstico y reparación',
    description:
      'Realizamos la revisión técnica y solucionamos la falla en el menor tiempo posible.'
  },
  {
    icon: BadgeCheck,
    title: 'Entrega con garantía',
    description:
      'Verificamos el funcionamiento y entregamos el servicio con garantía.'
  }
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Servicio Técnico a Domicilio en Cartagena
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nos encargamos de todo sin que tengas que salir de casa.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>

                <div className="mb-4 flex justify-center text-emerald-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}