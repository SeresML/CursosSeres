import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function PrimerosAuxilios() {
  return (
    <>
      {/* Hero Section Split with Full-Width Background */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-20 pb-6 md:pt-24 md:pb-8">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center opacity-70" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 mt-1 md:mt-2">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#e80000] tracking-wide uppercase mb-1 md:mb-3 leading-tight" style={{ textShadow: '2px 2px 6px rgba(255,255,255,0.85), 0px 0px 12px rgba(255,255,255,0.6)' }}>
              <span className="block whitespace-nowrap">CURSO DE</span>
              <span className="block whitespace-nowrap">PRIMEROS AUXILIOS</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Respuesta rápida ante emergencias laborales
            </p>
          </div>

          {/* Right Side: Form in a Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-300 p-5 sm:p-6 md:p-7 w-full max-w-lg">
              <h2 className="text-xl md:text-2xl font-bold text-[#fc0000] mb-3 md:mb-4 text-center">
                Complete el formulario
              </h2>
              <ContactForm hideTitle={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Content: Zigzag Layout */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16 md:gap-24">
          
          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            {/* Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm h-56 md:h-80 flex items-center justify-center">
                 <Image src="/ilus-pa-1.png" alt="Objetivo Primeros Auxilios" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#fc0000] mb-5 whitespace-nowrap">Asistencia ante Accidentes</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Preparamos a los colaboradores de su empresa para actuar con solvencia ante incidentes o emergencias repentinas, aliviando el dolor del afectado, previniendo complicaciones mayores y cumpliendo con la <span className="text-[#fc0000] underline cursor-pointer">Resolución 905/15</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Su equipo dominará los protocolos esenciales de primera respuesta hasta la llegada de los profesionales de la salud.
              </p>
              <a
                href="#formulario"
                className="mt-6 inline-block bg-[#fc0000] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-red-700 transition"
              >
                CONTACTAR
              </a>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-20">
            {/* Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm h-56 md:h-80 flex items-center justify-center">
                 <Image src="/ilus-pa-2.png" alt="Prácticas Primeros Auxilios" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-[#fc0000] mb-5 whitespace-nowrap">Manejo Práctico de Emergencias</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Entrenamiento aplicado para evaluar escenarios críticos, controlar hemorragias, tratar quemaduras, inmovilizar traumatismos y asistir convulsiones o desmayos con herramientas claras para personal no sanitario.
              </p>
              <a
                href="#formulario"
                className="mt-6 inline-block bg-[#fc0000] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-red-700 transition"
              >
                CONTACTAR
              </a>
            </div>
          </div>

          {/* Contact Form Bottom */}
          <div id="formulario" className="mt-10 md:mt-20 scroll-mt-10">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
