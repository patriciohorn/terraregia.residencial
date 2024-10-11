import { defineCollection, z } from 'astro:content';
const AmenitySchema = z.object({
  icon: z.string(),
  label: z.string()
});

const serviceSchema = z.object({
  title: z.string(), // The title of the service (e.g., "Schools", "Hospitals", etc.)
  items: z.array(z.string()), // List of items (strings) under each service (e.g., list of schools)
  icon: z.string() // The icon name for the service (e.g., "school-icon")
});
const projectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      whatsapp: z.string().optional(),
      website: z.string().optional(),
      webhook: z.string().optional(),
      mapQuery: z.string().optional(),
      googleMaps: z.string().optional(),
      waze: z.string().optional(),
      telefonoCaseta: z.string().optional(),
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
              }),
              specs: z.array(z.string()).optional()
            })
            .optional()
        )
        .optional(),
      modelosImages: z.array(image()).optional(),
      isometricosSiena: z.array(image()).optional(),
      virtualTour: z.string().optional(),
      brochure: z.string().optional(),
      services: z.array(serviceSchema).optional()
    })
});

export const collections = {
  project: projectCollection
};
