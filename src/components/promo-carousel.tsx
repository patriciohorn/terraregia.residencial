import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
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

export function PromocionesCarousel({ promotions }: PromocionesCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start'
      }}>
      <CarouselContent className="-ml-4 py-2">
        {promotions.map((promotion: any) => (
          <CarouselItem key={promotion.title} className="pl-4 pr-4 md:basis-1/2 lg:basis-1/3">
            <PromotionCardd project={promotion} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
