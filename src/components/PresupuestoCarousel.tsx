import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel-top-btn';

const projects = [
  { title: 'Casas Infonavit', budget: '$3 MDP', path: '/costo' },
  { title: 'Proyectos desde', budget: '$1 MDP', path: '/costo/1000000' },
  { title: 'Proyectos desde', budget: '$2 MDP', path: '/costo/2000000' },
  { title: 'Proyectos desde', budget: '$3 MDP', path: '/costo/3000000' }
];

export function PresupuestoCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start'
      }}>
      <CarouselContent className="-ml-8">
        {projects.map((project, idx) => (
          <CarouselItem key={idx} className="pl-8 md:basis-1/2 lg:basis-1/4">
            <a href={project.path}>
              <Card className="h-48 bg-card-foreground shadow-sm border-none rounded-md group hover:bg-[#BFDEE3] cursor-pointer hover:duration-200 ease-in-out">
                <CardContent className="flex flex-col justify-between px-6 py-4 h-full">
                  <div>
                    <h3 className="font-light text-2xl text-black">{project.title}</h3>
                    <p className="text-4xl font-heading text-black">{project.budget}</p>
                  </div>
                  <Button
                    size="iconsm"
                    className="self-end bg-transparent border border-black group-hover:bg-black ">
                    <ChevronRight className=" text-black group-hover:text-white" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" /> */}
    </Carousel>
  );
}
