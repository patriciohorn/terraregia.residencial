import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CircleCheck } from 'lucide-react';
import { useState } from 'react';

export function EventForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hours = [
    '6:00 AM',
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const proyectos = [
    'Pietralta Castelo',
    'Alinka',
    'Alboradas Residencial',
    'Montessa',
    'Aliria',
    'Miria',
    'Privada Amaral',
    'Reserva Mezquital',
    'Veralia',
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {isSubmitted ? (
        <div className="min-h-[694px] py-10 flex flex-col justify-center items-center text-center">
          <CircleCheck
            size={64}
            className="fill-green-600 text-white"
          />
          <p className="text-3xl font-medium mb-6 text-neutral-900">
            ¡Gracias por registrarte!
          </p>
          <p className="text-lg max-w-2xl">
            Te esperamos en el showroom de Terra Regia para vivir una
            experiencia única y conocer nuestros desarrollos
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="mb-8">
                Déjanos tus datos
              </FieldLegend>
              <FieldDescription className="sr-only">
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                {/* Nombre */}
                <Field>
                  <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
                  <Input id="nombre" placeholder="Nombre" required />
                </Field>
                {/* Correo Electronico */}
                <Field>
                  <FieldLabel htmlFor="correo">
                    Correo Electrónico
                  </FieldLabel>
                  <Input
                    id="correo"
                    placeholder="Correo Electrónico"
                    required
                  />
                </Field>
                {/* Telefono */}
                <Field>
                  <FieldLabel htmlFor="telefono">Teléfono</FieldLabel>
                  <Input
                    id="telefono"
                    placeholder="Teléfono"
                    required
                  />
                </Field>

                <div className="grid grid-cols-3 gap-4">
                  {/* Zona de Interes */}
                  <Field>
                    <FieldLabel htmlFor="desarrollo">
                      Proyecto de interés
                    </FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="desarrollo">
                        <SelectValue placeholder="Desarrollo" />
                      </SelectTrigger>
                      <SelectContent>
                        {proyectos.map((proyecto) => {
                          <SelectItem value={proyecto}>
                            {proyecto}
                          </SelectItem>;
                        })}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <FieldSet>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="aviso" defaultChecked />
                  <FieldLabel htmlFor="aviso" className="font-normal">
                    Aviso de Privacidad
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button>Aparta tu lugar</Button>
          </FieldGroup>
        </form>
      )}
    </div>
  );
}
