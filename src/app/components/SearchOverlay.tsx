"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

type SearchOverlayProps = {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
  onSubmit: (query: string) => void;
};

export function SearchOverlay({
  open,
  query,
  onQueryChange,
  onClose,
  onSubmit,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/75"
        aria-label="Close search"
        onClick={onClose}
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute top-4 right-4 z-[62] flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10 sm:top-6 sm:right-6 lg:top-8 lg:right-10 xl:right-16 2xl:right-24"
      >
        <X size={20} strokeWidth={2} />
      </button>

      <div className="relative z-[61] flex h-full items-center justify-center px-6 sm:px-10">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-[900px]"
        >
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search..."
            aria-label="Search"
            className="h-[64px] w-full rounded-full border-2 border-white bg-transparent px-8 pr-16 font-heading text-[18px] text-white placeholder:text-white/60 focus:outline-none sm:h-[72px] sm:px-10 sm:pr-20 sm:text-[20px] lg:h-[80px] lg:text-[22px]"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:right-4 sm:h-12 sm:w-12"
          >
            <Search size={24} strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </div>
  );
}
