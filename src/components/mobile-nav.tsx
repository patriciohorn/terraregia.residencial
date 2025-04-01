import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import whatsappIcon from '@/icons/whatsapp.svg';

import { Link } from './link';

// type MenuItem = {
//   title: string;
//   path: string;
// };

// interface itemsProps {
//   blok: MenuItem[];
//   whatsapp: string;
// }

export function MobileNav({ blok, whatsapp }: any) {
  return (
    <div className="flex gap-2">
      <Link
        href={`https://api.whatsapp.com/send/?phone=${blok.whatsapp}`}
        size="icon"
        className="bg-[#25D366]">
        <img
          src={whatsappIcon.src}
          alt="Logo Whatsapp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="py-4">
            <a href="/">
              <span className="sr-only">Logo Terra Regia</span>
              <img
                src={blok.logo.filename}
                alt={blok.logo.alt}
                className="h-full w-full max-w-36"
                loading="eager"
                width={144}
                height={28}
              />
            </a>
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            {blok.links_navegacion.map((item: any) => (
              <Link
                key={item.id}
                variant={'link'}
                href={`/${item.link.cached_url}`}
                className="pl-0 text-lg">
                {item.texto}
              </Link>
            ))}
          </div>
          <div className="mt-[52px] flex gap-2">
            {blok.links_social_media.map((item: any) => (
              <Link
                key={item.titulo}
                href={item.link}
                size="icon"
                className="h-10 w-10 shadow-sm hover:opacity-90"
                target="_blank">
                <img
                  src={item.icono}
                  alt={item.titulo}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
