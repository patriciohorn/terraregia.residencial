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

export function EventForm() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Déjanos tus datos</FieldLegend>
            {/* <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription> */}
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
                    Zona de interés
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="desarrollo">
                      <SelectValue placeholder="Desarrollo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dominio Cumbres">
                        Dominio Cumbres
                      </SelectItem>
                      <SelectItem value="Valle Condesa">
                        Valle Condesa
                      </SelectItem>
                      <SelectItem value="Santa Catarina">
                        Santa Catarina
                      </SelectItem>
                      <SelectItem value="Apodaca">Apodaca</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="dia">Día de Visita</FieldLabel>
                  <Select defaultValue="Día de visita">
                    <SelectTrigger id="dia">
                      <SelectValue placeholder="Día de Visita" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="21 Noviembre">
                        21 Noviembre
                      </SelectItem>
                      <SelectItem value="22 Noviembre">
                        22 Noviembre
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="horario">Horario</FieldLabel>
                  <Select defaultValue="Día de visita">
                    <SelectTrigger id="horario">
                      <SelectValue placeholder="Horario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00 a.m.">
                        9:00 am
                      </SelectItem>
                      <SelectItem value="10 a.m.">
                        10:00 a.m
                      </SelectItem>
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

          <Button type="submit">Aparta tu lugar</Button>
        </FieldGroup>
      </form>
    </div>
  );
}
