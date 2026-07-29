import Link from "next/link";
import { MediaImage as Image } from "./MediaImage";

const FOOTER_HEADING_CLASS =
  "mb-1 font-gothic text-[22px] font-normal leading-[22px] text-black";

const FOOTER_LINK_CLASS =
  "flex items-center font-gothic text-[16px] font-normal leading-[27px] text-black transition-colors hover:text-[#C0202F]";

const FOOTER_EXPERIENCE_HEADING_CLASS =
  "mb-1 font-gothic text-[17px] font-normal leading-[29px] text-black";

const FOOTER_EXPERIENCE_LINK_CLASS =
  "flex items-center font-gothic text-[17px] font-normal leading-[29px] text-black transition-colors hover:text-[#C0202F]";

const TIKTOK_NOTE = (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" aria-hidden="true">
    <path
      fill="currentColor"
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.81.11v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.16 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.6a8.2 8.2 0 0 0 4.76 1.51V6.69a4.85 4.85 0 0 1-1.01 0z"
    />
  </svg>
);

const SOCIAL_LINKS: {
  href: string;
  label: string;
  hoverColor: string;
  icon: string;
  hoverStyle?: "mask" | "tiktok";
}[] = [
  {
    href: "https://www.facebook.com/amuzmamachinery/",
    label: "Facebook",
    hoverColor: "#3b5998",
    icon: "/media/footer-social-facebook.webp",
  },
  {
    href: "https://www.instagram.com/amuzmamachinery/",
    label: "Instagram",
    hoverColor: "#E1306C",
    icon: "/media/footer-social-instagram.webp",
  },
  {
    href: "https://www.linkedin.com/company/amuzma-machinery/",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
    icon: "/media/footer-social-linkedin.webp",
  },
  {
    href: "https://www.youtube.com/@AmuzmaMachinery",
    label: "YouTube",
    hoverColor: "#CD201F",
    icon: "/media/footer-social-youtube.webp",
  },
  {
    href: "https://www.tiktok.com/@amuzma.official",
    label: "TikTok",
    hoverColor: "#69C9D0",
    icon: "/media/footer-social-tiktok.webp",
    hoverStyle: "tiktok",
  },
  {
    href: "https://x.com/amuzma_uae",
    label: "X",
    hoverColor: "#1DA1F2",
    icon: "/media/footer-social-x.webp",
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
  hoverColor,
  icon,
  hoverStyle = "mask",
}: {
  href: string;
  label: string;
  hoverColor: string;
  icon: string;
  hoverStyle?: "mask" | "tiktok";
}) {
  // Live TikTok hover: cyan rounded tile with white note (not a solid color fill of the whole glyph).
  if (hoverStyle === "tiktok") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative inline-flex h-[27px] w-[27px] items-center justify-center"
      >
        <Image
          src={icon}
          alt={label}
          width={27}
          height={27}
          className="h-[27px] w-[27px] object-contain transition-opacity duration-200 group-hover:opacity-0"
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center rounded-[5px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ backgroundColor: hoverColor }}
        >
          {TIKTOK_NOTE}
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative inline-flex h-[27px] w-[27px] items-center justify-center"
    >
      <Image
        src={icon}
        alt={label}
        width={27}
        height={27}
        className="h-[27px] w-[27px] object-contain transition-opacity duration-200 group-hover:opacity-0"
      />
      <span
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          backgroundColor: hoverColor,
          WebkitMaskImage: `url(${encodeURI(icon)})`,
          maskImage: `url(${encodeURI(icon)})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
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
                  hoverColor={social.hoverColor}
                  icon={social.icon}
                  hoverStyle={social.hoverStyle}
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
