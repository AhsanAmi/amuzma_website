"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { CountryFlag } from "./CountryFlag";
import { useLanguage } from "../context/LanguageContext";

const headerTextClass =
  "font-heading font-medium text-[21.6px] text-[#333333] hover:text-[#BF1A2B] transition-colors";

const COMPANY_RED = "#BF1A2B";
const COMPANY_GREEN = "#75A14F";
const PRODUCT_ORANGE = "#E16010";
const PRODUCT_YELLOW = "#F7A710";

type ActiveMenu = "company" | "products" | null;

const companyMenu = {
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Mission & Vision", href: "/mission-vision" },
    ],
  },
  services: {
    title: "Our service",
    links: [
      { label: "Warranties", href: "/warranties" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "General Terms", href: "/general-terms" },
    ],
  },
};

const productCategories = [
  {
    title: "CNC Router",
    color: COMPANY_RED,
    href: "/cnc-machines",
    items: [
      { label: "Forte 13CR", href: "/products/cnc-router-forte-13cr" },
      { label: "Forte 15CR", href: "/products/cnc-router-forte-15cr" },
    ],
  },
  {
    title: "Dust Extractors & Waste",
    color: PRODUCT_ORANGE,
    href: "/dust-collector-waste",
    items: [
      { label: "Dust collector Dc2200", href: "/products/dust-collector-dc2200" },
      { label: "Dust collector ABS5000", href: "/products/dust-collector-abs5000" },
      { label: "Dust collector RDC3800", href: "/products/dust-collector-rdc3800" },
    ],
  },
  {
    title: "Edgebanders",
    color: PRODUCT_YELLOW,
    href: "/edge-banders",
    items: [
      { label: "Edge Banding E5", href: "/products/edge-banding-e5" },
      { label: "Edge Banding P6", href: "/products/edge-banding-p6" },
      { label: "Edge Banding C7", href: "/products/edge-banding-c7" },
    ],
  },
  {
    title: "Pressing",
    color: COMPANY_GREEN,
    href: "/pressing",
    items: [{ label: "Veneer Door Press P 100T", href: "/products/veneer-door-press-p-100t" }],
  },
  {
    title: "Sanders",
    color: COMPANY_GREEN,
    href: "/sanders",
    items: [{ label: "Wide Belt Sander Firma 1300WS", href: "/products/wide-belt-sander-firma-1300ws" }],
  },
  {
    title: "Moulder",
    color: PRODUCT_YELLOW,
    href: "/moulder",
    items: [{ label: "Spindle Moulder Elite 30SM", href: "/products/spindle-moulder-elite-30sm" }],
  },
  {
    title: "Planer",
    color: PRODUCT_ORANGE,
    href: "/planer",
    items: [
      { label: "Planer Elite 41PF", href: "/products/planer-elite-41pf" },
      { label: "Planer & Thicknesser Elite 41CM/CS", href: "/products/planer-elite-41cm-cs" },
      { label: "Thicknesser Elite 41TH", href: "/products/thicknesser-elite-41th" },
      { label: "Thicknesser Firma 63TH", href: "/products/thicknesser-firma-63th" },
    ],
  },
  {
    title: "Saws",
    color: COMPANY_RED,
    href: "/saws",
    items: [
      { label: "Band Saw 65BS", href: "/products/band-saw-65bs" },
      { label: "Panel saw Firma 40PL", href: "/products/panel-saw-firma-40pl" },
      { label: "Panel saw Firma 35PS", href: "/products/panel-saw-firma-35ps" },
      { label: "Panel saw Forte 40PA", href: "/products/panel-saw-forte-40pa" },
      { label: "Panel saw Elite 35TS", href: "/products/panel-saw-elite-35ts" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [cartCount] = useState(0);
  const { selectedLanguage, openLanguageModal } = useLanguage();
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const companyRef = useRef<HTMLButtonElement>(null);
  const productsRef = useRef<HTMLSpanElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);
  const menuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [companyMenuBounds, setCompanyMenuBounds] = useState({ left: 0, width: 0 });
  const [productsMenuBounds, setProductsMenuBounds] = useState({ left: 0, width: 0 });
  const [mobileCompanyExpanded, setMobileCompanyExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);

  const updateMenuBounds = useCallback(() => {
    if (!headerRef.current || !productsRef.current || !searchRef.current) return;

    const headerRect = headerRef.current.getBoundingClientRect();
    const productsRect = productsRef.current.getBoundingClientRect();
    const searchRect = searchRef.current.getBoundingClientRect();

    setProductsMenuBounds({
      left: productsRect.left - headerRect.left,
      width: searchRect.right - productsRect.left,
    });

    if (companyRef.current) {
      const companyRect = companyRef.current.getBoundingClientRect();
      setCompanyMenuBounds({
        left: companyRect.left - headerRect.left,
        width: searchRect.right - companyRect.left,
      });
    }
  }, []);

  const openMenu = useCallback(
    (menu: ActiveMenu) => {
      if (menuCloseTimer.current) {
        clearTimeout(menuCloseTimer.current);
        menuCloseTimer.current = null;
      }
      setActiveMenu(menu);
      updateMenuBounds();
    },
    [updateMenuBounds]
  );

  const scheduleCloseMenu = useCallback(() => {
    if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const closeMenu = useCallback(() => setActiveMenu(null), []);

  useEffect(() => {
    updateMenuBounds();
    window.addEventListener("resize", updateMenuBounds);
    return () => window.removeEventListener("resize", updateMenuBounds);
  }, [updateMenuBounds]);

  useEffect(() => {
    if (activeMenu) updateMenuBounds();
  }, [activeMenu, updateMenuBounds]);

  useEffect(() => {
    return () => {
      if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
    };
  }, []);

  const menuPanelClass = (menu: ActiveMenu, maxHeight: string) =>
    `absolute top-full z-50 hidden lg:block overflow-hidden transition-all duration-300 ease-out ${maxHeight} ${
      activeMenu === menu
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none max-h-0 opacity-0"
    }`;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      <div className="relative flex h-[64px] w-full items-center justify-between px-4 sm:px-6 lg:h-[92.16px] lg:px-24 xl:px-36 2xl:px-48">
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-[57.6px]">
          <button
            ref={companyRef}
            type="button"
            className={`${headerTextClass} ${activeMenu === "company" ? "text-[#BF1A2B]" : ""}`}
            onMouseEnter={() => openMenu("company")}
            onMouseLeave={scheduleCloseMenu}
            onClick={() => openMenu("company")}
            aria-expanded={activeMenu === "company"}
            aria-haspopup="true"
          >
            Company
          </button>

          <span
            ref={productsRef}
            className={`${headerTextClass} cursor-default ${activeMenu === "products" ? "text-[#BF1A2B]" : ""}`}
            onMouseEnter={() => openMenu("products")}
            onMouseLeave={scheduleCloseMenu}
          >
            Products
          </span>

          <Link href="/contact" className={headerTextClass}>
            Contact
          </Link>
        </nav>

        {/* Center Logo */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/media/logoheader.webp"
            alt="AMUZMA"
            width={258}
            height={58}
            priority
            className="h-[42px] w-auto object-contain lg:h-[58.08px]"
          />
        </Link>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-[34.56px]">
          <button
            onClick={() => router.push("/quote")}
            className={headerTextClass}
          >
            {cartCount} items
          </button>
          <button
            ref={searchRef}
            className="text-[#333333] hover:text-[#BF1A2B] transition-colors"
            aria-label="Search"
          >
            <Search size={26} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openLanguageModal}
            className={`flex items-center gap-1.5 ${headerTextClass}`}
            aria-label="Select language"
          >
            <CountryFlag code={selectedLanguage.flagCode} />
            <span>{selectedLanguage.name}</span>
            <ChevronDown size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-auto flex h-11 w-11 items-center justify-center text-[#333333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Company Mega Menu */}
      <div
        style={{ left: companyMenuBounds.left, width: companyMenuBounds.width }}
        onMouseEnter={() => openMenu("company")}
        onMouseLeave={scheduleCloseMenu}
        className={menuPanelClass("company", activeMenu === "company" ? "max-h-[400px]" : "")}
      >
        <div className="flex">
          <div
            className="flex-1 px-10 py-9 xl:px-14 xl:py-10"
            style={{ backgroundColor: COMPANY_RED }}
          >
            <h3 className="font-heading font-medium text-[26px] text-white mb-5">
              {companyMenu.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {companyMenu.quickLinks.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-heading font-medium text-[18px] text-white/95 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex-1 px-10 py-9 xl:px-14 xl:py-10"
            style={{ backgroundColor: COMPANY_GREEN }}
          >
            <h3 className="font-heading font-medium text-[26px] text-white mb-5">
              {companyMenu.services.title}
            </h3>
            <ul className="space-y-3">
              {companyMenu.services.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-heading font-medium text-[18px] text-white/95 hover:text-white transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Products Mega Menu */}
      <div
        style={{ left: productsMenuBounds.left, width: productsMenuBounds.width }}
        onMouseEnter={() => openMenu("products")}
        onMouseLeave={scheduleCloseMenu}
        className={menuPanelClass("products", activeMenu === "products" ? "max-h-[780px]" : "")}
      >
        <div className="grid grid-cols-4 grid-rows-2 items-stretch">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="px-5 py-5 xl:px-7 xl:py-6"
              style={{ backgroundColor: category.color }}
            >
              <h3 className="mb-2 font-heading text-[20px] font-medium leading-tight text-white xl:text-[22px]">
                {"href" in category && category.href ? (
                  <Link
                    href={category.href}
                    className="hover:text-white/90 transition-colors"
                    onClick={closeMenu}
                  >
                    {category.title}
                  </Link>
                ) : (
                  category.title
                )}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-heading text-[13px] font-medium leading-snug text-white/95 transition-colors hover:text-white xl:text-[14px]"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain bg-white border-t border-[#E5E5E5] px-4 sm:px-6 py-4 space-y-4 font-heading font-medium">
          <div>
            <button
              type="button"
              className="flex w-full items-center justify-between py-2 text-left text-[18px] text-[#333333]"
              onClick={() => setMobileCompanyExpanded((open) => !open)}
              aria-expanded={mobileCompanyExpanded}
            >
              Company
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className={`shrink-0 transition-transform ${mobileCompanyExpanded ? "rotate-180" : ""}`}
              />
            </button>
            {mobileCompanyExpanded && (
              <div className="mt-2 overflow-hidden rounded-sm">
                <div className="px-4 py-4" style={{ backgroundColor: COMPANY_RED }}>
                  <p className="text-[18px] text-white mb-3">{companyMenu.quickLinks.title}</p>
                  {companyMenu.quickLinks.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-1.5 text-[16px] text-white/95"
                      onClick={() => {
                        setMobileCompanyExpanded(false);
                        setMobileOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-4" style={{ backgroundColor: COMPANY_GREEN }}>
                  <p className="text-[18px] text-white mb-3">{companyMenu.services.title}</p>
                  {companyMenu.services.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-1.5 text-[16px] text-white/95"
                      onClick={() => {
                        setMobileCompanyExpanded(false);
                        setMobileOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              className="flex w-full items-center justify-between py-2 text-left text-[18px] text-[#333333]"
              onClick={() => setMobileProductsExpanded((open) => !open)}
              aria-expanded={mobileProductsExpanded}
            >
              Products
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className={`shrink-0 transition-transform ${mobileProductsExpanded ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductsExpanded && (
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productCategories.map((category) => (
                  <div
                    key={category.title}
                    className="px-4 py-4 rounded-sm"
                    style={{ backgroundColor: category.color }}
                  >
                    <p className="text-[16px] text-white mb-2">
                      {"href" in category && category.href ? (
                        <Link
                          href={category.href}
                          className="hover:text-white/90 transition-colors"
                          onClick={() => {
                            setMobileProductsExpanded(false);
                            setMobileOpen(false);
                          }}
                        >
                          {category.title}
                        </Link>
                      ) : (
                        category.title
                      )}
                    </p>
                    {category.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-1 text-[14px] text-white/95"
                        onClick={() => {
                          setMobileProductsExpanded(false);
                          setMobileOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block py-2 text-[18px] text-[#333333] hover:text-[#BF1A2B]"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-[#E5E5E5] flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              onClick={() => {
                router.push("/quote");
                setMobileOpen(false);
              }}
              className="text-[18px] text-[#333333] hover:text-[#BF1A2B]"
            >
              {cartCount} items
            </button>
            <button className="text-[#333333]" aria-label="Search">
              <Search size={24} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => {
                openLanguageModal();
                setMobileOpen(false);
              }}
              className="flex items-center gap-1.5 text-[18px] text-[#333333]"
            >
              <CountryFlag code={selectedLanguage.flagCode} />
              {selectedLanguage.name}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
