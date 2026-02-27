// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string(),
      avatar: z.string(),
      image: image().optional(),
      tags: z.array(z.string()),
    }),
})

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    repo_url: z.string(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectCollection,
  blog: blogCollection,
}
