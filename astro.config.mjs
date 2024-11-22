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
        'about-section': 'storyblok/AboutSection',
        'proyectos-destacados': 'storyblok/ProyectosDestacados',
        'proyectos-preventa': 'storyblok/ProyectosPreventa',
        'logo-cloud': 'storyblok/LogoCloud',
        'proyectos-presupuesto': 'storyblok/ProyectosPresupuesto',
        'hero-recomienda-y-gana': 'storyblok/Hero',
        'grid-3-cols': 'storyblok/Grid3Cols',
        'recomienda-step-card': 'storyblok/RecomiendaStepCard',
        'recomienda-form': 'storyblok/RecomiendaForm',
        'inversion-content': 'storyblok/InversionContent',
        'politicas-content': 'storyblok/PoliticasContent',
        'promociones-del-mes': 'storyblok/PromocionesDelMes',
        project: 'storyblok/Project',
        'project-details': 'storyblok/ProjectDetails',
        'project-hero': 'storyblok/ProjectHero',
        'cover-image': 'storyblok/ProjectCover'
        // 'promocion-card': 'storyblok/PromocionCard'
      },
      apiOptions: {
        region: 'us'
      }
    }),
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    icon()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  image: {
    remotePatterns: [{ protocol: 'https' }]
  }
});
