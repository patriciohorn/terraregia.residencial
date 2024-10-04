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
          z
            .object({
              model: z.string(),
              isometricoImage: z.array(image()),
              floorTitles: z.array(z.string()),
              modeloImage: z.array(image()).optional(),
              descriptions: z.object({
                'Primer nivel': z.array(z.string()),
                'Segundo nivel': z.array(z.string()).optional(),
                'Tercer nivel': z.array(z.string()).optional()
              })
            })
            .optional()
        )
        .optional(),
      modelosImages: z.array(image()).optional(),
      isometricosSiena: z.array(image()).optional(),
      virtualTour: z.string().optional(),
      brochure: z.string().optional()
    })
});

export const collections = {
  project: projectCollection
};
