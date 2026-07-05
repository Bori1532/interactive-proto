# 황태자비로서의 첫 걸음

대한제국이 2026년까지 존재하는 가상 세계관의 인터랙티브 성향 테스트 웹페이지입니다.

## 목적

- Google Analytics 4 이벤트 측정 실습
- 사용자 퍼널 분석
- 인터랙티브 콘텐츠 제작 포트폴리오

## 기술 스택

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## GA4 설정

`.env.example`을 `.env.local`로 복사한 뒤 Measurement ID를 입력하세요.

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | 인트로 — 시작하기 |
| `/tutor` | 내훈관 소개 |
| `/test` | 7문항 성향 테스트 |
| `/result` | 황후 결과 카드 |
| `/residence` | 태자비 거처 (스토리 씬) |
| `/chambermaid` | 궁녀 VN 대화 (결과 연동) |
| `/products` | 황후별 추천 상품 |
| `/complete` | 완료 감사 페이지 |

## GA4 측정 이벤트

| 이벤트명 | 발생 시점 | 파라미터 |
|----------|-----------|----------|
| `page_view` | 페이지 이동 | `page_path`, `page_title`, `page_location` |
| `intro_start` | 시작하기 버튼 클릭 | — |
| `teacher_intro_complete` | 내훈관 소개 페이지 통과 | — |
| `question_answered` | 문항 답변 | `question_id`, `result_queen`, `points` |
| `test_completed` | 모든 문항 완료 | — |
| `result_view` | 결과 페이지 진입 | `queen_type` (예: `원경왕후`) |

**퍼널 분석 예시**
- 결과 페이지 도달율: `test_completed` 대비 `result_view` 비율
- 캐릭터별 비율: `result_view` 이벤트를 `queen_type`으로 그룹화
| `product_click` | 추천 상품 클릭 | `product_name` |
| `external_link_click` | 외부 사이트 이동 | `link_url` |

## 결과 황후

1. 원경왕후
2. 인현왕후
3. 명성황후
4. 옥산부대빈 장씨

## 빌드

```bash
npm run build
npm start
```
