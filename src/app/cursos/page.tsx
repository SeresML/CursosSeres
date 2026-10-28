import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Cursos() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[42vh] min-h-[270px] md:h-[65vh] md:min-h-[450px] flex items-center justify-center overflow-hidden pt-10 md:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg-cursos.png')] bg-cover bg-center opacity-70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-2 md:mt-4">
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#e80000] tracking-normal mb-2 md:mb-4 leading-none"
            style={{ 
              textShadow: '2px 2px 6px rgba(255,255,255,0.85), 0px 0px 12px rgba(255,255,255,0.6)'
            }}
          >
            NUESTROS CURSOS
          </h1>
          <h2 
            className="text-sm sm:text-lg md:text-2xl text-white tracking-wider font-medium whitespace-nowrap"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 2px 8px rgba(0,0,0,0.5)' 
            }}
          >
            FORMACIÓN PRÁCTICA PARA SU EQUIPO
          </h2>
          
          <Link 
            href="/contacto" 
            className="mt-5 md:mt-12 bg-[#fc0000] text-white px-7 py-2.5 md:px-12 md:py-4 rounded-full font-bold tracking-[0.2em] text-sm md:text-[17px] hover:bg-red-700 transition"
          >
            CONTACTO
          </Link>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8 md:py-20 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 grid grid-cols-3 gap-3 sm:gap-8 md:gap-16 text-center">
          {/* Curso 1 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-2 md:mb-8 text-gray-900">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 7v7" />
                  <path d="M9 10h6" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-lg md:text-2xl font-bold mb-3 md:mb-8 text-gray-900 min-h-[36px] md:min-h-[64px] flex items-center justify-center">
                RCP y DEA
              </h3>
            </div>
            <Link href="/cursos/rcp-y-dea" className="bg-[#fc0000] text-white px-3 py-1.5 sm:px-6 md:px-8 md:py-2.5 rounded-full font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase hover:bg-red-700 transition">
              CONSULTAR
            </Link>
          </div>
          
          {/* Curso 2 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-2 md:mb-8 text-gray-900">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M12 10v6" />
                  <path d="M9 13h6" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-lg md:text-2xl font-bold mb-3 md:mb-8 text-gray-900 min-h-[36px] md:min-h-[64px] flex items-center justify-center">
                Primeros Auxilios
              </h3>
            </div>
            <Link href="/cursos/primeros-auxilios" className="bg-[#fc0000] text-white px-3 py-1.5 sm:px-6 md:px-8 md:py-2.5 rounded-full font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase hover:bg-red-700 transition">
              CONSULTAR
            </Link>
          </div>

          {/* Curso 3 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-2 md:mb-8 text-gray-900">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-lg md:text-2xl font-bold mb-3 md:mb-8 text-gray-900 leading-tight min-h-[36px] md:min-h-[64px] flex items-center justify-center">
                RCP, DEA y Primeros<br/>Auxilios
              </h3>
            </div>
            <Link href="/cursos/rcp-dea-primeros-auxilios" className="bg-[#fc0000] text-white px-3 py-1.5 sm:px-6 md:px-8 md:py-2.5 rounded-full font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase hover:bg-red-700 transition">
              CONSULTAR
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 md:py-24 bg-white flex flex-col items-center px-4 md:px-6">
        <ContactForm />
      </section>
    </>
  );
}
