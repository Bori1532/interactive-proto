import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { AnimatedBook } from './AnimatedBook'
import { FloatingBook } from './FloatingBook'
import { deskBookPatchStyle } from './bookSpot'

type IntroPhase = 'waiting' | 'ready' | 'animating' | 'done'

interface IntroScreenProps {
  onComplete: () => void
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<IntroPhase>('waiting')
  const [showPrompt, setShowPrompt] = useState(false)
  const handControls = useAnimationControls()

  useEffect(() => {
    const promptTimer = window.setTimeout(() => {
      setShowPrompt(true)
      setPhase('ready')
    }, 2000)

    return () => window.clearTimeout(promptTimer)
  }, [])

  const handleBookClick = useCallback(async () => {
    if (phase !== 'ready') return

    setPhase('animating')
    setShowPrompt(false)

    await handControls.start({
      y: [0, 18, -8, -36],
      scale: [1, 1.02, 1.05, 1.07],
      transition: {
        duration: 1.8,
        times: [0, 0.25, 0.55, 1],
        ease: 'easeInOut',
      },
    })

    await new Promise((resolve) => window.setTimeout(resolve, 2400))

    setPhase('done')
    window.setTimeout(onComplete, 900)
  }, [phase, handControls, onComplete])

  const showDeskPatch = phase === 'ready' || phase === 'animating'

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0a0806]">
      <img
        src="/images/intro-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 22% 72%, rgba(255,180,80,0.28) 0%, transparent 70%)',
          animation: 'lamp-flicker 4s ease-in-out infinite',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* 책상 위 배경 책 — 플로팅 책 등장 시 덮어 이중 노출 방지 */}
      <AnimatePresence>
        {showDeskPatch && (
          <motion.div
            className="absolute z-[11]"
            style={deskBookPatchStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  'linear-gradient(165deg, #1a130e 0%, #2c2118 40%, #1e1712 100%)',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === 'animating' && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] overflow-hidden"
            style={{ height: '50%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative h-full w-full"
              animate={handControls}
              initial={{ y: 0, scale: 1 }}
            >
              <img
                src="/images/intro-bg.png"
                alt=""
                className="absolute bottom-0 left-0 h-[210%] w-full object-cover object-bottom"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 분리된 책 애셋 — 위아래로 부드럽게 플로팅 */}
      <AnimatePresence>
        {phase === 'ready' && <FloatingBook onClick={handleBookClick} />}
      </AnimatePresence>

      <AnimatePresence>
        {phase === 'animating' && <AnimatedBook />}
      </AnimatePresence>

      <AnimatePresence>
        {showPrompt && phase === 'ready' && (
          <motion.div
            className="absolute inset-x-0 bottom-[7%] z-30 flex flex-col items-center gap-2 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p
              className="text-center text-lg tracking-[0.4em] text-amber-50/95 sm:text-xl md:text-2xl"
              style={{ animation: 'prompt-pulse 2.8s ease-in-out infinite' }}
            >
              책을 들어주세요
            </p>
            <p className="text-center text-[11px] tracking-[0.25em] text-amber-100/45 sm:text-xs">
              Please pick up the book.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            className="absolute inset-0 z-40 bg-[#f5f0e8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
