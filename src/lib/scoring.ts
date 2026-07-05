import type { Answers, QueenId, Scores } from './types'

const INITIAL_SCORES: Scores = {
  wonyeong: 0,
  inhyeon: 0,
  myeongseong: 0,
  jang: 0,
}

export function calculateScores(answers: Answers): Scores {
  const scores = { ...INITIAL_SCORES }

  for (const answer of Object.values(answers)) {
    scores[answer.queen] += answer.points
  }

  return scores
}

export function getTopQueen(scores: Scores): QueenId {
  const entries = Object.entries(scores) as [QueenId, number][]
  entries.sort((a, b) => b[1] - a[1])
  return entries[0][0]
}
