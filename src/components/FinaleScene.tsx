'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FINALE_STEPS } from '@/lib/data/finale-dialogue'
import {
  getResultCharacterParams,
  trackEndingView,
  trackReturnHomeCancel,
  trackReturnModalView,
  trackStorySceneView,
} from '@/lib/analytics'
import { IMAGES } from '@/lib/images'
import type { QueenId } from '@/lib/types'

function getFinaleImageSrc(step: (typeof FINALE_STEPS)[number]) {
  if (step.type === 'confirm') {
    return IMAGES.scenes.finale.turnback
  }
  return IMAGES.scenes.finale[step.image]
}

interface FinaleSceneProps {
  queenId: QueenId
  onGoHome: () => void
}

export function FinaleScene({ queenId, onGoHome }: FinaleSceneProps) {
  const [stepIndex, setStepIndex] = useState(0)

  const current = FINALE_STEPS[stepIndex]

  useEffect(() => {
    const step = FINALE_STEPS[stepIndex]
    if (!step) return

    if (step.type === 'dialogue') {
      trackStorySceneView({
        scene_group: 'finale',
        scene_step: stepIndex,
        scene_id: `finale-${step.image}`,
        ...getResultCharacterParams(queenId),
      })
      trackEndingView(step.image, queenId)
      return
    }

    trackStorySceneView({
      scene_group: 'finale',
      scene_step: stepIndex,
      scene_id: 'turnback',
      ...getResultCharacterParams(queenId),
    })
    trackReturnModalView(queenId)
  }, [stepIndex, queenId])

  if (!current) return null

  const imageSrc = getFinaleImageSrc(current)
  const isLast = stepIndex >= FINALE_STEPS.length - 1

  const handleNext = () => {
    if (isLast) return
    setStepIndex((prev) => prev + 1)
  }

  const handleStay = () => {
    trackReturnHomeCancel(queenId)
    setStepIndex(1)
  }

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#1a1410]">
      <div className="relative mx-auto w-full max-w-[430px]">
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={current.type === 'confirm' ? '첫 화면 이동 확인' : `마무리 대화 ${current.image}`}
          width={681}
          height={1024}
          priority
          sizes="430px"
          className="h-auto w-full"
          draggable={false}
        />

        {current.type === 'dialogue' && (
          <>
            {current.nextType === 'arrow' ? (
              <button
                type="button"
                onClick={handleNext}
                className="housemaid-next-hotspot"
                aria-label="다음 대사"
              />
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="finale-finish-hotspot"
                aria-label="마무리하기"
              />
            )}
          </>
        )}

        {current.type === 'confirm' && (
          <div className="finale-confirm-hotspots">
            <button
              type="button"
              onClick={onGoHome}
              className="finale-confirm-yes"
              aria-label="예, 첫 화면으로 이동"
            />
            <button
              type="button"
              onClick={handleStay}
              className="finale-confirm-no"
              aria-label="아니오"
            />
          </div>
        )}
      </div>
    </div>
  )
}
