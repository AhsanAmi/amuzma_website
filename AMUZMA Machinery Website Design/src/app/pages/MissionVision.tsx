import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

export function MissionVision() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-[#B5122B] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
            alt="Mission & Vision"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 py-14 text-center">
          <h1 className="text-white" style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "0.08em" }}>
            MISSION &amp; VISION
          </h1>
        </div>
      </div>

      {/* Mission & Vision Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – Target Icon illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="relative">
                <div className="w-52 h-52 rounded-full border-4 border-[#B5122B]/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border-4 border-[#B5122B]/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#B5122B] flex items-center justify-center">
                      <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
                        <line x1="20" y1="2" x2="20" y2="38" stroke="white" strokeWidth="1.5" />
                        <line x1="2" y1="20" x2="38" y2="20" stroke="white" strokeWidth="1.5" />
                        <circle cx="20" cy="20" r="6" fill="white" />
                        {/* Arrow */}
                        <line x1="30" y1="10" x2="22" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <polyline points="27,10 30,10 30,13" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Text */}
            <div>
              <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Mission &amp; Vision</h2>
              <div className="w-10 h-1 bg-[#B5122B] mb-6" />

              <p className="text-gray-600 leading-relaxed mb-4">
                At AMUZMA, we are committed to delivering high-quality, efficient, and cost-effective machinery that meets the evolving demands of global industries. Our mission is built on the key pillars our brand stands on:
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Inspired by a 100-year family legacy and driven by his father's pioneering role in the machinery trade, Asif Javed envisions AMUZMA as a global leader by focusing on:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  { title: "Quality Manufacturing", desc: "Partnering with trusted manufacturers in China while maintaining strict quality control through expert supervision." },
                  { title: "Competitive Pricing", desc: "Providing machines that match European quality at a fraction of the cost." },
                  { title: "Global Reach & Reliability", desc: "Continuously advancing our technology to meet the ever-changing needs of modern industries." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#B5122B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                      <span className="text-sm text-gray-600"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-[#B5122B] pl-4">
                By combining precision engineering, affordability, and reliability, AMUZMA is redefining the future of industrial machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose How We Can Help You */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Choose How We Can Help You</h2>
            <div className="w-10 h-1 bg-[#B5122B] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Choose How We Can Help You",
                body: "Quality machinery should be accessible, not a luxury. Asif Javed, Founder & CEO of AMUZMA, created the brand specifically to bridge this gap.",
              },
              {
                title: "Our Value Proposition",
                body: "Inspired by a 100-year family legacy and driven by his father's pioneering role in the machinery trade, Asif Javed envisions AMUZMA as a global leader by focusing on innovation, quality, and accessibility.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded p-8 shadow-sm">
                <h3 className="text-gray-900 font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.body}</p>
                <ul className="space-y-3">
                  {[
                    { label: "Quality Machines", desc: "Machines that meet strict European CE standards for quality, safety, and durability." },
                    { label: "Affordability Without Sacrificing Quality", desc: "Providing a cost-effective alternative to expensive European brands." },
                    { label: "Continuous Innovation", desc: "Advancing our technology to meet modern industry needs." },
                    { label: "Global Reach & Accessibility", desc: "Expanding AMUZMA's dealer network to ensure worldwide access." },
                  ].map((point) => (
                    <li key={point.label} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#B5122B] flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-medium text-gray-800">{point.label}</span>
                        <span className="text-gray-500"> — {point.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded p-8 shadow-sm">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Inspired by a 100-year family legacy and driven by his father's pioneering role in the machinery trade, AMUZMA seeks to be a global leader by focusing on:
                </p>
                <ul className="space-y-2">
                  {[
                    "Machines that meet strict European CE standards.",
                    "Affordability Without Sacrificing Quality — Providing a cost-effective alternative to expensive European brands.",
                    "Continuous Innovation — Advancing our technology.",
                    "Global Reach & Accessibility — Expanding AMUZMA's network.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#B5122B] font-bold mt-0.5">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                {/* Eye / Vision icon */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-4 border-[#B5122B]/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-[#B5122B]/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#B5122B]/10 border-2 border-[#B5122B] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#B5122B" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              At AMUZMA, we don't just manufacture machinery; we create opportunities for businesses to grow, innovate, and thrive.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#B5122B] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
              >
                View Our Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[#B5122B] text-[#B5122B] px-6 py-3 rounded text-sm font-semibold hover:bg-[#B5122B] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
