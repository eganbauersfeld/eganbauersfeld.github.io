import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    type: z.enum(['build', 'research', 'field']),
    title: z.string(),
    indexTitle: z.string(),
    homeTileTitle: z.string().optional(),
    index: z.string(),
    accentColor: z.string(),
    typeLabel: z.string(),
    homeSubtitle: z.string(),
    byline: z.string(),
    heroTile: z.object({
      size: z.enum(['large', 'medium', 'small']),
    }),
    specBar: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    footerLine: z.string().optional(),
    externalLink: z
      .object({
        label: z.string(),
        href: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };
