import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// import alboradasPicnic from '@/assets/alboradas-mesas-picnic.webp';
// import parqueAcceso from '@/assets/parque-acceso.jpg';
// import casaClub from '@/assets/casa-club.jpg';
// import corredorDominio from '@/assets/corredor-dominio.jpg';
// import dominioCumbres from '@/assets/dominio-cumbres-master.webp';
// import dominioHuasteca from '@/assets/dominiohuasteca-render.webp';
// import miriaAereo from '@/assets/miria_parque_aereo.webp';
// import parqueGrande from '@/assets/parque-grande.jpg';
// import porticoMontessa from '@/assets/portico-montessa.jpg';
// import rdsl from '@/assets/rdsl.jpg';
// import residencialToscana from '@/assets/residencial-toscana.jpg';

import gvImage1 from '@/assets/gran-venta/gv-carrousel-1.webp';
import gvImage2 from '@/assets/gran-venta/gv-carrousel-2.webp';
import gvImage3 from '@/assets/gran-venta/gv-carrousel-3.webp';
import gvImage4 from '@/assets/gran-venta/gv-carrousel-4.webp';
import gvImage5 from '@/assets/gran-venta/gv-carrousel-5.webp';
import gvImage6 from '@/assets/gran-venta/gv-carrousel-6.webp';
import gvImage7 from '@/assets/gran-venta/gv-carrousel-7.webp';
import gvImage8 from '@/assets/gran-venta/gv-carrousel-8.webp';
import gvImage9 from '@/assets/gran-venta/gv-carrousel-9.webp';
import gvImage10 from '@/assets/gran-venta/gv-carrousel-10.webp';
import gvImage11 from '@/assets/gran-venta/gv-carrousel-11.webp';
import gvImage12 from '@/assets/gran-venta/gv-carrousel-12.webp';
import gvImage13 from '@/assets/gran-venta/gv-carrousel-13.webp';
import gvImage14 from '@/assets/gran-venta/gv-carrousel-14.webp';

const carouselImages = [
  { src: gvImage1, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage2, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage3, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage4, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage5, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage6, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage7, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage8, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage9, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage10, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage11, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage12, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage13, alt: 'Foto de proyecto Terra Regia Residencial' },
  { src: gvImage14, alt: 'Foto de proyecto Terra Regia Residencial' },
];
// const images = [
//   { src: alboradasPicnic, alt: 'Alboradas Mesas Picnic' },
//   { src: parqueAcceso, alt: 'Parque Acceso' },
//   { src: casaClub, alt: 'Casa Club' },
//   { src: corredorDominio, alt: 'Corredor Dominio' },
//   { src: dominioCumbres, alt: 'Dominio Cumbres' },
//   { src: dominioHuasteca, alt: 'Dominio Huasteca' },
//   { src: miriaAereo, alt: 'Miria Parque Aéreo' },
//   { src: parqueGrande, alt: 'Parque Grande' },
//   { src: porticoMontessa, alt: 'Pórtico Montessa' },
//   { src: rdsl, alt: 'RDSL' },
//   { src: residencialToscana, alt: 'Residencial Toscana' },
// ];

export const GranVentaCarousel = () => {
  return (
    <div className="w-full px-0 lg:px-0">
      <Carousel
        opts={{
          loop: true,
          align: 'start',
        }}
        className="w-full">
        ,
        <CarouselContent className="-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/3 lg:basis-1/3">
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
        <div className="hidden md:block">
          <CarouselPrevious className="left-10 -translate-x-1/2" />
          <CarouselNext className="right-10 translate-x-1/2" />
        </div>
      </Carousel>
    </div>
  );
};
