import { PresupuestoCard } from '@/components/presupuesto-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel-top-btn';

export function PresupuestoCarousel({ cards }: any) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}>
      <CarouselContent className="-ml-6">
        {cards.map((card: any, idx: number) => (
          <CarouselItem
            key={idx}
            className="pl-6 basis-10/12 md:basis-1/2 lg:basis-1/4">
            <PresupuestoCard card={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex sm:-top-[82px] sm:w-10 sm:h-10" />
      <CarouselNext className="hidden sm:flex sm:-top-[82px] sm:w-10 sm:h-10" />
    </Carousel>
  );
}
