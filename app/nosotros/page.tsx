'use client';

import { ShieldCheck, Wrench, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <main className="bg-white">

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Más de 25 años brindando soluciones tecnológicas confiables
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            En Transformaciones Tecnológicas trabajamos con compromiso, experiencia y calidad,
            ofreciendo servicios técnicos especializados en equipos electrónicos.
          </p>
        </div>
      </section>

      {/* 🏢 HISTORIA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Nuestra Trayectoria
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Durante más de dos décadas hemos acompañado a hogares y empresas
                ofreciendo reparación y mantenimiento de equipos electrónicos
                con altos estándares de calidad.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nuestra experiencia nos permite diagnosticar con precisión,
                utilizar repuestos adecuados y garantizar soluciones duraderas.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100">
              <p className="text-5xl font-bold text-emerald-700">+25</p>
              <p className="mt-2 text-gray-700 font-medium">
                Años de experiencia en el sector
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🎯 MISIÓN & VISIÓN */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white rounded-2xl p-10 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Brindar soluciones técnicas eficientes y confiables,
                garantizando la satisfacción de nuestros clientes mediante
                un servicio profesional y responsable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Consolidarnos como una empresa líder en servicios técnicos
                electrónicos, reconocida por nuestra calidad, experiencia
                y compromiso.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ⭐ VALORES */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestros Valores
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-10">

            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="text-emerald-700" size={36} />
              <h4 className="mt-4 font-semibold text-gray-900">Confianza</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <Wrench className="text-emerald-700" size={36} />
              <h4 className="mt-4 font-semibold text-gray-900">Calidad</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="text-emerald-700" size={36} />
              <h4 className="mt-4 font-semibold text-gray-900">Compromiso</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <Award className="text-emerald-700" size={36} />
              <h4 className="mt-4 font-semibold text-gray-900">Experiencia</h4>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 CTA FINAL */}
      <section className="bg-emerald-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold">
            ¿Necesitas un servicio técnico confiable?
          </h3>
          <p className="mt-4 text-emerald-100">
            Estamos listos para ayudarte.
          </p>

          <Link
            href="/contacto"
            className="inline-block mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-emerald-700 transition hover:bg-gray-100"
          >
            Solicitar Servicio
          </Link>
        </div>
      </section>

    </main>
  );
}