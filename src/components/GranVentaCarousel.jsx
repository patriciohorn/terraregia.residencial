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

const images = [
  { src: alboradasPicnic, alt: 'Alboradas Mesas Picnic' },
  { src: parqueAcceso, alt: 'Parque Acceso' },
  { src: casaClub, alt: 'Casa Club' },
  { src: corredorDominio, alt: 'Corredor Dominio' },
  { src: dominioCumbres, alt: 'Dominio Cumbres' },
  { src: dominioHuasteca, alt: 'Dominio Huasteca' },
  { src: miriaAereo, alt: 'Miria Parque Aéreo' },
  { src: parqueGrande, alt: 'Parque Grande' },
  { src: porticoMontessa, alt: 'Pórtico Montessa' },
  { src: rdsl, alt: 'RDSL' },
  { src: residencialToscana, alt: 'Residencial Toscana' },
];

export const GranVentaCarousel = () => {
  return (
    <div className="w-full px-0 lg:px-0">
      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/4">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <img
                  src={image.src.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center lg:hover:scale-105 lg:transition-all lg:duration-400 lg:ease-in"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="hidden md:block">
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </div> */}
      </Carousel>
    </div>
  );
};
