'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      
      {/* 🟢 TOP BAR */}
      <div className="hidden lg:block bg-emerald-700 text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-6 text-sm">
          <div className="flex items-center gap-6">
            <span className="font-medium">
              Servicio técnico especializado en equipos electrónicos
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="tel:+573163392695" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <Phone size={14} />
              +57  3163392695
            </Link>

            <Link href="https://wa.me/573163392695" target="_blank" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <MessageCircle size={14} />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* ⚪ MAIN NAVBAR */}
      <div className="border-b border-emerald-100 bg-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
            Transformaciones{" "}
            <span className="text-emerald-700">Tecnológicas</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-emerald-700 transition">
              Inicio
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-emerald-700 transition">
                Servicios <ChevronDown size={16} />
              </button>

              {open && (
                <div className="absolute left-0 mt-6 w-72 rounded-2xl bg-white border border-emerald-100 shadow-xl p-6 space-y-4">
                  <Link href="#" className="block hover:text-emerald-700 transition">Reparación de Televisores</Link>
                  <Link href="#" className="block hover:text-emerald-700 transition">Reparación de Computadores</Link>
                  <Link href="#" className="block hover:text-emerald-700 transition">Mantenimiento Preventivo</Link>
                  <Link href="#" className="block hover:text-emerald-700 transition">Soporte a Domicilio</Link>
                </div>
              )}
            </div>

            <Link href="/nosotros" className="hover:text-emerald-700 transition">Nosotros</Link>
            <Link href="/cobertura" className="hover:text-emerald-700 transition">Cobertura</Link>
            <Link href="/contacto" className="hover:text-emerald-700 transition">Contacto</Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-xl bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800"
            >
              Solicitar Servicio
            </Link>
          </div>

          {/* 📱 Mobile Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-gray-700"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* 📱 OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* 📱 SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-emerald-100">
          <span className="font-semibold text-emerald-700">Menú</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-5 text-gray-700 font-medium">
          <Link href="/" className="block">Inicio</Link>
          <Link href="#" className="block">Reparación de Televisores</Link>
          <Link href="#" className="block">Reparación de Computadores</Link>
          <Link href="#" className="block">Mantenimiento Preventivo</Link>
          <Link href="#" className="block">Soporte a Domicilio</Link>
          <Link href="/nosotros" className="block">Nosotros</Link>
          <Link href="/cobertura" className="block">Cobertura</Link>
          <Link href="/contacto" className="block">Contacto</Link>

          <div className="pt-6 border-t border-emerald-100">
            <Link
              href="/contacto"
              className="block text-center rounded-xl bg-emerald-700 px-6 py-3 text-white font-semibold"
            >
              Solicitar Servicio
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}