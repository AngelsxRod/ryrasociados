"use client";

import Image from "next/image";
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
    // https://unsplash.com/photos/desk-with-papers-glasses-calculator-and-office-supplies-sW02MHv37yk
  },
  {
    src: "/hero/analisis-financiero.webp",
    alt: "Gráficas financieras, calculadora y archivadores en una mesa de trabajo",
    label: "Análisis para decidir mejor",
    // https://unsplash.com/photos/desk-with-calculator-charts-and-binders-FVwy7PBiSUo
  },
  {
    src: "/hero/informes-financieros.webp",
    alt: "Informes con gráficas, calculadora y equipo de trabajo sobre un escritorio",
    label: "Revisión de informes financieros",
    // https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [stoppedByInteraction, setStoppedByInteraction] = useState(false);

  useEffect(() => {
    if (!api) return;

    const syncCurrent = () => setCurrent(api.selectedScrollSnap());
    const stopOnDrag = () => setStoppedByInteraction(true);

    syncCurrent();
    api.on("select", syncCurrent);
    api.on("reInit", syncCurrent);
    api.on("pointerDown", stopOnDrag);

    return () => {
      api.off("select", syncCurrent);
      api.off("reInit", syncCurrent);
      api.off("pointerDown", stopOnDrag);
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
    if (!api || isHovered || isFocused || !isVisible || prefersReducedMotion || stoppedByInteraction) return;

    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api, isHovered, isFocused, isVisible, prefersReducedMotion, stoppedByInteraction]);

  return (
    <Carousel
      className="hero-carousel"
      opts={{ loop: true }}
      setApi={setApi}
      aria-label="Imágenes de contabilidad y auditoría"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClickCapture={() => setStoppedByInteraction(true)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <CarouselContent className="hero-carousel-track">
        {slides.map((slide, index) => (
          <CarouselItem className="hero-carousel-slide" key={slide.src}>
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
      <div className="hero-carousel-meta">
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
      </div>
    </Carousel>
  );
}
