'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MobileScene } from '@/components/MobileScene'
import { VisualNovelDialog } from '@/components/VisualNovelDialog'
import { IMAGES } from '@/lib/images'

export default function EntrancePage() {
  const router = useRouter()
  const [exiting, setExiting] = useState(false)

  const handleProceed = () => {
    if (exiting) return
    setExiting(true)
    window.setTimeout(() => router.push('/tutor'), 550)
  }

  return (
    <div className={exiting ? 'entrance-exit min-h-dvh' : 'min-h-dvh'}>
      <MobileScene src={IMAGES.scenes.entrance} alt="궁으로 입장" priority>
        <button
          type="button"
          onClick={handleProceed}
          disabled={exiting}
          className="entrance-tap-zone absolute left-1/2 top-[38%] z-20 flex h-[28%] w-[70%] -translate-x-1/2 flex-col items-center justify-center gap-2 border-0 bg-transparent p-0 disabled:cursor-default"
          aria-label="화면을 눌러 계단을 오릅니다"
        >
          <span className="entrance-tap-ring pointer-events-none absolute inset-0 rounded-2xl" aria-hidden />
          <span className="entrance-tap-text relative z-10 font-serif text-[16px] tracking-wide text-ivory">
            화면을 누르면 계단을 오릅니다
          </span>
          <span className="entrance-tap-arrow relative z-10 text-gold-light" aria-hidden>
            <svg width="20" height="11" viewBox="0 0 20 11" fill="none">
              <path d="M10 11L0 0h20L10 11z" fill="currentColor" />
            </svg>
          </span>
        </button>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <VisualNovelDialog
            hideSpeaker
            speaker=""
            text="새내기 황태자비인 당신. 간단한 테스트를 통해 나와 닮은 황후가 누가 있는지 찾아보세요."
          />
        </div>
      </MobileScene>
    </div>
  )
}
