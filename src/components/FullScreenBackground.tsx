import type { ReactNode } from 'react'
import { PlaceholderImage, type PlaceholderType } from './PlaceholderImage'

interface FullScreenBackgroundProps {
  scene?: PlaceholderType
  children: ReactNode
  showScene?: boolean
}

export function FullScreenBackground({
  scene = 'palace',
  children,
  showScene = true,
}: FullScreenBackgroundProps) {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-navy">
      {showScene && (
        <div className="pointer-events-none absolute inset-0">
          <PlaceholderImage type={scene} className="h-full w-full" />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(201, 162, 39, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, rgba(15, 26, 46, 0.3) 0%, rgba(15, 26, 46, 0.85) 70%, rgba(15, 26, 46, 0.95) 100%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L22 18H40L25 28L30 40L20 32L10 40L15 28L0 18H18Z' fill='%23c9a227'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full flex-col">
        {children}
      </div>
    </div>
  )
}
