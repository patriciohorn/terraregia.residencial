import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { Button } from './ui/button';

export function MoreInfoForm() {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input type="text" placeholder="Nombre" />
        <Input type="text" placeholder="Apellidos" />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="phone" placeholder="Whatsapp" />
        <Button size="lg" className="h-12 sm:h-16 text-base">
          Enviar
        </Button>
      </div>

      {/* <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Donde quieres vivir" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Dominio Cumbres">Dominio Cumbres</SelectItem>
          <SelectItem value="Apodaca">Apodaca</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}
