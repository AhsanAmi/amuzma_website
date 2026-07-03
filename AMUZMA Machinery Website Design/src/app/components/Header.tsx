import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search, ShoppingCart, Globe, Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);
  const navigate = useNavigate();

  const navLinks = [
    {
      label: "Company",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Mission & Vision", href: "/mission-vision" },
      ],
    },
    {
      label: "Products",
      children: [
        { label: "CNC Machines", href: "/products" },
        { label: "Edge Banding", href: "/products" },
        { label: "Moulder", href: "/products" },
        { label: "Sawing", href: "/products" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5] shadow-sm">
      <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-sm text-gray-700 hover:text-[#B5122B] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="text-sm text-gray-700 hover:text-[#B5122B] transition-colors font-medium flex items-center gap-1">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
              )}
              {item.children && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#E5E5E5] rounded shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F5F5] hover:text-[#B5122B] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Center Logo */}
        <Link to="/" className="flex-shrink-0 mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <AmuzmaLogo />
        </Link>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => navigate("/quote")}
            className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[#B5122B] transition-colors"
          >
            <ShoppingCart size={18} />
            <span>{cartCount} items</span>
          </button>
          <button className="text-gray-700 hover:text-[#B5122B] transition-colors">
            <Search size={18} />
          </button>
          <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-[#B5122B] transition-colors">
            <Globe size={16} />
            <span>English</span>
            <ChevronDown size={13} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E5E5] px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  to={item.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-[#B5122B]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <p className="py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">{item.label}</p>
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block py-1.5 pl-4 text-sm text-gray-700 hover:text-[#B5122B]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
          <div className="pt-2 border-t border-[#E5E5E5] flex items-center gap-4">
            <button onClick={() => { navigate("/quote"); setMobileOpen(false); }} className="flex items-center gap-1.5 text-sm text-gray-700">
              <ShoppingCart size={18} /> {cartCount} items
            </button>
            <button className="text-gray-700"><Search size={18} /></button>
          </div>
        </div>
      )}
    </header>
  );
}

function AmuzmaLogo() {
  return (
    <svg viewBox="0 0 160 40" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="80"
        y="30"
        textAnchor="middle"
        fontFamily="Inter, Poppins, sans-serif"
        fontWeight="900"
        fontSize="26"
        letterSpacing="2"
        fill="#B5122B"
        style={{ fontStyle: "italic" }}
      >
        AMUZMA
      </text>
      <circle cx="154" cy="8" r="4" fill="none" stroke="#B5122B" strokeWidth="1.5" />
      <text x="154" y="11" textAnchor="middle" fontFamily="Inter" fontSize="5" fill="#B5122B">®</text>
    </svg>
  );
}
