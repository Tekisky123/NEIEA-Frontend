import { ReactNode } from "react";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color2 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info & Quick Links */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <img
                  src="https://neiea-ngo-frontend.vercel.app/assets/logo2-C7Wc3xHv.png"
                  alt="NEIEA Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-heading font-bold">NEIEA</h3>
                  <p className="text-gray-300">
                    Educational Innovation & Equity
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering communities through innovative education, skill
                development, and equitable opportunities. Together, we create
                lasting change through knowledge and opportunity.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/projects"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Our Projects
                  </a>
                  <a
                    href="/stories"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Success Stories
                  </a>
                  <a
                    href="/mission"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Our Mission
                  </a>
                  <a
                    href="/team"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Meet Our Team
                  </a>
                  <a
                    href="/volunteer"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Volunteer
                  </a>
                  <a
                    href="/courses"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Courses
                  </a>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-ngo-color4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Educational Innovation Center
                    </p>
                    <p className="text-gray-300">123 Learning Avenue</p>
                    <p className="text-gray-300">Education City, EC 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-ngo-color4" />
                  <span className="text-gray-300">+1 (555) 123-NEIEA</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-ngo-color4" />
                  <span className="text-gray-300">info@neiea.org</span>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold mb-4">Follow Our Impact</h5>
                <div className="flex space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <Facebook className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <Twitter className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <Instagram className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <Youtube className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Subscribe to our newsletter for impact updates, success stories,
                and ways to get involved in our mission.
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-ngo-color4 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm rounded-lg"
                />
                <Button className="w-full bg-gradient-to-r from-ngo-color4 to-ngo-color4/90 hover:from-ngo-color4/90 hover:to-ngo-color4 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="flex items-center justify-center">
                    Subscribe to Updates
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-ngo-color4/10 rounded-lg border border-ngo-color4/20">
                <h5 className="font-semibold mb-2 text-ngo-color4">
                  Transparency Promise
                </h5>
                <p className="text-sm text-gray-300">
                  98% of donations go directly to programs. View our{" "}
                  <a
                    href="/transparency"
                    className="text-ngo-color4 underline"
                  >
                    financial reports
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NEIEA (The New Equitable and Innovative Educational
              Association). All rights reserved. | Registered Non-Profit
              Organization
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/transparency"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Financial Transparency
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="relative group">
          <div className="bg-gradient-to-r from-ngo-color1 to-ngo-color4 text-white p-4 rounded-full shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-110 ">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-sm font-bold">
                <MessageCircle />
              </span>
            </div>
          </div>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
