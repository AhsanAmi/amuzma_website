import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MediaImage } from "./MediaImage";
import type { SearchEntry } from "../data/searchIndex";

export function SearchResultCard({ entry }: { entry: SearchEntry }) {
  return (
    <article className="flex flex-col bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      {entry.image ? (
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5]">
          <MediaImage
            src={entry.image}
            alt={entry.title}
            width={640}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="mb-3 font-heading text-[18px] font-bold uppercase leading-snug text-[#333333] sm:text-[20px]">
          {entry.title}
        </h2>

        <p className="mb-5 flex-1 font-gothic text-[15px] leading-relaxed text-[#666666] sm:text-[16px]">
          {entry.excerpt}
        </p>

        <Link
          href={entry.href}
          className="mb-5 inline-flex items-center gap-1 font-heading text-[14px] font-semibold uppercase tracking-wide text-[#BF1A2B] transition-colors hover:text-[#9A1523] sm:text-[15px]"
        >
          Read More
          <ChevronRight size={16} strokeWidth={2.5} />
        </Link>

        <div className="mt-auto border-t border-[#E5E5E5] pt-4">
          <p className="font-gothic text-[13px] text-[#999999]">
            {entry.date}
            <span className="mx-2">|</span>
            No Comments
          </p>
        </div>
      </div>
    </article>
  );
}
