import { BadgePercent } from 'lucide-react';

function PromotionBannerSm({ promocion, small }: any) {
  return (
    <div
      className={`relative p-4 bg-[#bfdee3]/80 backdrop-blur-sm rounded-sm shadow-md h-fit flex gap-3 items-center`}>
      <div className="flex-shrink-0 self-start w-7 h-7 bg-[#ddeef0] rounded-[0.5rem] inline-flex items-center justify-center">
        <BadgePercent
          className="w-5 h-5 text-[#192a33]"
          strokeWidth={2}
        />
      </div>
      <div className="flex-col justify-center gap-y-2">
        <p className="font-medium text-sm uppercase text-[#314e59]">
          {promocion.titulo_promocion}
        </p>
        <p className="text-lg leading-6 text-[#192a33] max-w-[25em] font-medium">
          {promocion.descripcion_promocion}
        </p>
        <p className="text-sm font-medium text-balance text-[#345c6a]">
          {promocion.nota_promocion}
        </p>
      </div>
    </div>
  );
}

export default PromotionBannerSm;
