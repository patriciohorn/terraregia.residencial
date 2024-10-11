import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CircleCheck } from 'lucide-react';
export function MoreInfoForm({ webhook }: any) {
  const initialFormData = {
    nombre: '',
    apellidos: '',
    email: '',
    whatsapp: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  console.log(successMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData(initialFormData);
        setSuccessMessage('Tus datos han sido enviados');
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
    <form onSubmit={handleSubmit} method="POST" className="space-y-4">
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
        <Button
          size="lg"
          className={cn(
            `h-12 sm:h-16 text-base`,
            successMessage ? 'bg-green-600 text-green-50' : ''
          )}>
          {successMessage ? (
            <span className="inline-flex items-center">
              <CircleCheck className="w-4 h-4 mr-1" /> Enviado
            </span>
          ) : (
            'Enviar'
          )}
        </Button>
      </div>

      {/* {successMessage && <p className="mt-4 text-green-600 text-center">{successMessage}</p>} */}
    </form>
  );
}
