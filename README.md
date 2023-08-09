# node-webp.ts

Convert image to webp and compress to save space with `cwebp` system program.

[![npm Package Version](https://img.shields.io/npm/v/node-webp.ts)](https://www.npmjs.com/package/node-webp.ts)

## Usage Example

```typescript
import { cwebp } from 'node-webp.ts'

let code = await cwebp({
  input: 'res/2m.jpg',
  output: 'res/2m.webp',
  metadata: 'all',
  method: 6,
  preset: 'photo',
})
console.log({ code })
```

## Typescript Types

```typescript
export function cwebp(options: CwebpOptions): Promise<number | null>

export function cwebp(
  options: CwebpOptions,
  cb: (code: number | null) => void,
): void

export type CwebpOptions = {
  input: string
  output: string
  /** quality: 0..100, default 75 */
  quality?: number
  /** size: max bytes */
  size?: number
  preset?: 'default' | 'photo' | 'picture' | 'drawing' | 'icon' | 'text'
  hint?: 'photo' | 'picture' | 'graph'
  low_memory?: boolean
  lossless?: boolean
  /** near_lossless: 0..100, typically 60 */
  near_lossless?: number
  /** method: 0..6, default 4 */
  method?: number
  auto_filter?: boolean
  /** deblocking_filter: 0..100, typically 20..50 */
  deblocking_filter?: number
  /** spatial_noise_shaping: 0..100, default 50 */
  spatial_noise_shaping?: number
  /** metadata: default 'none' */
  metadata?: 'all' | 'none' | 'exif' | 'icc' | 'xmp'
  /** crop is applied before resize */
  crop?: {
    top: number
    left: number
    width: number
    height: number
  }
  resize?: {
    width: number
    height: number
  }
}
```

## Installation

You can install this package with `npm`, `pnpm`, `yarn`, `slnpm` and probably any other node.js package manager.

```bash
npm install node-webp.ts
```

This package invokes the system command `cwebp`. You need to install it separately if it is not already installed.

| Platform  | Install Command                |
| --------- | ------------------------------ |
| Ubuntu    | sudo apt-get install webp      |
| ArchLinux | sudo pacman -S libwebp         |
| CentOS    | sudo yum install libwebp-tools |
| MacOS     | brew install webp              |
| Windows   | scoop install libwebp          |
| Windows   | choco install webp             |

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
