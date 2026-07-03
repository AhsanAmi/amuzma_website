import type { Metadata } from "next";
import { Home } from "./pages/Home";
import { createPageMetadata } from "./lib/pageMetadata";

export const metadata: Metadata = createPageMetadata("/");

export default Home;
