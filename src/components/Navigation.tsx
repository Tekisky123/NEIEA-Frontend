import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  const navigation: NavigationItem[] = [
    {
      label: "Our Work",
      items: [
        { label: "Overview", href: "/our-work" },
        { label: "Success Stories", href: "/stories" },
        { label: "Gallery", href: "/gallery" },
        { label: "Impact Reports", href: "/reports" },
      ],
    },
    {
      label: "About Us",
      items: [
        { label: "Mission & Vision", href: "/mission" },
        { label: "Our Team", href: "/team" },
        { label: "Values", href: "/values" },
      ],
    },
    {
      label: "Take Action",
      items: [
        { label: "Donate", href: "/donate" },
        { label: "Give Monthly", href: "/monthly-giving" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Partner with Us", href: "/partnerships" },
        { label: "More Ways to Give", href: "/ways-to-give" },
      ],
    },
    { label: "Courses", href: "/courses" },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://neiea-ngo-frontend.vercel.app/assets/logo2-C7Wc3xHv.png"
            alt="NEIEA Logo"
            className="w-12 h-12"
          />
          <span className="text-xl font-bold text-[#1A4E8C]">NEIEA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 items-center">
          {navigation.map((section) =>
            section.href ? (
              <Link
                key={section.label}
                to={section.href}
                className="px-4 py-3 text-gray-700 hover:text-[#7F4145] font-semibold text-base"
              >
                {section.label}
              </Link>
            ) : (
              <div key={section.label} className="relative group">
                <button
                  className="px-4 py-3 text-gray-700 hover:text-[#7F4145] font-semibold text-base flex items-center gap-1"
                  aria-haspopup="true"
                >
                  {section.label}
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 top-10 mt-2 w-56 bg-white shadow-lg border rounded-md p-2 z-50 hidden group-hover:block group-focus-within:block">
                  {section.items?.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#1A4E8C] hover:bg-blue-50 rounded"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
          <Button
            onClick={() => handleNavigation("/donate")}
            className="bg-gradient-to-r from-[#1A4E8C] to-[#D6A61A] hover:from-[#7F4145] hover:to-[#A9746E] text-white font-semibold px-5 py-2 rounded-lg shadow"
          >
            Donate
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden px-4 pb-4 border-t space-y-2 bg-white shadow animate-in slide-in-from-top duration-200">
          {navigation.map((section) => (
            <div key={section.label}>
              {section.href ? (
                <button
                  onClick={() => handleNavigation(section.href!)}
                  className="w-full text-left py-3 px-2 text-gray-800 hover:bg-blue-50 rounded-md font-medium"
                >
                  {section.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubMenu(section.label)}
                    className="w-full flex justify-between items-center py-3 px-2 text-gray-800 hover:text-[#7F4145] font-medium"
                  >
                    {section.label}
                    <ChevronDown
                      className={`transform transition-transform ${
                        activeMobileMenu === section.label ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>
                  {activeMobileMenu === section.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.items?.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavigation(item.href)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Button
            onClick={() => handleNavigation("/donate")}
            className="w-full mt-4 bg-gradient-to-r from-[#1A4E8C] to-[#D6A61A] hover:from-[#7F4145] hover:to-[#A9746E] text-white font-semibold py-3 rounded-md"
          >
            Make a Donation
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
