import sharp from 'sharp'
import type { APIRoute } from 'astro'
import { getOGImage } from '../components/OGImage'

export const GET: APIRoute = async function get({ params, request }) {
  const svg = await getOGImage('stevegreco.dev')
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
