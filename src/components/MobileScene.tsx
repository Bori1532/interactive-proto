import Image from 'next/image'
import type { ReactNode } from 'react'

type SceneImageAnimation = 'tutor-walk-in' | 'residence-walk-in'

interface MobileSceneProps {
  src: string
  alt: string
  children?: ReactNode
  priority?: boolean
  imageAnimation?: SceneImageAnimation
  /** 배경 이미지 object-position (기본: center 38%) */
  imagePosition?: string
}

const IMAGE_ANIMATION_CLASS: Record<SceneImageAnimation, string> = {
  'tutor-walk-in': 'scene-tutor-walk-in',
  'residence-walk-in': 'scene-residence-walk-in',
}

/** 모바일 세로(9:16) 씬 — 화면 전체를 채우는 배경 */
export function MobileScene({
  src,
  alt,
  children,
  priority = false,
  imageAnimation,
  imagePosition = 'center 38%',
}: MobileSceneProps) {
  const animationClass = imageAnimation ? IMAGE_ANIMATION_CLASS[imageAnimation] : ''

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-navy">
      <div className={`absolute inset-0 ${animationClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="430px"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          draggable={false}
        />
      </div>
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  )
}
