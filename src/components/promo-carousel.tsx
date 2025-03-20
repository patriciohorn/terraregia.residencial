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
      <CarouselContent className="md:-ml-10">
        {proyectos.map((proyecto: any) => {
          // proyecto.content.slug = proyecto.slug;
          return (
            <CarouselItem
              key={proyecto.id}
              className="md:basis-1/2 md:pl-10">
              <PromotionCardd proyecto={proyecto} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex sm:-top-[92px]" />
      <CarouselNext className="hidden sm:flex sm:-top-[92px]" />
    </Carousel>
  );
}
