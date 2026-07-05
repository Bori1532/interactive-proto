'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MobileScene } from '@/components/MobileScene'
import { QuestPanel } from '@/components/quest/QuestPanel'
import { QuestProgress } from '@/components/quest/QuestProgress'
import { useTest } from '@/context/TestProvider'
import { GA_EVENTS, trackEvent } from '@/lib/analytics'
import { QUESTIONS } from '@/lib/data/questions'
import { IMAGES } from '@/lib/images'

const TOTAL = QUESTIONS.length

export default function TestPage() {
  const router = useRouter()
  const { answers, setAnswer, isReady } = useTest()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isReady) return
    const answeredCount = Object.keys(answers).length
    if (answeredCount >= TOTAL) {
      router.replace('/result')
      return
    }
    setCurrentIndex(answeredCount)
  }, [isReady, answers, router])

  const question = QUESTIONS[currentIndex]

  const handleChoice = (optionIndex: number) => {
    if (!question) return

    const option = question.options[optionIndex]
    if (!option) return

    trackEvent(GA_EVENTS.QUESTION_ANSWERED, {
      question_id: question.id,
      result_queen: option.queen,
      points: option.points,
    })

    setAnswer(question.id, {
      queen: option.queen,
      points: option.points,
    })

    if (currentIndex + 1 >= TOTAL) {
      trackEvent(GA_EVENTS.TEST_COMPLETED)
      router.push('/result')
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  if (!isReady || !question) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-navy text-gold-light/60">
        불러오는 중...
      </div>
    )
  }

  return (
    <MobileScene
      src={IMAGES.scenes.quest}
      alt="내훈관 질문"
      priority
      imagePosition="center center"
    >
      <QuestPanel
        question={question.text}
        options={question.options}
        onChoice={handleChoice}
      />

      <div className="absolute inset-x-0 bottom-[2.5%] z-20 flex justify-center">
        <QuestProgress current={currentIndex + 1} total={TOTAL} />
      </div>
    </MobileScene>
  )
}
