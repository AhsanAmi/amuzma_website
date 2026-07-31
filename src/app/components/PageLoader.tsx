type PageLoaderProps = {
  label?: string;
  className?: string;
};

export function PageLoader({
  label = "Loading",
  className = "",
}: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`flex min-h-[55vh] flex-col items-center justify-center gap-5 px-6 py-20 ${className}`}
    >
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#BF1A2B]/12" />
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#BF1A2B]" />
        <div className="absolute inset-[6px] animate-[spin_1.1s_linear_infinite_reverse] rounded-full border-[2px] border-transparent border-b-[#BF1A2B]/45" />
        <img
          src="/favicon.ico"
          alt=""
          width={22}
          height={22}
          className="relative z-[1] h-[22px] w-[22px] object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-gothic text-[15px] font-normal tracking-[0.18em] text-[#333333]">
          AMUZMA
        </p>
        <div className="h-[2px] w-10 overflow-hidden bg-[#E8E8E8]">
          <div className="h-full w-1/2 animate-[loaderBar_1.1s_ease-in-out_infinite] bg-[#BF1A2B]" />
        </div>
      </div>
      <span className="sr-only">{label}</span>
      <style>{`
        @keyframes loaderBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
