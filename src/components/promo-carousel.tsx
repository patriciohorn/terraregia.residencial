import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
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
      }}
      className="w-full">
      <CarouselContent className="-ml-8">
        {promotions.map((promotion: any) => (
          <CarouselItem key={promotion.title} className="pl-8 md:basis-1/2 lg:basis-1/3 max-w-96">
            <PromotionCardd project={promotion} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex sm:left-3/4 sm:-top-16 sm:-translate-x-3/4" />
      <CarouselNext className="hidden sm:flex sm:left-3/4 sm:-top-16 sm:translate-x-1/2" />
    </Carousel>
  );
}