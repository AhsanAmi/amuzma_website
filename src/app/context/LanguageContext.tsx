"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE_CODE,
  getLanguageByCode,
  type Language,
} from "../data/languages";

const STORAGE_KEY = "amuzma-selected-language";

// Google Translate uses legacy codes for a few languages.
const GOOGLE_CODE_OVERRIDES: Record<string, string> = {
  he: "iw",
  jv: "jw",
};

function toGoogleCode(code: string) {
  return GOOGLE_CODE_OVERRIDES[code] ?? code;
}

function setCookie(value: string) {
  const hostname = window.location.hostname;
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${hostname}`;
  document.cookie = `googtrans=${value}; path=/; domain=.${hostname}`;
}

function clearCookie() {
  const hostname = window.location.hostname;
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = `googtrans=; path=/; ${expired}`;
  document.cookie = `googtrans=; path=/; domain=${hostname}; ${expired}`;
  document.cookie = `googtrans=; path=/; domain=.${hostname}; ${expired}`;
}

function applyGoogleTranslate(code: string) {
  if (code === DEFAULT_LANGUAGE_CODE) {
    clearCookie();
  } else {
    setCookie(`/en/${toGoogleCode(code)}`);
  }
  // Reload so the Google Translate engine re-translates the whole page
  // (and every page visited afterwards) in the chosen language.
  window.location.reload();
}

type LanguageContextValue = {
  selectedLanguage: Language;
  setSelectedLanguage: (code: string) => void;
  isLanguageModalOpen: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedCode, setSelectedCode] = useState(DEFAULT_LANGUAGE_CODE);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSelectedCode(stored);
    setHydrated(true);
  }, []);

  const setSelectedLanguage = useCallback((code: string) => {
    setSelectedCode(code);
    localStorage.setItem(STORAGE_KEY, code);
    setIsLanguageModalOpen(false);
    applyGoogleTranslate(code);
  }, []);

  const value = useMemo(
    () => ({
      selectedLanguage: getLanguageByCode(hydrated ? selectedCode : DEFAULT_LANGUAGE_CODE),
      setSelectedLanguage,
      isLanguageModalOpen,
      openLanguageModal: () => setIsLanguageModalOpen(true),
      closeLanguageModal: () => setIsLanguageModalOpen(false),
    }),
    [hydrated, selectedCode, setSelectedLanguage, isLanguageModalOpen]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
