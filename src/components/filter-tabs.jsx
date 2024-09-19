import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from './ui/button';

export function FilterTabs({ allProjects }) {
  const [filters, setFilters] = useState('all');

  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList>
        <Button>
          <TabsTrigger value="todos">Todos</TabsTrigger>
        </Button>
        <Button>
          <TabsTrigger value="casas">Casas</TabsTrigger>
        </Button>
        <Button>
          <TabsTrigger value="terrenos">Terrenos</TabsTrigger>
        </Button>
      </TabsList>
      <TabsContent value="casas">Casas</TabsContent>
      <TabsContent value="terrenos">Terrenos</TabsContent>
    </Tabs>
  );
}
