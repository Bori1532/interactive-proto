import type { QueenId } from './types'
import { QUEENS } from './data/queens'

export const GA_EVENTS = {
  PAGE_VIEW: 'page_view',
  INTRO_START: 'intro_start',
  TEACHER_INTRO_COMPLETE: 'teacher_intro_complete',
  QUESTION_ANSWERED: 'question_answered',
  TEST_COMPLETED: 'test_completed',
  RESULT_CHARACTER: 'result_character',
  STORY_START: 'story_start',
  STORY_SCENE_VIEW: 'story_scene_view',
  RECOMMENDATION_VIEW: 'recommendation_view',
  RECOMMENDATION_CLICK: 'recommendation_click',
  ENDING_VIEW: 'ending_view',
  RETURN_MODAL_VIEW: 'return_modal_view',
  RETURN_HOME_CONFIRM: 'return_home_confirm',
  RETURN_HOME_CANCEL: 'return_home_cancel',
} as const

type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

export function getResultCharacterLabel(queenId: QueenId): string {
  return QUEENS[queenId].name
}

/** GA4 캐릭터별 분포 집계용 공통 파라미터 */
export function getResultCharacterParams(queenId: QueenId) {
  return {
    result_character: getResultCharacterLabel(queenId),
    result_character_id: queenId,
  }
}

function invokeGtag(...args: unknown[]) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer ?? []

  if (typeof window.gtag === 'function') {
    window.gtag(...args)
    return
  }

  // gtag 스크립트 로드 전에도 dataLayer에 적재 → 로드 후 자동 처리
  window.dataLayer.push(args)
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  invokeGtag('event', eventName, params ?? {})
}

/** 1. 매칭 캐릭터 확인 — GA4에서 result_character_id 기준 그룹화 시 캐릭터별 % 집계 */
export function trackResultCharacter(queenId: QueenId) {
  trackEvent(GA_EVENTS.RESULT_CHARACTER, getResultCharacterParams(queenId))
}

/** 2. 궁녀와 대화 시작 */
export function trackStoryStart(queenId: QueenId) {
  trackEvent(GA_EVENTS.STORY_START, getResultCharacterParams(queenId))
}

/** 3. 스토리 씬 노출 */
export function trackStorySceneView(params: {
  scene_group: 'residence' | 'chambermaid' | 'finale'
  scene_step: number
  scene_id: string
  result_character: string
  result_character_id?: QueenId
}) {
  trackEvent(GA_EVENTS.STORY_SCENE_VIEW, params)
}

/** 4. 추천 화면 도달 */
export function trackRecommendationView(queenId: QueenId, linkUrl: string) {
  trackEvent(GA_EVENTS.RECOMMENDATION_VIEW, {
    ...getResultCharacterParams(queenId),
    link_url: linkUrl,
  })
}

/** 5. 외부 상품 링크 클릭 */
export function trackRecommendationClick(queenId: QueenId, linkUrl: string) {
  trackEvent(GA_EVENTS.RECOMMENDATION_CLICK, {
    ...getResultCharacterParams(queenId),
    link_url: linkUrl,
  })
}

/** 6. 응원 메시지 확인 */
export function trackEndingView(endingStep: 1 | 2, queenId: QueenId) {
  trackEvent(GA_EVENTS.ENDING_VIEW, {
    ending_step: endingStep,
    ...getResultCharacterParams(queenId),
  })
}

/** 7. 첫 화면 돌아가기 모달 */
export function trackReturnModalView(queenId: QueenId) {
  trackEvent(GA_EVENTS.RETURN_MODAL_VIEW, getResultCharacterParams(queenId))
}

/** 8. 예 — 첫 화면 이동 */
export function trackReturnHomeConfirm(queenId: QueenId) {
  trackEvent(GA_EVENTS.RETURN_HOME_CONFIRM, getResultCharacterParams(queenId))
}

/** 8. 아니오 — 모달 취소 */
export function trackReturnHomeCancel(queenId: QueenId) {
  trackEvent(GA_EVENTS.RETURN_HOME_CANCEL, getResultCharacterParams(queenId))
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined') return

  trackEvent(GA_EVENTS.PAGE_VIEW, {
    page_path: path,
    page_title: title ?? path,
    page_location: window.location.href,
  })
}
