import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BookOpenCheck,
  Building2, Check, ChevronDown, FileCheck2, Landmark, Mail,
  MapPin, PanelsTopLeft, Phone, ShieldCheck, TrendingUp, UsersRound,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "@/components/contact-form";

const nav = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const pillars: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Visión integral", body: "Conectamos información contable, financiera y operativa para ver el negocio con mayor claridad.", icon: PanelsTopLeft },
  { title: "Experiencia sectorial", body: "Conocemos las dinámicas de empresas de distintos sectores en Guatemala y la región.", icon: Building2 },
  { title: "Acompañamiento cercano", body: "Trabajamos junto a cada equipo para entender sus retos y responder con criterio profesional.", icon: UsersRound },
  { title: "Procesos confiables", body: "Ponemos atención en los controles y en la calidad de la información que respalda cada decisión.", icon: ShieldCheck },
];

const services: {
  title: string; lead: string; tags: string[]; detail: string;
  icon: LucideIcon; color: string; ink: string;
}[] = [
  {
    title: "Auditoría administrativa",
    lead: "Una mirada rigurosa a los procesos que sostienen la operación diaria.",
    tags: ["Revisión de controles", "Información clave"],
    detail: "Revisamos procesos contables y administrativos, incluyendo ingresos, inventario, cuentas por cobrar y por pagar, y conciliaciones bancarias. Buscamos oportunidades de mejora para fortalecer la información de gestión.",
    icon: FileCheck2, color: "bg-[#dfe9e8]", ink: "text-[#3c7776]",
  },
  {
    title: "Contabilidad fiscal",
    lead: "Registros organizados para atender las obligaciones de la empresa.",
    tags: ["Libros contables e IVA", "Declaraciones e informes"],
    detail: "Apoyamos el registro y la actualización de libros contables, libros de IVA e información auxiliar, así como la preparación de declaraciones e informes aplicables a cada operación.",
    icon: BookOpenCheck, color: "bg-[#eae4dc]", ink: "text-[#947452]",
  },
  {
    title: "Asesoría financiera y tributaria",
    lead: "Criterio especializado para comprender riesgos y tomar mejores decisiones.",
    tags: ["Análisis financiero", "Orientación tributaria"],
    detail: "Acompañamos el análisis de información financiera, la revisión de riesgos y la mejora de procesos. También orientamos en temas tributarios y regulatorios vinculados con la actividad de la empresa.",
    icon: TrendingUp, color: "bg-[#e2e7ee]", ink: "text-[#647b9b]",
  },
  {
    title: "Sistema ISC",
    lead: "Información administrativa y contable conectada en un solo entorno.",
    tags: ["Ventas y facturación", "Contabilidad y planillas"],
    detail: "ISC, Investigación y Sistema de Control, integra módulos de ventas, contabilidad y planillas. Incluye funciones para inventario, bancos y otras áreas operativas, con acompañamiento en configuración y capacitación.",
    icon: BarChart3, color: "bg-[#e9e8dc]", ink: "text-[#858e58]",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" aria-label="R&R Asociados, ir al inicio" className="inline-flex items-center gap-3">
      <span className={"flex size-11 items-center justify-center rounded-xl border font-display text-lg font-bold tracking-[-0.09em] " + (light ? "border-white/25 bg-white/10 text-white" : "border-[#d8dcd9] bg-white text-[#172b3c]")}>
        R<span className="text-[#cba979]">&</span>R
      </span>
      <span className="flex flex-col leading-none">
        <strong className={"text-[15px] tracking-[0.02em] " + (light ? "text-white" : "text-[#172b3c]")}>R&R ASOCIADOS</strong>
        <span className={"mt-1 text-[9px] font-semibold tracking-[0.2em] " + (light ? "text-white/60" : "text-[#7b858c]")}>EMPRESAS CONFIABLES</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div id="inicio" className="min-h-screen overflow-x-hidden bg-[#f7f7f3] text-[#172b3c]">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:p-3">Ir al contenido</a>
      <header className="relative z-10 border-b border-[#e8e9e4] bg-[#f7f7f3]">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Brand />
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => <a key={item.href} href={item.href} className="text-[13px] font-semibold text-[#53616b] hover:text-[#172b3c]">{item.label}</a>)}
          </nav>
          <a href="#contacto" className="hidden items-center gap-2 rounded-full bg-[#172b3c] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#2b485e] sm:inline-flex">Escríbenos <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href="#servicios" className="inline-flex items-center gap-1 text-sm font-semibold sm:hidden">Servicios <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </header>

      <main id="contenido">
        <section aria-labelledby="hero-title" className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-12 lg:pb-28 lg:pt-24">
            <div>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9dfdc] bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4c6968]"><span className="size-1.5 rounded-full bg-[#8caa94]" />Auditoría · Contabilidad · Consultoría</p>
              <h1 id="hero-title" className="font-display text-[clamp(3.4rem,6vw,6.15rem)] font-medium leading-[1.01] tracking-[-0.065em]">Información clara para construir <em className="font-normal text-[#78928d]">empresas confiables.</em></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#687782] sm:text-lg">Acompañamos a empresas en Guatemala con auditoría, contabilidad, asesoría financiera y herramientas para organizar su información.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#servicios" className="inline-flex min-h-13 items-center gap-2 rounded-full bg-[#172b3c] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#2b485e]">Explorar servicios <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href="#contacto" className="inline-flex min-h-13 items-center gap-2 rounded-full border border-[#cdd4d1] px-6 py-3.5 text-sm font-semibold hover:bg-white">Escríbenos <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <a href="#nosotros" className="mt-14 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#78858b] hover:text-[#172b3c]">Conoce la firma <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
            <div className="relative lg:pl-4">
              <div className="relative aspect-[1.15] overflow-hidden rounded-[2rem] bg-[#d2d8d5] shadow-[0_26px_60px_-30px_rgba(23,43,60,0.35)] sm:aspect-[1.25] lg:aspect-[0.97]">
                <Image src="/ryr-equipo.png" alt="Imagen ilustrativa de profesionales colaborando alrededor de una mesa" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#102634]/75 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 text-white">
                  <p className="max-w-64 border-l-2 border-[#d8ba90] pl-4 text-sm font-medium leading-6 sm:text-base">Criterio profesional para cada etapa de tu empresa.</p>
                  <span className="rounded-full border border-white/40 bg-white/15 p-3 backdrop-blur-sm"><ArrowUpRight size={19} aria-hidden="true" /></span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-[#e7e8e4] bg-white px-5 py-4 shadow-xl shadow-[#23384a]/10 sm:flex">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#e7efea] text-[#598171]"><ShieldCheck size={21} aria-hidden="true" /></span>
                <span className="text-xs font-semibold leading-5 text-[#52626b]">Relaciones basadas<br /><strong className="text-[#172b3c]">en confianza</strong></span>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" aria-labelledby="about-title" className="scroll-mt-20 border-y border-[#e7e9e5] bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
              <div><p className="section-kicker">01 / SOBRE NOSOTROS</p><h2 id="about-title" className="mt-5 max-w-sm font-display text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">La confianza se construye con claridad.</h2></div>
              <p className="self-end text-xl leading-9 text-[#52636e] sm:text-[1.4rem] sm:leading-10">En R&R Asociados reunimos experiencia profesional y una atención cercana para ayudar a las empresas a comprender sus números, fortalecer sus procesos y tomar decisiones con mayor confianza.</p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(({ title, body, icon: Icon }, index) => (
                <article key={title} className="rounded-[1.4rem] border border-[#e6eae7] bg-[#fafbf9] p-6">
                  <div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-xl bg-[#e7efea] text-[#4f7870]"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span><span className="text-xs font-semibold text-[#a3ada9]">0{index + 1}</span></div>
                  <h3 className="mt-7 text-lg font-semibold tracking-[-0.02em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6b797e]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" aria-labelledby="services-title" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="section-kicker">02 / LO QUE HACEMOS</p><h2 id="services-title" className="mt-5 max-w-xl font-display text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">Servicios que aportan perspectiva.</h2></div>
              <p className="max-w-sm text-sm leading-7 text-[#687782]">Una oferta conectada para cuidar la calidad de la información y acompañar el desarrollo de tu empresa.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map(({ title, lead, tags, detail, icon: Icon, color, ink }, index) => (
                <article key={title} className="overflow-hidden rounded-[1.7rem] border border-[#e4e8e4] bg-white shadow-[0_14px_40px_-34px_rgba(20,43,60,0.3)]">
                  <div className={"relative flex h-48 items-center justify-center overflow-hidden " + color} role="img" aria-label={"Ilustración de " + title}>
                    <div className="absolute -right-12 -top-20 size-64 rounded-full border border-white/60" aria-hidden="true" /><div className="absolute -bottom-24 -left-16 size-72 rounded-full border border-white/60" aria-hidden="true" />
                    <span className="absolute left-8 top-7 text-xs font-bold tracking-[0.17em] text-[#172b3c]/50">R&R / 0{index + 1}</span>
                    <span className={"relative flex size-28 items-center justify-center rounded-[1.7rem] border border-white/75 bg-white/60 shadow-xl backdrop-blur-sm " + ink}><Icon size={54} strokeWidth={1.2} aria-hidden="true" /></span>
                  </div>
                  <div className="p-7 sm:p-8">
                    <h3 className="font-display text-[1.8rem] leading-tight tracking-[-0.035em]">{title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#687782]">{lead}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f4f1] px-3 py-1.5 text-[11px] font-semibold text-[#4b6c62]">{tag}</span>)}</div>
                    <details className="group mt-7 border-t border-[#e9ece9] pt-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold marker:hidden">Conocer servicio <ChevronDown size={18} className="transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
                      <p className="mt-4 border-l-2 border-[#adbfaf] pl-4 text-sm leading-7 text-[#64737b]">{detail}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experience-title" className="scroll-mt-20 bg-[#172b3c] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12">
            <div><p className="section-kicker !text-[#c6ad87]">03 / NUESTRA EXPERIENCIA</p><h2 id="experience-title" className="mt-5 max-w-lg font-display text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">Trayectoria que se convierte en criterio.</h2><p className="mt-6 max-w-lg text-base leading-8 text-[#b6c2c8]">Hemos acompañado a clientes de distintos sectores, comprendiendo sus operaciones y la importancia de contar con información confiable.</p></div>
            <div className="rounded-[1.8rem] border border-white/15 bg-white/[0.06] p-7 sm:p-9">
              <div className="flex items-end gap-4 border-b border-white/15 pb-7"><strong className="font-display text-7xl font-normal leading-none tracking-[-0.07em] text-[#d9c19d] sm:text-8xl">20<span className="text-5xl">+</span></strong><p className="max-w-48 pb-2 text-sm leading-6 text-[#d5dde0]">años de experiencia con clientes de diversos sectores</p></div>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#91a5af]">Sectores en los que hemos trabajado</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">{["Sector eléctrico", "Combustibles", "Industria", "Servicios"].map((sector) => <li key={sector} className="flex items-center gap-2 text-sm text-[#e4eaec]"><Check size={16} className="text-[#d9c19d]" aria-hidden="true" />{sector}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="contacto" aria-labelledby="contact-title" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl"><p className="section-kicker">04 / CONTACTO</p><h2 id="contact-title" className="mt-5 font-display text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">Conversemos sobre tu empresa.</h2><p className="mt-5 text-base leading-8 text-[#687782]">Cuéntanos qué necesitas saber. Estamos disponibles para escuchar y orientarte.</p></div>
            <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="flex flex-col justify-between rounded-[1.7rem] bg-[#e7eeea] p-8 sm:p-10">
                <div><span className="flex size-12 items-center justify-center rounded-xl bg-white/75 text-[#54776b]"><Landmark size={24} strokeWidth={1.6} aria-hidden="true" /></span><h3 className="mt-8 font-display text-3xl tracking-[-0.035em]">Estamos cerca.</h3><p className="mt-3 max-w-xs text-sm leading-7 text-[#627970]">Puedes escribirnos directamente o visitar nuestras oficinas en Ciudad de Guatemala.</p></div>
                <address className="mt-12 space-y-6 not-italic">
                  <a href="tel:+50222966604" className="flex items-start gap-4 text-sm text-[#243d42] hover:underline"><Phone size={19} className="mt-0.5 shrink-0 text-[#5a7c70]" aria-hidden="true" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-[#758d83]">Teléfono</span>(502) 2296-6604</span></a>
                  <a href="mailto:roquelino.reyes@ryrasociados.com.gt" className="flex items-start gap-4 break-all text-sm text-[#243d42] hover:underline"><Mail size={19} className="mt-0.5 shrink-0 text-[#5a7c70]" aria-hidden="true" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-[#758d83]">Correo</span>roquelino.reyes@ryrasociados.com.gt</span></a>
                  <div className="flex items-start gap-4 text-sm leading-6 text-[#243d42]"><MapPin size={19} className="mt-0.5 shrink-0 text-[#5a7c70]" aria-hidden="true" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-[#758d83]">Ubicación</span>5ta. Calle 0-40, Zona 01<br />Guatemala, Guatemala</span></div>
                </address>
              </div>
              <div className="rounded-[1.7rem] border border-[#e4e9e5] bg-white p-8 shadow-[0_25px_70px_-48px_rgba(23,43,60,0.3)] sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7d9a8b]">MENSAJE DIRECTO</p><h3 className="mb-8 mt-2 font-display text-3xl tracking-[-0.035em]">Escríbenos</h3><ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#102330] text-white">
        <div className="mx-auto max-w-7xl px-5 pb-7 pt-14 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row">
            <div><Brand light /><p className="mt-6 max-w-xs text-sm leading-7 text-[#a9b8bf]">Información clara, procesos sólidos y relaciones construidas sobre la confianza.</p></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c8b08c]">Explora</p><nav aria-label="Navegación del pie de página" className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4 text-sm text-[#cfdbdf]">{nav.map((item) => <a key={item.href} href={item.href} className="hover:text-white hover:underline">{item.label}</a>)}</nav></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c8b08c]">Contacto</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#cfdbdf]"><a href="tel:+50222966604" className="hover:text-white hover:underline">(502) 2296-6604</a><a href="mailto:roquelino.reyes@ryrasociados.com.gt" className="hover:text-white hover:underline">Enviar correo</a></div></div>
          </div>
          <div className="flex flex-col justify-between gap-2 pt-6 text-xs text-[#8297a2] sm:flex-row"><span>© R&R Asociados, S.A.</span><span>Guatemala, C. A.</span></div>
        </div>
      </footer>
    </div>
  );
}
