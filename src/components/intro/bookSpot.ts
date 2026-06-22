/** 책상 위 플로팅 책 위치 — 단독 book.png 애셋 기준 */
export const BOOK_ASSET = '/images/book.png'

export const BOOK_SPOT = {
  leftVw: 34,
  topVh: 52,
  widthVw: 32,
  aspectRatio: 1.35,
} as const

export const bookSpotStyle = {
  left: `${BOOK_SPOT.leftVw}vw`,
  top: `${BOOK_SPOT.topVh}vh`,
  width: `${BOOK_SPOT.widthVw}vw`,
  aspectRatio: `${BOOK_SPOT.aspectRatio}`,
} as const

/** 배경 책상 위 책 덮기용 (배경 책 영역) */
export const deskBookPatchStyle = {
  left: '33vw',
  top: '63vh',
  width: '34vw',
  height: '12vh',
} as const
