import type { Metadata } from "next";
import { Suspense } from "react";
import { Poppins, Rajdhani, Carrois_Gothic } from "next/font/google";
import { Header } from "./components/Header";
import { NavigationProgress } from "./components/NavigationProgress";
import { FooterWithRedPanel } from "./components/Footer";
import { FloatingSocialBar } from "./components/FloatingSocialBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { WelcomeModal } from "./components/WelcomeModal";
import { LanguageModal } from "./components/LanguageModal";
import { GoogleTranslate } from "./components/GoogleTranslate";
import { LanguageProvider } from "./context/LanguageContext";
import { QuoteCartProvider } from "./context/QuoteCartContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "optional",
  adjustFontFallback: true,
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "optional",
  adjustFontFallback: true,
});

const carroisGothic = Carrois_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-carrois",
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Amuzma",
  description:
    "Precision Woodworking Machinery — Crafted By Experience. Engineered For Production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rajdhani.variable} ${carroisGothic.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <LanguageProvider>
          <QuoteCartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <FooterWithRedPanel />
            <FloatingSocialBar />
            <ScrollToTop />
            <WelcomeModal />
            <LanguageModal />
            <GoogleTranslate />
          </QuoteCartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
