import Link from "next/link";
import { MediaImage } from "./MediaImage";
import type { SearchEntry } from "../data/searchIndex";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatches(text: string, query: string) {
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => escapeRegExp(term));

  if (terms.length === 0) return text;

  const splitPattern = new RegExp(`(${terms.join("|")})`, "gi");
  const matchPattern = new RegExp(`^(?:${terms.join("|")})$`, "i");
  const parts = text.split(splitPattern);

  return parts.map((part, index) =>
    matchPattern.test(part) ? (
      <mark
        key={`${part}-${index}`}
        className="bg-[#D4D4D4] px-0.5 font-normal text-inherit"
      >
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

export function SearchResultCard({
  entry,
  query,
}: {
  entry: SearchEntry;
  query: string;
}) {
  return (
    <Link
      href={entry.href}
      className="group grid grid-cols-1 items-start gap-5 border-b border-[#C5D4E0] py-7 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_240px] sm:gap-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_280px]"
    >
      <div className="min-w-0">
        <h2 className="font-gothic text-[26px] font-normal leading-tight text-black transition-colors duration-300 ease-out group-hover:text-[#C0202F] sm:text-[30px]">
          {entry.title}
        </h2>
        <p className="mt-1 font-gothic text-[15px] font-normal text-[#7BA3C4] sm:text-[16px]">
          {entry.category}
        </p>
        <p className="mt-4 font-gothic text-[15px] font-normal leading-relaxed text-[#666666] sm:text-[16px]">
          {highlightMatches(entry.excerpt, query)}
        </p>
      </div>

      {entry.image ? (
        <div className="relative mx-auto h-[180px] w-full max-w-[280px] overflow-hidden bg-white sm:mx-0 sm:h-[200px] lg:h-[220px]">
          <div className="absolute inset-2 origin-center transition-transform duration-300 ease-out group-hover:scale-105 sm:inset-3">
            <MediaImage
              src={entry.image}
              alt={entry.title}
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </Link>
  );
}
