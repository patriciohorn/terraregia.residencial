import { useState } from 'react';
import { Input } from '@/components/ui/input';

import { Button } from './ui/button';

export function MoreInfoForm({ webhook }: any) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    try {
      const response = await fetch('https://webhook.site/4e9d8eb0-9358-4723-8ff4-7890d08a2116', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data sent');
      } else {
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Request failed', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
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
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
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
        <Button size="lg" className="h-12 sm:h-16 text-base">
          Enviar
        </Button>
      </div>
    </form>
  );
}
