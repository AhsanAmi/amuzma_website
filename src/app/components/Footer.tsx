import Link from "next/link";
import type { ReactNode } from "react";
import { MediaImage as Image } from "./MediaImage";

const FOOTER_HEADING_CLASS =
  "mb-1 font-gothic text-[22px] font-normal leading-[22px] text-black";

const FOOTER_LINK_CLASS =
  "flex items-center font-gothic text-[16px] font-normal leading-[27px] text-black transition-colors hover:text-[#C0202F]";

const FOOTER_EXPERIENCE_HEADING_CLASS =
  "mb-1 font-gothic text-[17px] font-normal leading-[29px] text-black";

const FOOTER_EXPERIENCE_LINK_CLASS =
  "flex items-center font-gothic text-[17px] font-normal leading-[29px] text-black transition-colors hover:text-[#C0202F]";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/amuzmamachinery/",
    label: "Facebook",
    hoverClass: "hover:text-[#3b5998]",
    icon: (
      <svg viewBox="0 0 320 512" className="h-[22px] w-[22px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/amuzmamachinery/",
    label: "Instagram",
    hoverClass: "hover:text-[#E1306C]",
    icon: (
      <svg viewBox="0 0 448 512" className="h-[22px] w-[22px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/amuzma-machinery/",
    label: "LinkedIn",
    hoverClass: "hover:text-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 448 512" className="h-[22px] w-[22px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.1 107.3 0 83.1 0 53.7A53.73 53.73 0 0 1 53.7 0a53.66 53.66 0 0 1 53.7 53.7c0 29.4-24.1 53.6-53.56 53.6zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@AmuzmaMachinery",
    label: "YouTube",
    hoverClass: "hover:text-[#CD201F]",
    icon: (
      <svg viewBox="0 0 576 512" className="h-[22px] w-[22px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@amuzma.official",
    label: "TikTok",
    hoverClass: "hover:text-[#EE1D52]",
    icon: (
      <svg viewBox="0 0 448 512" className="h-[22px] w-[22px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.8 162.8 0 1 1 185.2 192v90.1a73.6 73.6 0 1 0 52.2 70.4V0h88.1a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 54.3 80.2A121.4 121.4 0 0 0 448 209.9z"
        />
      </svg>
    ),
  },
  {
    href: "https://x.com/amuzma_uae",
    label: "X",
    hoverClass: "hover:text-[#1DA1F2]",
    icon: (
      <svg viewBox="0 0 512 512" className="h-[20px] w-[20px]" aria-hidden="true">
        <path
          fill="currentColor"
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
        />
      </svg>
    ),
  },
];

function FooterArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function FooterLink({
  href,
  children,
  className = FOOTER_LINK_CLASS,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <FooterArrow />
      <span className="pl-[5px]">{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  hoverClass,
  icon,
}: {
  href: string;
  label: string;
  hoverClass: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center text-black transition-colors duration-200 ${hoverClass}`}
    >
      {icon}
    </a>
  );
}

export function FooterWithRedPanel() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex-1 bg-[#F0F1F1] px-6 pb-7 pt-7 lg:px-0 lg:pb-7 lg:pl-[55px] lg:pr-8 lg:pt-7">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-0">
            <div className="py-1">
              <p className={FOOTER_HEADING_CLASS}>Quick Links</p>
              <ul className="space-y-0">
                <li>
                  <FooterLink href="/products">Products</FooterLink>
                </li>
                <li>
                  <FooterLink href="https://amuzmastore.com/" external>
                    Spare Parts
                  </FooterLink>
                </li>
              </ul>

              <p className={`${FOOTER_HEADING_CLASS} mt-6`}>Important Links</p>
              <ul className="space-y-0">
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
              </ul>
            </div>

            <div className="py-1">
              <p className={FOOTER_EXPERIENCE_HEADING_CLASS}>
                Experience machines live.
              </p>
              <ul className="space-y-0">
                <li>
                  <FooterLink href="/contact" className={FOOTER_EXPERIENCE_LINK_CLASS}>
                    Find a dealer near you
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/warranties" className={FOOTER_EXPERIENCE_LINK_CLASS}>
                    Warranties
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/privacy-policy" className={FOOTER_EXPERIENCE_LINK_CLASS}>
                    Privacy Policy
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/general-terms" className={FOOTER_EXPERIENCE_LINK_CLASS}>
                    General Terms
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 lg:mt-6">
            <div className="hidden sm:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-center gap-5 p-1 sm:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  hoverClass={social.hoverClass}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 items-center justify-center bg-[#C0202F] px-4 py-4 sm:px-6 lg:w-[42%] lg:px-8 lg:py-5 xl:w-[44%] 2xl:w-[490px]">
          <Link href="/" className="mx-auto block w-[79%] max-w-[277px] min-w-[132px]">
            <Image
              src="/media/amuzma-R-e1737443063117.webp"
              alt="AMUZMA"
              width={1288}
              height={312}
              sizes="277px"
              className="h-auto max-h-[55px] w-full object-contain sm:max-h-[64px] lg:max-h-[74px]"
            />
          </Link>
        </div>
      </div>

      <div className="relative bg-black px-4 py-3 text-center lg:pr-[55px]">
        <p className="font-gothic text-[14px] font-normal leading-[24px] text-white sm:text-[16px] sm:leading-[27px]">
          © 2026 Amuzma Machinery. All Rights Reserved. Under Construction
        </p>
      </div>
    </footer>
  );
}

export function Footer() {
  return <FooterWithRedPanel />;
}
