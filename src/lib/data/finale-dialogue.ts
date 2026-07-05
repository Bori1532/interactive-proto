export type FinaleNextType = 'arrow' | 'finish'

export interface FinaleDialogueStep {
  type: 'dialogue'
  image: 1 | 2
  nextType: FinaleNextType
}

export interface FinaleConfirmStep {
  type: 'confirm'
  image: 'turnback'
}

export type FinaleStep = FinaleDialogueStep | FinaleConfirmStep

export const FINALE_STEPS: FinaleStep[] = [
  {
    type: 'dialogue',
    image: 1,
    nextType: 'arrow',
  },
  {
    type: 'dialogue',
    image: 2,
    nextType: 'finish',
  },
  {
    type: 'confirm',
    image: 'turnback',
  },
]
