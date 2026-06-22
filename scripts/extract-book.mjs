import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { writeFileSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcPath = join(root, 'public/images/intro-bg.png')
const outPath = join(root, 'public/images/book-cutout.png')
const spotPath = join(root, 'src/components/intro/bookSpot.ts')

/**
 * 소스 이미지(1024×682)에서 책 전체 영역 — 직접 픽셀 지정
 * (배경 책: 가로로 놓인 단권, 손 사이 중앙)
 */
const BOOK_RECT = {
  left: 342,
  top: 432,
  width: 338,
  height: 86,
}

const REF_VIEWPORT = { w: 1920, h: 1080 }

function imageRectToViewportSpot(imgW, imgH, vpW, vpH, rect) {
  const scale = Math.max(vpW / imgW, vpH / imgH)
  const offsetX = (imgW * scale - vpW) / 2
  const offsetY = (imgH * scale - vpH) / 2

  const toVw = (px) => ((px * scale - offsetX) / vpW) * 100
  const toVh = (px) => ((px * scale - offsetY) / vpH) * 100

  return {
    leftVw: Math.round(toVw(rect.left) * 10) / 10,
    topVh: Math.round(toVh(rect.top) * 10) / 10,
    widthVw: Math.round(toVw(rect.left + rect.width) * 10) / 10 - Math.round(toVw(rect.left) * 10) / 10,
    heightVh: Math.round(toVh(rect.top + rect.height) * 10) / 10 - Math.round(toVh(rect.top) * 10) / 10,
    aspectRatio: Math.round((rect.width / rect.height) * 1000) / 1000,
    sourceWidth: rect.width,
    sourceHeight: rect.height,
  }
}

const meta = await sharp(srcPath).metadata()
const spot = imageRectToViewportSpot(
  meta.width,
  meta.height,
  REF_VIEWPORT.w,
  REF_VIEWPORT.h,
  BOOK_RECT,
)

console.log('BOOK_RECT:', BOOK_RECT)
console.log('Viewport spot:', spot)

await sharp(srcPath).extract(BOOK_RECT).png().toFile(outPath)
console.log('Saved:', outPath)

const spotFile = `/** 배경(intro-bg) 위 책 위치 — extract-book.mjs 자동 생성 */
export const BOOK_SPOT = {
  leftVw: ${spot.leftVw},
  topVh: ${spot.topVh},
  widthVw: ${spot.widthVw},
  heightVh: ${spot.heightVh},
  aspectRatio: ${spot.aspectRatio},
  sourceWidth: ${spot.sourceWidth},
  sourceHeight: ${spot.sourceHeight},
} as const

export const bookSpotStyle = {
  left: \`\${BOOK_SPOT.leftVw}vw\`,
  top: \`\${BOOK_SPOT.topVh}vh\`,
  width: \`\${BOOK_SPOT.widthVw}vw\`,
  aspectRatio: \`\${BOOK_SPOT.aspectRatio}\`,
} as const
`

writeFileSync(spotPath, spotFile, 'utf8')
console.log('Updated:', spotPath)
