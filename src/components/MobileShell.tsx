import type { ReactNode } from 'react'
import { MOBILE_MAX_WIDTH } from '@/lib/layout'

export function MobileShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="mx-auto min-h-dvh w-full bg-navy"
      style={{ maxWidth: MOBILE_MAX_WIDTH }}
    >
      {children}
    </div>
  )
}
