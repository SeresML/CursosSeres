"use client";

import { useActionState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

// FormSubmit manda la consulta por mail sin servidor propio. La primera vez
// envía un mail de activación a DESTINO (nunca a la COPIA); hasta que no se
// confirma, no reenvía. FormSubmit activa por página de origen: con
// referrerPolicy "origin" todas las páginas del sitio cuentan como una sola.
const DESTINO = "gestionimpulsodigital@gmail.com";
const COPIA = "servicios@seressalud.com.ar";

type Estado = { ok: boolean; mensaje: string } | null;

async function enviarConsulta(_prev: Estado, formData: FormData): Promise<Estado> {
  const campo = (nombre: string) => String(formData.get(nombre) ?? "").trim();
  const contacto = campo("contacto");
  const telefono = campo("telefono");
  const email = campo("email");

  if (!contacto || (!telefono && !email)) {
    return { ok: false, mensaje: "Completá tu nombre o empresa y un teléfono o e-mail para poder contactarte." };
  }

  try {
    const respuesta = await fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
      method: "POST",
      referrerPolicy: "origin",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        "Contacto / Empresa": contacto,
        "Teléfono": telefono,
        email,
        "Cantidad de Empleados": campo("empleados"),
        "Mensaje": campo("mensaje"),
        "Página": campo("origen"),
        _subject: `Consulta Cursos Seres — ${contacto}`,
        _cc: COPIA,
        _template: "table",
        _captcha: "false",
        _honey: campo("web"),
      }),
    });
    const datos = await respuesta.json();
    if (!respuesta.ok || String(datos.success) !== "true") throw new Error(datos.message);
  } catch (error) {
    console.error("enviarConsulta: falló el envío", error);
    return { ok: false, mensaje: `No pudimos enviar tu consulta. Probá de nuevo o escribinos a ${COPIA}.` };
  }

  return { ok: true, mensaje: "¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad." };
}

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
