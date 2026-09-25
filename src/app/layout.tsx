import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
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
        {/* Navbar Dinámico */}
        <Header />

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
