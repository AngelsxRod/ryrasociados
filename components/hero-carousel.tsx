"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "/hero/contabilidad.webp",
    alt: "Documentos contables, recibos y calculadora sobre un escritorio",
    label: "Información contable clara",
    eyebrow: "Auditoría y contabilidad en Guatemala",
    headline: "Ayudamos a construir empresas confiables.",
    description: "Información contable clara, procesos bien revisados y asesoría cercana para decidir con confianza.",
    // https://unsplash.com/photos/desk-with-papers-glasses-calculator-and-office-supplies-sW02MHv37yk
  },
  {
    src: "/hero/analisis-financiero.webp",
    alt: "Gráficas financieras, calculadora y archivadores en una mesa de trabajo",
    label: "Análisis para decidir mejor",
    eyebrow: "Análisis financiero",
    headline: "Decisiones más claras desde tus números.",
    description: "Analizamos resultados y tendencias para que tu empresa avance con criterio y confianza.",
    // https://unsplash.com/photos/desk-with-calculator-charts-and-binders-FVwy7PBiSUo
  },
  {
    src: "/hero/informes-financieros.webp",
    alt: "Informes con gráficas, calculadora y equipo de trabajo sobre un escritorio",
    label: "Revisión de informes financieros",
    eyebrow: "Auditoría e informes",
    headline: "Informes confiables que fortalecen tu empresa.",
    description: "Revisamos datos y procesos con rigor para fortalecer el control y respaldar cada paso de tu negocio.",
    // https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[current] ?? slides[0];

  useEffect(() => {
    if (!api) return;

    const syncCurrent = () => setCurrent(api.selectedScrollSnap());
    syncCurrent();
    api.on("select", syncCurrent);
    api.on("reInit", syncCurrent);

    return () => {
      api.off("select", syncCurrent);
      api.off("reInit", syncCurrent);
    };
  }, [api]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setPrefersReducedMotion(mediaQuery.matches);
    const syncVisibility = () => setIsVisible(!document.hidden);

    syncMotion();
    syncVisibility();
    mediaQuery.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      mediaQuery.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!api || !isVisible || prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => api.scrollNext(), 7000);
    return () => window.clearInterval(timer);
  }, [api, isVisible, prefersReducedMotion, isPaused]);

  return <div
    className="hero-stage"
    style={{ position: "relative", isolation: "isolate" }}
  >
    <div className="container hero-inner">
      <div className="hero-copy">
        <div aria-live={isPaused ? "polite" : "off"}>
          <div className="hero-message" key={current}>
            <p className="eyebrow">{activeSlide.eyebrow}</p>
            <h1 id="hero-title">{activeSlide.headline}</h1>
            <p className="hero-lead">{activeSlide.description}</p>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#servicios" className="button button-primary">Conoce nuestros servicios <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href="#contacto" className="text-link">Habla con nosotros <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </div>
    <Carousel
      className="hero-carousel"
      opts={{ loop: true }}
      setApi={setApi}
      aria-label="Imágenes de contabilidad y auditoría"
    >
      <CarouselContent className="hero-carousel-track">
        {slides.map((slide, index) => (
          <CarouselItem className="hero-carousel-slide" key={slide.src} aria-hidden={index !== current} aria-roledescription="diapositiva" aria-label={`${index + 1} de ${slides.length}: ${slide.label}`}>
            <div className="hero-carousel-image">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="hero-carousel-photo"
                preload={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hero-carousel-meta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="hero-carousel-indicators" aria-label="Elegir imagen">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ver imagen ${index + 1} de ${slides.length}: ${slide.label}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
          style={{ display: "grid", placeItems: "center", width: 44, height: 44, border: "1px solid rgba(255,255,255,.45)", borderRadius: "50%", background: "rgba(16,43,50,.5)", color: "white", cursor: "pointer" }}
        >
          {isPaused ? <Play size={16} fill="currentColor" aria-hidden="true" /> : <Pause size={16} fill="currentColor" aria-hidden="true" />}
        </button>
      </div>
    </Carousel>
  </div>;
}
