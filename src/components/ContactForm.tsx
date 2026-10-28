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
        "Teléfono / Móvil": telefono,
        email,
        "Cantidad de Empleados": campo("empleados"),
        "Consulta / Mensaje": campo("mensaje"),
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

export default function ContactForm({ title = "Complete el formulario", hideTitle = false }: ContactFormProps = {}) {
  const pathname = usePathname();
  const [estado, formAction, enviando] = useActionState(enviarConsulta, null);

  // Evento para Google Tag Manager (conversión de Google Ads)
  useEffect(() => {
    if (estado?.ok) sendGTMEvent({ event: "formulario_enviado", pagina: pathname });
  }, [estado, pathname]);

  const inputClasses =
    "w-full border-2 border-gray-500 rounded-xl bg-[#fbfbfb] px-3.5 py-2 md:px-4 md:py-3 text-sm md:text-base font-medium text-gray-900 placeholder-gray-700 focus:outline-none focus:border-[#fc0000] transition-colors";

  const formElement = (
    <form action={formAction} className="w-full flex flex-col gap-2.5 md:gap-3.5">
      <input type="hidden" name="origen" value={pathname} />
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input
        type="text"
        name="contacto"
        placeholder="Contacto / Empresa"
        className={inputClasses}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono / Móvil"
        className={inputClasses}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className={inputClasses}
      />
      <input
        type="text"
        name="empleados"
        placeholder="Cantidad de Empleados"
        className={inputClasses}
      />
      <textarea
        name="mensaje"
        placeholder="Consulta / Mensaje"
        rows={3}
        className={`${inputClasses} resize-y`}
      ></textarea>

      <div className="mt-1 md:mt-3 text-center md:text-left">
        <button
          type="submit"
          disabled={enviando}
          className="bg-[#fc0000] text-white px-8 py-2.5 md:px-10 md:py-3 rounded-full font-bold text-sm md:text-base tracking-wider uppercase hover:bg-red-700 transition disabled:opacity-60"
        >
          {enviando ? "ENVIANDO..." : "ENVIAR"}
        </button>
        {estado && (
          <p className={`mt-3 text-sm md:text-base font-medium ${estado.ok ? "text-green-700" : "text-[#fc0000]"}`}>
            {estado.mensaje}
          </p>
        )}
      </div>
    </form>
  );

  if (hideTitle) {
    return <div className="w-full flex flex-col items-center">{formElement}</div>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-300 p-5 sm:p-7 md:p-10 w-full max-w-lg">
        <h2 className="text-xl md:text-3xl font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-4 md:mb-8 text-center">
          {title}
        </h2>
        {formElement}
      </div>
    </div>
  );
}
