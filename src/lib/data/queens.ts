import type { Queen, QueenId } from '../types'
import { IMAGES } from '../images'

/**
 * 캐릭터별 특성 — 성향 테스트 매칭 기준
 * (내부 id는 기존 코드 호환용, 표기는 원경·인현·명성·장씨)
 */
export const QUEENS: Record<QueenId, Queen> = {
  wonyeong: {
    id: 'wonyeong',
    name: '원경왕후',
    title: '정궁 · 원경왕후',
    era: '대한제국',
    imageGradient: 'from-amber-900 via-red-950 to-stone-900',
    symbol: '鳳',
    resultImage: IMAGES.characters.results.wonyeong,
    description:
      '지략과 정치력을 통해 적극적이고 주도적으로 황실을 지키고 황제를 지지하는 카리스마형 황후',
    personality: ['지략적', '정치력', '주도적', '카리스마'],
    traits:
      '당신은 상황을 읽고 먼저 움직이며, 황실의 안위를 위해 과감히 결단하는 타입입니다. 겉으로는 단정하지만 속으로는 판을 짜고 주도권을 잡는 카리스마를 지녔습니다.',
  },
  inhyeon: {
    id: 'inhyeon',
    name: '인현왕후',
    title: '정궁 · 인현왕후',
    era: '대한제국',
    imageGradient: 'from-emerald-900 via-teal-950 to-slate-900',
    symbol: '蘭',
    resultImage: IMAGES.characters.results.inhyeon,
    description:
      '궁중 예법과 전통을 지키는 원리원칙 우선, 현모양처형. 솔선과 포용의 황후',
    personality: ['예법 준수', '전통 중시', '원리원칙', '솔선수범', '포용'],
    traits:
      '당신은 격식과 질서 속에서 편안함을 느끼며, 맡은 역할을 끝까지 해내는 타입입니다. 먼저 몸으로 보이고, 주변을 따뜻하게 감싸는 현모양처의 기질이 있습니다.',
  },
  jang: {
    id: 'jang',
    name: '옥산부대빈 장씨',
    title: '부대빈 · 장씨',
    era: '대한제국',
    imageGradient: 'from-rose-900 via-pink-950 to-amber-950',
    symbol: '月',
    resultImage: IMAGES.characters.results.jang,
    description:
      '황제의 사랑, 금슬만 변하지 않는다면 행복하고 자신의 미모를 꾸밀 줄 아는 황후. 세간에서 일컫는 에겐형 황후.',
    personality: ['사랑', '정', '감성', '헌신'],
    traits:
      '당신은 사람과의 인연을 소중히 여기며, 마음을 나누는 관계 속에서 힘을 얻는 타입입니다. 이성보다 정(情)을 앞세우고, 사랑하는 이를 위해 헌신하는 에겐형 기질이 있습니다.',
  },
  myeongseong: {
    id: 'myeongseong',
    name: '명성황후',
    title: '황후 · 명성황후',
    era: '대한제국',
    imageGradient: 'from-violet-900 via-purple-950 to-indigo-950',
    symbol: '光',
    resultImage: IMAGES.characters.results.myeongseong,
    description:
      '황후로서 지킬 전통, 빠르게 바뀌는 시대 가운데 황실의 위치를 고민하는 개혁형 황후. 궁궐 신축을 통해 낡은 이미지를 허물려 하며 첨단 기술에 호기심이 많다.',
    personality: ['개혁', '전통과 균형', '시대 감각', '고민'],
    traits:
      '당신은 지켜야 할 것과 바꿔야 할 것 사이에서 균형을 찾는 타입입니다. 변화하는 시대 속에서 황실이 나아갈 길을 깊이 고민하며, 개혁의 방향을 제시하는 개혁형 기질이 있습니다.',
  },
}

/** 입력용 키 ↔ 내부 id 매핑 */
export const QUEEN_KEY_TO_ID = {
  wonGyeong: 'wonyeong',
  inHyeon: 'inhyeon',
  jang: 'jang',
  myeongSeong: 'myeongseong',
} as const satisfies Record<string, QueenId>

export type QueenInputKey = keyof typeof QUEEN_KEY_TO_ID

/** 캐릭터 특성만 추출 (매칭 로직·문항 매핑용) */
export const QUEEN_PROFILES: Record<QueenInputKey, { name: string; description: string }> = {
  wonGyeong: {
    name: QUEENS.wonyeong.name,
    description: QUEENS.wonyeong.description,
  },
  inHyeon: {
    name: QUEENS.inhyeon.name,
    description: QUEENS.inhyeon.description,
  },
  jang: {
    name: QUEENS.jang.name,
    description: QUEENS.jang.description,
  },
  myeongSeong: {
    name: QUEENS.myeongseong.name,
    description: QUEENS.myeongseong.description,
  },
}

export const QUEEN_LIST = Object.values(QUEENS)

export function getQueenByKey(key: QueenInputKey): Queen {
  return QUEENS[QUEEN_KEY_TO_ID[key]]
}

export function getQueenIdByKey(key: QueenInputKey): QueenId {
  return QUEEN_KEY_TO_ID[key]
}
