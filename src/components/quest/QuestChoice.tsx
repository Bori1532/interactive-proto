interface QuestChoiceProps {
  children: React.ReactNode
  onClick: () => void
}

export function QuestChoice({ children, onClick }: QuestChoiceProps) {
  return (
    <button type="button" onClick={onClick} className="quest-panel-box quest-choice">
      <span className="quest-choice-icon" aria-hidden>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
          <path d="M4 0 8 4 4 8 0 4z" />
        </svg>
      </span>
      <span className="quest-choice-text">{children}</span>
    </button>
  )
}
