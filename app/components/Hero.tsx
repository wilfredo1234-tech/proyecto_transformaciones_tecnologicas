'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      
      <div className="relative container mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-3xl">
          
          <span className="inline-block mb-6 rounded-full bg-emerald-600/10 px-4 py-1.5 text-sm font-medium text-emerald-400 border border-emerald-600/20">
            Servicio Técnico Profesional en Cartagena
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Reparación Profesional de 
            <span className="text-emerald-400"> TVs y Computadores</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Diagnóstico rápido, repuestos originales y garantía por escrito.
            Atención a domicilio y en taller especializado.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            
            <Link
              href="https://wa.me/573000000000"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              <MessageCircle size={18} />
              Solicitar Servicio
            </Link>

            <Link
              href="tel:+573000000000"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              Llamar Ahora
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>✔ Más de 5 años de experiencia</span>
            <span>✔ Atención rápida</span>
            <span>✔ Garantía en cada reparación</span>
          </div>

        </div>
      </div>
    </section>
  );
}