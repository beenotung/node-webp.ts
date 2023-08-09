import { spawn } from 'child_process'

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

export function cwebp(
  options: CwebpOptions,
  cb: (code: number | null) => void,
): void
export function cwebp(options: CwebpOptions): Promise<number | null>
export function cwebp(
  options: CwebpOptions,
  cb?: (code: number | null) => void,
): Promise<number | null> | void {
  let cmd: string[] = []
  if (options.preset) {
    cmd.push('-preset', options.preset)
  }
  if (options.hint) {
    cmd.push('-hint', options.hint)
  }
  if (options.low_memory) {
    cmd.push('-low_memory')
  }
  if (options.lossless) {
    cmd.push('-lossless')
  }
  if (options.near_lossless) {
    cmd.push('-near_lossless', String(options.near_lossless))
  }
  if (options.method) {
    cmd.push('-m', String(options.method))
  }
  if (options.quality) {
    cmd.push('-q', String(options.quality))
  }
  if (options.size) {
    cmd.push('-size', String(options.size))
  }
  if (options.auto_filter) {
    cmd.push('-af')
  }
  if (options.deblocking_filter) {
    cmd.push('-f', String(options.deblocking_filter))
  }
  if (options.spatial_noise_shaping) {
    cmd.push('-sns', String(options.spatial_noise_shaping))
  }
  if (options.metadata) {
    cmd.push('-metadata', options.metadata)
  }
  if (options.crop) {
    cmd.push(
      '-crop',
      String(options.crop.left),
      String(options.crop.top),
      String(options.crop.width),
      String(options.crop.height),
    )
  }
  if (options.resize) {
    cmd.push(
      '-resize',
      String(options.resize.width),
      String(options.resize.height),
    )
  }
  cmd.push('-o', options.output)
  cmd.push('--', options.input)
  if (cb) {
    let child = spawn('cwebp', cmd)
    child.on('close', cb)
  } else {
    return new Promise((resolve, reject) => {
      let child = spawn('cwebp', cmd)
      let error = ''
      child.stderr?.on('data', chunk => {
        error += chunk
      })
      child.on('close', code => {
        if (!code) {
          resolve(code)
        } else {
          reject(error)
        }
      })
    })
  }
}
