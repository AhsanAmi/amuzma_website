"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchResultCard } from "../components/SearchResultCard";
import { paginateResults, RESULTS_PER_PAGE, searchEntries } from "../lib/search";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

export function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";
  const pageParam = Number(searchParams.get("page") ?? "1");
  const initialPage =
    Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [query, initialPage]);

  const results = useMemo(() => searchEntries(query), [query]);

  const { items, totalPages, currentPage: safePage } = useMemo(
    () => paginateResults(results, currentPage, RESULTS_PER_PAGE),
    [results, currentPage],
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayQuery = query.trim();

  return (
    <div className="bg-white pt-10 lg:pt-16">
      <section className="bg-white pb-16">
        <div className={PAGE_CONTAINER}>
          <h1 className="mb-10 font-heading text-[28px] font-medium text-[#333333] sm:text-[32px] lg:mb-14 lg:text-[36px]">
            {displayQuery
              ? `Search Results for: ${displayQuery}`
              : "Search Results"}
          </h1>

          {!displayQuery ? (
            <p className="font-gothic text-[16px] text-[#666666]">
              Enter a search term using the search icon in the header.
            </p>
          ) : items.length === 0 ? (
            <p className="font-gothic text-[16px] text-[#666666]">
              No results found for &ldquo;{displayQuery}&rdquo;. Try a different
              keyword such as{" "}
              <button
                type="button"
                onClick={() => router.push("/search?q=cnc")}
                className="text-[#BF1A2B] underline-offset-2 hover:underline"
              >
                cnc
              </button>
              .
            </p>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((entry) => (
                  <SearchResultCard key={entry.id} entry={entry} />
                ))}
              </div>

              {totalPages > 1 ? (
                <nav
                  className="mt-14 flex items-center justify-center gap-3"
                  aria-label="Search results pagination"
                >
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        aria-current={page === safePage ? "page" : undefined}
                        className={`font-heading text-[18px] transition-colors ${
                          page === safePage
                            ? "font-semibold text-[#333333]"
                            : "text-[#666666] hover:text-[#BF1A2B]"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </nav>
              ) : null}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
