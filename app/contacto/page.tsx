'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mrearwlz', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <main>

      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contáctanos
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Servicio técnico a domicilio en cartagena y alrededores.
            Atención rápida, diagnóstico profesional y garantía incluida.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Formulario */}
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                    className="w-full rounded-xl border border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+57 300 000 0000"
                    required
                    className="w-full rounded-xl border border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe tu problema
                  </label>
                  <textarea
                    rows={4}
                    name="mensaje"
                    placeholder="Ej: Mi televisor no enciende..."
                    required
                    className="w-full rounded-xl border border-gray-200 p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:opacity-70"
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {success && (
                  <p className="text-emerald-600 font-medium text-center">
                    ✅ Mensaje enviado correctamente. Te contactaremos pronto.
                  </p>
                )}

              </form>
            </div>

            {/* Información */}
            <div className="space-y-8">

              <div className="bg-white rounded-2xl shadow p-8 flex gap-4 items-start">
                <Phone className="text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+57 3163392695</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-8 flex gap-4 items-start">
                <MessageCircle className="text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <Link
                    href="https://wa.me/573163392695?text=Hola,%20necesito%20servicio%20técnico%20a%20domicilio"
                    target="_blank"
                    className="text-emerald-600 font-medium hover:underline"
                  >
                    Escríbenos ahora
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-8 flex gap-4 items-start">
                <Mail className="text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Correo electrónico</p>
                  <p className="text-gray-600">transformacionc777@gmail.com</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-8 flex gap-4 items-start">
                <MapPin className="text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Cobertura</p>
                  <p className="text-gray-600">
                    Cartagena y alrededores – Servicio a domicilio
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-8">
                <p className="font-semibold text-gray-900 mb-2">
                  Horario de atención
                </p>
                <p className="text-gray-600">
                  Lunes a Sábado: 8:00 AM – 6:00 PM
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}