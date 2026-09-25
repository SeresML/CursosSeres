import Link from "next/link";

export default function Cursos() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg-cursos.png')] bg-cover bg-center opacity-70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-4">
          <h1 
            className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#e80000] tracking-normal mb-4 leading-none"
            style={{ 
              textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
            }}
          >
            NUESTROS CURSOS
          </h1>
          <h2 
            className="text-2xl md:text-4xl lg:text-[34px] text-white tracking-wider font-medium"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 2px 8px rgba(0,0,0,0.5)' 
            }}
          >
            PARA SUS EMPLEADOS
          </h2>
          
          <Link 
            href="/contacto" 
            className="mt-12 bg-[#fc0000] text-white px-12 py-4 rounded-full font-bold tracking-[0.2em] text-[17px] hover:bg-red-700 transition"
          >
            CONTACTO
          </Link>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-20 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {/* Curso 1 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-8 text-gray-900">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 7v7" />
                  <path d="M9 10h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 underline decoration-2 underline-offset-4">
                RCP y DEA
              </h3>
            </div>
            <Link href="/contacto" className="bg-[#fc0000] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-red-700 transition">
              Consultar
            </Link>
          </div>
          
          {/* Curso 2 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-8 text-gray-900">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M12 10v6" />
                  <path d="M9 13h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 underline decoration-2 underline-offset-4">
                Primeros Auxilios
              </h3>
            </div>
            <Link href="/contacto" className="bg-[#fc0000] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-red-700 transition">
              Consultar
            </Link>
          </div>

          {/* Curso 3 */}
          <div className="flex flex-col items-center h-full">
            <div className="flex-grow flex flex-col items-center">
              <div className="mb-8 text-gray-900">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 underline decoration-2 underline-offset-4 leading-tight">
                RCP, DEA y Primeros<br/>Auxilios
              </h3>
            </div>
            <Link href="/contacto" className="bg-[#fc0000] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-red-700 transition">
              Consultar
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white flex flex-col items-center">
        <h2 className="text-[34px] md:text-4xl font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-16 text-center">
          Envia tu Consulta
        </h2>
        <form className="w-full max-w-4xl px-6 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Contacto / Empresa" 
            className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input 
            type="text" 
            placeholder="Teléfono" 
            className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <input 
            type="text" 
            placeholder="Cantidad de Empleados" 
            className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <textarea 
            placeholder="Mensaje" 
            rows={5}
            className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500 resize-y"
          ></textarea>
          
          <div className="mt-4 text-left">
            <button 
              type="button" 
              className="bg-[#fc0000] text-white px-10 py-3 rounded-full font-bold text-base tracking-wide hover:bg-red-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
