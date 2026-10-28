import Link from "next/link";

export default function Gracias() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] min-h-[210px] md:h-[32vh] md:min-h-[245px] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center opacity-70" />
        </div>

        <div className="relative z-20 text-center px-4 mt-2 md:mt-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e80000] tracking-widest uppercase"
            style={{ textShadow: "2px 2px 6px rgba(255,255,255,0.85), 0px 0px 12px rgba(255,255,255,0.6)" }}
          >
            ¡MUCHAS GRACIAS!
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-6 bg-white flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-300 p-5 md:p-7 max-w-xl w-full text-center flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-50 text-[#fc0000] flex items-center justify-center mb-3">
            <svg
              className="w-7 h-7 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            ¡Recibimos tu consulta!
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
            Muchas gracias por comunicarte con <strong>Seres Salud Cursos</strong>. A la brevedad nuestro equipo se va a poner en contacto con vos para brindarte toda la información.
          </p>

          <Link
            href="/"
            className="bg-[#fc0000] text-white px-8 py-2.5 rounded-full font-bold text-sm md:text-base tracking-wider uppercase hover:bg-red-700 transition shadow-md"
          >
            VOLVER AL INICIO
          </Link>
        </div>
      </section>
    </>
  );
}
