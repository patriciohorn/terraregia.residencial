import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

const ProjectCard = ({ proyecto, small }: any) => {
  return (
    <article className="animate-fade-right group relative sm:before:absolute sm:before:-inset-4 sm:before:-z-10 sm:before:shadow-sm sm:before:rounded-[36px] sm:before:bg-card-foreground/45 sm:before:opacity-0 lg:hover:before:opacity-100 transition-all duration-200 ease-in-out h-fit">
      <div className="aspect-[3/2] rounded-md overflow-hidden shadow-sm relative group">
        <img
          src={proyecto.imagen_portada.filename}
          alt={
            proyecto.text_alt
              ? proyecto.text_alt
              : 'Imagen de proyecto'
          }
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out lg:group-hover:transform lg:group-hover:translate3d(0, 0, 0) lg:group-hover:scale-105 lg:group-hover:rotateX(0deg) lg:group-hover:rotateY(0deg)"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
      <div className="mt-4 flex flex-row justify-between items-center">
        <div className={cn(small ? '' : 'flex flex-col gap-y-1')}>
          <h3
            className={cn(
              `text-xl font-heading tracking-[0.01em]`,
              small ? 'sm:text-xl' : 'sm:text-2xl'
            )}>
            {proyecto.nombre}
          </h3>
          <div className="flex gap-1 items-center text-[#827D7D]">
            <MapPin className={cn(`w-auto`, small ? 'h-3' : 'h-4')} />
            <p className="text-sm font-medium">
              {proyecto.ubicacion}
            </p>
          </div>
        </div>

        {small ? (
          <Button
            variant="outline"
            className="cursor-pointer text-sm h-10 sm:h-10 lg:group-hover:bg-black lg:group-hover:text-white transition-colors duration-300 ease-in-out">
            Ver más
          </Button>
        ) : (
          <Button
            variant="outline"
            className="cursor-pointer h-10 sm:h-12 sm:w-[140px] lg:group-hover:bg-black lg:group-hover:text-white transition-colors duration-300 ease-in-out">
            Ver más
          </Button>
        )}
      </div>

      <a href={`/proyectos/${proyecto.slug}`}>
        <span className="absolute z-10 -inset-4"></span>
      </a>
    </article>
  );
};

export default ProjectCard;
