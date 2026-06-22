import sharp from 'sharp'
import { copyFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const assetsDir = join(root, '../assets')
const rawPath = join(root, 'public/images/book-raw.jpg')
const outPath = join(root, 'public/images/book.png')

const file = readdirSync(assetsDir).find((n) => n.includes('2026__6__19'))
if (!file) throw new Error('Book asset not found')

copyFileSync(join(assetsDir, file), rawPath)

const { data, info } = await sharp(rawPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const threshold = 42
for (let i = 0; i < data.length; i += 4) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  if (r < threshold && g < threshold && b < threshold) {
    data[i + 3] = 0
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(outPath)

console.log('Saved transparent book:', outPath, `${info.width}x${info.height}`)
