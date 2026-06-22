# 서재 홈페이지

React + Tailwind CSS + Supabase 기반 홈페이지입니다.

## 시작하기

```bash
cd web
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 인트로 화면

[미지헌](https://mijiheon.com/) 인트로를 참고한 1인칭 서재 인터랙션입니다.

1. 접속 시 전통 서재 배경이 표시됩니다
2. **2초 후** 하단에 `책을 들어주세요` 문구가 나타납니다
3. 책을 클릭하면 손이 책을 들어 올리고 펼치는 애니메이션이 재생됩니다
4. 완료 후 메인 화면으로 전환됩니다

## Supabase 설정

`.env.example`을 `.env`로 복사한 뒤 값을 입력하세요.

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 기술 스택

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (인트로 애니메이션)
- Supabase (백엔드 연동 준비)
