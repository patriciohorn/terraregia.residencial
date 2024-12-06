import { PromoSpec } from './promo-spec';
import { MapPin, Asterisk } from 'lucide-react';
import { sluglify } from '@/lib/utils';
import BuenFinSVG from '../assets/buen-fin.svg';

export function PromotionCardd({ project }: any) {
  const path = sluglify(
    project.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  );

  return (
    <a href={`/proyectos/${path}`}>
      <article className="rounded-md  bg-card-foreground shadow-sm group transition-all lg:hover:bg-[#BFDEE3] duration-200 ease-out cursor-pointer p-6 h-full   ">
        <div className="h-[142px] bg-[#BFDEE3] lg:group-hover:bg-black px-6 py-4 rounded-[4px] flex flex-col justify-center gap-1.5  relative ">
          {/* <img
            src={BuenFinSVG.src}
            alt="Buen Mes logo"
            className="absolute -top-3.5 -right-3 h-12"
          /> */}
          <p className=" text-lg leading-6 font-medium group-hover:text-white text-balance text-[#192a33]">
            {project.mainPromo}
          </p>
          {project.mainPromoSmall && (
            <p className="inline-flex items-center text-sm leading-4 tracking-[0.01em] text-[#345c6a] font-medium lg:group-hover:text-white max-w-[20em]">
              {project.mainPromoSmall}
              <span className="-mt-2">
                <Asterisk className="w-2 h-2" />
              </span>
            </p>
          )}
        </div>

        {/* Image Section  */}
        <div className="mt-2 overflow-hidden aspect-[16/9] rounded-[4px] relative z-0">
          <img
            src={project.images}
            alt={`Imagen de proyecto ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out lg:group-hover:transform lg:group-hover:translate3d(0, 0, 0) lg:group-hover:scale-105 lg:group-hover:rotateX(0deg) lg:group-hover:rotateY(0deg)"
          />
        </div>

        <div>
          {/*  Content */}
          <div className="mt-4">
            <h3 className="text-xl text-[#292828] font-heading tracking-[0.01em]">
              {project.title}
            </h3>
            <span className="flex items-center text-[#827D7D] text-sm font-medium">
              {/* <MapPin className="h-3 w-3 mr-1" /> */}
              {project.location}
            </span>
          </div>
          <ul className="mt-6 space-y-2.5">
            {project.specs.map((spec: string, idx: number) => (
              <PromoSpec key={idx} text={spec} icon={project.icons[idx]} />
            ))}
          </ul>
        </div>
      </article>
    </a>
  );
}
