import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  ubicacionFilter,
  tipoFilter,
  costoFilter,
} from '@/stores/filterStore';

import { cn } from '@/lib/utils';

import {
  MapPin,
  CircleDollarSign,
  ChevronDown,
  Home,
} from 'lucide-react';

interface NavItem {
  label: string;
  filterKey: string;
  items: { label: string; filterValue: string }[]; //
}

const navItems: NavItem[] = [
  {
    label: 'Ubicación',
    filterKey: 'ubicacion', // Added
    items: [
      { label: 'Todos', filterValue: '' },
      { label: 'Dominio Cumbres', filterValue: 'Dominio Cumbres' },
      { label: 'Valle Condesa', filterValue: 'Valle Condesa' },
      { label: 'Apodaca', filterValue: 'Apodaca' },
    ],
  },
  {
    label: 'Tipo de Propiedad',
    filterKey: 'tipo', // Added
    items: [
      { label: 'Todos', filterValue: '' },
      { label: 'Casas', filterValue: 'Casas' },
      { label: 'Terrenos', filterValue: 'Terrenos' },
    ],
  },
  {
    label: 'Costo',
    filterKey: 'costo', // Added
    items: [
      { label: 'Todos', filterValue: '' },
      { label: 'Desde $500,000', filterValue: '500,000' },
      { label: 'Desde 1MDP', filterValue: '1 MDP' },
      { label: 'Desde 2MDP', filterValue: '2 MDP' },
      { label: 'Desde 3MDP', filterValue: '3 MDP' },
      { label: 'Desde 5MDP', filterValue: '5 MDP' },
    ],
  },
];

export function DropdownNavMobile() {
  return (
    <nav className="flex flex-row items-center justify-between gap-2 w-full rounded-[12px] shadow-sm p-3 text-[#404040] bg-white border">
      {navItems.map((item) => (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm py-2 px-0 focus-visible:ring-0">
              {item.label === 'Ubicación' && (
                <MapPin className="hidden w-4 h-4 mr-1" />
              )}
              {item.label === 'Tipo de Propiedad' && (
                <Home className="hidden w-4 h-4 mr-1" />
              )}
              {item.label === 'Costo' && (
                <CircleDollarSign className="hidden w-4 h-4 mr-1" />
              )}
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={item.label === 'Costo' ? 'end' : 'start'}
            className={cn('border p-3 rounded-[7px]')}>
            {item.items.map((subItem) => {
              const filterValue = subItem.filterValue;
              const handleNavigation = () => {
                let filter = filterValue === '' ? '' : filterValue;
                if (item.filterKey === 'ubicacion') {
                  ubicacionFilter.set(filter);
                } else if (item.filterKey === 'tipo') {
                  tipoFilter.set(filter);
                } else if (item.filterKey === 'costo') {
                  costoFilter.set(filter);
                }
                window.location.href = '/proyectos';
              };
              return (
                <DropdownMenuItem
                  key={subItem.filterValue}
                  onClick={handleNavigation}>
                  {subItem.label}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}
