import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InversionAccordion({ items }: any) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item: any, idx: number) => (
        <AccordionItem
          value={item.titulo}
          className={cn(
            'border-neutral-400',
            idx === 0 ? 'border-t' : ''
          )}
          key={item._uid}>
          <AccordionTrigger className="text-2xl sm:text-[28px]">
            {item.titulo}
          </AccordionTrigger>
          <AccordionContent className="text-[#827D7D] text-base pt-4 pb-8">
            <div className="grid sm:grid-cols-[2fr_1.5fr] gap-x-12 gap-y-8">
              <div className="order-2 sm:order-1 flex flex-col gap-6">
                <p>{item.descripcion}</p>
                <a className="flex group" href={item.link_boton}>
                  <Button className="bg-[#D9D9D9] text-black group-hover:text-white group-hover:bg-black text-base font-medium">
                    {item.texto_boton}
                  </Button>
                  <Button
                    size={'icon'}
                    className="bg-[#D9D9D9]  group-hover:bg-black">
                    <ArrowUpRight className="text-black group-hover:text-white " />
                  </Button>
                </a>
              </div>
              <div className="order-1 sm:order-2 rounded-md overflow-hidden h-56 shadow-sm">
                <img
                  src={`${item.imagen.filename}/m/224x224`}
                  alt={item.imagen.alt || 'Imagen acordeon'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
