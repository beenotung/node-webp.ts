import { cwebp } from './cwebp'

async function main() {
  try {
    let code = await cwebp({
      input: 'res/2m.jpg',
      output: 'res/2m.webp',
      metadata: 'all',
      method: 6,
      preset: 'photo',
      // hint: 'photo',
      // size: 300 * 1024,
      // quality: 100,
      // near_lossless: 0,
    })
    console.log({ code })
  } catch (error) {
    console.log({ error })
  }
}
main().catch(e => console.error(e))
