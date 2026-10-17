"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildContactMailto } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "min-h-12 w-full rounded-none border-[#cbd5cf] bg-[#f6f7f3] px-3.5 py-3 text-sm text-[#1b3038] placeholder:text-[#72817f] focus-visible:border-[#697322] focus-visible:ring-[#697322]/25";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mailto = buildContactMailto({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    if (mailto) window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field><FieldLabel htmlFor="contact-name" className="text-[13px] font-bold">Nombre</FieldLabel><Input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Tu nombre" className={fieldClass} /></Field>
        <Field><FieldLabel htmlFor="contact-email" className="text-[13px] font-bold">Correo</FieldLabel><Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="tu@correo.com" className={fieldClass} /></Field>
      </div>
      <Field><FieldLabel htmlFor="contact-message" className="text-[13px] font-bold">Mensaje</FieldLabel><Textarea id="contact-message" name="message" required maxLength={3000} rows={5} placeholder="Cuéntanos cómo podemos ayudarte" className={fieldClass + " min-h-36 resize-y"} /></Field>
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-64 text-xs leading-5 text-[#52636b]">Al continuar, se abrirá tu aplicación de correo con el mensaje preparado.</p>
        <Button type="submit" size="lg" className="button button-primary h-auto min-h-[52px] shrink-0 cursor-pointer rounded-none border-0">Abrir correo <ArrowUpRight size={17} aria-hidden="true" /></Button>
      </div>
    </form>
  );
}
