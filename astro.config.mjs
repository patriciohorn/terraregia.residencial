// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // components goes here
        page: 'storyblok/Page',
        hero: 'storyblok/Hero',
        header: 'storyblok/Header',
        barra_navegacion: 'storyblok/BarraNavegacion',
        acerca: 'storyblok/AboutSection',
        logos: 'storyblok/LogoCloud',
        proyecto: 'storyblok/Proyecto',
        proyectos_destacados: 'storyblok/ProyectosDestacados',
        proyectos_preventa: 'storyblok/ProyectosPreventa',
        promociones: 'storyblok/Promociones',
        promociones_proyecto: 'storyblok/PromoBanner',
        amenidad: 'storyblok/Amenidad',
        galeria_item: 'storyblok/GalleryItem',
        formulario_proyecto: 'storyblok/FormularioProyecto',
        inversion_hero: 'storyblok/InversionHero',
        contenido_inversion: 'storyblok/InversionContenido',
        recomienda: 'storyblok/Recomienda',
        recomienda_card: 'storyblok/RecomiendaCard',
        formulario_recomienda: 'storyblok/FormularioRecomienda',
        contenido_politicas: 'storyblok/Politicas',
        detalles_casas: 'storyblok/DetallesCasas',

        'proyectos-presupuesto': 'storyblok/ProyectosPresupuesto',
        'hero-recomienda-y-gana': 'storyblok/Hero',
        'grid-3-cols': 'storyblok/Grid3Cols',

        // 'recomienda-form': 'storyblok/RecomiendaForm',
        'inversion-content': 'storyblok/InversionContent',
        'politicas-content': 'storyblok/PoliticasContent',
        // 'promociones-del-mes': 'storyblok/PromocionesDelMes',
        project: 'storyblok/Project',
        detalles_terreno: 'storyblok/DetallesTerreno',
        servicio_card: 'storyblok/ServicioCard',
        info_ubicacion: 'storyblok/InfoUbicacion',

        // 'cover-image': 'storyblok/ProjectCover',

        /// Projects
        info_general_proyecto: 'storyblok/projects/ProjectHero',

        galeria: 'storyblok/projects/ProjectGallery',
        'project-details': 'storyblok/projects/ProjectDetails',
        servicios_card_container:
          'storyblok/projects/ServiciosCardsContainer',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
