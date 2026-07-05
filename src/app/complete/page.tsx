'use client'

import { useRouter } from 'next/navigation'
import { PageHeader } from '@/components/ContentCard'
import { FullScreenBackground } from '@/components/FullScreenBackground'
import { PrimaryButton } from '@/components/PrimaryButton'
import { useTest } from '@/context/TestProvider'

export default function CompletePage() {
  const router = useRouter()
  const { resetAnswers } = useTest()

  const handleRetake = () => {
    resetAnswers()
    router.push('/')
  }

  return (
    <FullScreenBackground scene="palace">
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/50 bg-navy-mid">
          <span className="font-serif text-2xl text-gold-light">終</span>
        </div>

        <PageHeader
          title="테스트에 참여해 주셔서 감사합니다"
          subtitle="전하의 첫 걸음을 함께하게 되어 영광입니다. 궁중에서의 앞날에 하늘의 축복이 함께하시길 바랍니다."
        />

        <div className="mt-10 w-full">
          <PrimaryButton onClick={handleRetake} className="w-full">
            처음으로 돌아가기
          </PrimaryButton>
        </div>
      </main>
    </FullScreenBackground>
  )
}
