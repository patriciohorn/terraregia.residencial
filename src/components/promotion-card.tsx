import { PromoSpec } from './promo-spec';
import {
  MapPin,
  Expand,
  BadgeDollarSign,
  HandCoins,
  House,
  LandPlot,
} from 'lucide-react';
import { sluglify } from '@/lib/utils';
import { cn } from '@/lib/utils';
import PromotionBannerSm from './promotion-banner-sm';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
export function PromotionCardd({ proyecto, small }: any) {
  // const path = sluglify(
  //   promotion.nombre_proyecto
  //     .toLowerCase()
  //     .normalize('NFD')
  //     .replace(/[\u0300-\u036f]/g, '')
  // );

  return (
    <a href={`/proyectos/${proyecto.slug}`}>
      <article className=" group transition-all duration-200 ease-out cursor-pointer">
        <div
          className="relative overflow-hidden rounded-md aspect-[3/2] p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${proyecto.content.imagen_portada.filename})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="bg-gradient-to-t from-black/60 from-5% via-transparent to-transparent absolute w-full h-full inset-0"></div>
          <div className="bg-gradient-to-bl from-black/40 from-5% via-transparent to-transparent absolute w-full h-full inset-0"></div>
          <div className="flex justify-between gap-x-8">
            <PromotionBannerSm
              promocion={proyecto.content.promociones[0]}
            />
            {proyecto.content.promociones[0].area.length > 0 && (
              <div className="flex flex-col items-center h-fit z-20">
                <span className="text-xs text-neutral-100 mb-0.5">
                  desde
                </span>
                <div className="flex gap-2">
                  {' '}
                  <Expand
                    size={18}
                    className="flex-shrink-0 text-white"
                    strokeWidth={2}
                  />
                  <span className="leading-4 text-white font-heading">
                    {proyecto.content.promociones[0].area}m²
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between text-white z-20">
            {proyecto.content.promociones[0].mensualidades.length >
              0 && (
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="text-neutral-100 text-sm">
                    Mensualidades desde
                  </span>
                  <span className="leading-4 font-heading text-2xl">
                    {proyecto.content.promociones[0].mensualidades}
                  </span>
                </div>
              </div>
            )}
            <div className="flex flex-col ml-auto">
              <span className="text-neutral-100 text-sm">
                Terrenos residenciales desde
              </span>
              <span className="leading-4 text-2xl font-heading text-right">
                {proyecto.content.precio}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-row justify-between items-center">
          <div className={cn(small ? '' : 'flex flex-col gap-y-1')}>
            <h3
              className={cn(
                `text-xl font-heading tracking-[0.01em] leading-4`,
                small ? 'sm:text-xl' : 'sm:text-2xl'
              )}>
              {proyecto.content.nombre}
            </h3>
            <div className="flex gap-1 items-center text-[#827D7D]">
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
      </article>
    </a>
  );
}
