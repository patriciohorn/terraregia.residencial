import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function ModelosTabs({ data }) {
  const [activeTab, setActiveTab] = useState(data.modelos[0]);

  return (
    <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
      <TabsList className="bg-white">
        <div className="flex justify-between gap-5 flex-wrap">
          {data.modelos.map((item) => (
            <TabsTrigger
              value={item}
              key={item}
              className="data-[state=active]:bg-none data-[state=active]:shadow-none p-0">
              <Button
                size="sm"
                className={cn(
                  'bg-[#D9D9D9] text-black hover:text-white text-base min-w-24 font-medium w-28',
                  activeTab === item && 'bg-black text-white'
                )}>
                {item}
              </Button>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
      {data.modelosImages.map((item, idx) => (
        <TabsContent value={data.modelos[idx]}>
          <div className="rounded-md overflow-hidden h-56 mt-14">
            <img
              key={idx}
              src={item.src}
              alt={data.modelos[idx]}
              className="w-full h-full object-cover animate-fadeIn"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
