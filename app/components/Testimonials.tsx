'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    text: 'Excelente servicio, me repararon mi TV el mismo día. Muy profesionales y puntuales.',
  },
  {
    name: 'Laura G.',
    text: 'Mi computador estaba muy lento y lo dejaron como nuevo. Atención rápida y confiable.',
  },
  {
    name: 'Andrés R.',
    text: 'Servicio a domicilio muy eficiente. Explican todo con claridad y dan garantía.',
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            La confianza de nuestros clientes es nuestro mayor respaldo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex text-emerald-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Name */}
              <p className="mt-6 font-semibold text-gray-900">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}