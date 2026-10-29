import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[18vh] min-h-[135px] md:h-[32vh] md:min-h-[240px] flex items-center justify-center overflow-hidden pt-12 md:pt-28 pb-4 md:pb-10">
        {/* Background Image - placeholder using the home bg until a specific one is provided */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/blog-dea.jpg')] bg-cover bg-center opacity-65" />
        </div>

        <div className="relative z-20 text-center px-3 sm:px-4 mt-1 md:mt-6">
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#e60000] tracking-widest uppercase"
            style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.9), -0.5px -0.5px 0px rgba(255,255,255,0.8)' }}
          >
            CONTACTO
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-3 md:py-6 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
          
          {/* Left Column: Form */}
          <div className="flex flex-col items-center w-full">
            <ContactForm />
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fc0000] mb-8 whitespace-nowrap uppercase">
                CONTÁCTANOS
              </h2>
              
              <div className="flex flex-col gap-6 w-full">
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
                  <a href="https://wa.me/5491130170130?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-900 underline decoration-1 underline-offset-4 hover:text-[#fc0000] transition">
                    11-3017-0130
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
