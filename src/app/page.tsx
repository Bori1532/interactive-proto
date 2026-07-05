'use client'

import { useRouter } from 'next/navigation'
import { MobileScene } from '@/components/MobileScene'
import { PrimaryButton } from '@/components/PrimaryButton'
import { useTest } from '@/context/TestProvider'
import { GA_EVENTS, trackEvent } from '@/lib/analytics'
import { IMAGES } from '@/lib/images'

export default function IntroPage() {
  const router = useRouter()
  const { resetAnswers } = useTest()

  const handleStart = () => {
    resetAnswers()
    trackEvent(GA_EVENTS.INTRO_START)
    router.push('/entrance')
  }

  return (
    <MobileScene src={IMAGES.scenes.intro} alt="황태자비로서의 첫 걸음" priority>
      <div className="flex min-h-dvh flex-col justify-between px-5 pb-10 pt-14">
        <div className="text-center">
          <h1 className="text-outline-strong font-serif text-[26px] font-bold leading-snug text-ivory">
            황태자비로서의
            <br />
            첫 걸음
          </h1>
          <p className="text-outline mx-auto mt-5 max-w-[300px] text-[13px] leading-relaxed text-ivory">
            2026년 입헌군주제 대한제국 서울
            <br />
            <br />
            50:1 경쟁의 간택을 거친 당신은 빛나는 미모와 지성, 마음씨로 벌써부터 궁인들의 존경을 받고 있습니다
          </p>
        </div>

        <PrimaryButton onClick={handleStart} className="w-full">
          시작하기
        </PrimaryButton>
      </div>
    </MobileScene>
  )
}
