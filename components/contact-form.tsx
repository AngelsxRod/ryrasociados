"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const recipient = "roquelino.reyes@ryrasociados.com.gt";
const fieldClass = "mt-2 w-full rounded-xl border border-[#dbe2de] bg-[#fafbf9] px-4 py-3.5 text-sm text-[#172b3c] outline-none transition-colors placeholder:text-[#a0aaa7] focus:border-[#729487] focus:ring-2 focus:ring-[#729487]/15";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent("Mensaje desde el sitio web de R&R Asociados: " + name);
    const body = encodeURIComponent("Nombre: " + name + "\nCorreo: " + email + "\n\nMensaje:\n" + message);
    window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="contact-name" className="text-sm font-semibold text-[#2b404b]">Nombre</label><input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Tu nombre" className={fieldClass} /></div>
        <div><label htmlFor="contact-email" className="text-sm font-semibold text-[#2b404b]">Correo</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="tu@correo.com" className={fieldClass} /></div>
      </div>
      <div><label htmlFor="contact-message" className="text-sm font-semibold text-[#2b404b]">Mensaje general</label><textarea id="contact-message" name="message" required maxLength={3000} rows={5} placeholder="Cuéntanos cómo podemos ayudarte" className={fieldClass + " resize-y"} /></div>
      <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="max-w-xs text-xs leading-5 text-[#81908b]">Al continuar, se abrirá tu aplicación de correo con el mensaje preparado.</p>
        <button type="submit" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#172b3c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2b485e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#729487]">Abrir correo <ArrowUpRight size={17} aria-hidden="true" /></button>
      </div>
    </form>
  );
}
