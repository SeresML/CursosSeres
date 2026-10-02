"use client";

import { useActionState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import { enviarConsulta } from "@/app/actions";

interface ContactFormProps {
  title?: string;
  hideTitle?: boolean;
}

export default function ContactForm({ title = "Envia tu Consulta", hideTitle = false }: ContactFormProps = {}) {
  const pathname = usePathname();
  const [estado, formAction, enviando] = useActionState(enviarConsulta, null);

  // Evento para Google Tag Manager (conversión de Google Ads)
  useEffect(() => {
    if (estado?.ok) sendGTMEvent({ event: "formulario_enviado", pagina: pathname });
  }, [estado, pathname]);

  return (
    <div className="w-full flex flex-col items-center">
      {!hideTitle && (
        <h2 className="text-[34px] md:text-4xl font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-16 text-center">
          {title}
        </h2>
      )}
      <form action={formAction} className="w-full max-w-4xl flex flex-col gap-4">
        <input type="hidden" name="origen" value={pathname} />
        <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <input
          type="text"
          name="contacto"
          placeholder="Contacto / Empresa"
          className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <input
          type="text"
          name="empleados"
          placeholder="Cantidad de Empleados"
          className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={5}
          className="w-full border border-gray-400 bg-[#fbfbfb] p-4 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-red-500 resize-y"
        ></textarea>

        <div className="mt-4 text-left">
          <button
            type="submit"
            disabled={enviando}
            className="bg-[#fc0000] text-white px-10 py-3 rounded-full font-bold text-base tracking-wide hover:bg-red-700 transition disabled:opacity-60"
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>
          {estado && (
            <p className={`mt-4 text-base ${estado.ok ? "text-green-700" : "text-[#fc0000]"}`}>{estado.mensaje}</p>
          )}
        </div>
      </form>
    </div>
  );
}
