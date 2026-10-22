import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brand from "@/components/brand";

export const metadata: Metadata = {
  title: "Página no encontrada | R&R Asociados",
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <header className="not-found-header container">
        <Brand href="/" />
        <Link href="/" className="not-found-header-link">
          Ir al inicio <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </header>

      <main className="not-found-main container">
        <div className="not-found-number" aria-hidden="true">404</div>
        <div className="not-found-content">
          <p className="not-found-label">Página no encontrada</p>
          <h1>No encontramos esta página.</h1>
          <p className="not-found-description">
            Es posible que la dirección haya cambiado o contenga un error.
            Puedes volver al inicio o explorar nuestros servicios.
          </p>
          <div className="not-found-actions">
            <Link className="not-found-primary" href="/">
              Volver al inicio <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="not-found-secondary" href="/#servicios">Ver servicios</Link>
          </div>
        </div>
      </main>

      <footer className="not-found-footer">
        <div className="container">
          <span>R&R Asociados, S.A.</span>
          <span>Auditoría y contabilidad en Guatemala</span>
        </div>
      </footer>
    </div>
  );
}
