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
  Globe,
  Camera,
  FileText,
  Eye,
  UserCheck,
  Award,
  DollarSign,
  UserPlus,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationStructure = [
    {
      label: "Our Work",
      icon: <BookOpen className="w-4 h-4" />,
      items: [
        {
          label: "Overview",
          href: "/our-work",
          icon: <Target className="w-4 h-4" />,
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
          icon: <Eye className="w-4 h-4" />,
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
          label: "Donate Now",
          href: "/donate",
          icon: <DollarSign className="w-4 h-4" />,
        },
        {
          label: "Monthly Giving",
          href: "/monthly-giving",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          label: "Volunteer",
          href: "/volunteer",
          icon: <UserPlus className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="relative">
              <img
                src="https://neiea-ngo-frontend.vercel.app/assets/logo2-C7Wc3xHv.png"
                alt="NEIEA Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-ngo-true-joy/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
              <h1 className="text-lg sm:text-xl font-heading font-bold text-ngo-encore group-hover:text-ngo-true-joy transition-colors duration-300">
                NEIEA
              </h1>
              <p className="text-xs text-ngo-rumors font-medium group-hover:text-ngo-encore transition-colors duration-300 hidden sm:block">
                Educational Innovation & Equity
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationStructure.map((section) => (
              <DropdownMenu key={section.label}>
                <DropdownMenuTrigger className="relative flex items-center space-x-2 text-gray-700 hover:text-ngo-encore transition-all duration-300 font-medium text-base group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-ngo-true-joy/5 hover:to-ngo-encore/5 hover:shadow-sm">
                  <span className="text-ngo-encore/70 group-hover:text-ngo-encore transition-colors duration-300">
                    {section.icon}
                  </span>
                  <span className="relative z-10">{section.label}</span>
                  <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-all duration-300 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ngo-true-joy/10 to-ngo-encore/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white shadow-xl border border-gray-100 rounded-xl p-2 animate-fadeInScale">
                  {section.items.map((item, index) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className={`w-full px-4 py-3 text-gray-700 hover:text-ngo-encore hover:bg-gradient-to-r hover:from-ngo-true-joy/10 hover:to-ngo-encore/5 rounded-lg transition-all duration-300 cursor-pointer block text-sm font-medium group animate-fadeInUp animate-delay-${index * 100}`}
                      >
                        <span className="flex items-center">
                          <span className="text-ngo-encore/60 group-hover:text-ngo-encore transition-colors duration-300 mr-3">
                            {item.icon}
                          </span>
                          {item.label}
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Direct Navigation Items */}
            <Link
              to="/courses"
              className="relative flex items-center space-x-2 text-gray-700 hover:text-ngo-encore transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-ngo-true-joy/5 hover:to-ngo-encore/5 hover:shadow-sm group"
            >
              <BookOpen className="w-4 h-4 text-ngo-encore/70 group-hover:text-ngo-encore transition-colors duration-300" />
              <span className="relative z-10">Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ngo-true-joy/10 to-ngo-encore/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
            </Link>
           
          </nav>

          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="relative bg-gradient-to-r from-ngo-true-joy to-ngo-true-joy/90 hover:from-ngo-true-joy/90 hover:to-ngo-true-joy text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm btn-enhanced group overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Heart className="w-4 h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">Donate Now</span>
                <span className="sm:hidden">Donate</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 group-hover:text-ngo-encore transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 group-hover:text-ngo-encore transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-gray-100 pt-6 animate-in slide-in-from-top duration-300">
            <div className="space-y-6">
              {navigationStructure.map((section, sectionIndex) => (
                <div key={section.label} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-ngo-encore">{section.icon}</span>
                    <h3 className="font-semibold text-ngo-encore text-lg">
                      {section.label}
                    </h3>
                  </div>
                  <div className="pl-7 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center space-x-3 py-3 px-3 text-gray-700 hover:text-ngo-encore hover:bg-ngo-true-joy/5 rounded-lg transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-ngo-encore/60 group-hover:text-ngo-encore transition-colors duration-300">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Direct Links */}
              <div className="space-y-1 pt-4 border-t border-gray-100">
                <Link
                  to="/courses"
                  className="flex items-center space-x-3 py-3 px-3 text-gray-700 hover:text-ngo-encore hover:bg-ngo-true-joy/5 rounded-lg transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4 text-ngo-encore/60 group-hover:text-ngo-encore transition-colors duration-300" />
                  <span className="font-medium">Courses</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                <Link
                  to="/donate"
                  className="flex items-center space-x-3 py-3 px-3 text-gray-700 hover:text-ngo-encore hover:bg-ngo-true-joy/5 rounded-lg transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DollarSign className="w-4 h-4 text-ngo-encore/60 group-hover:text-ngo-encore transition-colors duration-300" />
                  <span className="font-medium">Quick Donate</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <Button className="w-full bg-gradient-to-r from-ngo-true-joy to-ngo-true-joy/90 hover:from-ngo-true-joy/90 hover:to-ngo-true-joy text-white font-semibold py-4 rounded-xl shadow-lg group">
                <span className="flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Donate Now
                </span>
              </Button>
              <p className="text-center text-xs text-gray-500">
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
