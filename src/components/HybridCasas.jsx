import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import VariantFooter from "./variant-footer";
import { useState } from "react";
import fachadaSevilla from "../assets/miria/sevilla/fachada.webp";
import fachadaJacaranda from "../assets/miria/jacaranda/fachada.webp";
import fachadaOrquidea from "../assets/miria/orquidea/fachada.webp";

const HybridCasas = ({ modelos, titulo, nombreProyecto }) => {
  const [selectedTab, setSelectedTab] = useState("sevilla");

  const fachadaImages = {
    sevilla: fachadaSevilla.src,
    jacaranda: fachadaJacaranda.src,
    orquidea: fachadaOrquidea.src,
  };

  const selectedModelo = modelos.filter(
    (modelo) => modelo.nombre === selectedTab,
  );

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-20">
      <div className="flex flex-col justify-center">
        <Tabs
          defaultValue={selectedTab}
          onValueChange={setSelectedTab}
          className="flex flex-col items-center overflow-x-hidden"
        >
          <TabsList className=" bg-transparent w-full gap-4 ">
            {modelos.map((modelo) => (
              <TabsTrigger
                key={modelo.nombre}
                value={modelo.nombre}
                className={cn(
                  "hidden sm:flex bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base font-medium w-28 ",
                  selectedTab === modelo.nombre &&
                    "data-[state=active]:bg-black data-[state=active]:text-white",
                )}
              >
                {modelo.nombre[0].toUpperCase() + modelo.nombre.slice(1)}
              </TabsTrigger>
            ))}
            {/* Mobile */}
            <div className="sm:hidden relative w-full">
              <Carousel
                opts={{
                  loop: false,
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {modelos.map((modelo) => (
                    <CarouselItem
                      key={modelo.nombre}
                      className="basis-1/1 sm:basis-1/4"
                    >
                      <TabsTrigger
                        key={modelo.nombre}
                        value={modelo.nombre}
                        className={cn(
                          "bg-[#D9D9D9] text-black hover:text-white hover:bg-black text-base font-medium w-28",
                          selectedTab === modelo.nombre &&
                            "data-[state=active]:bg-black data-[state=active]:text-white",
                        )}
                      >
                        {modelo.nombre}
                      </TabsTrigger>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </TabsList>

          {/* {modelos.map((modelo) => (
            <TabsContent
              value={modelo.nombre}
              key={modelo.nombre}
              className="mt-6 flex flex-col justify-between items-center"
            >
              <div className="mb-4 overflow-hidden aspect-video h-48 sm:h-72 rounded-md animate-fade-right">
                <img
                  src={fachadaImages[selectedTab]}
                  alt={`Modelo ${selectedTab}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <VariantFooter modelo={modelo} />
            </TabsContent>
          ))} */}
          <div className="mt-6 flex flex-col justify-between items-center w-full">
            <div className=" overflow-hidden aspect-video h-48 sm:h-72 rounded-md animate-fade-right ">
              <img
                src={fachadaImages[selectedTab]}
                alt={`Modelo ${selectedTab}`}
                className="w-full h-full object-cover animate-fade-right"
              />
            </div>
            <VariantFooter modelo={selectedModelo[0]} />
          </div>
        </Tabs>
      </div>
      <Carousel className="bg-[#E6E9E9] rounded-[12px] p-4 sm:p-6">
        <CarouselContent key={selectedTab}>
          {selectedModelo[0].detallesPlanta.map((modelo, i) => (
            <CarouselItem
              key={`${selectedTab}-${i}`}
              className="animate-fade-right"
            >
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden aspect-video flex items-center justify-center">
                  <img
                    src={modelo.image}
                    alt="planta"
                    className="rotate-90 scale-75 w-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-sm p-4 sm:p-6">
                  <h3 className="text-xl font-heading mb-4 sm:mb-6">
                    {modelo.titulo}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
                    {modelo.detalles?.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm text-neutral-600 flex items-center gap-2"
                      >
                        <CircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-neutral-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 -translate-y-10 sm:left-2 sm:translate-y-0" />
        <CarouselNext className=" -right-2 -translate-y-10 sm:right-2 sm:translate-y-0" />
      </Carousel>
    </div>
  );
};

export default HybridCasas;
