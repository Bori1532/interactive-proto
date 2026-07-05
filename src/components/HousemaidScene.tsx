'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '@/components/PrimaryButton'
import type { ChambermaidStep } from '@/lib/data/chambermaid-dialogue'
import {
  getResultCharacterParams,
  trackRecommendationClick,
  trackRecommendationView,
  trackStorySceneView,
} from '@/lib/analytics'
import { IMAGES } from '@/lib/images'
import type { QueenId } from '@/lib/types'

const HOUSEMAID_IMAGES = IMAGES.characters.housemaid

interface HousemaidSceneProps {
  steps: ChambermaidStep[]
  queenId: QueenId
}

export function HousemaidScene({ steps, queenId }: HousemaidSceneProps) {
  const router = useRouter()
  const [stepIndex, setStepIndex] = useState(0)

  const current = steps[stepIndex]
  const isLast = stepIndex >= steps.length - 1

  const imageSrc = useMemo(() => {
    if (!current) return HOUSEMAID_IMAGES[1]
    return HOUSEMAID_IMAGES[current.image]
  }, [current])

  useEffect(() => {
    const step = steps[stepIndex]
    if (!step) return

    trackStorySceneView({
      scene_group: 'chambermaid',
      scene_step: stepIndex,
      scene_id: `housemaid-${step.image}-${stepIndex}`,
      ...getResultCharacterParams(queenId),
    })

    if (step.productUrl) {
      trackRecommendationView(queenId, step.productUrl)
    }
  }, [stepIndex, steps, queenId])

  if (!current) return null

  const handleNext = () => {
    if (isLast) {
      router.push('/finale')
      return
    }
    setStepIndex((prev) => prev + 1)
  }

  const handleProductClick = () => {
    if (!current.productUrl) return
    trackRecommendationClick(queenId, current.productUrl)
    window.open(current.productUrl, '_blank', 'noopener,noreferrer')
  }

  const overlayClass =
    current.layout === 'below-preset'
      ? 'housemaid-dialog-overlay--below-preset'
      : 'housemaid-dialog-overlay--default'

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#1a1410]">
      <div className="relative mx-auto w-full max-w-[430px]">
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={`궁녀 대화 ${current.image}`}
          width={681}
          height={1024}
          priority
          sizes="430px"
          className="h-auto w-full"
          draggable={false}
        />

        {current.speaker === '태자비' && (
          <div className="housemaid-name-tag" aria-hidden>
            <span className="housemaid-name-tag-text">{current.speaker}</span>
          </div>
        )}

        <div className={`housemaid-dialog-overlay ${overlayClass}`}>
          <p className="housemaid-dialog-text whitespace-pre-line">{current.text}</p>

          {current.productUrl && (
            <div className="housemaid-product-action">
              <PrimaryButton onClick={handleProductClick} className="w-full min-h-9 text-xs">
                상품 보기
              </PrimaryButton>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="housemaid-next-hotspot"
          aria-label={isLast ? '완료' : '다음 대사'}
        />
      </div>
    </div>
  )
}
