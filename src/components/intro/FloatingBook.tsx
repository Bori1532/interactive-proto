import { motion } from 'framer-motion'
import { BookImage } from './BookImage'
import { bookSpotStyle } from './bookSpot'

interface FloatingBookProps {
  onClick: () => void
}

export function FloatingBook({ onClick }: FloatingBookProps) {
  return (
    <motion.button
      type="button"
      aria-label="책을 들어주세요"
      className="absolute z-20 cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50"
      style={bookSpotStyle}
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: [0, -14, 0],
        transition: {
          opacity: { duration: 0.6 },
          y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
        },
      }}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <BookImage />
    </motion.button>
  )
}
