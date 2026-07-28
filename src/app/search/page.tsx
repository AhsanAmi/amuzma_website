import { Suspense } from "react";
import { SearchResults } from "../pages/SearchResults";
import { createPageMetadata } from "../lib/pageMetadata";
import { PAGE_CONTAINER } from "../lib/pageLayout";

export const metadata = createPageMetadata("search");

function SearchFallback() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <div className={PAGE_CONTAINER}>
        <h1 className="mb-10 font-heading text-[28px] font-medium text-[#333333] sm:text-[32px] lg:text-[36px]">
          Search Results
        </h1>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchResults />
    </Suspense>
  );
}
