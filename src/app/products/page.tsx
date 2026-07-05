'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PageHeader } from '@/components/ContentCard'
import { FullScreenBackground } from '@/components/FullScreenBackground'
import { PrimaryButton } from '@/components/PrimaryButton'
import { ProductCard } from '@/components/ProductCard'
import { QueenPortrait } from '@/components/QueenPortrait'
import { useTest } from '@/context/TestProvider'
import { trackRecommendationClick, trackRecommendationView } from '@/lib/analytics'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { PRODUCTS } from '@/lib/data/products'
import { QUEENS } from '@/lib/data/queens'
import type { Product } from '@/lib/types'

export default function ProductsPage() {
  const router = useRouter()
  const { resultQueenId, isTestComplete, isReady } = useTest()

  useEffect(() => {
    if (!isReady) return
    if (!isTestComplete) {
      router.replace('/test')
      return
    }
    if (!ENABLE_SCORE_MATCHING) {
      router.replace('/complete')
    }
  }, [isReady, isTestComplete, router])

  useEffect(() => {
    if (!resultQueenId) return
    const product = PRODUCTS.find((p) => p.queenId === resultQueenId)
    if (product) {
      trackRecommendationView(resultQueenId, product.url)
    }
  }, [resultQueenId])

  const handleProductClick = (product: Product) => {
    if (!resultQueenId) return
    trackRecommendationClick(resultQueenId, product.url)
  }

  if (!ENABLE_SCORE_MATCHING) {
    return null
  }

  if (!isReady || !resultQueenId) {
    return (
      <FullScreenBackground scene="study">
        <div className="flex flex-1 items-center justify-center text-gold-light/60">불러오는 중...</div>
      </FullScreenBackground>
    )
  }

  const queen = QUEENS[resultQueenId]
  const queenProducts = PRODUCTS.filter((p) => p.queenId === resultQueenId)

  return (
    <FullScreenBackground scene="study">
      <main className="flex flex-1 flex-col overflow-y-auto px-4 py-8 pb-10">
        <div className="flex flex-col items-center text-center">
          <QueenPortrait queen={queen} size="sm" />
          <div className="mt-4">
            <PageHeader
              title={`${queen.name}을 위한 추천`}
              subtitle="당신의 성향에 어울리는 궁중 아이템을 소개합니다"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {queenProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))}
        </div>

        <div className="mt-6">
          <PrimaryButton onClick={() => router.push('/complete')} className="w-full">
            완료하기
          </PrimaryButton>
        </div>
      </main>
    </FullScreenBackground>
  )
}
