interface ScenePlaceholderProps {
  label: string
  sublabel?: string
}

/** 에셋 준비 전 씬 자리표시자 — 배경·캐릭터 디자인 미적용 */
export function ScenePlaceholder({ label, sublabel }: ScenePlaceholderProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-navy-mid px-6 text-center">
      <p className="font-serif text-sm tracking-wide text-gold-light/50">{label}</p>
      {sublabel && <p className="mt-2 text-xs text-ivory-muted/60">{sublabel}</p>}
    </div>
  )
}
