export const contact = {
  phone: {
    label: "(502) 2296-6604",
    href: "tel:+50222966604",
  },
  email: "roquelino.reyes@ryrasociados.com.gt",
  address: {
    street: "5ta. Calle 0-40, Zona 01",
    city: "Guatemala, Guatemala",
  },
} as const;

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export function buildContactMailto(fields: ContactMessage): string | null {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  if (!name || !email || !message) return null;

  const subject = encodeURIComponent("Mensaje desde el sitio web de R&R Asociados: " + name);
  const body = encodeURIComponent("Nombre: " + name + "\nCorreo: " + email + "\n\nMensaje:\n" + message);
  return "mailto:" + contact.email + "?subject=" + subject + "&body=" + body;
}
