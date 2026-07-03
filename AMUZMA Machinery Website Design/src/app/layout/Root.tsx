import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "../components/Header";
import { FooterWithRedPanel } from "../components/Footer";
import { FloatingSocialBar } from "../components/FloatingSocialBar";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col font-[Inter,Poppins,sans-serif]">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterWithRedPanel />
      <FloatingSocialBar />
    </div>
  );
}
