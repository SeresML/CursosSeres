import Link from "next/link";

export default function Gracias() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[18vh] min-h-[135px] md:h-[22vh] md:min-h-[165px] flex items-center justify-center overflow-hidden pt-12 md:pt-10">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center opacity-70" />
        </div>

        <div className="relative z-20 text-center px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e80000] tracking-widest uppercase"
            style={{ textShadow: "2px 2px 6px rgba(255,255,255,0.85), 0px 0px 12px rgba(255,255,255,0.6)" }}
          >
            ¡MUCHAS GRACIAS!
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-300 p-8 md:p-12 max-w-xl w-full text-center flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-50 text-[#fc0000] flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¡Recibimos tu consulta!
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Muchas gracias por comunicarte con <strong>Seres Salud Cursos</strong>. A la brevedad nuestro equipo se va a poner en contacto con vos para brindarte toda la información.
          </p>

          <Link
            href="/"
            className="bg-[#fc0000] text-white px-8 py-3 rounded-full font-bold text-sm md:text-base tracking-wider uppercase hover:bg-red-700 transition shadow-md"
          >
            VOLVER AL INICIO
          </Link>
        </div>
      </section>
    </>
  );
}
