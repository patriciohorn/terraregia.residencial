import { useState } from 'react';
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
} from '@/components/ui/carousel';
import { ModelFooter } from './model-footer';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function ModelosTabs({
  data,
  onModelChange,
  plantas,
  onPlantasChange,
}) {
  const [activeTab, setActiveTab] = useState('Liria');

  const modelosNames = data.map((item) => item.nombre);

  const handleTabChange = (model) => {
    setActiveTab(model);
    onModelChange(model);
  };

  return (
    <div className="mt-6">
      <Tabs
        defaultValue={activeTab}
        className="flex flex-col items-center gap-4 overflow-x-hidden"
        onValueChange={(value) => {
          const selectedModel = data.find(
            (model) => model.nombre === value
          );
          if (selectedModel) {
            handleTabChange(selectedModel);
          }
        }}>
        <TabsList className="bg-transparent w-full h-full flex flex-col space-y-4">
          <div className="max-w-full">
            <Carousel
              opts={{
                loop: 'true',
                align: 'start',
              }}
              className="w-full">
              <CarouselContent>
                {modelosNames.map((item, idx) => (
                  <CarouselItem
                    key={item}
                    className={cn(
                      `basis-1/1 sm:basis-1/4`,
                      data.title === 'Castilla Diamante'
                        ? 'sm:basis-1/2'
                        : ''
                    )}>
                    <TabsTrigger
                      value={item}
                      className={cn(
                        'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base font-medium w-28',
                        activeTab.model === item &&
                          'data-[state=active]:bg-black data-[state=active]:text-white'
                      )}>
                      {item}
                    </TabsTrigger>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex gap-2 max-w-full">
            {data.title === 'Rincón de la Sierra' &&
              ['2 plantas', '3 plantas'].map((option) => (
                <Button
                  size="sm"
                  key={option}
                  onClick={() => onPlantasChange(option)}
                  className={cn(
                    'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base min-w-24 font-medium w-28',
                    plantas === option && 'bg-black text-white'
                  )}>
                  {option}
                </Button>
              ))}
          </div>
        </TabsList>
        {/* 
        {data.map((modelo) => (
          <TabsContent value={modelo.nombre}>
            <div
              className="rounded-md h-48 sm:h-72 overflow-hidden aspect-video"
              key={modelo.nombre}>
              <img
                src={
                  plantas === '2 plantas'
                    ? modelo.modeloImage[0].src
                    : modelo.modeloImage[1].src
                }
                alt={model.model}
                className={cn(
                  `rounded-sm w-full h-full animate-fade-right`,
                  data.title === 'Montserrat Residencial'
                    ? `object-cover`
                    : `object-contain`
                )}
              />
            </div>
            {plantas === '2 plantas' ? (
              <ModelFooter
                items={model.specs}
                brochure={data.brochure}
              />
            ) : (
              <ModelFooter
                items={data.variantFooter}
                brochure={data.brochure}
              />
            )}
          </TabsContent>
        ))} */}
      </Tabs>
    </div>
  );
}
