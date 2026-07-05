import type { Question } from '../types'

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '저하께옵서 원하는 대로 집을 꾸미실 수 있다면 어떤 모습으로 꾸미시겠습니까?',
    options: [
      {
        text: '모범을 보여야 하는 자리이니 소박함을 지키고 사치스러운 것은 처분한다',
        queen: 'inhyeon',
        points: 1,
      },
      {
        text: '전각 앞뒷뜰에 계절마다 예쁜 꽃을 가득 심어 아름답게 꾸민다',
        queen: 'jang',
        points: 1,
      },
      {
        text: '궁으로서 위엄이 있어야 사람들이 황실을 쉽게 보지 않으며 두려워할 것이니 새로 웅장하게 건물을 짓는다',
        queen: 'myeongseong',
        points: 1,
      },
      {
        text: '외부 위협으로부터 안전할 수 있도록 보안을 이중삼중 강화한다',
        queen: 'wonyeong',
        points: 1,
      },
    ],
  },
  {
    id: 2,
    text: '오늘 하루 저하께서 보시었던 물건들 중 가장 소중히 여기는 물건이 어떤 것입니까?',
    options: [
      { text: '쌀', queen: 'inhyeon', points: 1 },
      { text: '비녀와 반지 등 장신구들', queen: 'jang', points: 1 },
      { text: '인공지능 시종 로봇', queen: 'myeongseong', points: 1 },
      { text: '오전에 보았던 정치학개론 책', queen: 'wonyeong', points: 1 },
    ],
  },
  {
    id: 3,
    text: '저하께서 황후 폐하가 되었을 때를 상상해보시옵소서. 황제 폐하(남편)께서 국정에 대한 고민을 슬쩍 털어놓았을 때 어찌 하시겠습니까?',
    options: [
      {
        text: '어려움을 돌파하기 위한 아이디어, 지략을 논하며 강건한 군주가 되도록 일깨워준다',
        queen: 'wonyeong',
        points: 2,
      },
      {
        text: '내가 나서기보다 폐하에게 힘을 주는 게 우선이니 따뜻한 목욕물과 다과를 준비해놓는다',
        queen: 'inhyeon',
        points: 2,
      },
      {
        text: '하루종일 걱정 근심이 가득하면 몸에 해롭다고 하면서 폐하의 손과 허벅지를 마사지해준다',
        queen: 'jang',
        points: 2,
      },
      {
        text: '이 일을 해결할 적임자가 있다며 알고 있는 사람을 폐하께 소개한다',
        queen: 'myeongseong',
        points: 2,
      },
    ],
  },
  {
    id: 4,
    text: '저하께서는 제국의 태자비로서, 장차 황후로서 어떠한 일에 가장 힘쓰시겠습니까?',
    options: [
      {
        text: '궁중의 평온과 안녕을 위하여 솔선수범하고 자애로움으로 궁인들을 대한다',
        queen: 'inhyeon',
        points: 1,
      },
      {
        text: '세계 각국의 외교관 부인들과 정기적인 사교 모임을 열어 교류의 장을 갖는다',
        queen: 'myeongseong',
        points: 1,
      },
      {
        text: '폐하께서 위기에 처했을 때 도움이 될 수 있는 비밀 행동 조직을 만든다',
        queen: 'wonyeong',
        points: 1,
      },
      {
        text: '폐하께서 본인만 연모하도록 몸을 가꾸고 폐하의 취향을 세심히 살핀다',
        queen: 'jang',
        points: 1,
      },
    ],
  },
  {
    id: 5,
    text: '태자 저하께서는 궁정에도 인공지능 시스템을 도입하는 데에 관심이 많으십니다. 마마께서는 어떠한 견지를 내시겠습니까?',
    options: [
      {
        text: '황실이 구시대의 유물이란 소리를 잠재우기 위해서라도 적극 도입해야 합니다',
        queen: 'myeongseong',
        points: 1,
      },
      {
        text: '기술도 중요하나 전통 예법과 충돌하지 않는지 먼저 살펴야 합니다',
        queen: 'inhyeon',
        points: 1,
      },
      {
        text: '황실에 위해를 가하려는 자들이 악용하지 않도록 철저히 검토해야 합니다',
        queen: 'wonyeong',
        points: 1,
      },
      { text: '저하께서 원하신다면 무엇이든 좋습니다', queen: 'jang', points: 1 },
    ],
  },
  {
    id: 6,
    text: '궁인들이 저하에 관해 허위의 소문을 수군거리는 소리를 우연히 들었다 생각해보시옵소서. 어떻게 하시겠습니까?',
    options: [
      {
        text: '소문이 커지기 전에 누구로부터 비롯됐는지 파헤치고 바로잡는다',
        queen: 'wonyeong',
        points: 3,
      },
      {
        text: '억울하지만 결국 진실이 승리할 것이라 믿으며 놓아둔다',
        queen: 'inhyeon',
        points: 3,
      },
      {
        text: '궁인들을 불러 다과를 베풀며 오해를 푼다',
        queen: 'jang',
        points: 3,
      },
      {
        text: '소문이 생긴 이유에 대해 분석을 하고 근본적인 대책을 마련한다',
        queen: 'myeongseong',
        points: 4,
      },
    ],
  },
  {
    id: 7,
    text: '태자 저하의 조부이신 선대황제 폐하의 능에 아침 일찍 일어나 참배를 가야 한다 상상하시옵소서. 태자 저하께서 마마의 곁에 가까이 있고 싶다 하시며 잠에 들지 않으려 하실 때 어찌 하시겠습니까?',
    options: [
      {
        text: '내일 참배는 태자로서 효와 예를 지극히 해야 하는 자리인데 다른 마음이 커서는 큰일이 난다 하며 일찍 잠자리에 들도록 아뢸 것이다',
        queen: 'inhyeon',
        points: 2,
      },
      {
        text: '우선 태자 저하 옆에 누워 대화를 나누다 자연히 잠에 들도록 한다',
        queen: 'myeongseong',
        points: 2,
      },
      {
        text: '컨디션 관리를 못하면 신하들에게 무시당하고 구설수에 오를 수 있다며 주의를 준다',
        queen: 'wonyeong',
        points: 2,
      },
      {
        text: '그럼 한번만이옵니다 하며 태자 저하를 무안하지 않게 한다',
        queen: 'jang',
        points: 2,
      },
    ],
  },
]

export const QUESTION_COUNT = QUESTIONS.length
