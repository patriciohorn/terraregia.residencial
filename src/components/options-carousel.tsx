import { useState } from 'react';
import { cn, sluglify } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from '@/components/link';

export function OptionsCarousel({ items, path }: any) {
  const sectionPath = path.split('/')[1];
  console.log(sectionPath);
  const currentPath = path.split('/').slice(-1).join('');
  return (
    <Carousel
      className="max-w-full"
      opts={{
        loop: true,
        align: 'start'
      }}>
      <CarouselContent>
        <CarouselItem className="basis-1/1">
          <Link
            href={sectionPath === 'ubicacion' ? `/ubicacion` : `/costo`}
            variant="invertedOutline"
            className={cn(
              `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
              (currentPath === 'ubicacion' || currentPath === 'costo') &&
                `bg-white text-black border border-white`
            )}>
            Todos
          </Link>
        </CarouselItem>
        {items.map((item: string, idx: number) => (
          <CarouselItem className="basis-1/1">
            <Link
              href={`/${sectionPath === 'ubicacion' ? 'ubicacion' : 'costo'}/${sluglify(item.toLowerCase())}`}
              variant="invertedOutline"
              className={cn(
                `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
                currentPath === sluglify(item.toLowerCase()) &&
                  `bg-white text-black border border-white`
              )}>
              {item}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
