const bookShadow =
  'drop-shadow(0 10px 24px rgba(0,0,0,0.65)) drop-shadow(0 0 18px rgba(255,200,120,0.25))'

interface BookImageProps {
  className?: string
}

export function BookImage({ className = '' }: BookImageProps) {
  return (
    <img
      src="/images/book.png"
      alt="책"
      draggable={false}
      className={`block h-auto w-full object-contain ${className}`}
      style={{ filter: bookShadow }}
    />
  )
}
