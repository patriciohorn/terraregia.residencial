import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export function TipologiaCarousel({ images }) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem key={idx} className="flex items-center justify-center h-52 sm:h-96">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={img.src}
                alt="Foto de tipologia"
                className="w-full h-full object-contain px-10 sm:px-20"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className="left-0 -translate-y-5 " />
      <CarouselNext variant="default" className="right-0 -translate-y-5 " />
    </Carousel>
  );
}
