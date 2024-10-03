import { useState } from 'react';
import { cn, sluglify } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Link } from '@/components/link';

export function OptionsCarousel({ items }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Carousel
      className="max-w-full"
      opts={{
        loop: true,
        align: 'start'
      }}>
      <CarouselContent>
        {items.map((item, idx) => (
          <CarouselItem className="basis-1/1">
            <Link
              href={item === 'Todos' ? '/ubicacion' : `/ubicacion/${sluglify(item.toLowerCase())}`}
              variant="invertedOutline"
              className={cn(
                `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
                isActive && `bg-white text-black border border-white`
              )}>
              {item}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
