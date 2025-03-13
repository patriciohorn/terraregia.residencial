import { useState } from 'react';
import ProjectCard from './project-card';
import { Button } from './ui/button';

const ProjectFilter = ({ proyectos }: any) => {
  const [selectedUbicaciones, setSelectedUbicaciones] = useState([]);
  const [selectedTipos, setSelectedTipos] = useState([]);
  const [selectedPrecios, setSelectedPrecios] = useState([]);

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

  console.log(selectedPrecios);

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

        return convertedProyectoPrice === precioFilter;
      });

    return ubicacionMatch && tipoMatch && preciosMatch;
  });

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-between bg-[#e8eaeb] border border-[#d9dcde] p-6 rounded-md shadow-sm">
        <div>
          <p className="mb-1 text-[#030405]">Ubicaciones</p>
          <div className="flex gap-2 flex-wrap">
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
        <div>
          <p className="mb-1 text-[#030405]">Tipo de propiedad</p>
          <div className="flex gap-2 flex-wrap">
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
          <p className="mb-1 text-[#030405]">Costo</p>
          <div className="flex gap-2 flex-wrap">
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
                ${precio as String}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh]">
        {filteredProyectos.length > 0 ? (
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-12">
            {filteredProyectos.map((proyecto: any) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} />
            ))}
          </ul>
        ) : (
          <div className="grid place-content-center min-h-[50vh] max-w-xl mx-auto text-center animate-fade-right">
            <span className="text-2xl">😯</span>
            <p className="text-gray-600">
              Parece que no hay resultados pero estamos seguros de que
              podemos ayudarte a encontrar el lugar perfecto. ¡Prueba
              con otros filtros!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectFilter;
