import type { Metadata } from "next";
import { getPageTitle } from "../data/pageMetadata";

export function createPageMetadata(key: string): Metadata {
  return {
    title: getPageTitle(key),
  };
}
