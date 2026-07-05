interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full px-4">
      <div className="mb-1.5 flex items-center justify-between text-[11px] tracking-wider text-gold-light/70">
        <span>
          {current} / {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-navy-mid ring-1 ring-gold/20">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
