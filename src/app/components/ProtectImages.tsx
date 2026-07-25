"use client";

import { useEffect } from "react";

function isImageTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return (
    target instanceof HTMLImageElement ||
    target.closest("picture") !== null ||
    target.closest("svg image") !== null
  );
}

/**
 * Site-wide deterrent against casual image downloads. Complements MediaImage
 * (pointer-events / drag / long-press) with a capture-phase contextmenu block
 * so "Save image as" cannot appear even if an image somehow receives the event.
 */
export function ProtectImages() {
  useEffect(() => {
    const blockContextMenu = (event: MouseEvent) => {
      if (isImageTarget(event.target)) {
        event.preventDefault();
      }
    };

    const blockDragStart = (event: DragEvent) => {
      if (isImageTarget(event.target)) {
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
