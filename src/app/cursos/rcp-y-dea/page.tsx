import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function RcpYDea() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center opacity-60" />
        </div>
        <div className="relative z-20 text-center px-4 mt-12">
          <h1 className="text-5xl md:text-7xl font-bold text-[#e80000] tracking-widest uppercase mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
            RCP y DEA
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Capacitación especializada
          </p>
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
                 <Image src="/ilus-cpr.png" alt="Ilustración RCP Compresiones" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Objetivo del Curso</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El objetivo del curso de RCP y DEA es que los integrantes de la empresa puedan adquirir las técnicas o maniobras de reanimación cardiopulmonar frente a un paro cardio respiratorio que tienden a sustituir las funciones vitales por un tiempo prudencial hasta que llegue ayuda avanzada para brindarle a la víctima una oportunidad de sobrevivir gracias al curso de <span className="text-[#fc0000] underline cursor-pointer">RCP y DEA</span> y que su empresa cumpla con la <span className="text-[#fc0000] underline cursor-pointer">Resolucion 905/15</span>.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            {/* Image Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm h-64 md:h-80 flex items-center justify-center">
                 <Image src="/ilus-airway.png" alt="Ilustración RCP Vía Aérea" fill className="object-contain" />
               </div>
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-6">Prácticas</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Los integrantes de la empresa aprenderan a reconocer los signos de un paro cardíaco, a realizar compresiones torácicas y ventilaciones, y a utilizar un DEA para restablecer el ritmo cardíaco normal. También aprenderan maniobras de desobstrucción en atragantamientos.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-20">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
