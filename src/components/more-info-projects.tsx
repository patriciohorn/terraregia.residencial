import { useState } from 'react';
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
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    whatsapp: '',
    ubicacion: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, ubicacion: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Input
        type="text"
        placeholder="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        placeholder="Apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleInputChange}
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        type="phone"
        placeholder="Whatsapp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
      />
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="¿Opción de compra? Vivir o invertir" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Dominio Cumbres">Dominio Cumbres</SelectItem>
          <SelectItem value="Valle Condesa">Valle Condesa</SelectItem>
          <SelectItem value="Apodaca">Apodaca</SelectItem>
        </SelectContent>
      </Select>
      <Button size="lg">Enviar</Button>
    </form>
  );
}
