interface ChoiceButtonProps {
  children: React.ReactNode
  onClick: () => void
  index: number
}

const LABELS = ['가', '나', '다', '라']

export function ChoiceButton({ children, onClick, index }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="choice-card group flex w-full items-start gap-3 rounded-sm px-4 py-4 text-left transition-all duration-150 active:scale-[0.98] sm:px-5"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold-dark bg-navy text-xs font-bold text-gold-light shadow-sm transition-colors group-hover:bg-navy-mid">
        {LABELS[index]}
      </span>
      <span className="pt-0.5 text-[14px] leading-relaxed text-navy sm:text-[15px]">{children}</span>
    </button>
  )
}
