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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Populate hidden form fields using optional chaining
      document.querySelector('input[name="name"]')?.setAttribute('value', formData.nombre);
      document.querySelector('input[name="apellidos"]')?.setAttribute('value', formData.apellidos);
      document.querySelector('input[name="email"]')?.setAttribute('value', formData.email);
      document.querySelector('input[name="whatsapp"]')?.setAttribute('value', formData.whatsapp);
      document.querySelector('select[name="compra"]')?.setAttribute('value', formData.ubicacion);

      // Submit the hidden form if it exists
      const hiddenForm = (document.forms as unknown as { [key: string]: HTMLFormElement })[
        'contacto'
      ];

      hiddenForm?.submit();
    };
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      method="post"
      name="contacto">
      <input type="hidden" name="form-name" value="contacto" />
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
      <Select onValueChange={handleSelectChange} name="compra">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="¿Opción de compra?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vivir">Para vivir</SelectItem>
          <SelectItem value="invertir">Para invertir</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" size="lg">
        Enviar
      </Button>
    </form>
  );
}
