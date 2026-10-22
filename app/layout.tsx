import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/NotoSans-Regular.ttf", weight: "400" },
    { path: "./fonts/NotoSans-Bold.ttf", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "./fonts/NotoSerif-Regular.ttf", weight: "400" },
    { path: "./fonts/NotoSerif-Bold.ttf", weight: "700" },
  ],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "R&R Asociados | Auditoría y contabilidad en Guatemala",
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "/",
    siteName: "R&R Asociados",
    title: "R&R Asociados | Auditoría y contabilidad en Guatemala",
    description: siteDescription,
    images: [{ url: "/hero/contabilidad.webp", width: 1200, height: 800, alt: "Documentos contables y calculadora sobre un escritorio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&R Asociados | Auditoría y contabilidad en Guatemala",
    description: siteDescription,
    images: ["/hero/contabilidad.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased ${sans.variable} ${serif.variable}`}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
