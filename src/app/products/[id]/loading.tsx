import { PAGE_CONTAINER } from "../../lib/pageLayout";

function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-white/15 ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </div>
  );
}

function Block({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#E8E8E8] ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

export default function ProductLoading() {
  return (
    <div
      className="max-w-full overflow-x-clip"
      aria-busy="true"
      aria-label="Loading product"
      role="status"
    >
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Hero — matches product detail banner */}
      <div className="relative h-[304px] w-full overflow-hidden bg-[#C0202F] sm:h-[345px] md:h-[386px] lg:h-[649px] min-[1800px]:h-[500px] min-[2200px]:h-[460px]">
        <div
          className={`absolute inset-0 flex items-center justify-between gap-4 ${PAGE_CONTAINER}`}
        >
          <div className="w-full max-w-[513px] shrink-0 space-y-4">
            <Shimmer className="h-8 w-[70%] max-w-[280px] sm:h-10" />
            <Shimmer className="h-4 w-32" />
            <div className="mt-6 hidden h-[150px] max-w-[310px] flex-col justify-between bg-white px-5 pb-6 pt-4 lg:flex">
              <Block className="h-3 w-48 bg-[#ECECEC]" />
              <Block className="h-9 w-28 bg-[#C0202F]/25" />
            </div>
            <Shimmer className="mt-6 h-10 w-36 lg:hidden" />
          </div>

          <div className="relative hidden h-[72%] w-[52%] max-w-[720px] shrink-0 self-center sm:block lg:h-[78%] lg:w-[55%]">
            <Shimmer className="absolute inset-y-[8%] right-0 w-[88%] rounded-sm" />
          </div>
        </div>
      </div>

      {/* Section nav strip */}
      <div className="hidden bg-[#E4E4E4] lg:block">
        <div className={`${PAGE_CONTAINER} flex items-stretch justify-between`}>
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="flex flex-1 items-center justify-center py-4">
              <Block className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Body content */}
      <div className={`${PAGE_CONTAINER} space-y-14 py-10 sm:py-12`}>
        <div className="mx-auto max-w-[900px] space-y-4 text-center">
          <Block className="mx-auto h-7 w-[60%] max-w-md" />
          <Block className="mx-auto h-4 w-full" />
          <Block className="mx-auto h-4 w-[85%]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Block className="aspect-[4/3] w-full" />
              <Block className="h-4 w-3/4" />
              <Block className="h-3 w-full" />
              <Block className="h-3 w-5/6" />
            </div>
          ))}
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-3">
            <Block className="aspect-[4/3] w-full" />
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Block key={index} className="h-[72px] w-[72px] shrink-0" />
              ))}
            </div>
          </div>
          <div className="space-y-4 pt-2">
            <Block className="h-4 w-full" />
            <Block className="h-4 w-full" />
            <Block className="h-4 w-4/5" />
            <Block className="mt-6 h-10 w-36" />
          </div>
        </div>
      </div>

      <span className="sr-only">Loading product…</span>
    </div>
  );
}
