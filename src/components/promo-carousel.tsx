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
      <CarouselContent className="-ml-8">
        {proyectos.map((proyecto: any) => {
          // proyecto.content.slug = proyecto.slug;
          return (
            <CarouselItem
              key={proyecto.id}
              className="pl-8 md:basis-1/2 ">
              <PromotionCardd proyecto={proyecto} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
