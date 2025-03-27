import { ChevronRight } from 'lucide-react';

import { costoFilter } from '@/stores/filterStore';

export function PresupuestoCard({ card }: any) {
  function handleNavigation(value: any) {
    costoFilter.set(value);
  }
  return (
    <a
      href="/proyectos"
      onClick={() => handleNavigation(card.precio.slice(1))}>
      <div className="flex flex-col justify-between px-6 py-4 h-48 bg-card-foreground shadow-sm border-none rounded-md group lg:hover:bg-[#BFDEE3]  cursor-pointer transition-colors duration-200 ease-in-out">
        <div>
          <h3 className="font-light text-2xl text-black">
            {card.titulo}
          </h3>
          <p className="text-4xl font-heading text-black">
            {card.precio}
          </p>
        </div>
        <span className="self-end inline-flex items-center justify-center border border-black lg:group-hover:bg-black rounded-full w-8 h-8 transition-colors duration-300 ease-in-out">
          <ChevronRight className="text-black lg:group-hover:text-white" />
        </span>
      </div>
    </a>
  );
}
