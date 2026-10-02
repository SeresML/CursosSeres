"use server";

import nodemailer from "nodemailer";

const DESTINATARIOS = ["servicios@seressalud.com.ar", "gestionimpulsodigital@gmail.com"];

export type EstadoConsulta = { ok: boolean; mensaje: string } | null;

function escapar(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function enviarConsulta(_prev: EstadoConsulta, formData: FormData): Promise<EstadoConsulta> {
  const campo = (nombre: string) => String(formData.get(nombre) ?? "").trim().slice(0, 5000);

  // Honeypot: los bots completan el campo oculto, las personas no.
  if (campo("web")) {
    return { ok: true, mensaje: "¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad." };
  }

  const datos = {
    contacto: campo("contacto"),
    telefono: campo("telefono"),
    email: campo("email"),
    empleados: campo("empleados"),
    mensaje: campo("mensaje"),
    origen: campo("origen"),
  };

  if (!datos.contacto || (!datos.telefono && !datos.email)) {
    return { ok: false, mensaje: "Completá tu nombre o empresa y un teléfono o e-mail para poder contactarte." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("enviarConsulta: faltan las variables SMTP_HOST / SMTP_USER / SMTP_PASS");
    return { ok: false, mensaje: "No pudimos enviar tu consulta. Escribinos a servicios@seressalud.com.ar." };
  }

  const puerto = Number(SMTP_PORT || 587);
  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: puerto,
    secure: puerto === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const filas: [string, string][] = [
    ["Contacto / Empresa", datos.contacto],
    ["Teléfono", datos.telefono],
    ["E-mail", datos.email],
    ["Cantidad de Empleados", datos.empleados],
    ["Mensaje", datos.mensaje],
    ["Página", datos.origen],
  ];

  try {
    await transporte.sendMail({
      from: SMTP_FROM || "Cursos Seres <servicios@seressalud.com.ar>",
      to: DESTINATARIOS,
      replyTo: datos.email || undefined,
      subject: `Consulta Cursos Seres — ${datos.contacto}`,
      text: filas.map(([etiqueta, valor]) => `${etiqueta}: ${valor || "-"}`).join("\n"),
      html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${filas
        .map(
          ([etiqueta, valor]) =>
            `<tr><td style="font-weight:bold;vertical-align:top">${etiqueta}</td><td style="white-space:pre-wrap">${escapar(valor || "-")}</td></tr>`,
        )
        .join("")}</table>`,
    });
  } catch (error) {
    console.error("enviarConsulta: falló el envío", error);
    return { ok: false, mensaje: "No pudimos enviar tu consulta. Probá de nuevo o escribinos a servicios@seressalud.com.ar." };
  }

  return { ok: true, mensaje: "¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad." };
}
