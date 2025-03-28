import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

// type Image = {
//   src: string;
// };

// type Amenidad = string;

// interface SecondaryImagesCarouselProps {
//   images: Image[];
//   amenidades: Amenidad[];
// }

export function SecondaryImagesCarousel({ blok }: any) {
  console.log(blok);
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}>
      <CarouselContent>
        {blok.map((item: any, idx: number) => (
          <CarouselItem key={idx} className="basis-1/1">
            <div className="overflow-hidden shadow-sm rounded-md aspect-square max-w-60 relative">
              <img
                src={item.imagen_galeria.filename}
                alt="Foto de proyecto"
                width={240}
                height={224}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <Badge className="absolute bottom-2 left-2 text-sm">
                {item.texto_badge}
              </Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
