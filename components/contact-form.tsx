"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "min-h-12 w-full rounded-none border-[#cbd5cf] bg-[#f6f7f3] px-3.5 py-3 text-sm text-[#1b3038] placeholder:text-[#52636b] focus-visible:border-[#697322] focus-visible:ring-[#697322]/25";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Escribe tu nombre.").max(120, "El nombre es demasiado largo."),
  email: z.string().trim().min(1, "Escribe tu correo.").email("Escribe un correo válido.").max(254, "El correo es demasiado largo."),
  message: z.string().trim().min(1, "Escribe tu mensaje.").max(3000, "El mensaje es demasiado largo."),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [token, setToken] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<"pending" | "expired" | "error">("pending");
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", message: "" },
  });

  return (
    <form onSubmit={(event) => event.preventDefault()} className="contact-form grid gap-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-name" className="text-[13px] font-bold">Nombre</FieldLabel>
              <Input {...field} id="contact-name" type="text" autoComplete="name" required maxLength={120} placeholder="Tu nombre" aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? "contact-name-error" : undefined} className={fieldClass} />
              <div className="min-h-5">{fieldState.invalid && <FieldError id="contact-name-error" errors={[fieldState.error]} />}</div>
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-email" className="text-[13px] font-bold">Correo</FieldLabel>
              <Input {...field} id="contact-email" type="email" autoComplete="email" required maxLength={254} placeholder="tu@correo.com" aria-invalid={fieldState.invalid} aria-describedby={fieldState.invalid ? "contact-email-error" : undefined} className={fieldClass} />
              <div className="min-h-5">{fieldState.invalid && <FieldError id="contact-email-error" errors={[fieldState.error]} />}</div>
            </Field>
          )}
        />
      </div>
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="contact-message" className="text-[13px] font-bold">Mensaje</FieldLabel>
            <Textarea
              {...field}
              id="contact-message"
              required
              maxLength={3000}
              rows={5}
              placeholder="Cuéntanos cómo podemos ayudarte"
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.invalid ? "contact-message-error" : undefined}
              className={fieldClass}
              style={{ fieldSizing: "fixed", height: 144, minHeight: 144, maxHeight: 144, overflowY: "auto", resize: "none" }}
            />
            <div className="min-h-5">{fieldState.invalid && <FieldError id="contact-message-error" errors={[fieldState.error]} />}</div>
          </Field>
        )}
      />
      {siteKey && (
        <div>
          <Turnstile
            siteKey={siteKey}
            options={{ action: "contact", language: "es", theme: "light", size: "flexible" }}
            onSuccess={(response) => {
              setToken(response);
              setVerificationStatus("pending");
            }}
            onExpire={() => {
              setToken(null);
              setVerificationStatus("expired");
            }}
            onError={() => {
              setToken(null);
              setVerificationStatus("error");
            }}
            onTimeout={() => {
              setToken(null);
              setVerificationStatus("expired");
            }}
          />
          <p role="status" aria-live="polite" className="mt-3 text-xs leading-5 text-[#52636b]">
            {token
              ? "Verificación completada."
              : verificationStatus === "expired"
                ? "La verificación venció. Inténtalo de nuevo."
                : verificationStatus === "error"
                  ? "No se pudo completar la verificación. Inténtalo de nuevo."
                  : "Completa la verificación para continuar."}
          </p>
        </div>
      )}
    </form>
  );
}
