import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    isPinned: z.boolean(),
    author: z.string(),
    image: z.string().optional(),
    publishedAt: z.string(),
    category: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
