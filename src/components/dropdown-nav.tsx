import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  CircleDollarSign,
  ChevronDown,
  Home,
} from 'lucide-react';
import {
  ubicacionFilter,
  tipoFilter,
  costoFilter,
} from '@/stores/filterStore';

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
      { label: 'Santa Catarina', filterValue: 'Santa Catarina' },
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

export function DropdownNav() {
  const handleNavigation = (
    filterKey: string,
    filterValue: string
  ) => {
    const filter = filterValue === '' ? '' : filterValue;

    if (filterKey === 'ubicacion') {
      ubicacionFilter.set(filter);
    } else if (filterKey === 'tipo') {
      tipoFilter.set(filter);
    } else if (filterKey === 'costo') {
      costoFilter.set(filter);
    }

    // Consider using navigate() if you have routing
    window.location.assign('/proyectos');
  };

  return (
    <nav className="flex items-center justify-between gap-x-5 w-full rounded-full shadow-md p-3 text-black bg-white">
      {navItems.map((item) => (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-sm">
              {item.label === 'Ubicación' && (
                <MapPin className="w-4 h-4 mr-1" />
              )}
              {item.label === 'Tipo de Propiedad' && (
                <Home className="w-4 h-4 mr-1" />
              )}
              {item.label === 'Costo' && (
                <CircleDollarSign className="w-4 h-4 mr-1" />
              )}
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-42 mt-3 border border-black p-3 rounded-sm">
            {item.items.map((subItem) => (
              <DropdownMenuItem
                key={subItem.filterValue || 'all'} // Better key for empty values
                onClick={() =>
                  handleNavigation(
                    item.filterKey,
                    subItem.filterValue
                  )
                }>
                {subItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}
