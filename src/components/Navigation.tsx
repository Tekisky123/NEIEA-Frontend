import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addScript = () => {
      if (window.google && window.google.translate) return;
      if (document.querySelector('script[src*="translate.google.com"]')) return;

      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ur,hi,mr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    addScript();
  }, []);

  return <div id="google_translate_element"></div>;
};


const DesktopNavigationItem: React.FC<{ section: NavigationItem }> = ({
  section,
}) => (
  <div key={section.label} className="relative group">
    <button className="p-3 text-gray-700 text-sm hover:text-[#7F4145] font-semibold flex items-center gap-1 whitespace-nowrap">
      {section.label}
      {section.items && <ChevronDown size={16} />}
    </button>
    {section.items && (
      <div className="absolute left-0 top-8 mt-2 w-64 bg-white shadow-lg border rounded-md p-2 z-[999999] hidden group-hover:block">
        {section.items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block p-2 text-sm text-gray-700 hover:text-[#1A4E8C] hover:bg-blue-50 rounded"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const MobileNavigationItem: React.FC<{
  section: NavigationItem;
  activeMobileMenu: string | null;
  toggleSubMenu: (label: string) => void;
  handleNavigation: (href: string) => void;
}> = ({ section, activeMobileMenu, toggleSubMenu, handleNavigation }) => (
  <div key={section.label}>
    {section.href ? (
      <button
        onClick={() => handleNavigation(section.href)}
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
);

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const navigation = useMemo<NavigationItem[]>(
    () => [
      { label: "Home", href: "/" },
      {
        label: "About Us",
        items: [
          { label: "Introduction of NEIEA", href: "/about/introduction" },
          { label: "Vision and Mission", href: "/about/vision-mission" },
          { label: "Leadership and Team", href: "/about/leadership" },
          { label: "Management Advisory Board", href: "/about/advisory-board" },
          { label: "Blended Learning Model", href: "/about/blended-learning" },
          { label: "Our Working Process", href: "/about/workshops" },
          { label: "Application of Technologies", href: "/about/technologies" },
          { label: "Discourse Oriented Pedagogy (DOP)", href: "/about/eop" },
          { label: "Impact", href: "/about/impact" },
          { label: "Testimonials", href: "/about/testimonials" },
        ],
      },
      {
        label: "Our Projects",
        items: [
          { label: "IT Skills Training", href: "/projects/it-skills" },
          { label: "Cluster Education", href: "/projects/cluster-education" },
          { label: "Teachers Training", href: "/projects/teachers-training" },
          { label: "Slum Children Education", href: "/projects/slum-children" },
          {
            label: "Out of School Children Education",
            href: "/projects/out-of-school",
          },
          { label: "Girls Education", href: "/projects/girls-education" },
          { label: "Pedagogy Training", href: "/projects/pedagogy-training" },
          { label: "Madarsa Education", href: "/projects/madarsa-education" },
          {
            label: "Social and Financial Education",
            href: "/projects/social-financial",
          },
          { label: "Adult Education", href: "/projects/adult-education" },
          {
            label: "Public(Government) Schools Education",
            href: "/projects/public-schools",
          },
        ],
      },
      { label: "Courses", items: [{ label: "All Courses", href: "/courses" }] },
      {
        label: "Partners",
        items: [
          { label: "Domestic Partners", href: "/partners/domestic" },
          { label: "Global Partners", href: "/partners/global" },
        ],
      },
      { label: "NEI USA", href: "/nei-usa" },
      { label: "Donate", href: "/donate" },
      { label: "Featured Stories", href: "/stories" },
      {
        label: "Media and Events",
        items: [{ label: "Gallery", href: "/about/introduction" }],
      },
      {
        label: "Contact Us",
        items: [
          { label: "Partner With Us", href: "/contact/partner" },
          { label: "FAQ", href: "/contact/faq" },
        ],
      },
      { label: "Volunteers", href: "/volunteer" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://neiea-ngo-frontend.vercel.app/assets/logo2-C7Wc3xHv.png"
            alt="NEIEA Logo"
            className="w-14 h-14"
          />
          <div className="lg:text-xl font-bold text-gray-700 text-center">
            The New Equitable and Innovative Educational Association
          </div>
        </Link>
        <div className=" py-1 px-4">
          
            <GoogleTranslate />
          
        </div>
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden lg:block bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {navigation.map((section) =>
              section.href ? (
                <Link
                  key={section.label}
                  to={section.href}
                  className="p-3 text-gray-700 text-sm hover:text-[#7F4145] font-semibold whitespace-nowrap"
                >
                  {section.label}
                </Link>
              ) : (
                <DesktopNavigationItem key={section.label} section={section} />
              )
            )}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <nav className="lg:hidden px-4 pb-4 border-t space-y-2 bg-white shadow-lg">
          {navigation.map((section) => (
            <MobileNavigationItem
              key={section.label}
              section={section}
              activeMobileMenu={activeMobileMenu}
              toggleSubMenu={toggleSubMenu}
              handleNavigation={handleNavigation}
            />
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
