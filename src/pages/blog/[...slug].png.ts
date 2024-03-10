import sharp from 'sharp'
import type { APIRoute } from 'astro'
import { getOGImage } from '../../components/OGImage'
import { getCollection } from 'astro:content'

export async function getStaticPaths() {
  return (await getCollection('blog')).map((post) => ({
    params: { slug: post.slug, title: post.data.title },
    props: { post },
  }))
}

export const GET: APIRoute = async function get({ params, request, props }) {
  const svg = await getOGImage(props.post.data.title)
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
