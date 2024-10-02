import { useState } from 'react';
import { ModelosCarousel } from './modelos-carousel';
import { ModelosTabs } from './modelos-tab';
import { ModelFooter } from './model-footer';

interface Image {
  src: string;
  width: number;
  height: number;
  fsPath: string;
}

interface Description {
  'Primer nivel': string[];
  'Segundo nivel'?: string[];
  'Tercer nivel'?: string[];
}
interface Model {
  model: string;
  isometricoImage: Image[];
  floorTitles: string[];
  descriptions: Description;
}

interface Project {
  title: string;
  location: string;
  cover: string;
  images: string[];
  category: string;
  tipo: string;
  costo: string;
  presupuesto: string;
  amenities: { icon: string; label: string }[];
  variant: string;
  modelos: Model[];
  variantFooter: string[];
  modelosImages: string[];
  isometricosSiena: string[];
}

interface ProjectProps {
  project: Project;
}
export function ModelosSection({ project }: ProjectProps) {
  const [selectedModel, setSelectedModel] = useState(project.modelos[0]);
  const handleModelChange = (model: any) => {
    setSelectedModel(model);
  };

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-20 gap-y-12 mt-16 bg-white px-4 py-8 sm:px-12 sm:py-16 rounded-md">
      <div>
        <h2 className="text-2xl sm:text-[40px] text-black font-medium mb-8">{project.variant}</h2>
        <ModelosTabs data={project} onModelChange={handleModelChange} />
        <ModelFooter items={project.variantFooter} />
      </div>
      <div className="flex flex-col justify-center sm:items-stretch px-4 sm:px-12 py-8 bg-[#E6E9E9] rounded-md">
        <ModelosCarousel
          images={selectedModel.isometricoImage}
          floorTitles={selectedModel.floorTitles}
          descriptions={selectedModel.descriptions}
        />
      </div>
    </div>
  );
}
