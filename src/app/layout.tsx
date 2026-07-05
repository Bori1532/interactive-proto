import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { MobileShell } from '@/components/MobileShell'
import { PageTracker } from '@/components/PageTracker'
import { TestProvider } from '@/context/TestProvider'
import './globals.css'

export const metadata: Metadata = {
  title: '황태자비로서의 첫 걸음 | 대한제국 성향 테스트',
  description:
    '대한제국이 2026년까지 이어진 가상 세계관에서, 당신과 가장 닮은 황후를 찾아보세요.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f1a2e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#0a0f1a] text-ivory antialiased">
        <GoogleAnalytics />
        <TestProvider>
          <PageTracker />
          <MobileShell>{children}</MobileShell>
        </TestProvider>
      </body>
    </html>
  )
}
