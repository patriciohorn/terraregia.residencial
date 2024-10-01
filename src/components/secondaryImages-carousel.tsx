import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

type Image = {
  src: string;
};

interface SecondaryImagesCarouselProps {
  images: Image[];
}

export function SecondaryImagesCarousel({ images }: SecondaryImagesCarouselProps) {
  console.log(images);
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}>
      <CarouselContent>
        {images.map((image, idx) => (
          <CarouselItem className="basis-1/1">
            <div className="overflow-hidden shadow-sm rounded-md w-60 h-56">
              <img
                src={image.src}
                alt="Foto de proyecto"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
