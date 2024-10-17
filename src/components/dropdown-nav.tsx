import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { MapPin, CircleDollarSign, ChevronDown, Home } from 'lucide-react';

interface NavItem {
  label: string;
  items: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Ubicación',
    items: [
      { label: 'Todos', href: '/ubicacion' },
      { label: 'Dominio Cumbres', href: '/ubicacion/dominio-cumbres' },
      { label: 'Valle Condesa', href: '/ubicacion/valle-condesa' },
      { label: 'Apodaca', href: '/ubicacion/apodaca' }
    ]
  },
  {
    label: 'Tipo de Propiedad',
    items: [
      { label: 'Todos', href: '/tipo-de-propiedad' },
      { label: 'Casas', href: 'tipo-de-propiedad/casas' },
      { label: 'Terrenos', href: '/tipo-de-propiedad/terrenos' }
    ]
  },
  {
    label: 'Costo',
    items: [
      // { label: 'Infonavit', href: '/costo' },
      { label: 'Desde $500,000', href: 'costo/500000' },
      { label: 'Desde 1MDP', href: 'costo/1000000' },
      { label: 'Desde 2MDP', href: 'costo/2000000' },
      { label: 'Desde 3MDP', href: 'costo/3000000' },
      { label: 'Desde 5MDP', href: 'costo/5000000' }
    ]
  }
];

export function DropdownNav() {
  return (
    <nav className="flex items-center justify-between gap-x-5 w-full rounded-full shadow-md p-3 text-black bg-white">
      {navItems.map((item) => (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="sm" className="text-sm">
              {item.label === 'Ubicación' && <MapPin className="w-4 h-4 mr-1" />}
              {item.label === 'Tipo de Propiedad' && <Home className="w-4 h-4 mr-1" />}
              {item.label === 'Costo' && <CircleDollarSign className="w-4 h-4 mr-1" />}
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-42 mt-3 border border-black p-3 rounded-sm">
            {item.items.map((subItem) => (
              <DropdownMenuItem key={subItem.href}>
                <a href={subItem.href} className="w-full font-medium text-sm">
                  {subItem.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}
