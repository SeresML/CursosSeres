interface ContactFormProps {
  title?: string;
  hideTitle?: boolean;
}

export default function ContactForm({ title = "Envia tu Consulta", hideTitle = false }: ContactFormProps = {}) {
  return (
    <div className="w-full flex flex-col items-center">
      {!hideTitle && (
        <h2 className="text-[34px] md:text-4xl font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-16 text-center">
          {title}
        </h2>
      )}
      <form className="w-full max-w-4xl flex flex-col gap-4">
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
  );
}
