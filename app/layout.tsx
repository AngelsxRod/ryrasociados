import type { Metadata } from "next";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "R&R Asociados | Auditoría, contabilidad y consultoría",
  description: "Acompañamos a empresas en Guatemala con auditoría, contabilidad, asesoría financiera y herramientas para organizar su información.",
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
