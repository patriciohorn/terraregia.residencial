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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Input type="text" placeholder="Nombre" />
      <Input type="text" placeholder="Apellidos" />
      <Input type="email" placeholder="Email" />
      <Input type="phone" placeholder="Whatsapp" />
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Donde quieres vivir" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Dominio Cumbres">Dominio Cumbres</SelectItem>
          <SelectItem value="Apodaca">Apodaca</SelectItem>
        </SelectContent>
      </Select>
      <Button size="lg">Enviar</Button>
    </div>
  );
}
