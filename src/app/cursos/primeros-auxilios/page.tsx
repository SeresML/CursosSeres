import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function PrimerosAuxilios() {
  return (
    <>
      {/* Hero Section Split with Full-Width Background */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[600px] flex items-center justify-center pt-20 pb-6 md:pt-32 md:pb-16">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center opacity-70" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 mt-2 md:mt-12">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#e80000] tracking-wider md:tracking-widest uppercase mb-1 md:mb-4 leading-tight" style={{ textShadow: '2px 2px 6px rgba(255,255,255,0.85), 0px 0px 12px rgba(255,255,255,0.6)' }}>
              CURSO DE PRIMEROS AUXILIOS
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white font-medium" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Para Empresas
            </p>
          </div>

          {/* Right Side: Form in a Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-300 p-5 sm:p-7 md:p-10 w-full max-w-lg">
              <h2 className="text-xl md:text-3xl font-bold text-[#fc0000] mb-3 md:mb-6 text-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Objetivo del Curso</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El objetivo del curso de primeros auxilios es preparar a los integrantes de la empresa para que estén capacitados para aliviar el dolor de la víctima, evitar complicaciones mayores y que su empresa cumpla con la <span className="text-[#fc0000] underline cursor-pointer">Resolucion 905/15</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Los cursos de primeros auxilios enseñan técnicas básicas para asistir a quienes sufran un incidente o enfermedad repentina, hasta la llegada de profesionales de la salud.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Prácticas</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                También brindaremos entrenamiento para identificar situaciones críticas, victimas y lesiones, y conocer herramientas prácticas de manejo inmediato por parte de personal no sanitario y facilitar la adquisición de habilidades prácticas.
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
