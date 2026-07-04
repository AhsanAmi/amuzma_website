import { SEARCH_INDEX, type SearchEntry } from "../data/searchIndex";

export const RESULTS_PER_PAGE = 6;

function scoreEntry(entry: SearchEntry, terms: string[]): number {
  const title = entry.title.toLowerCase();
  const excerpt = entry.excerpt.toLowerCase();
  const keywords = entry.keywords.toLowerCase();

  let score = 0;

  for (const term of terms) {
    if (title.includes(term)) score += 10;
    if (keywords.includes(term)) score += 4;
    if (excerpt.includes(term)) score += 2;
  }

  return score;
}

export function searchEntries(query: string): SearchEntry[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const terms = trimmed.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.filter((entry) =>
    terms.every(
      (term) =>
        entry.title.toLowerCase().includes(term) ||
        entry.excerpt.toLowerCase().includes(term) ||
        entry.keywords.includes(term),
    ),
  )
    .map((entry) => ({ entry, score: scoreEntry(entry, terms) }))
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);
}

export function paginateResults<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    totalPages,
    currentPage: safePage,
    totalResults: items.length,
  };
}
