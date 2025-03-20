import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

import VariantFooter from './variant-footer';
import { useState } from 'react';

const CasasTabs = ({ modelos, titulo, nombreProyecto }: any) => {
  const [selectedTab, setSelectedTab] = useState(modelos[0].nombre);
  const [plantas, setPlantas] = useState('2 plantas');

  function handleTabChange(value: string) {
    setSelectedTab(value);
  }

  function handlePlantaChange(value: string) {
    setPlantas(value);
  }
  const selectedModelo = modelos.filter(
    (modelo: any) => modelo.nombre === selectedTab
  )[0].carousel_detalles_planta;

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <h2 className="mb-8 text-2xl sm:text-[40px] text-black font-heading">
          {titulo}
        </h2>
        <Tabs defaultValue={selectedTab}>
          <TabsList className="bg-transparent w-full gap-4">
            {modelos.map((modelo: any) => (
              <TabsTrigger
                key={modelo.nombre}
                value={modelo.nombre}
                className={cn(
                  'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base font-medium w-28',
                  selectedTab === modelo.nombre &&
                    'data-[state=active]:bg-black data-[state=active]:text-white'
                )}
                onClick={() => handleTabChange(modelo.nombre)}>
                {modelo.nombre}
              </TabsTrigger>
            ))}
          </TabsList>

          {nombreProyecto.includes('Rincón') && (
            <div className="flex gap-2 justify-center mt-4">
              {['2 plantas', '3 plantas'].map((option) => (
                <Button
                  size="sm"
                  key={option}
                  onClick={() => setPlantas(option)}
                  className={cn(
                    'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base min-w-24 font-medium w-28',
                    plantas === option && 'bg-black text-white'
                  )}>
                  {option}
                </Button>
              ))}
            </div>
          )}
          {modelos.map((modelo: any) => (
            <TabsContent
              value={modelo.nombre}
              key={modelo.nombre}
              className={cn(
                'mt-6 flex flex-col justify-between items-center',
                selectedTab === modelo.nombre ? '' : 'hidden'
              )}>
              <div className="mb-4 overflow-hidden aspect-video h-48 sm:h-72 rounded-md animate-fade-right">
                <img
                  src={
                    plantas === '2 plantas'
                      ? modelo.imagen_modelo[0].filename
                      : modelo.imagen_modelo[1].filename
                  }
                  alt={
                    plantas === '2 plantas'
                      ? modelo.imagen_modelo[0].alt
                      : modelo.imagen_modelo[1].alt ||
                        `Modelo ${modelo.nombre}`
                  }
                  className={cn(
                    'w-full h-full',
                    nombreProyecto.includes('Montserrat')
                      ? 'object-cover'
                      : 'object-contain'
                  )}
                />
              </div>
              <VariantFooter modelo={modelo} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Carousel className="bg-[#E6E9E9] rounded-[12px] p-6">
        <CarouselContent key={selectedTab}>
          {selectedModelo.map((planta: any) => (
            <CarouselItem
              key={planta.titulo}
              className="animate-fade-right">
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden aspect-video flex items-center justify-center">
                  <img
                    src={planta.imagen_planta.filename}
                    alt={
                      planta.imagen_planta.alt ||
                      `${planta.titulo} ${selectedTab}`
                    }
                  />
                </div>
                <div className="bg-white rounded-sm p-6">
                  <h3 className="text-xl font-heading mb-6">
                    {planta.titulo}
                  </h3>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
                    {planta.detalles.map((item: any) => (
                      <li className="text-sm text-neutral-600 flex items-center gap-2">
                        <CircleCheck className="w-4 h-4 shrink-0" />
                        {item.detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default CasasTabs;
