import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel-top-btn';
import { PromotionCardd } from '@/components/promotion-card';

interface Promotion {
  title: string;
  location: string;
  details: string;
  mainPromo: string;
  secondaryPromo: string;
  images: string;
  specs: string[];
  icons: string[];
}

interface PromocionesCarouselProps {
  promotions: Promotion[];
}

export function PromocionesCarousel({ proyectos }: any) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
      }}>
      <CarouselContent className="-ml-6 md:-ml-10">
        {proyectos.map((proyecto: any) => {
          // proyecto.content.slug = proyecto.slug;
          return (
            <CarouselItem
              key={proyecto.id}
              className="basis-10/12 md:basis-1/2 pl-6 md:pl-10">
              <PromotionCardd proyecto={proyecto} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex sm:-top-[82px] sm:w-10 sm:h-10" />
      <CarouselNext className="hidden sm:flex sm:-top-[82px] sm:w-10 sm:h-10" />
    </Carousel>
  );
}
