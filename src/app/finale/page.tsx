'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FinaleScene } from '@/components/FinaleScene'
import { useTest } from '@/context/TestProvider'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { trackReturnHomeConfirm } from '@/lib/analytics'
import type { QueenId } from '@/lib/types'

export default function FinalePage() {
  const router = useRouter()
  const { isTestComplete, resultQueenId, isReady, resetAnswers } = useTest()
  const [isLeaving, setIsLeaving] = useState(false)
  const trackedQueenIdRef = useRef<QueenId | null>(null)

  if (resultQueenId) {
    trackedQueenIdRef.current = resultQueenId
  }

  const queenId = trackedQueenIdRef.current

  useEffect(() => {
    if (!isReady || isLeaving) return
    if (!isTestComplete || !resultQueenId) {
      router.replace('/test')
      return
    }
    if (!ENABLE_SCORE_MATCHING) {
      router.replace('/complete')
    }
  }, [isReady, isTestComplete, resultQueenId, router, isLeaving])

  const handleGoHome = () => {
    if (queenId) {
      trackReturnHomeConfirm(queenId)
    }
    setIsLeaving(true)
    resetAnswers()
    router.replace('/')
  }

  if (!isReady || (!queenId && !isLeaving)) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-navy text-gold-light/60">
        불러오는 중...
      </div>
    )
  }

  return <FinaleScene queenId={queenId!} onGoHome={handleGoHome} />
}
