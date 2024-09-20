import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Dot } from 'lucide-react';

export function ModelosCarousel({ images }: any) {
  const plantas = ['Planta Baja', 'Planta Alta'];
  const plantaBaja = ['Cochera dos autos', 'Sala', 'Cocina', 'Medio Baño', 'Comedor', 'Lavandería'];
  const plantaAlta = [
    'Recámara principal con baño/vestidor y terraza.',
    'Dos recámaras con baño compartido.',
    'Estancia familiar.'
  ];

  return (
    <Carousel className="relative">
      <CarouselContent>
        {images.map((img: any, idx: number) => (
          <CarouselItem key={idx} className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-full h-full">
              <img src={img.src} alt="Foto de tipologia" className="w-full h-full object-contain" />
            </div>
            <div className="bg-white rounded-md px-8 py-4 mt-4 w-full">
              <p className="text-2xl font-heading">{plantas[idx]}</p>
              <ul className="grid grid-cols-3 gap-x-8 gap-y-2 text-[#827D7D] text-xs mt-4 ">
                {plantas[idx] === 'Planta Baja'
                  ? plantaBaja.map((item, index) => (
                      <li key={index} className="flex items-center space-x-1">
                        <Dot size="20" />
                        <span>{item}</span>
                      </li>
                    ))
                  : plantaAlta.map((item, index) => (
                      <li key={index} className="flex items-start space-x-1">
                        <Dot size="20" />
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" className="left-0 -translate-y-5 " />
      <CarouselNext variant="default" className="right-0 -translate-y-5 " />
    </Carousel>
  );
}
