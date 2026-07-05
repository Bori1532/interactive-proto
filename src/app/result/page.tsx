'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PageHeader } from '@/components/ContentCard'
import { FullScreenBackground } from '@/components/FullScreenBackground'
import { PrimaryButton } from '@/components/PrimaryButton'
import { QueenResultScene } from '@/components/QueenResultScene'
import { useTest } from '@/context/TestProvider'
import { trackResultCharacter } from '@/lib/analytics'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { QUEENS } from '@/lib/data/queens'

export default function ResultPage() {
  const router = useRouter()
  const { resultQueenId, isTestComplete, isReady } = useTest()
  const hasTrackedResult = useRef(false)
  const [exiting, setExiting] = useState(false)

  const handleProceedToResidence = () => {
    if (exiting) return
    setExiting(true)
    window.setTimeout(() => router.push('/residence'), 800)
  }

  useEffect(() => {
    if (!isReady) return
    if (!isTestComplete) {
      router.replace('/test')
      return
    }
    if (hasTrackedResult.current) return

    if (ENABLE_SCORE_MATCHING && resultQueenId) {
      hasTrackedResult.current = true
      trackResultCharacter(resultQueenId)
    }
  }, [isReady, isTestComplete, resultQueenId, router])

  if (!isReady || !isTestComplete) {
    return (
      <FullScreenBackground scene="night">
        <div className="flex flex-1 items-center justify-center text-gold-light/60">
          불러오는 중...
        </div>
      </FullScreenBackground>
    )
  }

  if (!ENABLE_SCORE_MATCHING || !resultQueenId) {
    return (
      <FullScreenBackground scene="night">
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
          <PageHeader
            eyebrow="테스트 완료"
            title="수고하셨습니다, 전하"
            subtitle="모든 문항에 응답하셨습니다. 황후 매칭 결과는 콘텐츠 준비 후 공개될 예정입니다."
          />
          <div className="mt-10 w-full max-w-xs">
            <PrimaryButton onClick={() => router.push('/complete')} className="w-full">
              완료하기
            </PrimaryButton>
          </div>
        </main>
      </FullScreenBackground>
    )
  }

  const queen = QUEENS[resultQueenId]

  return (
    <div className={`relative min-h-dvh w-full bg-[#0a0f1a] ${exiting ? 'result-exit-walk' : ''}`}>
      <QueenResultScene queen={queen} />

      {exiting && <div className="result-walk-vignette" aria-hidden />}

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto max-w-[430px] bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent px-4 pb-6 pt-12">
        <PrimaryButton
          onClick={handleProceedToResidence}
          disabled={exiting}
          className="pointer-events-auto w-full"
        >
          다음 ▶
        </PrimaryButton>
      </div>
    </div>
  )
}
