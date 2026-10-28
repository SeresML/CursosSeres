"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCursosOpen, setMobileCursosOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center drop-shadow-md">
          <Image
            src="/logo.png"
            alt="Seres Salud Cursos"
            width={360}
            height={110}
            className="w-[175px] sm:w-[230px] md:w-[290px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 drop-shadow-md focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex justify-between items-center drop-shadow-md text-white w-full max-w-lg">
          <Link href="/" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">
            Inicio
          </Link>
          <div className="group relative">
            <Link
              href="/cursos"
              className="flex items-center gap-1 text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase py-2"
            >
              Cursos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-[280px] bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
              <div className="flex flex-col py-2">
                <Link
                  href="/cursos/rcp-y-dea"
                  className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100"
                >
                  Cursos (RCP y DEA)
                </Link>
                <Link
                  href="/cursos/primeros-auxilios"
                  className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100"
                >
                  Cursos Primeros Auxilios
                </Link>
                <Link
                  href="/cursos/rcp-dea-primeros-auxilios"
                  className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors"
                >
                  RCP, DEA y Primeros Auxilios
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">
            Blog
          </Link>
          <Link href="/contacto" className="text-base font-semibold tracking-widest hover:text-[#fc0000] transition-colors uppercase">
            Contacto
          </Link>
        </nav>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl mx-6 rounded-xl overflow-hidden border border-gray-100">
          <nav className="flex flex-col py-3 text-gray-900">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-base font-semibold tracking-wider uppercase hover:bg-gray-50 hover:text-[#fc0000] transition-colors"
            >
              Inicio
            </Link>
            <div>
              <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">
                <Link
                  href="/cursos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-wider uppercase hover:text-[#fc0000] transition-colors"
                >
                  Cursos
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileCursosOpen(!mobileCursosOpen)}
                  className="p-1 text-gray-700 hover:text-[#fc0000]"
                  aria-label="Ver submenú de cursos"
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${mobileCursosOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileCursosOpen && (
                <div className="bg-gray-50 flex flex-col py-1 pl-10 pr-6 border-y border-gray-100">
                  <Link
                    href="/cursos/rcp-y-dea"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-gray-700 hover:text-[#fc0000]"
                  >
                    Cursos (RCP y DEA)
                  </Link>
                  <Link
                    href="/cursos/primeros-auxilios"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-gray-700 hover:text-[#fc0000]"
                  >
                    Cursos Primeros Auxilios
                  </Link>
                  <Link
                    href="/cursos/rcp-dea-primeros-auxilios"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-gray-700 hover:text-[#fc0000]"
                  >
                    RCP, DEA y Primeros Auxilios
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-base font-semibold tracking-wider uppercase hover:bg-gray-50 hover:text-[#fc0000] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-base font-semibold tracking-wider uppercase hover:bg-gray-50 hover:text-[#fc0000] transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
