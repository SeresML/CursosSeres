import Link from "next/link";

export default function QueEsRcp() {
  return (
    <>
      {/* Article Header */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/blog-rcp.jpg')] bg-cover bg-center opacity-60" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-12">
          <span className="text-[#fc0000] font-bold tracking-wider uppercase mb-4 block text-lg drop-shadow-md">RCP</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            ¿Qué es RCP y para qué sirve?
          </h1>
          <p className="text-xl text-gray-100 mb-8 font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
            Descubre en qué consiste la Reanimación Cardiopulmonar y cómo esta técnica básica puede marcar la diferencia entre la vida y la muerte en una emergencia.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-red">
          <p className="text-gray-800 leading-relaxed mb-6">
            La <strong>Reanimación Cardiopulmonar (RCP)</strong> es una maniobra de emergencia que consiste en aplicar presión rítmica sobre el pecho de una persona que ha sufrido un paro cardiorrespiratorio para que el oxígeno pueda seguir llegando a sus órganos vitales.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">¿Por qué es vital aprenderla?</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            El daño cerebral irreversible comienza apenas unos minutos después de que el corazón se detiene. Iniciar RCP inmediatamente puede duplicar o triplicar las posibilidades de supervivencia de una persona luego de un paro cardíaco. No se requiere ser un profesional médico para aprenderla y aplicarla de forma efectiva.
          </p>
          <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#fc0000] my-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Paso a Paso Básico</h3>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li>Verifica que la escena sea segura.</li>
              <li>Comprueba si la persona responde o respira.</li>
              <li>Llama al servicio de emergencias inmediatamente.</li>
              <li>Inicia las compresiones torácicas fuertes y rápidas en el centro del pecho.</li>
            </ul>
          </div>
          <p className="text-gray-800 leading-relaxed">
            En nuestros cursos presenciales e in-company, practicamos con simuladores avanzados para que pierdas el miedo a actuar en una situación real.
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
