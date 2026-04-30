import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import lote1 from "../assets/miria/lote-1.webp";
import lote2 from "../assets/miria/lote-2.webp";
import logo from "../assets/miria/miria-logo.webp";
import brochure from "../assets/miria/miria-brochure.pdf";
import { Link } from "./link";
import { CloudDownload } from "lucide-react";
const HybridLotes = ({ data }) => {
  const images = [{ filename: lote1.src }, { filename: lote2.src }];
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-20 min-h-[549.5px]">
      <div className="flex flex-col justify-center">
        {/* <h2 className="text-2xl sm:text-[40px] text-black font-heading">
          Lotes
        </h2> */}
        <Carousel className="relative">
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <div className="w-full">
                  <img
                    src={img.filename}
                    alt="Foto de tipologia"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="default"
            className="left-0 -translate-y-5 "
          />
          <CarouselNext variant="default" className="right-0 -translate-y-5 " />
        </Carousel>
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center w-full justify-center sm:justify-center gap-y-6 gap-x-12 ">
          <div className="flex items-center gap-x-8 justify-between">
            <div className="flex flex-col items-center">
              <h3 className="text-sm text-neutral-600 text-center font-medium">
                Frente
              </h3>
              <p className="text-base sm:text-lg  text-black tracking-[0.01em]">
                7m
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm text-neutral-600 text-center font-medium">
                Fondo
              </h3>
              <p className="text-base sm:text-lg  text-black tracking-[0.01em]">
                14m
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-sm text-neutral-600 text-center font-medium">
                Área
              </h3>
              <p className="text-base sm:text-lg  text-black tracking-[0.01em]">
                98m2
              </p>
            </div>
          </div>
          <Link
            href={brochure}
            target="_blank"
            variant="default"
            className="flex items-center gap-2 text-sm w-fit "
            data-track="brochure_download"
          >
            <CloudDownload className="w-5 h-5" />
            <span>Brochure</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 p-6 bg-[#E6E9E9] rounded-[12px]">
        <div className="sm:mt-6 sm:max-h-24 max-w-28 sm:max-w-32 mr-auto">
          <img
            src={logo.src}
            alt="logo miria residencial"
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-xl sm:text-2xl font-medium">
          Miria es un proyecto residencial diseñado para brindarte tranquilidad
          y confort en un entorno natural y privilegiado, ideal para invertir o
          construir la casa que deseas.
        </p>
      </div>
    </div>
  );
};

export default HybridLotes;
