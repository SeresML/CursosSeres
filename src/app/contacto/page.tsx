import Link from "next/link";

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image - placeholder using the home bg until a specific one is provided */}
        <div className="absolute inset-0 z-0 bg-white">
          <div className="w-full h-full bg-[url('/blog-dea.jpg')] bg-cover bg-center opacity-60" />
        </div>

        <div className="relative z-20 text-center px-4">
          <h1 
            className="text-6xl md:text-8xl font-bold text-[#e80000] tracking-widest uppercase"
            style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}
          >
            CONTACTO
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Form */}
          <div className="flex flex-col items-center">
            <h2 className="text-[34px] md:text-[36px] font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-10 text-center">
              Envia tu Consulta
            </h2>
            <form className="w-full flex flex-col gap-4">
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
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-center md:items-start pt-4 md:pt-0">
            <h2 className="text-[34px] md:text-[36px] font-bold text-[#fc0000] mb-12 text-center md:text-left w-full">
              Habla con Nosotros
            </h2>
            
            <div className="flex flex-col gap-6 w-full max-w-sm pl-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-[#fc0000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href="mailto:servicios@seressalud.com.ar" className="text-xl text-gray-900 underline decoration-1 underline-offset-4 hover:text-[#fc0000] transition">
                  servicios@seressalud.com.ar
                </a>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="text-[#fc0000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </div>
                <a href="tel:1130170130" className="text-xl text-gray-900 underline decoration-1 underline-offset-4 hover:text-[#fc0000] transition">
                  11-3017-0130
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-[#fc0000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a href="tel:42221597" className="text-xl text-gray-900 underline decoration-1 underline-offset-4 hover:text-[#fc0000] transition">
                  4222-1597
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
