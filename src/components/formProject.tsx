import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CircleCheck } from 'lucide-react';

export function ProjectForm({ webhook, project }: any) {
  const [successMessage, setSuccessMessage] = useState('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSuccessMessage('Tus datos han sido enviados');
  // };

  return (
    <form
      method="POST"
      className="space-y-4"
      data-netlify="true"
      name="contacto"
      netlify-honeypot="bot-field">
      {/* Hidden input for Netlify's bot field */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="contacto" value="contacto" />

      <div className="grid sm:grid-cols-2 gap-4">
        <Input type="text" placeholder="Nombre" name="nombre" required />
        <Input type="text" placeholder="Apellidos" name="apellidos" required />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Input type="email" placeholder="Email" name="email" required />
        <Input type="tel" placeholder="Whatsapp" name="whatsapp" required />
        <Button
          size="lg"
          type="submit"
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

      {successMessage && <p className="mt-4 text-green-600 text-center">{successMessage}</p>}
    </form>
  );
}
