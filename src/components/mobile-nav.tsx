import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import whatsappIcon from '@/icons/whatsapp.svg';
import logo from '@/assets/logo-terra-regia.svg';
import { Link } from './link';

// type MenuItem = {
//   title: string;
//   path: string;
// };

// interface itemsProps {
//   blok: MenuItem[];
//   whatsapp: string;
// }

export function MobileNav({ blok }: any) {
  return (
    <div className="flex gap-2">
      <Link
        href={`https://api.whatsapp.com/send/?phone=${blok.whatsapp}`}
        size="icon"
        className="bg-[#25D366]">
        <img
          src={whatsappIcon.src}
          alt="Logo Whatsapp"
          className="w-7 h-7"
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu className="w-7 h-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="py-4">
            <img
              src={logo.src}
              alt="logo Terra Regia"
              className="h-8 w-auto"
              loading="eager"
            />
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            {blok.navegacion.map((item: any) => (
              <Link
                key={item.texto}
                variant={'link'}
                href={item.path}
                className="pl-0 text-lg">
                {item.texto}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
