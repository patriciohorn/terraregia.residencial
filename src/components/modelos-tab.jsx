import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function ModelosTabs({ data, onModelChange }) {
  const [activeTab, setActiveTab] = useState(data.modelos[0]);
  const modelosNames = data.modelos.map((item) => item.model);
  console.log('Activetab', activeTab);
  const handleTabChange = (model) => {
    setActiveTab(model);
    onModelChange(model);
  };
  return (
    <Tabs
      defaultValue={activeTab.model}
      className="w-full"
      onValueChange={(value) => {
        const selectedModel = data.modelos.find((model) => model.model === value);
        if (selectedModel) {
          handleTabChange(selectedModel);
        }
      }}>
      <TabsList className="bg-white">
        <div className="flex justify-between gap-5 flex-wrap">
          {modelosNames.map((item, idx) => (
            <TabsTrigger
              value={item}
              key={item}
              className="data-[state=active]:bg-none data-[state=active]:shadow-none p-0">
              <Button
                key={`${item}-${idx}`}
                size="sm"
                className={cn(
                  'bg-[#D9D9D9] text-black hover:text-white text-base min-w-24 font-medium w-28',
                  activeTab.model === item && 'bg-black text-white'
                )}>
                {item}
              </Button>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
      {data.modelosImages.map((item, idx) => (
        <TabsContent value={modelosNames[idx]}>
          <div className="rounded-md overflow-hidden h-56 mt-14">
            <img
              key={idx}
              src={item.src}
              alt={data.modelos[idx]}
              className="w-full h-full object-cover animate-fade-right"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
