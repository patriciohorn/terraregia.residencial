import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { cn } from '@/lib/utils';

export function ModelosTabs({ data, onModelChange }) {
  const [activeTab, setActiveTab] = useState(data.modelos[0]);
  const modelosNames = data.modelos.map((item) => item.model);

  const handleTabChange = (model) => {
    setActiveTab(model);
    onModelChange(model);
  };
  return (
    <div className="w-full overflow-hidden">
      <Tabs
        defaultValue={activeTab.model}
        className="w-full space-y-4"
        onValueChange={(value) => {
          const selectedModel = data.modelos.find((model) => model.model === value);
          if (selectedModel) {
            handleTabChange(selectedModel);
          }
        }}>
        <TabsList className="sm:hidden bg-transparent">
          <Carousel
            opts={{
              loop: 'true',
              align: 'start'
            }}>
            <CarouselContent>
              {modelosNames.map((item, idx) => (
                <CarouselItem
                  className="basis-1/4
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
        <TabsList className="hidden sm:flex sm:flex-wrap sm:justify-between sm:gap-4 sm:bg-white">
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
            <div className="rounded-md mt-14 h-72 overflow-hidden">
              <img
                key={idx}
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
