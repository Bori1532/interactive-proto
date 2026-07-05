import type { QuestionOption } from '@/lib/types'
import { QuestChoice } from '@/components/quest/QuestChoice'

interface QuestPanelProps {
  question: string
  options: QuestionOption[]
  onChoice: (optionIndex: number) => void
}

/** 질문 + 선택지 4개 — 참고 목업처럼 중앙 정렬 패널 */
export function QuestPanel({ question, options, onChoice }: QuestPanelProps) {
  return (
    <div className="quest-panel">
      <div className="quest-panel-box quest-panel-question">
        <p className="quest-panel-question-text">{question}</p>
      </div>

      <div className="quest-panel-choices">
        {options.map((option, index) => (
          <QuestChoice key={index} onClick={() => onChoice(index)}>
            {option.text}
          </QuestChoice>
        ))}
      </div>
    </div>
  )
}
