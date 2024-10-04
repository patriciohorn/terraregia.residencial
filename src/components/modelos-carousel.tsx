import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { CircleCheck } from 'lucide-react';

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
  descriptions: Description;
  plantas: string; // Object containing descriptions per floor level
}

export function ModelosCarousel({ images, floorTitles, descriptions, plantas }: CarouselProps) {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="">
          {images.map((img: Image, idx: number) => {
            const floorTitle: string = floorTitles[idx]; // Get the corresponding floor title for each image

            const floorDescriptions = descriptions[floorTitle as keyof Description] || []; // Get the description for the current floor
            return (
              <CarouselItem key={idx} className="flex flex-col justify-center">
                {/* Image section */}
                <div className="rounded-md overflow-hidden">
                  <img
                    src={img.src}
                    alt={`Imagen de ${floorTitle}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Floor title and description section */}
                <div className="bg-white rounded-md py-6 px-10 mt-2 ">
                  <h3 className="text-2xl font-heading">{floorTitle}</h3>
                  <ul className="grid sm:grid-cols-2 sm:gap-x-6 gap-y-1.5 text-[#827D7D] text-xs leading-4 mt-4">
                    {floorDescriptions.map((description: string, i: number) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CircleCheck className="w-3 h-3 shrink-0" />
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious variant="default" className="-left-2 -translate-y-10 " />
        <CarouselNext variant="default" className="-right-2 -translate-y-10  " />
      </Carousel>
    </div>
  );
}
