'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { HousemaidScene } from '@/components/HousemaidScene'
import { useTest } from '@/context/TestProvider'
import { buildChambermaidSteps } from '@/lib/data/chambermaid-dialogue'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { trackStoryStart } from '@/lib/analytics'

export default function ChambermaidPage() {
  const router = useRouter()
  const { isTestComplete, resultQueenId, isReady } = useTest()
  const hasTrackedStoryStart = useRef(false)

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
    if (!resultQueenId || hasTrackedStoryStart.current) return
    hasTrackedStoryStart.current = true
    trackStoryStart(resultQueenId)
  }, [resultQueenId])

  const steps = useMemo(
    () => (resultQueenId ? buildChambermaidSteps(resultQueenId) : []),
    [resultQueenId],
  )

  if (!isReady || !resultQueenId || steps.length === 0) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-navy text-gold-light/60">
        불러오는 중...
      </div>
    )
  }

  return <HousemaidScene steps={steps} queenId={resultQueenId} />
}
