'use client';

import { MapPin, Clock, Home, Wrench } from 'lucide-react';

export default function CoberturaPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-700 font-semibold uppercase tracking-wider">
            Cobertura
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Servicio técnico en Cartagena
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reparación profesional de televisores y computadores con atención
            rápida a domicilio en diferentes zonas de la ciudad.
          </p>
        </div>
      </section>

      {/* ZONAS */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Zonas donde prestamos servicio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-blue-700" size={20} />
                Zona Centro
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Centro Histórico</li>
                <li>Getsemaní</li>
                <li>Manga</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-blue-700" size={20} />
                Zona Norte
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Crespo</li>
                <li>La Boquilla</li>
                <li>Zona Norte</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-blue-700" size={20} />
                Zona Sur
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>El Recreo</li>
                <li>Los Alpes</li>
                <li>Blas de Lezo</li>
                <li>San Fernando</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* MODALIDAD */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Modalidad de atención
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="flex gap-4">
              <Home className="text-blue-700" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Servicio a domicilio
                </h3>
                <p className="text-gray-600">
                  Atención directa en tu hogar con herramientas profesionales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Wrench className="text-blue-700" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Reparación especializada
                </h3>
                <p className="text-gray-600">
                  Diagnóstico y reparación de Smart TV, LED y computadores.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-blue-700" size={28} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Respuesta rápida
                </h3>
                <p className="text-gray-600">
                  Tiempo estimado de atención entre 2 y 4 horas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA LIMPIO SIN FONDO AZUL */}
      <section className="bg-white py-20 border-t">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Estás dentro de nuestra cobertura?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contáctanos ahora y agenda tu servicio técnico en Cartagena.
          </p>
          <a
            href="https://wa.me/573163392695"
            target="_blank"
            className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}