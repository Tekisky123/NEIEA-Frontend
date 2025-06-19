import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Heart,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Star,
  Camera,
  FileText,
  Eye,
  UserCheck,
  Award,
  DollarSign,
  UserPlus,
  Calendar,
  Handshake,
  Gift,
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuHover = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const navigationStructure = [
    {
      label: "Our Work",
      icon: <Target className="w-4 h-4" />,
      items: [
        {
          label: "Overview",
          href: "/our-work",
          icon: <Eye className="w-4 h-4" />,
        },
        {
          label: "Success Stories",
          href: "/stories",
          icon: <Star className="w-4 h-4" />,
        },
        {
          label: "Gallery",
          href: "/gallery",
          icon: <Camera className="w-4 h-4" />,
        },
        {
          label: "Impact Reports",
          href: "/reports",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    {
      label: "About Us",
      icon: <Users className="w-4 h-4" />,
      items: [
        {
          label: "Mission & Vision",
          href: "/mission",
          icon: <Target className="w-4 h-4" />,
        },
        {
          label: "Our Team",
          href: "/team",
          icon: <UserCheck className="w-4 h-4" />,
        },
        {
          label: "Values",
          href: "/values",
          icon: <Award className="w-4 h-4" />,
        },
      ],
    },
   
    {
      label: "Take Action",
      icon: <Heart className="w-4 h-4" />,
      items: [
        {
          label: "Donate",
          href: "/donate",
          icon: <DollarSign className="w-4 h-4" />,
        },
        {
          label: "Give Monthly",
          href: "/monthly-giving",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          label: "Volunteer",
          href: "/volunteer",
          icon: <UserPlus className="w-4 h-4" />,
        },
        {
          label: "Partner with Us",
          href: "/partnerships",
          icon: <Handshake className="w-4 h-4" />,
        },
        {
          label: "More Ways to Give",
          href: "/ways-to-give",
          icon: <Gift className="w-4 h-4" />,
        },
      ],
    }, {
      label: "Courses",
      href: "/courses",
      icon: <BookOpen className="w-4 h-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <div className="relative">
              <img
                src="https://neiea-ngo-frontend.vercel.app/assets/logo2-C7Wc3xHv.png"
                alt="NEIEA Logo"
                className="w-14 h-14 object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                width={60}
                height={60}
                loading="eager"
              />
              <div className="absolute inset-0 bg-[#AFC2BA]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10" />
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
              <h1 className="text-xl font-bold text-[#1A4E8C] group-hover:text-[#7F4145] transition-colors duration-300">
                NEIEA
              </h1>
              <p className="text-lg text-gray-600 font-medium group-hover:text-[#1A4E8C] transition-colors duration-300 hidden sm:block">
                Educational Innovation & Equity
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            ref={desktopMenuRef}
          >
            {navigationStructure.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleMenuHover(section.label)}
                onMouseLeave={handleMenuLeave}
              >
                {section.href ? (
                  <Link
                    to={section.href}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-[#7F4145] transition-colors duration-200 font-semibold text-base rounded-lg group"
                  >
                    {/* <span className="text-[#7F6760] group-hover:text-[#7F4145] transition-colors duration-200">
                      {section.icon}
                    </span> */}
                    <span>{section.label}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      className={`flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-[#7F4145] transition-colors duration-200 font-semibold text-base rounded-lg group ${activeMenu === section.label ? "text-[#7F4145]" : ""}`}
                      aria-expanded={activeMenu === section.label}
                      aria-haspopup="true"
                    >
                      {/* <span
                        className={`text-[#7F6760] group-hover:text-[#7F4145] transition-colors duration-200 ${activeMenu === section.label ? "text-[#7F4145]" : ""}`}
                      >
                        {section.icon}
                      </span> */}
                      <span>{section.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeMenu === section.label ? "rotate-180 text-[#7F4145]" : ""}`}
                      />
                    </button>
                    {activeMenu === section.label && (
                      <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl border border-gray-100 rounded-lg p-2 animate-fade-in z-50">
                        {section.items?.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#1A4E8C] hover:bg-blue-50 rounded-md transition-all duration-200 group text-sm font-medium"
                          >
                            {/* <span className="text-[#7F6760]/60 group-hover:text-[#1A4E8C] transition-colors duration-200">
                              {item.icon}
                            </span> */}
                            <span className="text-md">{item.label}</span>
                            <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Donate Button */}
            <Button
              className="ml-2 bg-gradient-to-r from-[#1A4E8C] to-[#D6A61A] hover:from-[#7F4145] hover:to-[#A9746E] text-white font-semibold px-5 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 text-sm group overflow-hidden relative"
              onClick={() => navigate("/donate")}
            >
              <span className="relative z-10 flex items-center">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>Donate</span>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-3">
            <Button
              className="bg-[#1A4E8C] hover:bg-[#7F4145] text-white font-semibold px-3 py-2 rounded-lg text-sm sm:hidden"
              onClick={() => navigate("/donate")}
              size="sm"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              className="bg-[#1A4E8C] hover:bg-[#7F4145] text-white font-semibold px-4 py-2 rounded-lg text-sm hidden sm:block"
              onClick={() => navigate("/donate")}
              size="sm"
            >
              <Heart className="w-4 h-4 mr-1" />
              Donate
            </Button>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 hover:text-[#7F4145]" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 hover:text-[#7F4145]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-2 pb-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navigationStructure.map((section) => (
                <div key={section.label} className="space-y-1">
                  {section.href ? (
                    <Link
                      to={section.href}
                      className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:text-[#7F4145] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {/* <span className="text-[#7F6760]/70 group-hover:text-[#7F4145] transition-colors duration-200">
                        {section.icon}
                      </span> */}
                      <span className="font-medium">{section.label}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-[#7F4145] rounded-lg transition-colors duration-200"
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === section.label ? null : section.label
                          )
                        }
                        aria-expanded={activeMenu === section.label}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-[#7F6760]/70">
                            {section.icon}
                          </span>
                          <span className="font-medium">{section.label}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeMenu === section.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeMenu === section.label && (
                        <div className="pl-11 space-y-1">
                          {section.items?.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:text-[#1A4E8C] hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {/* <span className="text-[#7F6760]/60 group-hover:text-[#1A4E8C] transition-colors duration-200">
                                {item.icon}
                              </span> */}
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button
                className="w-full bg-gradient-to-r from-[#1A4E8C] to-[#D6A61A] hover:from-[#7F4145] hover:to-[#A9746E] text-white font-semibold py-3 rounded-lg shadow"
                onClick={() => {
                  navigate("/donate");
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Make a Donation
                </span>
              </Button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Help us create educational opportunities worldwide
              </p>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
