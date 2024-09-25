import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import accordionImg1 from '@/assets/inversion-accordion1.png';
import accordionImg2 from '@/assets/inversion-accordion2.png';
import accordionImg3 from '@/assets/inversion-accordion3.png';

export function InversionAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[28px]">Para alquilar</AccordionTrigger>
        <AccordionContent className="text-[#827D7D] text-base">
          <div className="grid grid-cols-[2fr_1.5fr] gap-12">
            <p>
              Al comprar una casa y ponerla en el mercado de alquiler, tienes la oportunidad de
              multiplicar tu inversión de manera constante. Haz que tu dinero trabaje por ti y
              genera ingresos pasivos mes a mes. ¡Invierte en bienes raíces y asegura tu futuro
              financiero!
            </p>
            <div className="rounded-md overflow-hidden">
              <img
                src={accordionImg1.src}
                alt="Proyecto terra regia"
                className="w-ful h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[28px]">Patrimonio</AccordionTrigger>
        <AccordionContent className="text-[#827D7D] text-base">
          <div className="grid grid-cols-[2fr_1.5fr] gap-12">
            <p>
              Invertir en bienes raíces no solo es una apuesta a largo plazo, es una forma de crear
              patrimonio sólido. Las propiedades tienden a aumentar de valor con el tiempo, lo que
              significa que, al vender en el futuro, podrías obtener una ganancia considerable. Este
              crecimiento en el valor se debe a la plusvalía, el aumento continuo en el precio de
              las propiedades con el paso de los años. Tu inversión hoy puede ser tu ganancia
              mañana.
            </p>
            <div className="rounded-md overflow-hidden">
              <img
                src={accordionImg2.src}
                alt="Proyecto terra regia"
                className="w-ful h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[28px]">Precio de preventa</AccordionTrigger>
        <AccordionContent className="text-[#827D7D] text-base">
          <div className="grid grid-cols-[2fr_1.5fr] gap-12">
            <p>
              Comprar en preventa ofrece precios más bajos y opciones de financiamiento atractivas,
              además de mayor plusvalía a medida que el proyecto avanza. También permite elegir las
              mejores ubicaciones. ¡Una inversión sin riesgos y con retorno en crecimiento
            </p>
            <div className="rounded-md overflow-hidden">
              <img
                src={accordionImg3.src}
                alt="Proyecto terra regia"
                className="w-ful h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
