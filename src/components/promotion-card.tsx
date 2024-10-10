import { PromoSpec } from './promo-spec';
import { MapPin, Asterisk } from 'lucide-react';

export function PromotionCardd({ project }: any) {
  console.log(project.icons);
  return (
    <article className="rounded-md overflow-hidden bg-card-foreground shadow-sm group transition-all hover:bg-[#BFDEE3] duration-200 ease-out cursor-pointer h-[470px] ">
      <div className="bg-[#BFDEE3] px-6 h-20 rounded-[4px] flex flex-col justify-center">
        <p className="text-lg leading-6 font-medium">{project.mainPromo}</p>
        {project.mainPromoSmall && (
          <p className="inline-flex items-center text-sm leading-6 tracking-[0.01em] text-neutral-700 font-medium">
            {project.mainPromoSmall}
            <span className="-mt-2">
              <Asterisk className="w-2 h-2" />
            </span>
          </p>
        )}
      </div>
      {/* Image Section  */}
      <div className=" overflow-hidden aspect-[16/9]">
        <img
          src={project.images}
          alt={`Imagen de proyecto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:transform group-hover:translate3d(0, 0, 0) group-hover:scale-105 group-hover:rotateX(0deg) group-hover:rotateY(0deg)"
        />
      </div>

      <div className="px-6 pb-6">
        {/* Header Section */}
        <div className="mt-4">
          <h3 className="text-xl text-[#292828] font-heading tracking-[0.01em]">{project.title}</h3>
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
  );
}
