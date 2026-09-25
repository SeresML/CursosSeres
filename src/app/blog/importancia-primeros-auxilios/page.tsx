import Link from "next/link";

export default function PrimerosAuxilios() {
  return (
    <>
      {/* Article Header */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/blog-primeros-auxilios.jpg')] bg-cover bg-center opacity-60" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-12">
          <span className="text-[#fc0000] font-bold tracking-wider uppercase mb-4 block text-lg drop-shadow-md">Prevención</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            Importancia de los Primeros Auxilios
          </h1>
          <p className="text-xl text-gray-100 mb-8 font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
            Aprender primeros auxilios no solo te prepara para accidentes laborales, sino que te convierte en un eslabón vital para tu comunidad.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-red">
          <p className="text-gray-800 leading-relaxed mb-6">
            Los <strong>Primeros Auxilios</strong> son la asistencia inmediata y temporal que se le brinda a una persona que ha sufrido un accidente o una enfermedad repentina, antes de que llegue el personal médico cualificado.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Más que curar, es proteger</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            El objetivo principal de los primeros auxilios no es aplicar un tratamiento médico definitivo, sino aliviar el dolor, evitar que la situación de la víctima empeore y, en casos extremos, mantener a la persona con vida hasta que lleguen los profesionales. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-[#f9f9f9] p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Heridas y Hemorragias</h3>
              <p className="text-gray-700 text-sm">Saber cómo limpiar correctamente una herida y aplicar presión directa para detener un sangrado puede prevenir infecciones y shock hipovolémico.</p>
            </div>
            <div className="bg-[#f9f9f9] p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quemaduras</h3>
              <p className="text-gray-700 text-sm">El enfriamiento rápido y adecuado de una quemadura con agua corriente reduce el daño a los tejidos profundos y alivia el dolor.</p>
            </div>
          </div>
          <p className="text-gray-800 leading-relaxed">
            Nuestros cursos de Primeros Auxilios In-Company están diseñados para dotar a tu equipo de herramientas prácticas y teóricas fundamentales para manejar emergencias comunes en el día a día con total seguridad.
          </p>
        </div>
        
        {/* Back Link */}
        <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 text-center">
          <Link href="/blog" className="text-[#fc0000] font-bold hover:text-red-800 transition-colors">
            &larr; Volver al Blog
          </Link>
        </div>
      </article>
    </>
  );
}
