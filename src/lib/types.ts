export type QueenId = 'wonyeong' | 'inhyeon' | 'myeongseong' | 'jang'

export interface Queen {
  id: QueenId
  name: string
  title: string
  era: string
  imageGradient: string
  symbol: string
  description: string
  resultImage: string
  personality: string[]
  traits: string
}

export interface QuestionOption {
  text: string
  queen: QueenId
  points: number
}

export interface Question {
  id: number
  text: string
  options: QuestionOption[]
}

export interface Product {
  id: string
  queenId: QueenId
  name: string
  description: string
  url: string
  price: string
}

export interface AnswerRecord {
  queen: QueenId
  points: number
}

export type Answers = Record<number, AnswerRecord>

export type Scores = Record<QueenId, number>
