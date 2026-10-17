"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavigationItem = { label: string; href: string };

export default function MobileNav({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-[#1b3038]">
        Menú <Menu size={18} aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" showCloseButton={false} className="w-[min(85vw,360px)] border-l border-[#dce2dc] bg-[#f6f7f3] p-0 text-[#1b3038]">
        <SheetHeader className="flex-row items-center justify-between border-b border-[#dce2dc] p-6">
          <SheetTitle className="text-lg font-bold text-[#1b3038]">Menú</SheetTitle>
          <SheetDescription className="sr-only">Navegación por las secciones de R&R Asociados</SheetDescription>
          <SheetClose render={<Button variant="ghost" size="icon" className="rounded-none" />} aria-label="Cerrar menú"><X size={19} aria-hidden="true" /></SheetClose>
        </SheetHeader>
        <nav aria-label="Navegación móvil" className="grid px-6">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-[#dce2dc] text-base font-bold text-[#1b3038]">
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
