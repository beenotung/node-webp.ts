import { cwebp } from './cwebp'

async function main() {
  try {
    let code = await cwebp({
      input: 'res/input.png',
      output: 'res/output-6.webp',
      method: 6,
      // size: 300 * 1024,
      // quality: 100,
      // hint: 'photo',
      // preset: 'photo',
      // near_lossless: 0,
    })
    console.log({ code })
  } catch (error) {
    console.log({ error })
  }
}
main().catch(e => console.error(e))
