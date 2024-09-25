import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const projects = [
  { title: 'Casas Infonavit', budget: '$3 MDP' },
  { title: 'Proyectos desde', budget: '$400,000' },
  { title: 'Proyectos desde', budget: '$1 MDP' },
  { title: 'Proyectos desde', budget: '$2 MDP' },
  { title: 'Proyectos desde', budget: '$3 MDP' }
];

export function PresupuestoCarousel() {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className="pl-[max(16px,calc((100%-1260px)/2+16px))] ml-auto">
        <CarouselContent className="flex gap-8">
          {projects.map((project, idx) => (
            <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Card className="group bg-card-foreground border-none rounded-md w-72 h-[192px] hover:bg-[#BFDEE3] cursor-pointer hover:duration-200 ease-in-out">
                <CardContent className="flex flex-col justify-between p-4 h-full">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
