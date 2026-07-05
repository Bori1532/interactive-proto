'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { QUESTION_COUNT } from '@/lib/data/questions'
import { ENABLE_SCORE_MATCHING } from '@/lib/features'
import { calculateScores, getTopQueen } from '@/lib/scoring'
import type { AnswerRecord, Answers, QueenId, Scores } from '@/lib/types'

const STORAGE_KEY = 'empire-test-answers-v2'

interface TestContextValue {
  answers: Answers
  scores: Scores
  setAnswer: (questionId: number, answer: AnswerRecord) => void
  resetAnswers: () => void
  isTestComplete: boolean
  resultQueenId: QueenId | null
  isReady: boolean
}

const TestContext = createContext<TestContextValue | null>(null)

export function TestProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Answers>({})
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        setAnswers(JSON.parse(stored) as Answers)
      }
    } catch {
      setAnswers({})
    } finally {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    if (!isReady) return
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  }, [answers, isReady])

  const setAnswer = useCallback((questionId: number, answer: AnswerRecord) => {
    if (!ENABLE_SCORE_MATCHING) return
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }, [])

  const resetAnswers = useCallback(() => {
    setAnswers({})
    sessionStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem('empire-test-answers')
  }, [])

  const isTestComplete = useMemo(
    () => Object.keys(answers).length >= QUESTION_COUNT,
    [answers],
  )

  const scores = useMemo(() => calculateScores(answers), [answers])

  const resultQueenId = useMemo(() => {
    if (!ENABLE_SCORE_MATCHING || !isTestComplete) return null
    return getTopQueen(scores)
  }, [scores, isTestComplete])

  const value = useMemo(
    () => ({
      answers,
      scores,
      setAnswer,
      resetAnswers,
      isTestComplete,
      resultQueenId,
      isReady,
    }),
    [answers, scores, setAnswer, resetAnswers, isTestComplete, resultQueenId, isReady],
  )

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}

export function useTest() {
  const context = useContext(TestContext)
  if (!context) {
    throw new Error('useTest must be used within TestProvider')
  }
  return context
}
