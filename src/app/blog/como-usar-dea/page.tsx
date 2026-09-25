import Link from "next/link";

export default function ComoUsarDea() {
  return (
    <>
      {/* Article Header */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="w-full h-full bg-[url('/blog-dea.jpg')] bg-cover bg-center opacity-60" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-12">
          <span className="text-[#fc0000] font-bold tracking-wider uppercase mb-4 block text-lg drop-shadow-md">Desfibrilador</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            ¿Como usar un DEA?
          </h1>
          <p className="text-xl text-gray-100 mb-8 font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
            Conoce el paso a paso para utilizar un Desfibrilador Externo Automático de forma segura, incluso sin ser un profesional médico.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-red">
          <p className="text-gray-800 leading-relaxed mb-6">
            Un <strong>Desfibrilador Externo Automático (DEA)</strong> es un dispositivo electrónico portátil que diagnostica y puede ayudar a restablecer el ritmo cardíaco de una persona que está sufriendo un paro cardíaco súbito causado por fibrilación ventricular.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No tengas miedo de usarlo</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Los DEA están diseñados específicamente para ser utilizados por público en general. Una vez encendido, el dispositivo proporcionará instrucciones de voz paso a paso, indicándote exactamente qué hacer. El equipo analiza el ritmo cardíaco y <strong>solo administrará una descarga si es estrictamente necesario</strong>, por lo que es imposible que lastimes a alguien por error.
          </p>
          <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#fc0000] my-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instrucciones de Uso General</h3>
            <ol className="list-decimal pl-5 text-gray-800 space-y-2">
              <li>Enciende el DEA apenas lo tengas disponible.</li>
              <li>Descubre el pecho de la víctima y sécalo si está mojado.</li>
              <li>Coloca los parches adhesivos exactamente como se indica en los dibujos de los mismos.</li>
              <li>Aléjate de la víctima mientras el equipo analiza el ritmo.</li>
              <li>Si el equipo lo indica, presiona el botón de descarga. Luego continúa inmediatamente con la RCP.</li>
            </ol>
          </div>
          <p className="text-gray-800 leading-relaxed">
            Contar con un DEA en tu lugar de trabajo y saber utilizarlo convierte tu espacio en una zona cardioprotegida.
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
