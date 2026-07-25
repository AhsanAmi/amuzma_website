"use client";

import { useEffect } from "react";

function shouldBlock(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return (
    target instanceof HTMLImageElement ||
    target.closest("[data-protect-image]") !== null ||
    target.closest("picture") !== null
  );
}

/**
 * Site-wide backup for MediaImage: capture-phase block of context menu / drag
 * on images and protected wrappers (including the transparent overlay).
 */
export function ProtectImages() {
  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      if (shouldBlock(event.target)) {
        event.preventDefault();
      }
    };

    const blockDragStart = (event: DragEvent) => {
      if (shouldBlock(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu, true);
    document.addEventListener("dragstart", blockDragStart, true);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu, true);
      document.removeEventListener("dragstart", blockDragStart, true);
    };
  }, []);

  return null;
}
