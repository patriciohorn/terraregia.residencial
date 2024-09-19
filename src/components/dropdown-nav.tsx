import { sluglify } from '@/lib/utils';
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
      { label: 'Apodaca', href: '/ubicacion/apodaca' },
      { label: 'Salinas Victoria', href: '/ubicacion/salinas-victoria' }
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
      { label: 'Desde $400,000', href: 'costo/400000' },
      { label: 'Desde 1MDP', href: 'costo/1000000' },
      { label: 'Desde 2MDP', href: 'costo/2000000' },
      { label: 'Desde 3MDP', href: 'costo/3000000' }
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
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="flex-1 justify-start  bg-red-500 ">
            <MapPin className="w-4 h-4 me-2" />
            Ubicación
            <ChevronDown className="w-4 h-4 ml-auto" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((location) => (
            <DropdownMenuItem>
              <a href={`/ubicacion/${location.path}`}>{location.title}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-px h-6 bg-zinc-200 mx-px"></div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex-1 justify-start rounded-none">
              <Home className="w-4 h-4 me-2" />
              Tipo de Propiedad
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {['Todas', '2 plantas', '3 plantas'].map((property) => (
              <DropdownMenuCheckboxItem key={property}>{property}</DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="w-px h-6 bg-zinc-200 mx-px"></div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex-1 justify-start rounded-l-md rounded-r-full ">
              <CircleDollarSign className="w-4 h-4 me-2" />
              Costo
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {[
              'Todas',
              '$0 - $1M',
              '$1M - $2M',
              '$2M - $3M',
              '$3M - $4M',
              '$4M - $5M',
              '&gt; $5M'
            ].map((cost) => (
              <DropdownMenuCheckboxItem key={cost}>{cost}</DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
    </nav>
  );
}
