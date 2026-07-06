"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type GoogleTranslateWindow = Window & {
  googleTranslateElementInit?: () => void;
  google?: {
    translate?: {
      TranslateElement?: new (
        options: { pageLanguage: string; autoDisplay: boolean },
        elementId: string
      ) => unknown;
    };
  };
};

function hasNonEnglishTranslateCookie() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  if (!match?.[1]) return false;
  const value = decodeURIComponent(match[1]).trim();
  return value !== "" && value !== "/en/en" && value !== "/auto/en";
}

/**
 * Hides Google's banner bar without removing it from the DOM — the translate
 * engine keeps references to its own elements, so deleting them breaks
 * translation. We only neutralize the visual side effects.
 */
function hideGoogleBanner() {
  const banners = document.querySelectorAll<HTMLElement>(
    "iframe.goog-te-banner-frame, .VIpgJd-ZVi9od-ORHb-OEVmcd"
  );
  banners.forEach((banner) => {
    if (banner.closest("#google_translate_element")) return;
    banner.style.setProperty("display", "none", "important");
    banner.style.setProperty("visibility", "hidden", "important");
  });

  if (document.body.style.top && document.body.style.top !== "0px") {
    document.body.style.top = "0px";
  }
}

/**
 * Loads the Google Website Translator widget invisibly. The script is
 * deferred until the visitor opens the language picker (or already has a
 * non-English translation cookie) so it does not inflate CLS, TBT, or Speed
 * Index on the default English homepage load.
 */
export function GoogleTranslate() {
  const { isLanguageModalOpen } = useLanguage();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (hasNonEnglishTranslateCookie()) {
      setShouldLoad(true);
    }
  }, []);

  useEffect(() => {
    if (isLanguageModalOpen) setShouldLoad(true);
  }, [isLanguageModalOpen]);

  useEffect(() => {
    if (!shouldLoad) return;

    const win = window as GoogleTranslateWindow;

    const observer = new MutationObserver(hideGoogleBanner);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: false,
    });
    observer.observe(document.body, {
      childList: true,
      subtree: false,
      attributes: true,
      attributeFilter: ["style"],
    });
    hideGoogleBanner();

    if (!document.getElementById("google-translate-script")) {
      win.googleTranslateElementInit = () => {
        const TranslateElement = win.google?.translate?.TranslateElement;
        if (!TranslateElement) return;
        new TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
        hideGoogleBanner();
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      className="pointer-events-none fixed -left-[9999px] top-0 h-0 w-0 overflow-hidden"
    />
  );
}
