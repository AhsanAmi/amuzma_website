"use client";

import { useEffect } from "react";

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

  // Google pushes the page down to make room for the banner — undo it.
  if (document.body.style.top && document.body.style.top !== "0px") {
    document.body.style.top = "0px";
  }
}

/**
 * Loads the Google Website Translator widget invisibly. The actual language
 * switching is driven by the `googtrans` cookie (see LanguageContext), so the
 * default Google UI stays hidden and our own language modal is the only UI.
 */
export function GoogleTranslate() {
  useEffect(() => {
    const win = window as GoogleTranslateWindow;

    // Re-hide the banner whenever Google injects it or nudges the body down.
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
  }, []);

  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      className="pointer-events-none fixed -left-[9999px] top-0 h-0 w-0 overflow-hidden"
    />
  );
}
