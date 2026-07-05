type PageLoaderProps = {
  label?: string;
  className?: string;
};

export function PageLoader({ label = "Loading page", className = "" }: PageLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 ${className}`}
    >
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-[#BF1A2B]/15" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#BF1A2B]" />
      </div>
      <p className="font-heading text-sm font-medium tracking-wide text-[#666666]">{label}</p>
    </div>
  );
}
