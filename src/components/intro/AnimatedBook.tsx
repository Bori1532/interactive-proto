import { motion } from 'framer-motion'
import { BookImage } from './BookImage'
import { BOOK_SPOT, bookSpotStyle } from './bookSpot'

export function AnimatedBook() {
  const centerLeft = `calc(50% - ${BOOK_SPOT.widthVw / 2}vw)`

  return (
    <motion.div
      className="absolute inset-0 z-[20]"
      style={{ perspective: 1400 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute"
        style={{
          ...bookSpotStyle,
          height: 'auto',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
        initial={{ y: 0, scale: 1, rotateZ: 0, rotateX: 0 }}
        animate={{
          y: ['0vh', '-6vh', '-18vh', '-26vh'],
          scale: [1, 1.12, 1.4, 1.5],
          rotateZ: [0, -2, 0, 1],
          rotateX: [0, -4, -12, -18],
          left: [bookSpotStyle.left, bookSpotStyle.left, centerLeft, centerLeft],
          transition: {
            duration: 1.6,
            times: [0, 0.35, 0.7, 1],
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          className="relative w-full"
          style={{ transformStyle: 'preserve-3d', aspectRatio: bookSpotStyle.aspectRatio }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transformOrigin: 'left center' }}
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: [0, 0, -140],
              transition: { delay: 1.0, duration: 1.4, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <BookImage />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex"
            style={{ transform: 'translateZ(-2px)' }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1],
              transition: { delay: 1.2, duration: 0.6 },
            }}
          >
            <div
              className="h-full flex-1"
              style={{
                background:
                  'linear-gradient(90deg, #e8e0d0 0%, #f5f0e6 100%)',
                boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.08)',
              }}
            />
            <div
              className="h-full flex-1"
              style={{
                background: '#f0ebe0',
                backgroundImage:
                  'repeating-linear-gradient(transparent, transparent 14px, rgba(0,0,0,0.035) 14px, rgba(0,0,0,0.035) 15px)',
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-4/5 -translate-x-1/2 rounded-full bg-black/40 blur-lg"
          initial={{ opacity: 0.55, scaleX: 1 }}
          animate={{
            opacity: [0.55, 0.28, 0.06],
            scaleX: [1, 0.7, 0.35],
            transition: { duration: 1.6, ease: 'easeOut' },
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.35] }}
        transition={{ delay: 1.4, duration: 1.2 }}
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(255,220,160,0.5) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}
