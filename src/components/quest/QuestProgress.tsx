interface QuestProgressProps {
  current: number
  total: number
}

export function QuestProgress({ current, total }: QuestProgressProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-gold/80" aria-hidden>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <path d="M7 0l1.5 3H14L9 5.5 10.5 10 7 7.5 3.5 10 5 5.5 0 3h5.5z" />
        </svg>
      </span>
      <div className="flex items-center gap-3 font-serif text-sm text-ivory/90">
        <span className="text-gold/60" aria-hidden>
          ‹
        </span>
        <span>
          {current} / {total}
        </span>
        <span className="text-gold/60" aria-hidden>
          ›
        </span>
      </div>
    </div>
  )
}
