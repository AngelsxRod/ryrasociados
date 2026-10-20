"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Brand from "@/components/brand";
import MobileNav from "@/components/mobile-nav";

type NavigationItem = { label: string; href: string };

export default function SiteHeader({ items }: { items: NavigationItem[] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const syncScroll = () => setScrolled(window.scrollY > 24);
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a href="#contacto" className="header-contact">Conversemos <ArrowUpRight size={16} aria-hidden="true" /></a>
        <div className="mobile-menu"><MobileNav items={items} /></div>
      </div>
    </header>
  );
}
