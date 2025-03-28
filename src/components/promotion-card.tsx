import { PromoSpec } from './promo-spec';
import {
  MapPin,
  Expand,
  BadgeDollarSign,
  HandCoins,
  House,
  LandPlot,
  CalendarCheck2,
} from 'lucide-react';
import { sluglify } from '@/lib/utils';
import { cn } from '@/lib/utils';
import PromotionBannerSm from './promotion-banner-sm';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function PromotionCardd({ proyecto, small }: any) {
  console.log(proyecto);
  return (
    <article className="group">
      <a href={`/proyectos/${proyecto.slug}`}>
        <div
          className="relative aspect-[4/5] sm:aspect-[3/2] rounded-md overflow-hidden p-2 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${proyecto.content.imagen_portada.filename})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute bg-gradient-to-t from-black/50 from-20% to-transparent inset-0"></div>
          <PromotionBannerSm
            promocion={proyecto.content.promociones[0]}
          />

          <div className="p-2 text-neutral-100 flex justify-between z-10">
            {proyecto.content.promociones[0].mensualidades.length >
              0 && (
              <div>
                <div className="flex gap-1 sm:gap-2 text-neutral-200 items-center">
                  <CalendarCheck2
                    size={16}
                    className="hidden sm:flex sm:h-4 sm:w-4"
                  />
                  <span className="text-sm">Mens. desde</span>
                </div>
                <p className="font-heading tracking-[0.01em] text-base sm:text-lg">
                  {proyecto.content.promociones[0].mensualidades}
                </p>
              </div>
            )}
            {proyecto.content.promociones[0].area.length > 0 && (
              <div className="flex flex-col items-center ">
                <div className="flex gap-2 text-neutral-200">
                  <Expand
                    size={16}
                    className="hidden sm:flex sm:h-4 sm:w-4"
                  />
                  <span className="text-sm">desde</span>
                </div>
                <p className="font-heading tracking-[0.01em] text-base sm:text-lg ">
                  {proyecto.content.promociones[0].area}
                  <span className="relative after:content-['²'] after:absolute after:-right-1.5 sm:after:-right-2 after:-top-0.5">
                    m
                  </span>
                </p>
              </div>
            )}

            <div
              className={cn(
                'flex flex-col items-end',
                !proyecto.content.promociones[0].area.length &&
                  !proyecto.content.promociones[0].mensualidades
                  ? 'ml-auto'
                  : ''
              )}>
              <div className="flex items-center gap-2 text-neutral-200 ">
                {proyecto.content.tipo[0].includes('Terrenos') ? (
                  <LandPlot
                    size={16}
                    className="hidden sm:flex sm:h-4 sm:w-4"
                  />
                ) : (
                  <House
                    size={16}
                    className="hidden sm:flex sm:h-4 sm:w-4"
                  />
                )}

                <span className="text-sm  ">
                  {proyecto.content.tipo[0]} desde
                </span>
              </div>
              <p className="font-heading tracking-[0.01em] text-base sm:text-lg">
                {proyecto.content.precio}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between items-center">
          <div className={cn(small ? '' : 'flex flex-col gap-y-1')}>
            <h3
              className={cn(
                `text-xl font-heading tracking-[0.01em] leading-4 text-neutral-950`,
                small ? 'sm:text-xl' : 'sm:text-2xl'
              )}>
              {proyecto.content.nombre}
            </h3>

            <div className="flex gap-1 items-center text-neutral-600 ">
              <MapPin
                className={cn(`w-auto`, small ? 'h-3' : 'h-4')}
              />
              <p className="text-sm font-medium">
                {proyecto.content.ubicacion}
              </p>
            </div>
          </div>

          {small ? (
            <Button
              variant="outline"
              className="cursor-pointer text-sm h-10 sm:h-10 lg:group-hover:bg-black lg:group-hover:text-white transition-colors duration-300 ease-in-out">
              Ver más
            </Button>
          ) : (
            <Button
              variant="outline"
              className="cursor-pointer h-10 sm:h-12 sm:w-[140px] lg:group-hover:bg-black lg:group-hover:text-white transition-colors duration-300 ease-in-out">
              Ver más
            </Button>
          )}
        </div>
      </a>
    </article>
  );
}
