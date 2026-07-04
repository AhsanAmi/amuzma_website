"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type QuoteCartItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
};

type QuoteCartContextValue = {
  items: QuoteCartItem[];
  itemCount: number;
  addItem: (item: Omit<QuoteCartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "amuzma-quote-cart";

const QuoteCartContext = createContext<QuoteCartContextValue | null>(null);

function readStoredItems(): QuoteCartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is QuoteCartItem =>
        !!item &&
        typeof item === "object" &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.image === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStoredItems());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (item: Omit<QuoteCartItem, "quantity">, quantity = 1) => {
      const qty = Math.max(1, quantity);
      setItems((prev) => {
        const existing = prev.find((entry) => entry.id === item.id);
        if (existing) {
          return prev.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + qty }
              : entry
          );
        }
        return [...prev, { ...item, quantity: qty }];
      });
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const qty = Math.max(1, quantity);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [items, itemCount, addItem, removeItem, setQuantity, clearCart]
  );

  return (
    <QuoteCartContext.Provider value={value}>
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);
  if (!context) {
    throw new Error("useQuoteCart must be used within a QuoteCartProvider");
  }
  return context;
}

/** Builds a display name like "Band Saw Elite 65BS". */
export function formatQuoteProductName(name: string, model?: string) {
  const parts = [name, model].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  return parts;
}

/** Extracts a product id from `/products/band-saw-65bs`. */
export function productIdFromHref(href: string) {
  const match = href.match(/\/products\/([^/?#]+)/);
  return match?.[1] ?? href.replace(/^\//, "");
}
