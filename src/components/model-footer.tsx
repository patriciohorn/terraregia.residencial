import { Link } from './link';
import { CloudDownload } from 'lucide-react';

interface ModelFooterProps {
  items: string[];
  brochure: string;
}

export function ModelFooter({ items, brochure }: ModelFooterProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center w-full justify-center  sm:justify-between  gap-y-6 gap-x-8 sm:max-w-md sm:mx-auto">
      <div className="flex items-center gap-x-8 justify-between">
        {items.map((item: string) => (
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-xs text-center sm:text-base font-medium">{item.split(':')[0]}</h3>
            <p className="text-base text-neutral-600">{item.split(':')[1]}</p>
          </div>
        ))}
      </div>

      {brochure && (
        <Link
          href={brochure}
          target="_blank"
          variant="default"
          className="flex items-center gap-2 text-sm w-fit ">
          <CloudDownload className="w-4 h-4" />
          <span>Brochure</span>
        </Link>
      )}
    </div>
  );
}
