import { useState } from 'react';
import ProjectCard from './project-card';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

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

  const filteredProyectos = proyectos.filter((proyecto: any) => {
    const ubicacionMatch =
      selectedUbicaciones.length === 0 ||
      selectedUbicaciones.includes(proyecto.ubicacion);
    const tipoMatch =
      selectedTipos.length === 0 ||
      selectedTipos.includes(proyecto.tipo.toString());
    return ubicacionMatch && tipoMatch;
  });

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-between p-6 border rounded-sm bg-gradient-to-b from-accent to-accent-dark">
        <div>
          <p className="mb-2">Ubicaciones</p>
          <div className="flex gap-2">
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
          <p className="mb-2">Tipo de propiedad</p>
          <div className="flex gap-2">
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
          <p className="mb-2">Costo</p>
          <div className="flex gap-2">
            {precios.map((precio, id) => (
              <Button key={id} size="sm" variant="secondary">
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
          <div className="flex flex-col justify-center max-w-5xl mx-auto text-center">
            <span className="text-2xl">😯</span>
            <p className="text-gray-700 max-w-prose">Parece que no hay resultados pero estamos seguros de que podemos ayudarte a encontrar el lugar perfecto. ¡Prueba con otros filtros!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectFilter;
