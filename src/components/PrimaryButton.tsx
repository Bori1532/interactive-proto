interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  className?: string
  external?: boolean
  variant?: 'gold' | 'outline'
  disabled?: boolean
}

export function PrimaryButton({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  external,
  variant = 'gold',
  disabled = false,
}: PrimaryButtonProps) {
  const baseClass =
    variant === 'gold'
      ? 'btn-gold inline-flex min-h-11 items-center justify-center rounded-sm px-6 py-2.5 text-sm font-bold tracking-wide transition-all disabled:opacity-50'
      : 'inline-flex min-h-11 items-center justify-center rounded-sm border border-gold/60 bg-transparent px-6 py-2.5 text-sm font-semibold tracking-wide text-ivory transition-all hover:bg-ivory/10 active:scale-[0.98] disabled:opacity-50'

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseClass} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClass} ${className}`}>
      {children}
    </button>
  )
}
