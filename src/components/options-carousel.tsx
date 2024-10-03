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
import type Ubicacion from './Ubicacion.astro';

export function OptionsCarousel({ items, path }: any) {
  console.log(path);
  // const [activeTab, setActiveTab] = useState('Todos');
  const currentPath = path.split('/').slice(-1).join('');
  console.log(currentPath);
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
            href={'/ubicacion'}
            variant="invertedOutline"
            className={cn(
              `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
              currentPath === 'ubicacion' && `bg-white text-black border border-white`
            )}>
            Todos
          </Link>
        </CarouselItem>
        {items.map((item: string, idx: number) => (
          <CarouselItem className="basis-1/1">
            <Link
              href={`/ubicacion/${sluglify(item.toLowerCase())}`}
              variant="invertedOutline"
              className={cn(
                `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
                currentPath === sluglify(item.toLowerCase()) &&
                  `bg-white text-black border border-white`
              )}
              onClick={() => setActiveTab(item)}>
              {item}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
