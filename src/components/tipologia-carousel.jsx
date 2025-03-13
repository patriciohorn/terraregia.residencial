import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TipologiaCarousel({ images }) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem
            key={idx}
            className="flex items-center justify-center">
            <div className="flex items-center justify-center aspect-square">
              <img
                src={img.filename}
                alt="Foto de tipologia"
                className="w-full h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="default"
        className="left-0 -translate-y-5 "
      />
      <CarouselNext
        variant="default"
        className="right-0 -translate-y-5 "
      />
    </Carousel>
  );
}
