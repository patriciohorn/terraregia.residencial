import { ChevronRight } from 'lucide-react';

export function PresupuestoCard({ card }: any) {
  return (
    <a href="#">
      <div className="flex flex-col justify-between px-6 py-4 h-48 bg-card-foreground shadow-sm border-none rounded-md group lg:hover:bg-[#BFDEE3] cursor-pointer transition-colors duration-200 ease-in-out">
        <div>
          <h3 className="font-light text-2xl text-black">{card.title}</h3>
          <p className="text-4xl font-heading text-black">{card.precio}</p>
        </div>
        <span className="self-end inline-flex items-center justify-center border border-black lg:group-hover:bg-black rounded-full w-8 h-8 transition-colors duration-300 ease-in-out">
          <ChevronRight className="text-black lg:group-hover:text-white" />
        </span>
      </div>
    </a>
  );
}
