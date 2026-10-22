import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Brand from "@/components/brand";
import HeroCarousel from "@/components/hero-carousel";
import ServicesList from "@/components/services-list";
import SiteMotion from "@/components/site-motion";
import SiteHeader from "@/components/site-header";
import { contact } from "@/lib/contact";
import { siteDescription, siteUrl } from "@/lib/site";

const nav = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const pillars = [
  { title: "Visión integral", body: "Conectamos información contable, financiera y operativa para entender el negocio completo." },
  { title: "Experiencia sectorial", body: "Conocemos las dinámicas de empresas de distintos sectores en Guatemala y la región." },
  { title: "Acompañamiento cercano", body: "Trabajamos junto a cada equipo para entender sus retos y responder con criterio." },
  { title: "Procesos confiables", body: "Prestamos atención a los controles y a la calidad de la información que respalda cada decisión." },
];

const services = [
  {
    title: "Auditoría administrativa",
    lead: "Revisamos los procesos que sostienen la operación diaria.",
    tags: ["Controles", "Información de gestión"],
    detail: "Revisamos procesos contables y administrativos, incluyendo ingresos, inventario, cuentas por cobrar y por pagar, y conciliaciones bancarias. Identificamos oportunidades de mejora para fortalecer la información de gestión.",
  },
  {
    title: "Contabilidad fiscal",
    lead: "Organizamos los registros y la información necesaria para cumplir las obligaciones de la empresa.",
    tags: ["Libros contables e IVA", "Declaraciones"],
    detail: "Apoyamos el registro y la actualización de libros contables, libros de IVA e información auxiliar, así como la preparación de declaraciones e informes aplicables a cada operación.",
  },
  {
    title: "Asesoría financiera y tributaria",
    lead: "Aportamos criterio para comprender riesgos y tomar decisiones.",
    tags: ["Análisis financiero", "Orientación tributaria"],
    detail: "Acompañamos el análisis de información financiera, la revisión de riesgos y la mejora de procesos. También orientamos en temas tributarios y regulatorios vinculados con la actividad de la empresa.",
  },
  {
    title: "Sistema",
    lead: "Conectamos información administrativa y contable en un solo entorno.",
    tags: ["Ventas y facturación", "Contabilidad y planillas"],
    detail: "El sistema integra módulos de ventas, contabilidad y planillas. Incluye funciones para inventario, bancos y otras áreas operativas, con acompañamiento en configuración y capacitación.",
  },
];

const businessData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteUrl}/#business`,
  name: "R&R Asociados",
  url: siteUrl,
  description: siteDescription,
  telephone: "+50222966604",
  image: `${siteUrl}/hero/contabilidad.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: "Ciudad de Guatemala",
    addressCountry: "GT",
  },
  areaServed: { "@type": "Country", name: "Guatemala" },
};

export default function Home() {
  return (
    <div id="inicio" className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData).replace(/</g, "\\u003c") }} />
      <SiteMotion />
      <a href="#contenido" className="skip-link">Ir al contenido</a>
      <SiteHeader items={nav} />

      <main id="contenido">
        <section className="hero" aria-labelledby="hero-title">
          <HeroCarousel />
        </section>

        <section id="nosotros" className="section about-section" aria-labelledby="about-title">
          <div className="container">
            <div className="section-intro about-intro" data-reveal>
              <div><p className="section-label">La firma</p><h2 id="about-title">Conocemos la operación detrás de cada cifra.</h2></div>
              <p>En R&R Asociados reunimos experiencia profesional y atención cercana para ayudar a las empresas a comprender sus números, fortalecer sus procesos y tomar decisiones con mayor confianza.</p>
            </div>
            <div className="about-visual" data-reveal>
              {/* https://unsplash.com/photos/two-people-reviewing-documents-at-a-table-MhqUBTxQ3Hw */}
              <Image src="/sections/revision-en-equipo.webp" alt="Dos profesionales revisan documentos sobre una mesa de trabajo" fill sizes="(max-width: 760px) calc(100vw - 40px), 1200px" />
            </div>
            <div className="pillar-grid">
              {pillars.map(({ title, body }) => <article className="pillar" key={title} data-reveal><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="servicios" className="section services-section" aria-labelledby="services-title">
          <style>{`
            .services-editorial { display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, .78fr); align-items: end; gap: clamp(50px, 8vw, 115px); }
            .services-editorial-copy > p:last-child { max-width: 490px; margin-top: 24px; color: var(--brand-text); font-size: 16px; line-height: 1.8; }
            .services-editorial-photo { position: relative; height: clamp(220px, 24vw, 300px); overflow: hidden; background: var(--brand-line); }
            .services-editorial-photo img { object-fit: cover; object-position: center 58%; filter: saturate(.74); transition: transform 1s cubic-bezier(.2, .7, .2, 1), filter 1s ease; }
            .services-editorial-photo:hover img { transform: scale(1.035); filter: saturate(.95); }
            @media (max-width: 760px) { .services-editorial { grid-template-columns: 1fr; gap: 30px; } .services-editorial-photo { height: 240px; } }
            @media (prefers-reduced-motion: reduce) { .services-editorial-photo img { transition: none; } }
          `}</style>
          <div className="container">
            <div className="services-editorial">
              <div className="services-editorial-copy" data-reveal>
                <p className="section-label">Servicios</p>
                <h2 id="services-title">Trabajo claro para cada necesidad.</h2>
                <p>Auditoría, contabilidad, asesoría y herramientas para cuidar la información de tu empresa.</p>
              </div>
              <div className="services-editorial-photo" data-reveal>
                {/* https://unsplash.com/photos/a-person-is-writing-on-a-piece-of-paper-ykgLX_CwtDw */}
                <Image src="/sections/revision-financiera.avif" alt="Profesional revisando gráficas y reportes financieros" fill sizes="(max-width: 760px) calc(100vw - 40px), 470px" />
              </div>
            </div>
            <ServicesList services={services} />
          </div>
        </section>

        <section id="experiencia" className="section experience-section" aria-labelledby="experience-title">
          <style>{`
            .experience-section { position: relative; isolation: isolate; overflow: hidden; }
            .experience-atmosphere { position: absolute; z-index: 0; inset: 0; pointer-events: none; background-image: linear-gradient(90deg, rgba(19, 48, 47, .85), rgba(20, 48, 46, .76)), url('/sections/registros-contables.avif'); background-size: cover; background-position: center; background-attachment: fixed; }
            .experience-grid { position: relative; z-index: 1; }
            @media (max-width: 760px) { .experience-atmosphere { background-attachment: scroll; background-position: 63% center; } }
            @media (prefers-reduced-motion: reduce) { .experience-atmosphere { background-attachment: scroll; } }
          `}</style>
          {/* https://unsplash.com/photos/a-calculator-rests-on-old-financial-ledger-sheets-with-numbers-aPJZrW3kAuU */}
          <div className="experience-atmosphere" aria-hidden="true" />
          <div className="container experience-grid">
            <div className="experience-copy" data-reveal>
              <p className="section-label">Experiencia</p>
              <h2 id="experience-title">Trayectoria aplicada a tu negocio.</h2>
              <p className="experience-lead">Hemos acompañado a clientes de distintos sectores, comprendiendo sus operaciones y la importancia de contar con información confiable.</p>
            </div>
            <div className="experience-evidence" data-reveal>
              <div className="experience-number"><strong>20<span>+</span></strong><p>años de trabajo con empresas</p></div>
              <p className="sector-label">Sectores en los que hemos trabajado</p>
              <ul><li>Sector eléctrico</li><li>Combustibles</li><li>Industria</li><li>Servicios</li></ul>
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-intro contact-intro" data-reveal><div><p className="section-label">Contacto</p><h2 id="contact-title">Conversemos sobre tu empresa.</h2></div><p>Llámanos para conversar sobre lo que tu empresa necesita. Estamos disponibles para escuchar y orientarte.</p></div>
            <div className="contact-grid">
              <div className="contact-details" data-reveal><h3>Estamos cerca.</h3><p>Puedes llamarnos o visitar nuestras oficinas en Ciudad de Guatemala.</p><address>
                <a href={contact.phone.href}><Phone size={19} aria-hidden="true" /><span><small>Teléfono</small>{contact.phone.label}</span></a>
                <div><MapPin size={19} aria-hidden="true" /><span><small>Ubicación</small>{contact.address.street}<br />{contact.address.city}</span></div>
              </address></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand light /><p>Información clara, procesos sólidos y relaciones construidas sobre la confianza.</p></div><nav aria-label="Navegación del pie de página">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-contact"><a href={contact.phone.href}>{contact.phone.label}</a></div></div><div className="footer-bottom"><span>© R&R Asociados, S.A.</span><span className="publish-check">Prueba de publicación</span><span>Guatemala, C. A.</span></div></div></footer>
    </div>
  );
}
