import { defineCollection, z } from 'astro:content';
const AmenitySchema = z.object({
  icon: z.string(),
  label: z.string()
});

// const ModelosSchema = z.object({
//   model: z.string(),
//   isometricoImage: z.array(image())
// });
const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      cover: image().refine((img) => img.width >= 100, {
        message: 'Cover image must be at least 1080 pixels wide!'
      }),
      images: z.array(image()),
      category: z.string(),
      tipo: z.string(),
      costo: z.string(),
      presupuesto: z.string().optional(),
      amenities: z.array(AmenitySchema),
      variant: z.string().optional(),
      variantImages: z.array(image()).optional(),
      variantDescription: z.string().optional(),
      variantFooter: z.array(z.string()).optional(),
      modelos: z
        .array(
          z.object({
            model: z.string(),
            isometricoImage: z.array(image())
          })
        )
        .optional(),
      modelosImages: z.array(image()).optional(),
      isometricosSiena: z.array(image()).optional()
    })
});

export const collections = {
  project: projectCollection
};
