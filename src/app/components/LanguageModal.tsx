"use client";

import { useEffect } from "react";
import { languageColumns } from "../data/languages";
import { useLanguage } from "../context/LanguageContext";
import { CountryFlag } from "./CountryFlag";

export function LanguageModal() {
  const {
    selectedLanguage,
    setSelectedLanguage,
    isLanguageModalOpen,
    closeLanguageModal,
  } = useLanguage();

  useEffect(() => {
    if (!isLanguageModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLanguageModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLanguageModalOpen, closeLanguageModal]);

  if (!isLanguageModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        className="absolute inset-0 bg-[#8A8A8A]/45"
        aria-label="Close language selector"
        onClick={closeLanguageModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Select language"
        className="relative max-h-[80vh] w-[576px] max-w-full overflow-y-auto border border-[#E5E5E5] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {languageColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0">
              {column.map((language) => {
                const isSelected = selectedLanguage.code === language.code;

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => setSelectedLanguage(language.code)}
                    className="flex h-[39px] w-full items-center border-b border-[#E5E5E5] px-0 py-[10px] text-left font-heading text-[15px] leading-none text-black transition-colors hover:bg-[#F7F7F7]"
                  >
                    <CountryFlag
                      code={language.flagCode}
                      width={18}
                      height={12}
                      className="ml-3 mr-[5px]"
                    />
                    <span
                      className={`mr-[5px] ${isSelected ? "font-bold" : "font-normal"}`}
                    >
                      {language.name}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
