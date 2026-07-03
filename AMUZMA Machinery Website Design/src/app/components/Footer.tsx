import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="flex-1 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pr-0 lg:pr-16">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Products", href: "/products" },
                    { label: "Spare Parts", href: "/products" },
                  ].map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                        <span className="text-[#B5122B]">→</span> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">Important Links</h4>
                <ul className="space-y-2">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                        <span className="text-[#B5122B]">→</span> {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="sm:col-span-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Experience machines live.</h4>
                <ul className="space-y-2">
                  {[
                    "Find a dealer near you",
                    "Warranties",
                    "Privacy Policy",
                    "General Terms",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                        <span className="text-[#B5122B]">→</span> {item}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-10">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Youtube, href: "#" },
                    { Icon: Twitter, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                  {/* TikTok */}
                  <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red Branding Panel - full width on mobile, right side on desktop */}
      <div className="bg-[#B5122B] py-10 flex items-center justify-center lg:hidden">
        <AmuzmaLogoWhite />
      </div>

      {/* Copyright */}
      <div className="bg-black py-3 text-center">
        <p className="text-xs text-gray-400">© 2026 Amuzma Machinery. All Rights Reserved. Under Construction</p>
      </div>
    </footer>
  );
}

export function FooterWithRedPanel() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row">
        {/* Gray Left */}
        <div className="flex-1 bg-[#F5F5F5]">
          <div className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "Products", href: "/products" },
                  { label: "Spare Parts", href: "/products" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                      <span className="text-[#B5122B]">→</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-semibold text-gray-900 mt-6 mb-4 uppercase tracking-wide">Important Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Contact Us", href: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                      <span className="text-[#B5122B]">→</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Experience machines live.</h4>
              <ul className="space-y-2 mb-8">
                {["Find a dealer near you", "Warranties", "Privacy Policy", "General Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#B5122B] transition-colors">
                      <span className="text-[#B5122B]">→</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
                <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Red Right Panel */}
        <div className="lg:w-72 bg-[#B5122B] flex items-center justify-center py-12">
          <AmuzmaLogoWhite />
        </div>
      </div>

      <div className="bg-black py-3 text-center">
        <p className="text-xs text-gray-400">© 2026 Amuzma Machinery. All Rights Reserved. Under Construction</p>
      </div>
    </footer>
  );
}

function AmuzmaLogoWhite() {
  return (
    <svg viewBox="0 0 200 50" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="100"
        y="36"
        textAnchor="middle"
        fontFamily="Inter, Poppins, sans-serif"
        fontWeight="900"
        fontSize="32"
        letterSpacing="2"
        fill="white"
        style={{ fontStyle: "italic" }}
      >
        AMUZMA
      </text>
      <circle cx="192" cy="10" r="5" fill="none" stroke="white" strokeWidth="1.5" />
      <text x="192" y="13.5" textAnchor="middle" fontFamily="Inter" fontSize="6" fill="white">®</text>
    </svg>
  );
}
