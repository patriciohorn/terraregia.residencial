import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

export function ModelosTabs({ data, onModelChange }) {
  const [activeTab, setActiveTab] = useState(data.modelos[0]);
  const [isLoading, setIsLoading] = useState(true);

  const modelosNames = data.modelos.map((item) => item.model);

  const handleTabChange = (model) => {
    setActiveTab(model);
    onModelChange(model);
  };
  return (
    <div className="mt-6">
      <Tabs
        defaultValue={activeTab.model}
        className="flex flex-col items-center gap-4 overflow-x-hidden"
        onValueChange={(value) => {
          const selectedModel = data.modelos.find((model) => model.model === value);
          if (selectedModel) {
            handleTabChange(selectedModel);
          }
        }}>
        {/* Tabs Mobile */}
        <TabsList className="sm:hidden bg-transparent w-full">
          <Carousel
            opts={{
              loop: 'true',
              align: 'start'
            }}
            className="max-w-full">
            <CarouselContent className="">
              {modelosNames.map((item, idx) => (
                <CarouselItem
                  className="basis-1/1
              ">
                  <TabsTrigger
                    value={item}
                    key={item}
                    className={cn(
                      'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base font-medium w-32',
                      activeTab.model === item &&
                        'data-[state=active]:bg-black data-[state=active]:text-white'
                    )}>
                    {item}
                  </TabsTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsList>
        {/* Tabs Desktop */}
        <TabsList className="hidden sm:flex sm:flex-wrap sm:justify-between sm:gap-4 sm:bg-white h-full">
          {modelosNames.map((item, idx) => (
            <TabsTrigger
              value={item}
              key={item}
              className={cn(
                'bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base min-w-24 font-medium w-28',
                activeTab.model === item &&
                  'data-[state=active]:bg-black data-[state=active]:text-white'
              )}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.modelosImages.map((item, idx) => (
          <TabsContent value={modelosNames[idx]}>
            <div key={idx} className="rounded-md max-w-fit h-72 overflow-hidden">
              <img
                src={item.src}
                alt={data.modelos[idx]}
                className="w-full h-full rounded-md object-cover animate-fade-right"
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
