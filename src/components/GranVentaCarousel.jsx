import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import alboradasPicnic from '@/assets/alboradas-mesas-picnic.webp';
import parqueAcceso from '@/assets/parque-acceso.jpg';
import casaClub from '@/assets/casa-club.jpg';
import corredorDominio from '@/assets/corredor-dominio.jpg';
import dominioCumbres from '@/assets/dominio-cumbres-master.webp';
import dominioHuasteca from '@/assets/dominiohuasteca-render.webp';
import miriaAereo from '@/assets/miria_parque_aereo.webp';
import parqueGrande from '@/assets/parque-grande.jpg';
import porticoMontessa from '@/assets/portico-montessa.jpg';
import rdsl from '@/assets/rdsl.jpg';
import residencialToscana from '@/assets/residencial-toscana.jpg';

export const GranVentaCarousel = () => {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem className=" md:basis-1/3 lg:basis-1/4">
          <img
            src={alboradasPicnic.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="b md:basis-1/2 lg:basis-1/3">
          <img
            src={parqueAcceso.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={casaClub.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={corredorDominio.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={dominioCumbres.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={dominioHuasteca.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={miriaAereo.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={parqueGrande.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={porticoMontessa.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={rdsl.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
        <CarouselItem className="bg- md:basis-1/2 lg:basis-1/3">
          <img
            src={residencialToscana.src}
            class="w-full h-full object-cover object-center"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
