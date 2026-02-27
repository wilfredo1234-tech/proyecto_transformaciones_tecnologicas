'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  return (
    <section className="relative h-screen text-white">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >

        {/* SLIDE 1 - TV */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src="/tv1.jpg"
              alt="Reparación de TV"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />

            <HeroContent
              title="Reparación Profesional de TVs"
              subtitle="Fallas de imagen, sonido o encendido. Garantía escrita en cada servicio."
            />
          </div>
        </SwiperSlide>

        {/* SLIDE 2 - TARJETA TV */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src="/tv2.jpeg"
              alt="Tarjeta TV"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />

            <HeroContent
              title="Diagnóstico Electrónico Especializado"
              subtitle="Reparación de tarjetas y componentes internos con repuestos originales."
            />
          </div>
        </SwiperSlide>

        {/* SLIDE 3 - PC ESCRITORIO */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src="/pc3.jpeg"
              alt="PC Escritorio"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />

            <HeroContent
              title="Optimización y Actualización de PCs"
              subtitle="Instalación de SSD, limpieza interna y mejora de rendimiento."
            />
          </div>
        </SwiperSlide>

        {/* SLIDE 4 - LAPTOP */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <img
              src="/pc1.jpeg"
              alt="Laptop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />

            <HeroContent
              title="Servicio Técnico para Portátiles"
              subtitle="Cambio de pantalla, batería y mantenimiento especializado."
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

function HeroContent({ title, subtitle }) {
  return (
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="container mx-auto px-6 text-center max-w-4xl">

        <span className="inline-block mb-6 rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400 border border-emerald-600/30">
          Servicio Técnico Profesional en Cartagena
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="https://wa.me/573163392695"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
          >
            <MessageCircle size={18} />
            Solicitar Servicio
          </Link>

          <Link
            href="tel:+573000000000"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={18} />
            Llamar Ahora
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span>✔ Más de 25 años de experiencia</span>
          <span>✔ Atención rápida</span>
          <span>✔ Garantía en cada reparación</span>
        </div>

      </div>
    </div>
  );
}