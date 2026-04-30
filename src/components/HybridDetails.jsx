import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import HybridCasas from "./HybridCasas";

import pbSevilla from "../assets/miria/sevilla/planta-baja.webp";
import paSevilla from "../assets/miria/sevilla/planta-alta.webp";
import pbJacaranda from "../assets/miria/jacaranda/planta-baja.webp";
import paJacaranda from "../assets/miria/jacaranda/planta-alta.webp";
import pbOrquidea from "../assets/miria/orquidea/planta-baja.webp";
import paOrquidea from "../assets/miria/orquidea/planta-alta.webp";

import HybridLotes from "./HybridLotes";

const HybridDetails = ({ blok }) => {
  const [tipo, setTipo] = useState("casas");

  const modelosCasas = [
    {
      nombre: "sevilla",
      terreno: "105m²",
      lote: "7x15m",
      construccion: "82.56m²",
      detallesPlanta: [
        {
          titulo: "Primer Nivel",
          image: pbSevilla.src,
          detalles: [
            "Cochera",
            "Sala",
            "Comedor",
            "Cocina",
            "Recámara secundaria",
            "Baño completo",
            "Lavandería exterior",
            "Patio",
          ],
        },
        {
          titulo: "Segundo Nivel",
          image: paSevilla.src,
          detalles: [
            "Recámara principal",
            "Terraza",
            "Recámara secundaria",
            "Baño completo",
          ],
        },
      ],
    },
    {
      nombre: "jacaranda",
      terreno: "62m²",
      lote: "7x15m",
      construccion: "87.93m²",
      detallesPlanta: [
        {
          titulo: "Primer Nivel",
          image: pbJacaranda.src,
          detalles: [
            "Cochera",
            "Sala",
            "Comedor",
            "Cocina",
            "Clóset",
            "1/2 baño",
            "Lavandería interior",
            "Patio",
          ],
        },
        {
          titulo: "Segundo Nivel",
          image: paJacaranda.src,
          detalles: [
            "Recámara principal con walking clóset y baño completo",
            "Balcón",
            "Recámara secundaria",
            "Baño completo",
          ],
        },
      ],
    },

    {
      nombre: "orquidea",
      lote: "7.5x15m",
      terreno: "112.5m²",
      construccion: "94.89m²",
      detallesPlanta: [
        {
          titulo: "Primer Nivel",
          image: pbOrquidea.src,
          detalles: [
            "Cochera",
            "Sala",
            "Comedor",
            "Cocina",
            "Clóset",
            "1/2 baño",
            "Lavandería interior",
            "Patio",
          ],
        },
        {
          titulo: "Segundo Nivel",
          image: paOrquidea.src,
          detalles: [
            "Recámara principal con walking clóset y baño completo",
            "Balcón",
            "Recámara secundaria",
            "Baño completo",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="sm:gap-x-12 gap-y-12 bg-white p-4 sm:py-12 sm:px-8 rounded-md shadow-sm">
        <ToggleGroup
          type="single"
          size="lg"
          spacing={2}
          onValueChange={(value) => setTipo(value)}
        >
          <ToggleGroupItem
            value="casas"
            data-state={tipo === "casas" ? "on" : "off"}
          >
            <span className="text-base">Casas</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="lotes">
            <span className="text-base ">Lotes</span>
          </ToggleGroupItem>
        </ToggleGroup>
        {tipo === "casas" ? (
          <HybridCasas modelos={modelosCasas} />
        ) : (
          <HybridLotes data={blok[0]} />
        )}
      </div>
    </>
  );
};

export default HybridDetails;
