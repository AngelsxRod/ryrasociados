"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type Service = {
  title: string;
  lead: string;
  tags: string[];
  detail: string;
};

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <Accordion multiple className="service-list">
      {services.map(({ title, lead, tags, detail }) => (
        <AccordionItem key={title} value={title} role="article" className="service border-b-0">
          <div className="service-heading"><h3>{title}</h3><p>{lead}</p></div>
          <div className="service-info">
            <ul className="service-tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <AccordionTrigger className="min-h-12 rounded-none border-0 border-t border-[#dce2dc] px-0 text-[13px] font-bold text-[#1b3038] hover:no-underline">
              Conocer servicio
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <p className="mt-4 text-sm leading-7 text-[#52636b]">{detail}</p>
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
