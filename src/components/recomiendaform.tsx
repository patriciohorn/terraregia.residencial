import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from './ui/button';

const proyectos = [
  'Allboradas Residencial',
  'Aliria Residencial',
  'Alinka Residencial',
  'Miria Residencial',
  'Montessa Residencial',
  'Montserrat Residencial',
  'Pietralta Castelo',
  'Rincón de la Sierra',
  'Toscana Residencial',
];

export function Form({ titulo1, titulo2 }: any) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-x-20 gap-y-12">
        <div>
          <h2 className="font-medium text-2xl sm:text-[40px] leading-[1.1]">
            {titulo1}
          </h2>
          <div className="mt-6 sm:mt-8 space-y-2">
            <Input
              type="text"
              placeholder="Nombre"
              className="h-12 sm:h-16"
            />
            <Input
              type="email"
              placeholder="Email"
              className="h-12 sm:h-16"
            />
            <Input
              type="phone"
              placeholder="Whatsapp"
              className="h-12 sm:h-16"
            />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-2xl sm:text-[40px] leading-[1.1]">
            {titulo2}
          </h2>
          <div className="mt-6 sm:mt-8 space-y-2">
            <Input
              type="text"
              placeholder="Nombre"
              className="h-12 sm:h-16"
            />
            <Input
              type="email"
              placeholder="Email"
              className="h-12 sm:h-16"
            />
            <Input
              type="phone"
              placeholder="Whatsapp"
              className="h-12 sm:h-16"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-6 grid sm:grid-cols-[3fr_1fr] gap-x-6 gap-y-2">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Proyecto Recomendado" />
          </SelectTrigger>
          <SelectContent className="border border-black py-5">
            {proyectos.map((proyecto, idx) => (
              <SelectItem value={proyecto} key={idx} className="py-1">
                {proyecto}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button size="lg" className="hidden sm:flex">
          Enviar
        </Button>
      </div>
      <Button size="default" className="sm:hidden flex w-full mt-12">
        Enviar
      </Button>
    </div>
  );
}
