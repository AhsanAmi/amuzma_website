import { Phone, Mail, MapPin, Headphones } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Headphones,
    title: "Service Hotline",
    value: "+971 414 886",
    sub: "Mon–Fri: 9am–6pm GST",
  },
  {
    icon: Phone,
    title: "After Sales Phone",
    value: "+971 55 857 857",
    sub: "Technical support & service",
  },
  {
    icon: Mail,
    title: "Business Cooperation",
    value: "info@amuzma.com",
    sub: "partnerships@amuzma.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "No. 01 Roxy Industrial Area",
    sub: "Dubai, United Arab Emirates",
  },
];

const REGIONS = [
  {
    name: "ASIA",
    partners: [
      {
        country: "PAKISTAN",
        company: "Airtech",
        details: ["Lahore", "+92 334 4344 806", "airtech@gmail.com"],
        hasMore: true,
      },
    ],
  },
  {
    name: "AUSTRALIA",
    partners: [],
  },
  {
    name: "AFRICA",
    partners: [],
  },
  {
    name: "CENTRAL AND SOUTH AMERICA",
    partners: [
      {
        country: "UNITED ARAB EMIRATES",
        company: "MYG Trading",
        details: ["+971 55 125 244", "info@mygtrading.com", "Se Habla Español"],
        hasMore: true,
      },
    ],
  },
  {
    name: "EUROPE",
    partners: [
      {
        country: "OMAN",
        company: "VK Trading",
        details: ["+968 7515 244", "vktrading@gmail.com"],
        hasMore: false,
      },
    ],
  },
  {
    name: "NORTH AMERICA",
    partners: [],
  },
];

export function Contact() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-200 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
          alt="Contact AMUZMA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-[1320px] mx-auto px-6 w-full">
            <div className="max-w-lg flex flex-col gap-2">
              <svg viewBox="0 0 160 44" className="h-10 w-auto" fill="none">
                <text x="80" y="32" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="28" letterSpacing="2" fill="white" style={{ fontStyle: "italic" }}>AMUZMA</text>
                <circle cx="154" cy="10" r="5" fill="none" stroke="white" strokeWidth="1.5" />
                <text x="154" y="13.5" textAnchor="middle" fontFamily="Inter" fontSize="6" fill="white">®</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Choose How We Can Help You</h2>
            <div className="w-12 h-1 bg-[#B5122B] mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="border border-[#E5E5E5] rounded p-6 text-center hover:shadow-md hover:border-[#B5122B] transition-all"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#E5E5E5] flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</h4>
                  <p className="text-sm text-gray-700 font-medium">{card.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{card.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Sales Partners */}
      <section className="py-14 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Find Your International Sales Partner</h2>
            <div className="w-12 h-1 bg-[#B5122B] mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {REGIONS.map((r) => (
              <button
                key={r.name}
                className="py-2 px-3 text-xs font-semibold border border-[#E5E5E5] bg-white rounded hover:border-[#B5122B] hover:text-[#B5122B] transition-colors"
              >
                {r.name}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.filter(r => r.partners.length > 0).map((region) =>
              region.partners.map((partner, i) => (
                <div key={`${region.name}-${i}`} className="bg-white border border-[#E5E5E5] rounded p-5">
                  <div className="mb-3">
                    <span className="text-xs font-bold text-[#B5122B] uppercase tracking-wider">{partner.country}</span>
                    <h4 className="font-semibold text-gray-900 mt-1">{partner.company}</h4>
                  </div>
                  <ul className="space-y-1">
                    {partner.details.map((d) => (
                      <li key={d} className="text-sm text-gray-600">{d}</li>
                    ))}
                  </ul>
                  {partner.hasMore && (
                    <button className="mt-3 text-xs text-[#B5122B] hover:underline">
                      + More locations
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Factory + Map */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <img
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="AMUZMA Factory"
                className="w-full h-72 object-cover rounded"
              />
            </div>
            <div className="rounded overflow-hidden h-72 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={40} className="mx-auto mb-3 text-[#B5122B]" />
                <p className="font-medium text-gray-700">AMUZMA Machinery</p>
                <p className="text-sm">No. 01 Roxy Industrial Area, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
