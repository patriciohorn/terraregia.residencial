import { Image } from 'astro:assets';
import { MapPin, Asterisk } from 'lucide-react';

export function PromotionCardd({ project }: any) {
  return (
    <article
      className="rounded-md overflow-hidden bg-card-foreground shadow-sm group hover:shadow-md transition-all hover:bg-[#dadddd] duration-200 ease-out cursor-pointer p-8 space-y-6"
      slot="slide">
      <div className="flex flex-col space-y-2">
        <div className="bg-[#827d7d] px-5 py-2.5 rounded-[12px]  flex flex-col justify-center text-center h-[68px]">
          <p className="text-lg leading-6 tracking-[0.01em] text-[#f8f7f7] font-medium text-balance">
            {project.mainPromo}
          </p>
          {project.mainPromoSmall && (
            <p className="inline-flex items-center justify-center text-sm leading-6 tracking-[0.01em] text-[#f8f7f7] font-medium">
              {project.mainPromoSmall}
              <span className="ml-0.5 -mt-1">
                <Asterisk className="w-3 h-3" />
              </span>
            </p>
          )}
        </div>
        {project.secondaryPromo && (
          // <p className="text-sm absolute top-2">Elige desde:</p>
          <div className="bg-[#292828] px-5 py-2.5 rounded-[12px] flex flex-col justify-center text-center h-[68px]">
            <p className="text-lg leading-6 tracking-[0.01em] text-[#f8f7f7] font-medium text-balance">
              {project.secondaryPromo}
            </p>
            <p className="text-sm leading-6 tracking-[0.01em] text-[#f8f7f7] font-medium text-balance">
              {project.secondaryPromoSmall}
            </p>
          </div>
        )}
      </div>

      <div className="aspect-[4/3] overflow-hidden rounded-[12px]">
        <img
          src={project.images}
          alt={`Imagen de proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:transform group-hover:translate3d(0, 0, 0) group-hover:scale-105 group-hover:rotateX(0deg) group-hover:rotateY(0deg)"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl text-[#292828] font-heading tracking-[0.01em]">{project.title}</h3>
        <div className="flex gap-1 items-center text-[#827D7D]">
          <MapPin className="h-4 w-auto" />
          <p className="text-sm font-medium">{project.location}</p>
        </div>
      </div>
      {/* <!-- <div className="space-y-6">
        <p className="font-medium text-lg leading-6 h-12">{project.mainPromotion}</p>
        <p className="text-neutral-600 ">{project.details}</p>
      </div> --> */}
    </article>
  );
}
