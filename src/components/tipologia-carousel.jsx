import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export function TipologiaCarousel({ images }) {
  console.log(images);
  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem key={idx} className="flex items-center justify-center h-96">
            <div clasName="flex items-center justify-center w-full h-full">
              <img src={img.src} alt="Foto de tipologia" className="w-full h-full object-contain" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className="left-0 -translate-y-5 " />
      <CarouselNext variant="default" className="right-0 -translate-y-5 " />
    </Carousel>
  );
}
