'use client';

import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          ¿Tu TV no enciende?
          <br />
          ¿Tu computador está lento?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Servicio técnico a domicilio rápido y con garantía.
          Escríbenos ahora y recibe un diagnóstico inmediato.
        </p>

        {/* Button */}
        <a
          href="https://wa.me/573000000000?text=Hola,%20necesito%20servicio%20técnico%20a%20domicilio"
          target="_blank"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 hover:scale-105"
        >
          <MessageCircle size={22} />
          Escríbenos por WhatsApp
        </a>

        {/* Small trust note */}
        <p className="mt-6 text-sm text-gray-500">
          Atención rápida • Servicio a domicilio • Garantía incluida
        </p>

      </div>
    </section>
  );
}