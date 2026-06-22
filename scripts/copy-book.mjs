import { copyFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const assetsDir = join(__dirname, '../../assets')
const out = join(__dirname, '../public/images/book.png')

const file = readdirSync(assetsDir).find((n) => n.includes('2026__6__19'))
if (!file) throw new Error('Book asset not found')
copyFileSync(join(assetsDir, file), out)
console.log('Copied:', file, '->', out)
