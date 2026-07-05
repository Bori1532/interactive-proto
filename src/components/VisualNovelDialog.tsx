import type { ReactNode } from 'react'

interface VisualNovelDialogProps {
  speaker: string
  text: string
  children?: ReactNode
  fixed?: boolean
  hideSpeaker?: boolean
}

export function VisualNovelDialog({
  speaker,
  text,
  children,
  fixed = false,
  hideSpeaker = false,
}: VisualNovelDialogProps) {
  const wrapperClass = fixed
    ? 'fixed bottom-0 left-0 right-0 z-50 mx-auto px-4 pb-6 pt-2'
    : 'px-4 pb-6 pt-2'

  return (
    <div className={wrapperClass} style={{ maxWidth: 430 }}>
      <div className="vn-dialog relative rounded-sm px-5 pb-5 pt-8">
        {!hideSpeaker && speaker !== '—' && (
          <div className="absolute -top-3 left-4">
            <span className="inline-block rounded-sm border border-gold-dark bg-navy px-3 py-1 text-xs font-semibold tracking-wide text-gold-light shadow-md">
              {speaker}
            </span>
          </div>
        )}

        <p className="text-[15px] leading-[1.75] text-navy sm:text-base">{text}</p>

        {children && <div className="mt-4 flex justify-end">{children}</div>}

        <div className="absolute bottom-3 right-4 text-gold-dark opacity-60">
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden>
            <polygon points="0,0 8,4 0,8" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}
