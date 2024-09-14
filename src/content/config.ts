import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      cover: image().refine((img) => img.width >= 600, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      category: z.string()
    })
});

export const collections = {
  project: projectCollection
};
