import { cn, sluglify, formatCurrency } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from '@/components/link';

export function OptionsCarousel({ items, path }: any) {
  const sectionPath = path.split('/')[1];
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
            {currentPath === 'ubicacion' ? 'Todos' : 'Infonavit'}
          </Link>
        </CarouselItem>
        {items.map((item: string, idx: number) => {
          const ubicacionPath = `ubicacion/${sluglify(item.toLowerCase())}`;
          const costoPath = `costo/${formatCurrency(item)}`;
          if (item !== 'preventa') {
            return (
              <CarouselItem key={idx} className="basis-1/1">
                <Link
                  href={`/${sectionPath === 'ubicacion' ? ubicacionPath : costoPath}`}
                  variant="invertedOutline"
                  className={cn(
                    `h-8 px-4 py-2 text-sm border border-white bg-transparent text-white`,
                    (currentPath === sluglify(item.toLowerCase()) ||
                      currentPath === formatCurrency(item)) &&
                      `bg-white text-black border border-white`
                  )}>
                  {item !== '$3,000,000' ? item : '$3,000,000 o más'}
                </Link>
              </CarouselItem>
            );
          }
        })}
      </CarouselContent>
    </Carousel>
  );
}
