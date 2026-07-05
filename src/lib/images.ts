export const IMAGES = {
  scenes: {
    intro: '/images/scenes/intro.png',
    entrance: '/images/scenes/entrance.png',
    quest: '/images/scenes/quest.png?v=2',
    /** 태자비 거처 */
    residence: '/images/scenes/residence.png',
    finale: {
      1: '/images/scenes/finale/1.png',
      2: '/images/scenes/finale/2.png',
      turnback: '/images/scenes/finale/turnback.png',
    },
  },
  characters: {
    tutor: '/images/characters/tutor.png',
    housemaid: {
      1: '/images/characters/housemaid/1.png',
      2: '/images/characters/housemaid/2.png',
      3: '/images/characters/housemaid/3.png',
      4: '/images/characters/housemaid/4.png',
      5: '/images/characters/housemaid/5.png',
    },
    /** @deprecated chambermaid 플로우는 housemaid 1~5 사용 */
    chambermaid: '/images/characters/chambermaid.png',
    results: {
      wonyeong: '/images/characters/results/wonyeong.png',
      inhyeon: '/images/characters/results/inhyeon.png',
      myeongseong: '/images/characters/results/myeongseong.png',
      jang: '/images/characters/results/jang.png',
    },
  },
} as const
