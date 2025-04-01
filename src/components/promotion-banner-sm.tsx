import { BadgePercent } from 'lucide-react';

function PromotionBannerSm({ promocion, small }: any) {
  return (
    <div
      className={` rounded-[18px] p-4 bg-[#bfdee3]/70 backdrop-blur-sm flex gap-2 sm:gap-3 items-center shadow-lg`}>
      <div className="hidden sm:flex-shrink-0 self-start w-6 h-6 sm:w-8 sm:h-8  sm:inline-flex items-center justify-center">
        <BadgePercent
          className="sm:w-6 sm:h-6 text-[#192a33]"
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="font-medium text-sm uppercase text-[#314e59]">
          {promocion.titulo_promocion}
        </p>
        <p className="text-base sm:text-lg leading-6 text-[#192a33] font-medium">
          {promocion.descripcion_promocion}
        </p>
        <p className="text-sm font-medium text-[#345c6a]">
          {promocion.nota_promocion}
        </p>
      </div>
    </div>
  );
}

export default PromotionBannerSm;
