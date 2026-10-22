import Link from "next/link";

export default function Brand({ light = false, href = "#inicio" }: { light?: boolean; href?: string }) {
  return (
    <Link href={href} className={"brand" + (light ? " brand-light" : "")} aria-label="R&R Asociados, ir al inicio">
      <span className="brand-monogram" aria-hidden="true">R<span>&</span>R</span>
      <span className="brand-name"><strong>R&R Asociados</strong><small>Contadores públicos</small></span>
    </Link>
  );
}
