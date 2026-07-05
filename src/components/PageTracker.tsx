'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

const PAGE_TITLES: Record<string, string> = {
  '/': '인트로',
  '/entrance': '입장',
  '/tutor': '내훈관 소개',
  '/test': '성향 테스트',
  '/result': '결과',
  '/residence': '태자비 거처',
  '/chambermaid': '궁녀 대화',
  '/finale': '마무리',
  '/products': '상품 추천',
  '/complete': '완료',
}

export function PageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    trackPageView(pathname, PAGE_TITLES[pathname] ?? pathname)
  }, [pathname])

  return null
}
