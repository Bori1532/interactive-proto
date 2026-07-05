import type { QueenId } from '../types'
import { QUEENS } from './queens'

export type HousemaidImageKey = 1 | 2 | 3 | 4 | 5

export type DialogLayout = 'default' | 'below-preset'

export interface ChambermaidStep {
  image: HousemaidImageKey
  speaker: string
  text: string
  layout?: DialogLayout
  productUrl?: string
}

const MAID_REACTIONS: Record<QueenId, string> = {
  wonyeong: '원경왕후께선 남자들도 떨게 만드는 지략과 담대함으로 황실을 지키셨죠',
  inhyeon: '인현왕후께선 문자 그대로 현모양처이셨지요',
  jang: '부대빈은 비록 폐비긴 했지만, 자신을 아름답게 가꿀 줄 알았고 어떻게 하면 사랑받을 수 있는지 아는 분이었다고 들었어요',
  myeongseong: '명성황후께선 사람과 사람, 나라와 나라 사이 관계에 고민이 많으셨지요',
}

const MAID_PRODUCT_PITCHES: Record<QueenId, { text: string; url: string }> = {
  inhyeon: {
    text: '매일매일 좋은 생각이나 실수를 차곡차곡 기록해두시면 행동을 가다듬고 아무도 함부로 하지 못 하는 훌륭한 황후가 되실 거예요',
    url: 'https://gift.kakao.com/product/10028611',
  },
  jang: {
    text: '마음을 얻는 건 0.5초 코를 스치는 향기에서부터 비롯된대요. 저하 여기 향수 써보셨어요?',
    url: 'https://www.29cm.co.kr/products/3390733',
  },
  myeongseong: {
    text: '다양한 사람을 만나보고 건강한 관계를 만드시면 분명히 저하께 힘이 될 거예요. 적이 아니라 내 편을 만드는 능력도 황후에게 필요하니까요.',
    url: 'https://www.donghaeng.club/',
  },
  wonyeong: {
    text: '우리나라와 세계 정세가 돌아가는 소식을 두루 살피고 저하의 것으로 소화한다면 빛나는 꾀와 지혜가 더욱 강한 힘을 발휘할 거예요',
    url: 'https://newneek.co/',
  },
}

export function getMaidReaction(queenId: QueenId): string {
  return MAID_REACTIONS[queenId]
}

export function getMaidProductPitch(queenId: QueenId) {
  return MAID_PRODUCT_PITCHES[queenId]
}

/** housemaid-1~5 이미지 기반 VN 스텝 (결과 캐릭터 자동 연동) */
export function buildChambermaidSteps(queenId: QueenId): ChambermaidStep[] {
  const queen = QUEENS[queenId]
  const product = MAID_PRODUCT_PITCHES[queenId]

  return [
    {
      image: 1,
      speaker: '궁녀',
      text: '오늘 수업 고생 많으셨어요🥺',
    },
    {
      image: 2,
      speaker: '궁녀',
      text: '오늘은 어떤 거 배우셨어요?',
    },
    {
      image: 2,
      speaker: '태자비',
      text: '나와 비슷한 역대 황후가 누구인지 알아보는 수업이었어.',
    },
    {
      image: 3,
      speaker: '궁녀',
      text: '재밌었겠다!😆\n저하는 누구랑 닮았대요?',
    },
    {
      image: 3,
      speaker: '태자비',
      text: `${queen.name}께서 나랑 비슷한 성향이셨대`,
    },
    {
      image: 4,
      speaker: '궁녀',
      text: getMaidReaction(queenId),
    },
    {
      image: 5,
      speaker: '궁녀',
      text: product.text,
      productUrl: product.url,
    },
  ]
}
