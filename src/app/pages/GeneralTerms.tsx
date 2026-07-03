const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

type TermsSection = {
  title: string;
  intro?: string;
  items?: string[];
};

const SECTIONS: TermsSection[] = [
  {
    title: "USE OF WEBSITE",
    items: [
      "Use the site lawfully and as intended",
      "Do not attempt to hack, scrape, or reverse engineer",
      "All content is AMUZMA property – do not copy without permission",
    ],
  },
  {
    title: "ORDERS & PAYMENT",
    items: [
      "All orders require written confirmation from AMUZMA",
      "Payment: 30% advance to confirm, 70% balance before shipment",
      "Prices in USD, FOB China port, valid 7 days",
      "Orders cannot be cancelled after confirmation without penalty",
      "Deposits are non-refundable if production has started",
    ],
  },
  {
    title: "SHIPPING",
    items: [
      "FOB only – we deliver to the ship in China; you arrange freight from there",
      "Risk transfers when goods pass ship's rail",
      "Inspect immediately upon arrival; report damage within 24 hours",
    ],
  },
  {
    title: "WARRANTY",
    items: [
      "12 months for manufacturing defects",
      "Covers structural and electrical components; excludes wear parts and misuse",
      "Client pays shipping cost for warranty parts",
      "Report defects within 8 days",
    ],
  },
  {
    title: "INTELLECTUAL PROPERTY",
    intro:
      "All designs, software, logos, and technical information belong to AMUZMA. Unauthorized use is prohibited.",
  },
  {
    title: "LIMITATION OF LIABILITY",
    intro:
      "AMUZMA liability is limited to the purchase price of the specific machine. We are not liable for lost profits, production downtime, or indirect damages.",
  },
  {
    title: "GOVERNING LAW",
    intro:
      "These terms are governed by UAE law. Disputes resolved through negotiation, then arbitration in Dubai (DIAC).",
  },
  {
    title: "CHANGES",
    intro:
      "We may update these terms. Continued use means acceptance of the latest version.",
  },
];

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <li
          key={item}
          className="font-gothic text-[17px] font-normal leading-relaxed text-black"
        >
          - {item}
        </li>
      ))}
    </ul>
  );
}

export function GeneralTerms() {
  return (
    <div className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-24 xl:pt-28">
      <div className={PAGE_CONTAINER}>
        <h1 className="mb-6 font-heading text-[28px] font-bold uppercase leading-tight text-black sm:mb-8 sm:text-[35px] sm:leading-[35px]">
          General Terms and Conditions
        </h1>

        <div className="space-y-8">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 font-heading text-[20px] font-bold uppercase leading-relaxed text-black">
                {section.title}
              </h2>

              {section.intro ? (
                <p className="font-gothic text-[17px] font-normal leading-relaxed text-black">
                  {section.intro}
                </p>
              ) : null}

              {section.items ? <TermsList items={section.items} /> : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
