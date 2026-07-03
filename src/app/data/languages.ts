export type Language = {
  code: string;
  name: string;
  flagCode: string;
};

export const DEFAULT_LANGUAGE_CODE = "en";

export const languageColumns: Language[][] = [
  [
    { code: "ar", name: "Arabic", flagCode: "sa" },
    { code: "bn", name: "Bengali", flagCode: "bd" },
    { code: "nl", name: "Dutch", flagCode: "nl" },
    { code: "en", name: "English", flagCode: "us" },
    { code: "et", name: "Estonian", flagCode: "ee" },
    { code: "fr", name: "French", flagCode: "fr" },
    { code: "de", name: "German", flagCode: "de" },
    { code: "he", name: "Hebrew", flagCode: "il" },
    { code: "hi", name: "Hindi", flagCode: "in" },
  ],
  [
    { code: "it", name: "Italian", flagCode: "it" },
    { code: "jv", name: "Javanese", flagCode: "id" },
    { code: "mi", name: "Maori", flagCode: "nz" },
    { code: "pt", name: "Portuguese", flagCode: "pt" },
    { code: "ru", name: "Russian", flagCode: "ru" },
    { code: "gd", name: "Scottish Gaelic", flagCode: "gb-sct" },
    { code: "es", name: "Spanish", flagCode: "es" },
    { code: "tg", name: "Tajik", flagCode: "tj" },
    { code: "tr", name: "Turkish", flagCode: "tr" },
  ],
  [
    { code: "ur", name: "Urdu", flagCode: "pk" },
    { code: "xh", name: "Xhosa", flagCode: "za" },
  ],
];

export const allLanguages = languageColumns.flat();

export function getLanguageByCode(code: string): Language {
  return (
    allLanguages.find((language) => language.code === code) ??
    allLanguages.find((language) => language.code === DEFAULT_LANGUAGE_CODE)!
  );
}
