import type { Metadata } from "next";
import { Header } from "./components/Header";
import { FooterWithRedPanel } from "./components/Footer";
import { FloatingSocialBar } from "./components/FloatingSocialBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { WelcomeModal } from "./components/WelcomeModal";
import { LanguageModal } from "./components/LanguageModal";
import { GoogleTranslate } from "./components/GoogleTranslate";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <FooterWithRedPanel />
          <FloatingSocialBar />
          <ScrollToTop />
          <WelcomeModal />
          <LanguageModal />
          <GoogleTranslate />
        </LanguageProvider>
      </body>
    </html>
  );
}
