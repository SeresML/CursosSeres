"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

// FormSubmit manda la consulta por mail sin servidor propio. La primera vez
// envía un mail de activación a DESTINO (nunca a la COPIA); hasta que no se
// confirma, no reenvía. FormSubmit activa por página de origen: con
// referrerPolicy "origin" todas las páginas del sitio cuentan como una sola.
const DESTINO = "gestionimpulsodigital@gmail.com";
const COPIA = "servicios@seressalud.com.ar";

interface ContactFormProps {
  title?: string;
  hideTitle?: boolean;
}

export default function ContactForm({ title = "Complete el Formulario", hideTitle = false }: ContactFormProps = {}) {
  const pathname = usePathname();
  const [enviando, setEnviando] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const campo = (nombre: string) => String(formData.get(nombre) ?? "").trim();
    const contacto = campo("contacto");
    const telefono = campo("telefono");
    const email = campo("email");

    if (!contacto || (!telefono && !email)) {
      setErrorMensaje("Completá tu nombre o empresa y un teléfono o e-mail para poder contactarte.");
      return;
    }

    setErrorMensaje(null);
    setEnviando(true);

    const peticion = fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
      method: "POST",
      keepalive: true,
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
    }).catch((error) => {
      console.error("enviarConsulta: falló el envío", error);
    });

    // Esperamos hasta 1.5s para dar tiempo al envío sin bloquear al usuario si el servidor SMTP demora,
    // mientras keepalive: true garantiza que el navegador complete la petición en segundo plano.
    await Promise.race([
      peticion,
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);

    try {
      sendGTMEvent({ event: "formulario_enviado", pagina: pathname });
    } catch {
      // Ignorar si GTM no está cargado
    }

    window.location.href = "/gracias";
  }

  const inputClasses =
    "w-full border sm:border-2 border-gray-500 rounded-xl bg-[#fbfbfb] px-3 py-1 sm:py-1.5 md:py-2 text-sm md:text-base font-medium text-gray-900 placeholder-gray-700 focus:outline-none focus:border-[#fc0000] transition-colors";

  const formElement = (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1.5 sm:gap-2">
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
        rows={2}
        className={`${inputClasses} resize-y`}
      ></textarea>

      <div className="mt-1 text-center md:text-left">
        <button
          type="submit"
          disabled={enviando}
          className="bg-[#fc0000] text-white px-8 py-2 rounded-full font-bold text-sm md:text-base tracking-wider uppercase hover:bg-red-700 transition disabled:opacity-60"
        >
          {enviando ? "ENVIANDO..." : "ENVIAR"}
        </button>
        {errorMensaje && (
          <p className="mt-2 text-sm font-medium text-[#fc0000]">
            {errorMensaje}
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
      <div className="bg-white rounded-2xl shadow-xl border sm:border-2 border-gray-300 p-3 sm:p-5 md:p-6 w-full max-w-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fc0000] underline decoration-2 underline-offset-4 mb-2 sm:mb-3 text-center">
          {title}
        </h2>
        {formElement}
      </div>
    </div>
  );
}
