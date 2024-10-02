import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import whatsapp from '@/icons/whatsapp.svg';
import logo from '@/assets/logo-terra-regia.svg';
import { Link } from './link';

type MenuItem = {
  title: string;
  path: string;
};

interface itemsProps {
  items: MenuItem[];
}

export function MobileNav({ items }: itemsProps) {
  return (
    <div className="flex gap-2">
      <Link href="#" size="icon" className="bg-[#25D366]">
        <img src={whatsapp.src} alt="Logo Whatsapp" className="w-7 h-7" />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <Menu className="w-7 h-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="py-4">
            <img src={logo.src} alt="logo Terra Regia" className="h-8 w-auto" loading="eager" />
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            {items.map((item, idx) => (
              <Link variant={'link'} href={item.path} className="pl-0 text-lg">
                {item.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
