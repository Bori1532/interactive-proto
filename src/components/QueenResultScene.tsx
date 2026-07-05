import Image from 'next/image'
import type { Queen } from '@/lib/types'

interface QueenResultSceneProps {
  queen: Queen
}

/** 캐릭터별 결과 카드 이미지 — 모바일 세로 풀스크린 */
export function QueenResultScene({ queen }: QueenResultSceneProps) {
  return (
    <div className="queen-result-scene relative min-h-dvh w-full overflow-hidden bg-[#0a0f1a]">
      <div className="queen-result-scene-enter relative mx-auto w-full max-w-[430px]">
        <Image
          src={queen.resultImage}
          alt={`${queen.name} 결과`}
          width={681}
          height={1024}
          priority
          sizes="430px"
          className="h-auto w-full"
          draggable={false}
        />
      </div>
    </div>
  )
}
