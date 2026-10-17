"use client";

import { useState } from "react";
import { ArrowUpRight, PanelRightOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

type NavigationItem = { label: string; href: string };

export default function MobileNav({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        aria-label="Abrir navegación"
        aria-expanded={open}
        className="h-11 gap-2 rounded-none border-[#aab5aa] bg-transparent px-3 text-[13px] font-bold text-[#1b3038] shadow-none hover:border-[#697322] hover:bg-[#e9ede5] hover:text-[#1b3038]"
      >
        Explorar <PanelRightOpen size={17} aria-hidden="true" />
      </Button>
      <SheetContent side="right" showCloseButton={false} className="w-[min(85vw,360px)] border-l border-[#dce2dc] bg-[#f6f7f3] p-0 text-[#1b3038]">
        <SheetHeader className="flex-row items-center justify-between border-b border-[#dce2dc] px-6 py-5">
          <div>
            <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-[#697322] uppercase">R&R Asociados</p>
            <SheetTitle className="font-[family-name:var(--font-editorial)] text-[25px] font-normal text-[#1b3038]">Explora la firma</SheetTitle>
          </div>
          <SheetDescription className="sr-only">Navegación por las secciones de R&R Asociados</SheetDescription>
          <SheetClose render={<Button variant="ghost" size="icon" className="shrink-0 rounded-none" />} aria-label="Cerrar navegación"><X size={19} aria-hidden="true" /></SheetClose>
        </SheetHeader>
        <nav aria-label="Navegación móvil" className="grid px-6 pt-4">
          {items.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="group flex min-h-16 items-center gap-4 border-b border-[#dce2dc] text-[#1b3038] hover:text-[#697322]">
              <span className="text-xs font-bold text-[#697322]">0{index + 1}</span>
              <span className="font-[family-name:var(--font-editorial)] text-[22px]">{item.label}</span>
              <ArrowUpRight size={17} aria-hidden="true" className="ml-auto opacity-50 transition group-hover:opacity-100" />
            </a>
          ))}
        </nav>
        <p className="mt-auto border-t border-[#dce2dc] px-6 py-6 text-xs leading-5 text-[#52636b]">Auditoría y contabilidad con criterio cercano en Guatemala.</p>
      </SheetContent>
    </Sheet>
  );
}
