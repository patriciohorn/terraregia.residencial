import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

type Image = {
  src: string;
};

type Amenidad = string;

interface SecondaryImagesCarouselProps {
  images: Image[];
  amenidades: Amenidad[];
}

export function SecondaryImagesCarousel({ images, amenidades }: SecondaryImagesCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}>
      <CarouselContent>
        {images.map((image, idx) => (
          <CarouselItem key={idx} className="basis-1/1">
            <div className="overflow-hidden shadow-sm rounded-md w-60 h-56 relative">
              <img
                src={image.src}
                alt="Foto de proyecto"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <Badge className="absolute bottom-2 left-2 text-sm">{amenidades[idx]}</Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
