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

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/amuzmamachinery/",
    label: "Facebook",
    icon: "/media/footer-social-facebook.webp",
  },
  {
    href: "https://www.instagram.com/amuzmamachinery/",
    label: "Instagram",
    icon: "/media/footer-social-instagram.webp",
  },
  {
    href: "https://www.linkedin.com/company/amuzma-machinery/",
    label: "LinkedIn",
    icon: "/media/footer-social-linkedin.webp",
  },
  {
    href: "https://www.youtube.com/@AmuzmaMachinery",
    label: "YouTube",
    icon: "/media/footer-social-youtube.webp",
  },
  {
    href: "https://www.tiktok.com/@amuzma.official",
    label: "TikTok",
    icon: "/media/footer-social-tiktok.webp",
  },
  {
    href: "https://x.com/amuzma_uae",
    label: "X",
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
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center transition-opacity hover:opacity-70"
    >
      <Image
        src={icon}
        alt={label}
        width={27}
        height={27}
        className="h-[27px] w-[27px] object-contain"
      />
    </a>
  );
}

export function FooterWithRedPanel() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex-1 bg-[#F0F1F1] px-6 pb-12 pt-14 lg:px-0 lg:pb-14 lg:pl-[55px] lg:pr-10 lg:pt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-[1040px] lg:gap-x-24 lg:gap-y-0">
            <div className="py-5">
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

              <p className={`${FOOTER_HEADING_CLASS} mt-8`}>Important Links</p>
              <ul className="space-y-0">
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
              </ul>
            </div>

            <div className="py-5">
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:max-w-[1040px] lg:gap-x-24 lg:mt-12">
            <div className="hidden sm:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-center gap-6 p-[10px] sm:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full shrink-0 items-center justify-center bg-[#C0202F] px-10 py-[50px] sm:px-12 lg:w-[65%] lg:px-16 xl:w-[68%] 2xl:w-[996px]">
          <Link href="/" className="mx-auto block w-[58%] max-w-[540px] min-w-[220px]">
            <Image
              src="/media/amuzma-R-e1737443063117.webp"
              alt="AMUZMA"
              width={1288}
              height={312}
              sizes="540px"
              className="h-auto w-full object-contain"
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
