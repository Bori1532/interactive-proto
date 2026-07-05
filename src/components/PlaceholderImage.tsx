import type { ReactNode } from 'react'

export type PlaceholderType =
  | 'palace'
  | 'study'
  | 'garden'
  | 'night'
  | 'tutor'
  | 'queen-wonyeong'
  | 'queen-inhyeon'
  | 'queen-myeongseong'
  | 'queen-jang'
  | 'product'

interface PlaceholderImageProps {
  type: PlaceholderType
  className?: string
  label?: string
}

const SCENE_LABELS: Record<PlaceholderType, string> = {
  palace: '경복궁 근정전',
  study: '내훈관 서재',
  garden: '궁중 정원',
  night: '어좌의 밤',
  tutor: '내훈관',
  'queen-wonyeong': '원경왕후',
  'queen-inhyeon': '인현왕후',
  'queen-myeongseong': '명성황후',
  'queen-jang': '옥산부대빈 장씨',
  product: '궁중 보물',
}

function SceneSvg({ type }: { type: PlaceholderType }) {
  if (type === 'tutor') {
    return (
      <svg viewBox="0 0 200 280" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="tutor-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a4268" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <rect width="200" height="280" fill="url(#tutor-bg)" />
        <ellipse cx="100" cy="95" rx="38" ry="42" fill="#e8e0d2" opacity="0.9" />
        <rect x="62" y="130" width="76" height="90" rx="8" fill="#1a2d4a" />
        <rect x="72" y="145" width="56" height="4" rx="2" fill="#c9a227" opacity="0.6" />
        <rect x="78" y="158" width="44" height="3" rx="1.5" fill="#e8d5a3" opacity="0.4" />
        <text x="100" y="250" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif">
          內訓官
        </text>
      </svg>
    )
  }

  if (type.startsWith('queen-')) {
    const symbols: Record<string, string> = {
      'queen-wonyeong': '鳳',
      'queen-inhyeon': '蘭',
      'queen-myeongseong': '光',
      'queen-jang': '月',
    }
    const symbol = symbols[type] ?? '后'

    return (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`queen-bg-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2d4a" />
            <stop offset="50%" stopColor="#0f1a2e" />
            <stop offset="100%" stopColor="#2a4268" />
          </linearGradient>
          <radialGradient id={`queen-glow-${type}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#c9a227" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="200" height="240" fill={`url(#queen-bg-${type})`} />
        <ellipse cx="100" cy="120" rx="70" ry="80" fill={`url(#queen-glow-${type})`} />
        <ellipse cx="100" cy="88" rx="36" ry="40" fill="#f5f0e6" opacity="0.85" />
        <path
          d="M 55 125 Q 100 105 145 125 L 145 200 Q 100 220 55 200 Z"
          fill="#1a2d4a"
          stroke="#c9a227"
          strokeWidth="1"
          opacity="0.9"
        />
        <text
          x="100"
          y="175"
          textAnchor="middle"
          fill="#e8d5a3"
          fontSize="48"
          fontFamily="serif"
          opacity="0.9"
        >
          {symbol}
        </text>
      </svg>
    )
  }

  if (type === 'product') {
    return (
      <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden>
        <rect width="200" height="140" fill="#1a2d4a" />
        <rect x="50" y="30" width="100" height="80" rx="4" fill="#0f1a2e" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M 70 55 L 100 40 L 130 55 L 130 95 L 70 95 Z" fill="none" stroke="#c9a227" strokeWidth="1" opacity="0.6" />
        <circle cx="100" cy="70" r="12" fill="none" stroke="#e8d5a3" strokeWidth="1" />
      </svg>
    )
  }

  const sceneElements: Record<string, ReactNode> = {
    palace: (
      <>
        <rect width="400" height="300" fill="#0f1a2e" />
        <rect x="0" y="200" width="400" height="100" fill="#1a2d4a" />
        <polygon points="200,40 320,120 320,200 80,200 80,120" fill="#1a2d4a" stroke="#c9a227" strokeWidth="1.5" opacity="0.9" />
        <rect x="175" y="130" width="50" height="70" fill="#0f1a2e" stroke="#c9a227" strokeWidth="1" />
        <polygon points="200,25 340,115 340,125 60,125 60,115" fill="#c9a227" opacity="0.3" />
        <circle cx="60" cy="50" r="25" fill="#c9a227" opacity="0.15" />
        <circle cx="340" cy="60" r="20" fill="#e8d5a3" opacity="0.1" />
      </>
    ),
    study: (
      <>
        <rect width="400" height="300" fill="#0f1a2e" />
        <rect x="40" y="180" width="320" height="8" fill="#8b6914" opacity="0.5" />
        <rect x="60" y="100" width="80" height="90" fill="#1a2d4a" stroke="#c9a227" strokeWidth="1" />
        <rect x="160" y="110" width="60" height="80" fill="#1a2d4a" stroke="#c9a227" strokeWidth="1" />
        <rect x="240" y="105" width="90" height="85" fill="#1a2d4a" stroke="#c9a227" strokeWidth="1" />
        <line x1="80" y1="120" x2="120" y2="120" stroke="#e8d5a3" strokeWidth="0.5" opacity="0.4" />
        <line x1="80" y1="135" x2="115" y2="135" stroke="#e8d5a3" strokeWidth="0.5" opacity="0.4" />
      </>
    ),
    garden: (
      <>
        <rect width="400" height="300" fill="#0f1a2e" />
        <ellipse cx="200" cy="250" rx="180" ry="40" fill="#1a2d4a" opacity="0.6" />
        <circle cx="100" cy="180" r="40" fill="#1a2d4a" stroke="#c9a227" strokeWidth="0.5" opacity="0.7" />
        <circle cx="300" cy="170" r="35" fill="#1a2d4a" stroke="#c9a227" strokeWidth="0.5" opacity="0.7" />
        <circle cx="200" cy="150" r="30" fill="#2a4268" stroke="#c9a227" strokeWidth="0.5" opacity="0.6" />
        <path d="M 0 220 Q 100 200 200 215 T 400 220 L 400 300 L 0 300 Z" fill="#1a2d4a" opacity="0.8" />
      </>
    ),
    night: (
      <>
        <rect width="400" height="300" fill="#0a1220" />
        <circle cx="320" cy="60" r="30" fill="#e8d5a3" opacity="0.2" />
        <circle cx="320" cy="60" r="20" fill="#f5f0e6" opacity="0.15" />
        <polygon points="200,80 300,160 300,240 100,240 100,160" fill="#1a2d4a" stroke="#c9a227" strokeWidth="1" opacity="0.8" />
        <rect x="0" y="240" width="400" height="60" fill="#0f1a2e" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {sceneElements[type] ?? sceneElements.palace}
    </svg>
  )
}

export function PlaceholderImage({ type, className = '', label }: PlaceholderImageProps) {
  const displayLabel = label ?? SCENE_LABELS[type]

  return (
    <div
      className={`relative overflow-hidden bg-navy ${className}`}
      role="img"
      aria-label={`${displayLabel} placeholder 이미지`}
    >
      <SceneSvg type={type} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20" />
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="inline-block rounded-full border border-gold/40 bg-navy/70 px-3 py-0.5 text-[10px] tracking-widest text-gold-light/80">
          {displayLabel}
        </span>
      </div>
    </div>
  )
}

export function queenPlaceholderType(queenId: string): PlaceholderType {
  return `queen-${queenId}` as PlaceholderType
}
