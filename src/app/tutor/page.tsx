'use client'

import { useRouter } from 'next/navigation'
import { MobileScene } from '@/components/MobileScene'
import { PrimaryButton } from '@/components/PrimaryButton'
import { VisualNovelDialog } from '@/components/VisualNovelDialog'
import { GA_EVENTS, trackEvent } from '@/lib/analytics'
import { IMAGES } from '@/lib/images'

export default function TutorPage() {
  const router = useRouter()

  const handleNext = () => {
    trackEvent(GA_EVENTS.TEACHER_INTRO_COMPLETE)
    router.push('/test')
  }

  return (
    <MobileScene
      src={IMAGES.characters.tutor}
      alt="내훈관 소개"
      priority
      imageAnimation="tutor-walk-in"
    >
      <div className="tutor-dialog-enter absolute inset-x-0 bottom-0 z-20">
        <VisualNovelDialog
          speaker="내훈관"
          text="저하, 강녕하셨사옵니까? 오늘 태자비 수업을 맡은 내훈관이옵니다. 제가 하나씩 드리는 문항에서 저하와 가깝다 여겨지는 것을 고르시면 됩니다. 역대 훌륭한 황후 폐하 분들의 지혜와 덕목을 통하여 장차 어떠한 황후가 될지 그려 보시옵소서."
        >
          <PrimaryButton onClick={handleNext} className="min-h-9 px-5 text-xs">
            다음으로 ▶
          </PrimaryButton>
        </VisualNovelDialog>
      </div>
    </MobileScene>
  )
}
