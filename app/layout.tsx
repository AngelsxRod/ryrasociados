import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "R&R Asociados | Auditoría, contabilidad y consultoría",
  description: "Acompañamos a empresas en Guatemala con auditoría, contabilidad, asesoría financiera y herramientas para organizar su información.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
