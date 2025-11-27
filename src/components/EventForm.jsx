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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    const data = {
      nombre: formData.get('nombre'),
      correo: formData.get('correo'),
      telefono: formData.get('telefono'),
      desarrollo: formData.get('desarrollo'),
    };
    try {
      const response = await fetch(
        'https://hooks.zapier.com/hooks/catch/11239048/ukt8brt/',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error', error);
    } finally {
      setIsSubmitting(false);
    }

    // formData.append(
    //   'access_key',
    //   'b5ecb36d-3df5-4df0-a4a3-456e2b5f7fea'
    // );

    // const data = await response.json();
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
        <div className="min-h-80 py-10 flex flex-col justify-center items-center text-center">
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
          {/* <input
            type="hidden"
            name="subject"
            value="Nuevo Registro Gran Venta"
          /> */}

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
                  <Input
                    id="nombre"
                    placeholder="Nombre"
                    name="nombre"
                    required
                  />
                </Field>
                {/* Correo Electronico */}
                <Field>
                  <FieldLabel htmlFor="correo">
                    Correo Electrónico
                  </FieldLabel>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="Correo Electrónico"
                    name="correo"
                    required
                  />
                </Field>
                {/* Telefono */}
                <Field>
                  <FieldLabel htmlFor="telefono">Teléfono</FieldLabel>
                  <Input
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    required
                  />
                </Field>

                <div className="">
                  {/* Zona de Interes */}
                  <Field>
                    <FieldLabel htmlFor="desarrollo">
                      Proyecto de interés
                    </FieldLabel>
                    <Select defaultValue="" name="desarrollo">
                      <SelectTrigger id="desarrollo">
                        <SelectValue placeholder="Desarrollo" />
                      </SelectTrigger>
                      <SelectContent>
                        {proyectos
                          .sort((a, b) => a.localeCompare(b))
                          .map((proyecto) => (
                            <SelectItem value={proyecto}>
                              {proyecto}
                            </SelectItem>
                          ))}
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
                  <Checkbox id="aviso" name="aviso" defaultChecked />
                  <FieldLabel htmlFor="aviso" className="font-normal">
                    Aviso de Privacidad
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>

            <Button>
              {isSubmitting ? 'Enviando...' : 'Aparta tu lugar'}
            </Button>
          </FieldGroup>
        </form>
      )}
    </div>
  );
}
