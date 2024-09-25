import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Images
import accordionImg1 from '@/assets/inversion-accordion1.png';
import accordionImg2 from '@/assets/inversion-accordion2.png';
import accordionImg3 from '@/assets/inversion-accordion3.png';

const accordionItems = [
  {
    title: 'Para alquilar',
    description:
      'Al comprar una casa y ponerla en el mercado de alquiler, tienes la oportunidad de multiplicar tu inversión de manera constante. Haz que tu dinero trabaje por ti y genera ingresos pasivos mes a mes. ¡Invierte en bienes raíces y asegura tu futuro financiero!',
    path: accordionImg1.src,
    alt: 'Foto de proyecto Terra Regia'
  },
  {
    title: 'Patrimonio',
    description:
      'Invertir en bienes raíces no solo es una apuesta a largo plazo, es una forma de crear patrimonio sólido. Las propiedades tienden a aumentar de valor con el tiempo, lo que significa que, al vender en el futuro, podrías obtener una ganancia considerable. Este crecimiento en el valor se debe a la plusvalía, el aumento continuo en el precio de las propiedades con el paso de los años. Tu inversión hoy puede ser tu ganancia mañana.',
    path: accordionImg2.src,
    alt: 'Foto de proyecto Terra Regia'
  },
  {
    title: 'Precio de preventa',
    description:
      'Comprar en preventa ofrece precios más bajos y opciones de financiamiento atractivas, además de mayor plusvalía a medida que el proyecto avanza. También permite elegir las mejores ubicaciones. ¡Una inversión sin riesgos y con retorno en crecimiento',
    path: accordionImg3.src,
    alt: 'Foto de proyecto Terra Regia'
  }
];

export function InversionAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionItems.map((item, idx) => (
        <AccordionItem
          value={`item-${idx}`}
          className={cn('border-neutral-400', idx === 0 ? 'border-t' : '')}>
          <AccordionTrigger className="text-[28px]">{item.title}</AccordionTrigger>
          <AccordionContent className="text-[#827D7D] text-base pt-4 pb-8">
            <div className="grid grid-cols-[2fr_1.5fr] gap-12">
              <div className="flex flex-col gap-6">
                <p>{item.description}</p>
                <a className="flex group" href="/tipo-de-propiedad">
                  <Button className="bg-[#D9D9D9] text-black group-hover:text-white group-hover:bg-black text-base font-medium">
                    Ver Propiedades
                  </Button>
                  <Button size={'icon'} className="bg-[#D9D9D9]  group-hover:bg-black">
                    <ArrowUpRight className="text-black group-hover:text-white " />
                  </Button>
                </a>
              </div>
              <div className="rounded-md overflow-hidden h-56 shadow-sm">
                <img src={item.path} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
