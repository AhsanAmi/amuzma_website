"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const COMPANY_RED = "#BF1A2B";

export const NAVIGATION_START_EVENT = "amuzma:navigation-start";

export function signalNavigationStart() {
  window.dispatchEvent(new Event(NAVIGATION_START_EVENT));
}

function isInternalNavigation(href: string) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      return new URL(href).origin === window.location.origin;
    } catch {
      return false;
    }
  }

  return href.startsWith("/");
}

function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigatingRef = useRef(false);
  const routeKey = `${pathname}?${searchParams.toString()}`;

  const clearTimers = () => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const startProgress = () => {
    clearTimers();
    navigatingRef.current = true;
    setVisible(true);
    setProgress(12);

    progressTimer.current = setInterval(() => {
      setProgress((current) => {
        if (current >= 88) return current;
        return Math.min(current + Math.random() * 14, 88);
      });
    }, 180);
  };

  const finishProgress = () => {
    clearTimers();
    navigatingRef.current = false;
    setProgress(100);

    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);
  };

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || !isInternalNavigation(href)) return;

      const destination = new URL(href, window.location.origin);
      const currentSearch = searchParams.toString();
      const destinationSearch = destination.search.startsWith("?")
        ? destination.search.slice(1)
        : destination.search;

      if (destination.pathname === pathname && destinationSearch === currentSearch) return;

      startProgress();
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [pathname, searchParams]);

  useEffect(() => {
    const onNavigationStart = () => startProgress();
    window.addEventListener(NAVIGATION_START_EVENT, onNavigationStart);
    return () => window.removeEventListener(NAVIGATION_START_EVENT, onNavigationStart);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!navigatingRef.current) return;
    finishProgress();
  }, [routeKey]);

  useEffect(() => clearTimers, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] bg-[#BF1A2B]/15"
    >
      <div
        className="h-full origin-left bg-[#BF1A2B] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%`, backgroundColor: COMPANY_RED }}
      />
    </div>
  );
}

export function NavigationProgress() {
  return <NavigationProgressBar />;
}
