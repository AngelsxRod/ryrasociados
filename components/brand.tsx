export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={"brand" + (light ? " brand-light" : "")} aria-label="R&R Asociados, ir al inicio">
      <span className="brand-monogram" aria-hidden="true">R<span>&</span>R</span>
      <span className="brand-name"><strong>R&R Asociados</strong><small>Contadores públicos</small></span>
    </a>
  );
}
