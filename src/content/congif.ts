import { z, defineCollection } from 'astro:content';

const proyectosDestacados = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    location: z.string(),
    image: z.string()
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  destacados: proyectosDestacados
};
