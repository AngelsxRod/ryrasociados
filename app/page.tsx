import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import MobileNav from "@/components/mobile-nav";
import ServicesList from "@/components/services-list";
import { contact } from "@/lib/contact";

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
    title: "Sistema ISC",
    lead: "Conectamos información administrativa y contable en un solo entorno.",
    tags: ["Ventas y facturación", "Contabilidad y planillas"],
    detail: "ISC, Investigación y Sistema de Control, integra módulos de ventas, contabilidad y planillas. Incluye funciones para inventario, bancos y otras áreas operativas, con acompañamiento en configuración y capacitación.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={"brand" + (light ? " brand-light" : "")} aria-label="R&R Asociados, ir al inicio">
      <span className="brand-monogram" aria-hidden="true">R<span>&</span>R</span>
      <span className="brand-name"><strong>R&R Asociados</strong><small>Contadores públicos</small></span>
    </a>
  );
}

export default function Home() {
  return (
    <div id="inicio" className="site-shell">
      <a href="#contenido" className="skip-link">Ir al contenido</a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a href="#contacto" className="header-contact">Conversemos <ArrowUpRight size={16} aria-hidden="true" /></a>
          <div className="mobile-menu"><MobileNav items={nav} /></div>
        </div>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Auditoría y contabilidad en Guatemala</p>
              <h1 id="hero-title">Ayudamos a construir empresas confiables.</h1>
              <p className="hero-lead">Información contable clara, procesos bien revisados y asesoría cercana para decidir con confianza.</p>
              <div className="hero-actions">
                <a href="#servicios" className="button button-primary">Conoce nuestros servicios <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href="#contacto" className="text-link">Habla con nosotros <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <a className="hero-scroll" href="#nosotros">Conoce la firma <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-panel" aria-label="Resumen de la firma">
              <div className="hero-panel-top">
                <p>En qué podemos ayudarte</p>
                <span>R&R</span>
              </div>
              <ul className="hero-service-list">
                <li>Auditoría administrativa</li>
                <li>Contabilidad fiscal</li>
                <li>Asesoría financiera y tributaria</li>
                <li>Sistema ISC</li>
              </ul>
              <div className="hero-proof"><strong>20<span>+</span></strong><p>años de experiencia con clientes de diversos sectores</p></div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="section about-section" aria-labelledby="about-title">
          <div className="container">
            <div className="section-intro about-intro">
              <div><p className="section-label">La firma</p><h2 id="about-title">Conocemos la operación detrás de cada cifra.</h2></div>
              <p>En R&R Asociados reunimos experiencia profesional y atención cercana para ayudar a las empresas a comprender sus números, fortalecer sus procesos y tomar decisiones con mayor confianza.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map(({ title, body }) => <article className="pillar" key={title}><h3>{title}</h3><p>{body}</p></article>)}
            </div>
          </div>
        </section>

        <section id="servicios" className="section services-section" aria-labelledby="services-title">
          <div className="container">
            <div className="section-intro">
              <div><p className="section-label">Servicios</p><h2 id="services-title">Trabajo claro para cada necesidad.</h2></div>
              <p>Auditoría, contabilidad, asesoría y herramientas para cuidar la información de tu empresa.</p>
            </div>
            <ServicesList services={services} />
          </div>
        </section>

        <section id="experiencia" className="section experience-section" aria-labelledby="experience-title">
          <div className="container experience-grid">
            <div><p className="section-label">Experiencia</p><h2 id="experience-title">Trayectoria aplicada a tu negocio.</h2><p className="experience-lead">Hemos acompañado a clientes de distintos sectores, comprendiendo sus operaciones y la importancia de contar con información confiable.</p></div>
            <div className="experience-evidence"><div className="experience-number"><strong>20<span>+</span></strong><p>años de trabajo con empresas</p></div><p className="sector-label">Sectores en los que hemos trabajado</p><ul><li>Sector eléctrico</li><li>Combustibles</li><li>Industria</li><li>Servicios</li></ul></div>
          </div>
        </section>

        <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-intro contact-intro"><div><p className="section-label">Contacto</p><h2 id="contact-title">Conversemos sobre tu empresa.</h2></div><p>Cuéntanos qué necesitas saber. Estamos disponibles para escuchar y orientarte.</p></div>
            <div className="contact-grid">
              <div className="contact-details"><h3>Estamos cerca.</h3><p>Puedes escribirnos directamente o visitar nuestras oficinas en Ciudad de Guatemala.</p><address>
                <a href={contact.phone.href}><Phone size={19} aria-hidden="true" /><span><small>Teléfono</small>{contact.phone.label}</span></a>
                <a href={`mailto:${contact.email}`}><Mail size={19} aria-hidden="true" /><span><small>Correo</small>{contact.email}</span></a>
                <div><MapPin size={19} aria-hidden="true" /><span><small>Ubicación</small>{contact.address.street}<br />{contact.address.city}</span></div>
              </address></div>
              <div className="contact-form-panel"><h3>Escríbenos</h3><p>Prepara un mensaje para enviarlo desde tu correo.</p><ContactForm /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand light /><p>Información clara, procesos sólidos y relaciones construidas sobre la confianza.</p></div><nav aria-label="Navegación del pie de página">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-contact"><a href={contact.phone.href}>{contact.phone.label}</a><a href={`mailto:${contact.email}`}>Enviar correo</a></div></div><div className="footer-bottom"><span>© R&R Asociados, S.A.</span><span>Guatemala, C. A.</span></div></div></footer>
    </div>
  );
}
