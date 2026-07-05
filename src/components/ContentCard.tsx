import type { ReactNode } from 'react'

interface ContentCardProps {
  children: ReactNode
  className?: string
}

export function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`content-card rounded-sm p-4 sm:p-5 ${className}`}>{children}</div>
  )
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="mb-2 text-[11px] tracking-[0.25em] text-gold-light/80">{eyebrow}</p>
      )}
      <h1 className="whitespace-pre-line font-serif text-2xl font-bold leading-snug text-ivory sm:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-[13px] leading-relaxed text-ivory-dark/90 sm:text-sm">{subtitle}</p>
      )}
    </div>
  )
}
