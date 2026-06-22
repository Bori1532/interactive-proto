export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f0e8] px-6 text-center">
      <h1 className="mb-4 text-3xl tracking-[0.2em] text-stone-800 md:text-4xl">
        서재
      </h1>
      <p className="max-w-md text-sm leading-relaxed tracking-wide text-stone-500 md:text-base">
        책을 펼쳤습니다. 이곳에 본문 콘텐츠가 이어집니다.
      </p>
    </div>
  )
}
