import { useState, useEffect } from 'react';
// import { PushSpinner } from 'react-spinners-kit';
import ProjectCard from './project-card';
import { Button } from './ui/button';
import {
  MapPin,
  CircleDollarSign,
  House,
  CircleX,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { useStore } from '@nanostores/react';
import {
  ubicacionFilter,
  tipoFilter,
  costoFilter,
} from '@/stores/filterStore';

const ProjectFilter = ({ proyectos }: any) => {
  const [selectedUbicaciones, setSelectedUbicaciones] = useState([]);
  const [selectedTipos, setSelectedTipos] = useState([]);
  const [selectedPrecios, setSelectedPrecios] = useState([]);
  const [isInitialized, setIsIntialized] = useState(false);
  const $ubicacionFilter = useStore(ubicacionFilter);
  const $tipoFilter = useStore(tipoFilter);
  const $costoFilter = useStore(costoFilter);

  useEffect(() => {
    setSelectedUbicaciones(
      $ubicacionFilter ? [$ubicacionFilter] : []
    );
    setSelectedTipos($tipoFilter ? [$tipoFilter] : []);
    setSelectedPrecios($costoFilter ? [$costoFilter] : []);
    setIsIntialized(true);
  }, [$ubicacionFilter, $tipoFilter, $costoFilter]);

  const ubicaciones = [
    ...new Set(proyectos.map((proyecto: any) => proyecto.ubicacion)),
  ];
  const tipos = [
    ...new Set(
      proyectos.map((proyecto: any) => proyecto.tipo.toString())
    ),
  ];
  const precios = ['500,000', '1 MDP', '2 MDP', '3 MDP', '5 MDP'];

  function handleLocation(value: any) {
    setSelectedUbicaciones((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: string) => item !== value)
        : [...prev, value]
    );
  }

  function handleTipo(value: any) {
    setSelectedTipos((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: string) => item !== value)
        : [...prev, value]
    );
  }

  function handlePrecio(value: any) {
    setSelectedPrecios((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: string) => item !== value)
        : [...prev, value]
    );
  }

  const filteredProyectos = proyectos.filter((proyecto: any) => {
    const ubicacionMatch =
      selectedUbicaciones.length === 0 ||
      selectedUbicaciones.includes(proyecto.ubicacion);
    const tipoMatch =
      selectedTipos.length === 0 ||
      selectedTipos.includes(proyecto.tipo.toString());
    const preciosMatch =
      selectedPrecios.length === 0 ||
      selectedPrecios.some((precio: string) => {
        const precioFilter = Number(precio.replace(/[^0-9.]/g, ''));
        const proyectoPrice = Number(
          proyecto.precio.replace(/[^0-9.]/g, '')
        );

        const convertedProyectoPrice = proyecto.precio.includes('MDP')
          ? Math.floor(proyectoPrice)
          : Math.floor(proyectoPrice / 100000) * 100000;

        return precioFilter === convertedProyectoPrice;
      });

    return ubicacionMatch && tipoMatch && preciosMatch;
  });

  return (
    <aside className="pt-8 pb-16 grid sm:grid-cols-[0.5fr_2fr] gap-x-10 gap-y-8">
      <div className="">
        <div className="flex flex-wrap sm:flex-row items-center justify-between gap-y-8 sm:gap-y-8 bg-card p-4 rounded-md shadow-sm border">
          <div>
            <p className="mb-2 text-neutral-600 flex items-center gap-2 text-sm font-medium ">
              <MapPin size={16} />
              <span>Ubicaciones</span>
            </p>
            <div className="flex gap-2 flex-wrap bg-[#efefef] border p-2 rounded-sm shadow-[inset_0_1px_1px_rgb(0_0_0/0.05)]">
              {ubicaciones.map((ubicacion: any, id: number) => (
                <Button
                  key={id}
                  size="sm"
                  variant={
                    selectedUbicaciones.includes(ubicacion)
                      ? 'selected'
                      : 'unselected'
                  }
                  onClick={() => handleLocation(ubicacion)}>
                  {ubicacion}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2 text-neutral-600 flex items-center gap-2 text-sm font-medium">
              <House size={16} />
              <span>Tipo de propiedad</span>
            </p>
            <div className="flex gap-2 flex-wrap bg-[#efefef] border p-2 rounded-sm shadow-[inset_0_1px_1px_rgb(0_0_0/0.05)]">
              {tipos.map((tipo, id) => (
                <Button
                  key={id}
                  size="sm"
                  variant={
                    selectedTipos.includes(tipo)
                      ? 'selected'
                      : 'unselected'
                  }
                  onClick={() => handleTipo(tipo)}>
                  {tipo as String}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-neutral-600 flex items-center gap-2 text-sm font-medium">
              <CircleDollarSign size={16} />
              <span>Costo</span>
            </p>
            <div className="flex gap-2 flex-wrap bg-[#efefef] border p-2 rounded-sm shadow-[inset_0_1px_1px_rgb(0_0_0/0.05)]">
              {precios.map((precio, id) => (
                <Button
                  key={id}
                  size="sm"
                  variant={
                    selectedPrecios.includes(precio)
                      ? 'selected'
                      : 'unselected'
                  }
                  onClick={() => handlePrecio(precio)}>
                  {precio as String}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80vh]">
        {isInitialized ? (
          filteredProyectos.length > 0 ? (
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-14">
              {filteredProyectos.map((proyecto: any) => (
                <ProjectCard
                  key={proyecto.slug}
                  proyecto={proyecto}
                />
              ))}
            </ul>
          ) : (
            <div className="grid place-content-center min-h-[50vh] max-w-xl mx-auto text-center animate-fade-right">
              <span className="text-3xl mb-4">😯</span>
              <p className="text-gray-600 text-lg">
                Parece que no hay resultados pero estamos seguros de
                que podemos ayudarte a encontrar el lugar perfecto{' '}
                <span className="font-medium">
                  ¡Prueba con otros filtros!
                </span>
              </p>
            </div>
          )
        ) : (
          <div className="grid place-content-center  min-h-[50vh] max-w-xl mx-auto text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-14 h-14 mx-auto text-[#d8efef] animate-spin fill-[#3e858e]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <p className="text-neutral-600 mt-4 text-center">
              Cargando Proyectos...
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ProjectFilter;
