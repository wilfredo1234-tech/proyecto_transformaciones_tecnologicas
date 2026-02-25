'use client';

import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Empresa */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Transformaciones Tecnológicas
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Servicio técnico profesional a domicilio en Pereira y alrededores.
              Reparación de televisores, computadores y mantenimiento preventivo
              con garantía.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-emerald-400 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-emerald-400 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contacto
            </h4>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-400" />
                <span>+57 3163392695</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-emerald-400" />
                <Link
                  href="https://wa.me/573163392695?text=Hola,%20necesito%20servicio%20técnico%20a%20domicilio"
                  target="_blank"
                  className="hover:text-emerald-400 transition"
                >
                  WhatsApp directo
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-emerald-400" />
                <span>cartagena y alrededores</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={16} className="text-emerald-400" />
                <span>Lunes a Sábado · 8:00 AM – 6:00 PM</span>
              </div>

            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Transformaciones Tecnológicas.
          Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}