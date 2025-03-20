import { Link } from './link';
import { CloudDownload } from 'lucide-react';

const VariantFooter = ({ modelo }: any) => {
  const titles = ['Terreno', 'Lote', 'Construcción'];
  const details = [modelo.terreno, modelo.lote, modelo.construccion];

  return (
    <div className="mt-4 sm:mt-6 flex flex-wrap items-center w-full justify-center sm:justify-center gap-y-6 gap-x-12 ">
      <div className="flex items-center gap-x-8 justify-between">
        {details.map((item: string, idx: number) => (
          <div
            className="flex flex-col items-center"
            key={titles[idx]}>
            <h3 className="text-sm text-neutral-600 text-center font-medium">
              {titles[idx]}
            </h3>
            <p className="text-lg font-medium text-black tracking-[0.01em]">
              {item}
            </p>
          </div>
        ))}
      </div>
      {modelo.brochure && (
        <Link
          href={modelo.brochure.url}
          target="_blank"
          variant="default"
          className="flex items-center gap-2 text-sm w-fit ">
          <CloudDownload className="w-5 h-5" />
          <span>Brochure</span>
        </Link>
      )}
    </div>
  );
};

export default VariantFooter;
