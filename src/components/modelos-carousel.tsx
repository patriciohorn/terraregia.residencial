import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Dot, CircleCheck } from 'lucide-react';

interface Image {
  src: string;
  width: number;
  height: number;
  fsPath: string;
}

interface Description {
  'Primer nivel': string[];
  'Segundo nivel'?: string[];
  'Tercer nivel'?: string[]; // Optional if some models don't have a third floor
}

interface CarouselProps {
  images: Image[]; // Array of images, one for each floor level
  floorTitles: string[]; // Dynamic floor titles like 'Planta Baja', 'Planta Alta'
  descriptions: Description; // Object containing descriptions per floor level
}

export function ModelosCarousel({ images, floorTitles, descriptions }: CarouselProps) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((img: Image, idx: number) => {
          const floorTitle: string = floorTitles[idx]; // Get the corresponding floor title for each image

          const floorDescriptions = descriptions[floorTitle as keyof Description] || []; // Get the description for the current floor
          console.log('Floor Descriptions', floorDescriptions);
          return (
            <CarouselItem key={idx} className="flex flex-col items-center justify-between gap-8">
              {/* Image section */}
              <div className="w-full h-full">
                <img
                  src={img.src}
                  alt={`Imagen de ${floorTitle}`}
                  className="w-full h-full object-contain px-8"
                />
              </div>

              {/* Floor title and description section */}
              <div className="bg-white rounded-md px-8 py-6 mt-4 w-full h-full">
                <h3 className="text-2xl font-heading">{floorTitle}</h3>
                <ul className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-[#827D7D] text-sm leading-4 mt-4">
                  {floorDescriptions.map((description: string, i: number) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CircleCheck className="w-3.5 h-3.5 shrink-0" />
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious variant="default" className="-left-8 -translate-y-5 " />
      <CarouselNext variant="default" className="-right-8 -translate-y-5 " />
    </Carousel>
  );
}
