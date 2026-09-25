import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cursos de RCP y DEA",
  description: "Capacitación profesional en Primeros Auxilios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`${jost.className} min-h-screen bg-gray-50 text-gray-900 flex flex-col`}>
        {/* Navbar - Absoluto y transparente para superponerse al Hero */}
        <header className="absolute w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center drop-shadow-md">
              <Image 
                src="/logo.png" 
                alt="Seres Salud Cursos" 
                width={360} 
                height={110} 
                className="object-contain"
                priority
              />
            </Link>
            
            {/* Nav Links */}
            <nav className="hidden md:flex gap-10 items-center drop-shadow-md">
              <Link href="/" className="text-base font-semibold text-white tracking-widest hover:text-[#fc0000] transition-colors uppercase">Inicio</Link>
              <div className="group relative">
                <Link href="/cursos" className="flex items-center gap-1 text-base font-semibold text-white tracking-widest hover:text-[#fc0000] transition-colors uppercase py-2">
                  Cursos 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-[280px] bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col py-2">
                    <Link href="/cursos/rcp-y-dea" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100">
                      Cursos (RCP y DEA)
                    </Link>
                    <Link href="/cursos/primeros-auxilios" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors border-b border-gray-100">
                      Cursos Primeros Auxilios
                    </Link>
                    <Link href="/cursos/rcp-dea-primeros-auxilios" className="px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#fc0000] transition-colors">
                      RCP, DEA y Primeros Auxilios
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-base font-semibold text-white tracking-widest hover:text-[#fc0000] transition-colors uppercase">Blog</Link>
              <Link href="/contacto" className="text-base font-semibold text-white tracking-widest hover:text-[#fc0000] transition-colors uppercase">Contacto</Link>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="flex-grow relative">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#f0f0f0] py-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
            {/* Column 1 */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-2xl font-bold text-[#fc0000]">Nuestros Servicios</h3>
              <div className="flex flex-col gap-5 text-base font-medium text-gray-800">
                <a href="https://seressalud.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fc0000] transition-colors">Medicina Laboral</a>
                <a href="https://www.consultoriosmedicos.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fc0000] transition-colors">Medicina Asistencial</a>
                <a href="https://www.analisisclinicos.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fc0000] transition-colors">Laboratorio de Análisis</a>
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-2xl font-bold text-[#fc0000]">Contacto</h3>
              <div className="flex flex-col gap-5 text-base font-medium text-gray-800">
                <p>servicios@seressalud.com.ar</p>
                <p>11-3017-0130</p>
                <p>4222-1597</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
