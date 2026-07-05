export default function ProductLoading() {
  return (
    <div className="max-w-full overflow-x-hidden animate-pulse" aria-busy="true" aria-label="Loading product">
      <div className="h-[304px] bg-[#ECECEC] sm:h-[345px] md:h-[386px] lg:h-[649px]" />

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="mb-6 h-8 w-48 rounded bg-[#ECECEC]" />
        <div className="mb-3 h-10 w-3/4 max-w-xl rounded bg-[#ECECEC]" />
        <div className="mb-8 h-5 w-full max-w-2xl rounded bg-[#ECECEC]" />

        <div className="mb-10 flex gap-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-10 w-28 shrink-0 rounded bg-[#ECECEC]" />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-6 w-40 rounded bg-[#ECECEC]" />
            <div className="h-4 w-full rounded bg-[#ECECEC]" />
            <div className="h-4 w-full rounded bg-[#ECECEC]" />
            <div className="h-4 w-5/6 rounded bg-[#ECECEC]" />
          </div>
          <div className="aspect-[4/3] rounded bg-[#ECECEC]" />
        </div>
      </div>
    </div>
  );
}
