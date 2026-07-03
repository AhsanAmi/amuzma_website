const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

type PolicySection = {
  title: string;
  intro?: string;
  items?: string[];
  outro?: string;
  lines?: string[];
};

const SECTIONS: PolicySection[] = [
  {
    title: "WHAT WE COLLECT",
    items: [
      "Name, company, email, phone, address",
      "Order history and machinery specifications",
      "Usage data for remote support (with your permission)",
    ],
  },
  {
    title: "HOW WE USE IT",
    items: [
      "Process and fulfill your orders",
      "Provide technical support and warranty service",
      "Send product updates and offers (you can opt out anytime)",
      "Improve our products and services",
    ],
  },
  {
    title: "WHO WE SHARE WITH",
    items: [
      "Shipping partners (to deliver your machine)",
      "Service technicians (to support your machine)",
      "Payment processors (to process your payment)",
    ],
    outro: "We never sell your data to third parties.",
  },
  {
    title: "YOUR RIGHTS",
    items: [
      "Access your data · Correct inaccurate information",
      "Request deletion (where legally possible)",
      "Opt out of marketing emails",
    ],
  },
  {
    title: "SECURITY",
    intro:
      "We use industry-standard encryption and secure servers to protect your information.",
  },
  {
    title: "CONTACT",
    lines: [
      "For privacy questions:",
      "Email: legal@amuzmamachinery.com",
      "AMUZMA Machinery",
      "Mainland UAE Company",
      "www.amuzmamachinery.com",
      "Landline: +971 4547 8088",
    ],
  },
];

function PolicyList({ items }: { items: string[] }) {
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

export function PrivacyPolicy() {
  return (
    <div className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-24 xl:pt-28">
      <div className={PAGE_CONTAINER}>
        <h1 className="mb-6 font-heading text-[28px] font-bold uppercase leading-tight text-black sm:mb-8 sm:text-[35px] sm:leading-[35px]">
          Privacy Policy
        </h1>

        <p className="mb-8 font-gothic text-[17px] font-normal leading-relaxed text-black">
          AMUZMA Machinery respects your privacy. This policy explains how we
          handle your data.
        </p>

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

              {section.items ? <PolicyList items={section.items} /> : null}

              {section.outro ? (
                <p className="mt-2 font-gothic text-[17px] font-normal leading-relaxed text-black">
                  {section.outro}
                </p>
              ) : null}

              {section.lines ? (
                <div className="space-y-0">
                  {section.lines.map((line) => (
                    <p
                      key={line}
                      className="font-gothic text-[17px] font-normal leading-relaxed text-black"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
