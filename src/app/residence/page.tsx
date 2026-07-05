'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { MobileScene } from '@/components/MobileScene'
import { PrimaryButton } from '@/components/PrimaryButton'
import { useTest } from '@/context/TestProvider'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { getResultCharacterParams, trackStorySceneView } from '@/lib/analytics'
import { IMAGES } from '@/lib/images'

export default function ResidencePage() {
  const router = useRouter()
  const { isTestComplete, resultQueenId, isReady } = useTest()
  const hasTrackedScene = useRef(false)

  useEffect(() => {
    if (!isReady) return
    if (!isTestComplete || !resultQueenId) {
      router.replace('/test')
      return
    }
    if (!ENABLE_SCORE_MATCHING) {
      router.replace('/complete')
    }
  }, [isReady, isTestComplete, resultQueenId, router])

  useEffect(() => {
    if (!resultQueenId || hasTrackedScene.current) return
    hasTrackedScene.current = true
    trackStorySceneView({
      scene_group: 'residence',
      scene_step: 0,
      scene_id: 'residence',
      ...getResultCharacterParams(resultQueenId),
    })
  }, [resultQueenId])

  const handleNext = () => {
    router.push('/chambermaid')
  }

  if (!isReady || !resultQueenId) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-navy text-gold-light/60">
        불러오는 중...
      </div>
    )
  }

  return (
    <MobileScene
      src={IMAGES.scenes.residence}
      alt="태자비 거처"
      priority
      imagePosition="center 42%"
      imageAnimation="residence-walk-in"
    >
      <div className="residence-ui-enter absolute inset-x-0 bottom-0 z-20 mx-auto max-w-[430px] bg-gradient-to-t from-[#1a1410] via-[#1a1410]/88 to-transparent px-4 pb-6 pt-14">
        <PrimaryButton onClick={handleNext} className="w-full">
          다음 ▶
        </PrimaryButton>
      </div>
    </MobileScene>
  )
}
