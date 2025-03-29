import { ExternalLink } from 'lucide-react';

import { costoFilter } from '@/stores/filterStore';

export function PresupuestoCard({ card }: any) {
  function handleNavigation(value: any) {
    costoFilter.set(value);
  }
  return (
    <a
      href="/proyectos"
      onClick={() => handleNavigation(card.precio.slice(1))}>
      <div className="flex flex-col justify-between px-6 py-4 aspect-[3/2] sm:aspect-[4/3]  bg-card-foreground shadow-sm border-none rounded-md group lg:hover:bg-[#BFDEE3]   cursor-pointer transition-all duration-200 ease-in overflow-hidden">
        <div>
          <h3 className="font-light text-2xl text-black">
            {card.titulo}
          </h3>
          <p className="text-4xl font-heading text-black">
            {card.precio}
          </p>
        </div>
        <span className="self-end inline-flex items-center justify-center transition-colors duration-300 ease-in-out">
          <ExternalLink
            size={32}
            className="opacity-1 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:text-white"
          />
        </span>
      </div>
    </a>
  );
}
