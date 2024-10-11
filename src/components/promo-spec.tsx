import { LandPlot, House, CircleDollarSign, Grid2X2 } from 'lucide-react';

interface SpecProps {
  icon: string;
  text: string;
}
export function PromoSpec({ icon, text }: SpecProps) {
  return (
    <div className="flex items-center gap-2">
      {icon === 'House' && <House size={16} className="w-5 h-5 text-[#676262]" />}
      {icon === 'LandPlot' && <LandPlot size={16} className="w-5 h-5 text-[#676262]" />}
      {icon === 'CircleDollarSign' && (
        <CircleDollarSign size={16} className="w-5 h-5 text-[#676262]" />
      )}
      {icon === 'Grid' && <Grid2X2 size={16} className="w-5 h-5 text-[#676262]" />}
      <p className="text-sm font-medium text-[#676262]">{text}</p>
    </div>
  );
}
