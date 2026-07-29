"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MediaImage as Image } from "./MediaImage";
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { CountryFlag } from "./CountryFlag";
import { useLanguage } from "../context/LanguageContext";
import { useQuoteCart } from "../context/QuoteCartContext";
import { SearchOverlay } from "./SearchOverlay";
import { signalNavigationStart } from "./NavigationProgress";

const headerTextClass =
  "font-heading font-medium text-[16px] leading-[27.2px] text-[#333333] transition-colors hover:text-[#BF1A2B]";

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
      { label: "Forte 20CR", href: "/products/cnc-router-forte-20cr" },
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
    items: [{ label: "Veneer Door Press Firma C8", href: "/products/veneer-door-press-p-100t" }],
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
      { label: "Band Saw Elite 65BS", href: "/products/band-saw-65bs" },
      { label: "Beam saw Firma 33BS", href: "/products/beam-saw-firma-33bs" },
      { label: "Panel saw Firma 40PL", href: "/products/panel-saw-firma-40pl" },
      { label: "Panel saw Firma 35PS", href: "/products/panel-saw-firma-35ps" },
      { label: "Panel saw Elite 35TS", href: "/products/panel-saw-elite-35ts" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const { itemCount } = useQuoteCart();
  const { selectedLanguage, openLanguageModal } = useLanguage();
  const cartLabel = itemCount === 1 ? "1 item" : `${itemCount} items`;
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const companyRef = useRef<HTMLButtonElement>(null);
  const productsRef = useRef<HTMLSpanElement>(null);
  const languageRef = useRef<HTMLButtonElement>(null);
  const menuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Both mega menus span Company → language chevron (same as page content edges). */
  const [menuBounds, setMenuBounds] = useState({ left: 0, width: 0 });
  const [mobileCompanyExpanded, setMobileCompanyExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const updateMenuBounds = useCallback(() => {
    if (!headerRef.current || !companyRef.current || !languageRef.current) return;

    const headerRect = headerRef.current.getBoundingClientRect();
    const companyRect = companyRef.current.getBoundingClientRect();
    const languageRect = languageRef.current.getBoundingClientRect();

    setMenuBounds({
      left: companyRect.left - headerRect.left,
      width: languageRect.right - companyRect.left,
    });
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

  const openSearch = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, []);

  const submitSearch = useCallback(
    (query: string) => {
      const trimmed = query.trim();
      if (!trimmed) return;
      closeSearch();
      signalNavigationStart();
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    },
    [closeSearch, router],
  );

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

  const menuPanelClass = (menu: ActiveMenu, openExtras: string) =>
    `absolute top-full z-50 hidden lg:block transition-all duration-300 ease-out ${
      activeMenu === menu
        ? `pointer-events-auto opacity-100 ${openExtras}`
        : "pointer-events-none max-h-0 overflow-hidden opacity-0"
    }`;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      {/* Mobile utility bar */}
      <div className="flex h-[47px] items-center justify-between bg-[#F5F5F5] px-4 sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={openLanguageModal}
          className="flex items-center gap-1.5 font-heading text-[17px] font-medium text-[#333333]"
          aria-label="Select language"
        >
          <CountryFlag code={selectedLanguage.flagCode} width={26} height={18} />
          <span>{selectedLanguage.name}</span>
          <ChevronDown size={18} strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={() => router.push("/quote")}
          className="font-heading text-[17px] font-medium text-[#333333]"
        >
          {cartLabel}
        </button>

        <button
          type="button"
          onClick={openSearch}
          className="text-[#333333]"
          aria-label="Search"
        >
          <Search size={26} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile main bar */}
      <div className="relative grid h-[64px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:hidden">
        <Link
          href="/"
          className="col-start-2 row-start-1 flex-shrink-0 justify-self-center"
          onClick={closeMenu}
        >
          <Image
            src="/media/logoheader.webp"
            alt="AMUZMA"
            width={206}
            height={46}
            priority
            className="h-[30px] w-auto object-contain sm:h-[34px]"
          />
        </Link>

        <button
          type="button"
          className="col-start-3 row-start-1 flex h-11 w-11 items-center justify-center justify-self-end border border-[#E5E5E5] text-[#333333]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop header */}
      <div className="relative hidden h-[92.16px] w-full grid-cols-[1fr_auto_1fr] items-center px-10 xl:px-16 2xl:px-24 lg:grid">
        {/* Left Nav */}
        <nav className="col-start-1 row-start-1 hidden min-w-0 items-center gap-6 justify-self-start lg:flex xl:gap-10 2xl:gap-14">
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
          className="col-start-2 row-start-1 flex-shrink-0 justify-self-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
          onClick={closeMenu}
        >
          <Image
            src="/media/logoheader.webp"
            alt="AMUZMA"
            width={206}
            height={46}
            priority
            className="h-[30px] w-auto object-contain sm:h-[34px] lg:h-[40px] xl:h-[43px] 2xl:h-[46px]"
          />
        </Link>

        {/* Right Actions */}
        <div className="col-start-3 row-start-1 hidden min-w-0 items-center gap-5 justify-self-end lg:flex xl:gap-7 2xl:gap-9">
          <button
            onClick={() => router.push("/quote")}
            className={headerTextClass}
          >
            {cartLabel}
          </button>
          <button
            type="button"
            onClick={openSearch}
            className="text-[#333333] hover:text-[#BF1A2B] transition-colors"
            aria-label="Search"
          >
            <Search size={26} strokeWidth={1.5} />
          </button>
          <button
            ref={languageRef}
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
      </div>

      {/* Company Mega Menu — full content width: Company → language arrow */}
      <div
        style={{ left: menuBounds.left, width: menuBounds.width }}
        onMouseEnter={() => openMenu("company")}
        onMouseLeave={scheduleCloseMenu}
        className={menuPanelClass(
          "company",
          "max-h-[400px] overflow-hidden",
        )}
      >
        <div className="flex">
          <div
            className="flex-1 px-10 py-9 xl:px-14 xl:py-10"
            style={{ backgroundColor: COMPANY_RED }}
          >
            <h3 className="font-heading font-medium text-[28px] text-white mb-5 xl:text-[30px]">
              {companyMenu.quickLinks.title}
            </h3>
            <ul className="space-y-3.5">
              {companyMenu.quickLinks.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={activeMenu === "company" ? null : false}
                    className="font-heading font-medium text-[20px] leading-snug text-white/90 underline-offset-[6px] decoration-2 transition-all duration-200 hover:text-white hover:underline xl:text-[22px]"
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
            <h3 className="font-heading font-medium text-[28px] text-white mb-5 xl:text-[30px]">
              {companyMenu.services.title}
            </h3>
            <ul className="space-y-3.5">
              {companyMenu.services.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    prefetch={activeMenu === "company" ? null : false}
                    className="font-heading font-medium text-[20px] leading-snug text-white/90 underline-offset-[6px] decoration-2 transition-all duration-200 hover:text-white hover:underline xl:text-[22px]"
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

      {/* Products Mega Menu — same width as Company menu */}
      <div
        style={{ left: menuBounds.left, width: menuBounds.width }}
        onMouseEnter={() => openMenu("products")}
        onMouseLeave={scheduleCloseMenu}
        className={menuPanelClass("products", "max-h-[520px]")}
      >
        <div className="grid grid-cols-4 grid-rows-2">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="px-4 py-4 xl:px-5 xl:py-5"
              style={{ backgroundColor: category.color }}
            >
              <h3 className="mb-2 font-heading text-[20px] font-medium leading-tight text-white xl:text-[22px]">
                {"href" in category && category.href ? (
                  <Link
                    href={category.href}
                    prefetch={activeMenu === "products" ? null : false}
                    className="underline-offset-[6px] decoration-2 transition-all duration-200 hover:underline"
                    onClick={closeMenu}
                  >
                    {category.title}
                  </Link>
                ) : (
                  category.title
                )}
              </h3>
              <ul
                className={
                  category.items.length > 5
                    ? "grid grid-cols-2 gap-x-4 gap-y-1"
                    : "space-y-1"
                }
              >
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      prefetch={activeMenu === "products" ? null : false}
                      className="font-heading text-[15px] font-medium leading-[1.4] text-white/90 underline-offset-[5px] decoration-2 transition-all duration-200 hover:text-white hover:underline xl:text-[16px]"
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
        <div className="lg:hidden max-h-[calc(100vh-111px)] overflow-y-auto overscroll-contain bg-white border-t border-[#E5E5E5] px-4 sm:px-6 py-4 space-y-4 font-heading font-medium">
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
        </div>
      )}

      <SearchOverlay
        open={searchOpen}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onClose={closeSearch}
        onSubmit={submitSearch}
      />
    </header>
  );
}
