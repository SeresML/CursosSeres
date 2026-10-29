import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[21vh] min-h-[165px] sm:h-[28vh] sm:min-h-[210px] md:h-[65vh] md:min-h-[480px] flex flex-col justify-center items-center overflow-hidden pt-12 sm:pt-16 md:pt-28 pb-2 sm:pb-4 md:pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Placeholder image for the blog hero */}
          <div className="w-full h-full bg-[url('/bg-blog.png')] bg-cover bg-center opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-3 sm:px-4 w-full mt-1 sm:mt-2 md:mt-0">
          <h1 
            className="text-[26px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#e60000] tracking-normal mb-1 md:mb-4 leading-none"
            style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.9), -0.5px -0.5px 0px rgba(255,255,255,0.8)' }}
          >
            NUESTRO BLOG
          </h1>
          <h2 
            className="text-sm sm:text-2xl md:text-4xl lg:text-[34px] text-white tracking-wider font-medium uppercase"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 2px 8px rgba(0,0,0,0.5)' }}
          >
            NOVEDADES Y CONSEJOS
          </h2>
          
          <a 
            href="https://wa.me/5491130170130?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 sm:mt-4 md:mt-12 bg-[#fc0000] text-white px-6 py-1.5 sm:px-7 sm:py-2.5 md:px-12 md:py-4 rounded-full font-bold tracking-[0.2em] text-xs sm:text-sm md:text-[17px] hover:bg-red-700 transition"
          >
            CONTACTAR
          </a>
        </div>
      </section>

      {/* Main Content (Blog Posts Grid) */}
      <div className="py-8 md:py-20 bg-gray-50 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/blog-rcp.jpg')] bg-cover bg-center transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#fc0000] font-bold text-sm mb-2 uppercase tracking-wider">RCP</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">¿Qué es RCP y para qué sirve?</h3>
                <p className="text-gray-600 mb-6 flex-grow">Descubre en qué consiste la Reanimación Cardiopulmonar y cómo esta técnica básica puede marcar la diferencia entre la vida y la muerte en una emergencia.</p>
                <Link href="/blog/que-es-rcp" className="text-blue-600 font-bold underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors mt-auto inline-block">
                  Leer más
                </Link>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/blog-dea.jpg')] bg-cover bg-center transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#fc0000] font-bold text-sm mb-2 uppercase tracking-wider">Desfibrilador</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">¿Como usar un DEA?</h3>
                <p className="text-gray-600 mb-6 flex-grow">Conoce el paso a paso para utilizar un Desfibrilador Externo Automático de forma segura, incluso sin ser un profesional médico.</p>
                <Link href="/blog/como-usar-dea" className="text-blue-600 font-bold underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors mt-auto inline-block">
                  Leer más
                </Link>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/blog-primeros-auxilios.jpg')] bg-cover bg-center transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#fc0000] font-bold text-sm mb-2 uppercase tracking-wider">Prevención</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Importancia de los Primeros Auxilios</h3>
                <p className="text-gray-600 mb-6 flex-grow">Aprender primeros auxilios no solo te prepara para accidentes laborales, sino que te convierte en un eslabón vital para tu comunidad.</p>
                <Link href="/blog/importancia-primeros-auxilios" className="text-blue-600 font-bold underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors mt-auto inline-block">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-24 bg-white flex flex-col items-center px-6">
        <ContactForm />
      </section>
    </>
  );
}
