import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function RcpDeaPrimerosAuxilios() {
  return (
    <>
      {/* Hero Section Split with Full-Width Background */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center pt-32 pb-16">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center opacity-70" />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
          {/* Left Side: Title */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e80000] tracking-widest uppercase mb-4 leading-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
              CURSO DE RCP, DEA Y<br/>PRIMEROS AUXILIOS
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Para Empresas
            </p>
          </div>

          {/* Right Side: Form in a Card */}
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#fc0000] mb-6 text-left">
                ¡Consulte nuestros cursos!
              </h2>
              <ContactForm hideTitle={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Content: Zigzag Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
          
          {/* Row 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm h-64 md:h-80 flex items-center justify-center">
                 <Image src="/ilus-integral-1.png" alt="Objetivo RCP y Primeros Auxilios" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Objetivo del Curso</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El objetivo del curso de RCP, DEA Y PRIMEROS AUXILIOS es que los integrantes de la empresa puedan adquirir las técnicas o maniobras de reanimación cardiopulmonar frente a un paro cardio respiratorio que tienden a sustituir las funciones vitales por un tiempo prudencial hasta que llegue ayuda avanzada para brindarle a la víctima una oportunidad de sobrevivir y que su empresa cumpla con la <span className="text-[#fc0000] underline cursor-pointer">Resolucion 905/15</span>.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            {/* Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm h-64 md:h-80 flex items-center justify-center">
                 <Image src="/ilus-integral-2.png" alt="Prácticas RCP y Primeros Auxilios" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Prácticas</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                También brindaremos entrenamiento para identificar situaciones críticas, victimas y lesiones, y conocer herramientas prácticas de manejo inmediato por parte de personal no sanitario y facilitar la adquisición de habilidades prácticas.
              </p>
            </div>
          </div>

          {/* Contact Form Bottom */}
          <div className="mt-20">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
