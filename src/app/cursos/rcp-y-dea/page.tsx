import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function RcpYDea() {
  return (
    <>
      {/* Hero Section Split with Full-Width Background */}
      <section className="relative w-full h-auto md:min-h-[100dvh] flex flex-col justify-start md:justify-center items-center pt-[70px] sm:pt-[76px] md:pt-28 pb-5 sm:pb-8 md:pb-12">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center opacity-70" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-12">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center md:justify-start -mt-1 md:mt-0 md:pt-1">
            <h1 className="text-[26px] sm:text-3xl md:text-[38px] lg:text-[50px] xl:text-[56px] font-bold text-[#e60000] tracking-wide uppercase mb-1 md:mb-3 leading-tight whitespace-nowrap" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.9), -0.5px -0.5px 0px rgba(255,255,255,0.8)' }}>
              CURSO DE RCP Y DEA
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-[22px] text-white font-medium tracking-wide uppercase whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              CAPACITACIÓN PRÁCTICA PARA EMPRESAS
            </p>
          </div>

          {/* Right Side: Form in a Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl border sm:border-2 border-gray-300 p-3 sm:p-5 md:p-6 w-full max-w-lg">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fc0000] mb-2 md:mb-3 text-center">
                Complete el Formulario
              </h2>
              <ContactForm hideTitle={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Content: Cards Layout */}
      <section className="py-10 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-8 md:gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl border sm:border-2 border-gray-300 p-6 sm:p-8 md:p-10 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fc0000] mb-4">
              Preparación que Salva Vidas
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Capacitamos a su personal en técnicas de reanimación cardiopulmonar para actuar de inmediato frente a un paro cardiorrespiratorio, manteniendo las funciones vitales hasta la llegada de asistencia médica avanzada y asegurando que su empresa cumpla con la{" "}
              <a
                href="https://www.argentina.gob.ar/normativa/nacional/resolucion-905-2015-246509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fc0000] underline hover:text-red-700 transition-colors"
              >
                Resolución 905/15
              </a>.
            </p>
            <a
              href="https://wa.me/5491130170130?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#fc0000] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-red-700 transition shadow-md"
            >
              CONTACTAR
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl border sm:border-2 border-gray-300 p-6 sm:p-8 md:p-10 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fc0000] mb-4">
              Entrenamiento con Simuladores
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Los participantes aprenderán de forma práctica a identificar un paro cardíaco, aplicar compresiones torácicas efectivas, operar un Desfibrilador Externo Automático (DEA) con seguridad y ejecutar la maniobra de Heimlich ante obstrucciones de la vía aérea.
            </p>
            <a
              href="https://wa.me/5491130170130?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#fc0000] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-red-700 transition shadow-md"
            >
              CONTACTAR
            </a>
          </div>

          {/* Contact Form Bottom */}
          <div id="formulario" className="mt-4 md:mt-8 scroll-mt-10">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
