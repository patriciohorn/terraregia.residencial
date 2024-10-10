import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { PromotionCardd } from '@/components/PromotionCard';

export function PromocionesCarousel({ promotions }: any) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start'
      }}
      className="w-full">
      <CarouselContent className="-ml-8">
        {promotions.map((promotion: any) => (
          <CarouselItem
            key={promotion.title}
            className="pl-8 md:basis-1/2 lg:basis-1/3 max-w-[400px]">
            <PromotionCardd project={promotion} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
