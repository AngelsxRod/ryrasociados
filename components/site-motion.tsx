"use client";

import { useEffect } from "react";

export default function SiteMotion() {
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    if (!shell || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = shell.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

    for (const target of targets) {
      if (target.getBoundingClientRect().top < window.innerHeight * .94) {
        target.classList.add("is-visible");
      } else {
        observer.observe(target);
      }
    }

    shell.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      shell.classList.remove("motion-ready");
    };
  }, []);

  return <style>{`
    @media (prefers-reduced-motion: no-preference) {
      .hero-message > *, .hero-actions { animation: hero-enter .8s cubic-bezier(.22, 1, .36, 1) both; }
      .hero-message > :nth-child(2) { animation-delay: .1s; }
      .hero-message > :nth-child(3) { animation-delay: .22s; }
      .hero-actions { animation-delay: .34s; }
      @keyframes hero-enter { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }

      .motion-ready [data-reveal]:not(.is-visible) { opacity: 0; transform: translateY(26px); }
      .motion-ready [data-reveal] { transition: opacity .8s cubic-bezier(.22, 1, .36, 1), transform .8s cubic-bezier(.22, 1, .36, 1); transition-delay: var(--reveal-delay, 0ms); }
      .pillar-grid .pillar:nth-child(2), .contact-form-panel { --reveal-delay: 90ms; }
      .pillar-grid .pillar:nth-child(3) { --reveal-delay: 180ms; }
      .pillar-grid .pillar:nth-child(4), .experience-evidence { --reveal-delay: 240ms; }

      .about-visual img { transition: transform 1.1s cubic-bezier(.22, 1, .36, 1); }
      .about-visual:hover img { transform: scale(1.025); }
      .pillar { position: relative; }
      .pillar::before { content: ""; position: absolute; top: -2px; left: 0; width: 100%; height: 2px; background: var(--brand-olive); transform: scaleX(0); transform-origin: left; transition: transform .55s cubic-bezier(.22, 1, .36, 1); }
      .pillar:hover::before { transform: scaleX(1); }
      .service-heading h3 { transition: color .3s ease, transform .45s cubic-bezier(.22, 1, .36, 1); }
      .service:hover .service-heading h3 { color: #526527; transform: translateX(5px); }
      .button svg, .text-link svg, .header-contact svg { transition: transform .35s cubic-bezier(.22, 1, .36, 1); }
      .button:hover svg, .text-link:hover svg, .header-contact:hover svg { transform: translate(3px, -3px); }
    }
  `}</style>;
}
