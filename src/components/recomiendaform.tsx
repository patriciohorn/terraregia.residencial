import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { Button } from './ui/button';

const proyectos = [
  'Allboradas',
  'Aliria',
  'Alinka',
  'Castilla',
  'Miria',
  'Montessa Residencial',
  'Montserrat',
  'Pietralta',
  'Rincón de la Sierra',
  'Toscana Residencial'
];

export function RecomiendaForm() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-medium text-[40px] leading-[1.1]">Tus datos</h2>
          <div className="mt-9 space-y-4">
            <Input type="text" placeholder="Nombre" className="h-16" />
            <Input type="email" placeholder="Email" className="h-16" />
            <Input type="phone" placeholder="Whatsapp" className="h-16" />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-[40px] leading-[1.1]">Datos de tu referencia</h2>
          <div className="mt-9 space-y-4">
            <Input type="text" placeholder="Nombre" className="h-16" />
            <Input type="email" placeholder="Email" className="h-16" />
            <Input type="phone" placeholder="Whatsapp" className="h-16" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-[3fr_1fr] gap-12">
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
        <Button size="lg">Enviar</Button>
      </div>
    </>
  );
}
