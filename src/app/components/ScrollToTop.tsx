"use client";

import { useEffect, useState } from "react";

function ScrollUpChevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block"
    >
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollUpArrow() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="block"
    >
      <path
        d="M12 4V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 9L12 4L17 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      aria-label="Top"
      className={`scrollup group fixed bottom-5 right-5 z-50 flex h-[55px] w-[55px] flex-col items-center justify-center rounded-[3px] bg-[#C0202F] text-white transition-all duration-300 hover:bg-[#A01A28] ${
        visible
          ? "activate pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <span className="scrollup-icon hidden items-center justify-center leading-none transition-all duration-200 group-hover:inline-flex group-hover:-translate-y-0.5">
        <ScrollUpArrow />
      </span>
      <span className="scrollup-label flex items-center justify-center leading-none transition-opacity duration-200 group-hover:hidden">
        <ScrollUpChevron />
      </span>
    </a>
  );
}
