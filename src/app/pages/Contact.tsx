"use client";

import { useState } from "react";
import { MediaImage as Image } from "../components/MediaImage";
import { Phone, Headphones, Mail, MapPin, Globe } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Service Hotline",
    lines: [{ text: "+971 4547 8088", href: "tel:+97145478088" }],
  },
  {
    icon: Headphones,
    title: "After-Sales Phone",
    lines: [{ text: "+971 50 857 6840", href: "tel:+971508576840" }],
  },
  {
    icon: Mail,
    title: "Business Cooperation",
    lines: [
      { text: "info@amuzmamachinery.com", href: "mailto:info@amuzmamachinery.com" },
      { text: "sales@amuzmamachinery.com", href: "mailto:sales@amuzmamachinery.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      { text: "Ras Al Khor Industrial Area 2, Dubai, United Arab Emirates" },
    ],
  },
];

type PartnerItem = {
  icon: "phone" | "mail" | "globe";
  text: string;
  href?: string;
};

type Partner = {
  country: string;
  company: string;
  address: string;
  items: PartnerItem[];
};

const REGIONS: { name: string; partners: Partner[] }[] = [
  {
    name: "Asia",
    partners: [
      {
        country: "PAKISTAN",
        company: "Asmach",
        address: "12 km G T Road okara near University",
        items: [
          { icon: "phone", text: "+92 316 4106 088", href: "tel:+923164106088" },
          {
            icon: "mail",
            text: "asmachtraders@gmail.com",
            href: "mailto:asmachtraders@gmail.com",
          },
        ],
      },
      {
        country: "UNITED ARAB EMIRATES",
        company: "MYQ Trading",
        address: "Ras al Khor Industrial Area 2 Dubai",
        items: [
          { icon: "phone", text: "+971-50 722 4796", href: "tel:+971507224796" },
          {
            icon: "mail",
            text: "info@myqtrading.com",
            href: "mailto:info@myqtrading.com",
          },
          {
            icon: "mail",
            text: "sales@myqtrading.com",
            href: "mailto:sales@myqtrading.com",
          },
          {
            icon: "globe",
            text: "www.myqtrading.com",
            href: "https://www.myqtrading.com",
          },
        ],
      },
      {
        country: "OMAN",
        company: "SA Trading",
        address: "Wadam AL Gauf Shop N0.3 Al Mussna",
        items: [
          { icon: "phone", text: "+968 7635 2309", href: "tel:+96876352309" },
          {
            icon: "mail",
            text: "satradingspc@gmail.com",
            href: "mailto:satradingspc@gmail.com",
          },
        ],
      },
    ],
  },
  { name: "Australia", partners: [] },
  { name: "Africa", partners: [] },
  { name: "Central and South America", partners: [] },
  { name: "Europe", partners: [] },
  { name: "North America", partners: [] },
];

const PARTNER_ICONS = { phone: Phone, mail: Mail, globe: Globe };

export function Contact() {
  const [activeRegion, setActiveRegion] = useState(0);
  const region = REGIONS[activeRegion];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[198px] w-full overflow-hidden sm:h-[242px] md:h-[286px] lg:h-[330px]">
        <Image
          src="/media/contactapge.jpeg"
          alt="AMUZMA — worldwide sales partners"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* Choose How We Can Help You */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-8 text-center text-[26px] font-normal leading-tight text-black sm:mb-12 sm:text-[32px] sm:leading-[35px]">
            Choose How We Can Help You
          </h2>
          <div className="mx-auto grid max-w-[1000px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex min-h-[170px] flex-col items-center justify-center rounded-md border border-black/60 bg-white px-4 py-8 text-center transition-colors hover:border-[#C0202F]"
                >
                  <Icon size={22} strokeWidth={1.5} className="mb-4 text-black" />
                  <h3 className="mb-3 text-[15px] font-normal text-black">
                    {card.title}
                  </h3>
                  <div className="space-y-1">
                    {card.lines.map((line) =>
                      "href" in line && line.href ? (
                        <a
                          key={line.text}
                          href={line.href}
                          className="block break-all text-[13px] font-normal leading-snug text-[#C0202F] transition-opacity hover:opacity-80"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p
                          key={line.text}
                          className="text-[13px] font-normal leading-snug text-[#C0202F]"
                        >
                          {line.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Find Your International Sales Partner */}
      <section className="bg-white pb-10 font-gothic sm:pb-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-8 text-center text-[26px] font-normal leading-tight text-black sm:mb-10 sm:text-[32px] sm:leading-[35px]">
            Find Your International Sales Partner
          </h2>

          {/* Region Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {REGIONS.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => setActiveRegion(i)}
                className={`px-3 py-2 text-[12px] font-normal uppercase tracking-wide transition-colors ${
                  i === activeRegion
                    ? "border border-[#E5E5E5] bg-[#F7F7F7] text-black"
                    : "border border-transparent text-black hover:text-[#C0202F]"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Partners */}
          <div className="mx-auto max-w-[1000px]">
            {region.partners.length > 0 ? (
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {region.partners.map((partner) => (
                  <div key={partner.country}>
                    <h3 className="mb-2 text-[15px] font-normal uppercase text-black">
                      {partner.country}
                    </h3>
                    <p className="mb-1 text-[14px] font-normal text-black">
                      {partner.company}
                    </p>
                    <p className="mb-4 text-[13px] font-normal leading-snug text-[#666666]">
                      {partner.address}
                    </p>
                    <ul className="space-y-2">
                      {partner.items.map((item) => {
                        const ItemIcon = PARTNER_ICONS[item.icon];
                        return (
                          <li key={item.text} className="flex items-center gap-2">
                            <ItemIcon
                              size={14}
                              strokeWidth={2}
                              className="shrink-0 text-[#C0202F]"
                            />
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.icon === "globe" ? "_blank" : undefined}
                                rel={
                                  item.icon === "globe"
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="break-all text-[13px] font-normal text-[#C0202F] transition-opacity hover:opacity-80"
                              >
                                {item.text}
                              </a>
                            ) : (
                              <span className="text-[13px] font-normal text-[#C0202F]">
                                {item.text}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-[14px] font-normal text-[#666666]">
                No sales partners listed in this region yet. Please contact us
                directly at info@amuzmamachinery.com.
              </p>
            )}
          </div>

          {/* Factory Image + Map */}
          <div className="mx-auto mt-12 grid max-w-[1000px] gap-2 md:grid-cols-2">
            <Image
              src="/media/office-image-copy.webp"
              alt="AMUZMA Machinery building"
              width={1140}
              height={641}
              sizes="(min-width: 768px) 500px, 100vw"
              className="h-[260px] w-full object-cover"
            />
            <iframe
              src="https://www.google.com/maps?q=Amuzma%20Machinery%2C%20Ras%20Al%20Khor%20Industrial%20Area%202%2C%20Dubai%2C%20United%20Arab%20Emirates&output=embed"
              title="Amuzma Machinery — Ras Al Khor Industrial Area 2, Dubai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[260px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
