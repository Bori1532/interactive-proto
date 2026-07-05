import type { Queen } from '@/lib/types'
import { PlaceholderImage, queenPlaceholderType } from './PlaceholderImage'

interface QueenPortraitProps {
  queen: Queen
  size?: 'sm' | 'lg'
}

export function QueenPortrait({ queen, size = 'lg' }: QueenPortraitProps) {
  const sizeClass =
    size === 'lg' ? 'h-52 w-40 sm:h-60 sm:w-44' : 'h-36 w-28'

  return (
    <div
      className={`relative overflow-hidden rounded-sm border-2 border-gold shadow-[0_4px_24px_rgba(201,162,39,0.25)] ${sizeClass}`}
    >
      <PlaceholderImage type={queenPlaceholderType(queen.id)} className="h-full w-full" label={queen.name} />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-2 pb-2 pt-6 text-center">
        <span className="font-serif text-sm text-gold-light">{queen.name}</span>
      </div>
    </div>
  )
}
