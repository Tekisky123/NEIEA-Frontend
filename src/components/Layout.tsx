import { ReactNode, useState } from "react";
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
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import impactReport from "../assets/pdfs/NEIEA-Impact-report.pdf";
import neieaLogo from "../images/logoRemovedBg.png";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import axiosInstance from "@/lib/axiosInstance";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle subscribe function
  const handleSubscribe = async () => {
    // Validate email
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    try {
      const response = await axiosInstance.post("/subscribe", {
        email: email.trim()
      });

      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Subscribe error:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with error status
          errorMessage = error.response.data?.message || `Error: ${error.response.status}`;
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = "No response from server. Please check your connection.";
        } else {
          // Something else happened
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Subscription Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  // Handle input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isSubscribed) {
      setIsSubscribed(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubscribe();
  };

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
                  src={neieaLogo}
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
                  <Link
                    to={"/our-projects/it-skills-training"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Our Projects
                  </Link>
                  <Link
                    to={"/stories"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Success Stories
                  </Link>
                  <Link
                    to={"/about/vision-mission"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Our Mission
                  </Link>
                  <Link
                    to={"/about/leadership"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Meet Our Team
                  </Link>
                  <Link
                    to={"/volunteer"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Volunteer
                  </Link>
                  <Link
                    to={"/courses"}
                    className="text-gray-300 hover:text-ngo-color4 transition-colors"
                  >
                    Courses
                  </Link>
                  <Link
                    to={"/login"}
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
                    <a href="https://www.facebook.com/profile.php?id=100093505457474" target="_blank" >

                      <Facebook className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <a href="https://x.com/neiea_india" target="_blank" >

                      <Twitter className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <a href="https://www.instagram.com/neiea_india/" target="_blank" >

                      <Instagram className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg hover:bg-ngo-color4 hover:scale-110 cursor-pointer transition-all duration-300 group">
                    <a href="https://www.youtube.com/@neiea_india" target="_blank" >
                      <Youtube className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </a>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className={`bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-ngo-color4 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm rounded-lg pr-12 ${
                      isSubscribed ? "border-green-400" : ""
                    }`}
                    disabled={isSubscribing}
                  />
                  {isSubscribed && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                </div>
                <Button 
                  type="submit"
                  disabled={isSubscribing || !email.trim()}
                  className="w-full bg-gradient-to-r from-ngo-color4 to-ngo-color4/90 hover:from-ngo-color4/90 hover:to-ngo-color4 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubscribing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </>
                    ) : isSubscribed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe to Updates
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              <div className="mt-8 p-4 bg-ngo-color4/10 rounded-lg border border-ngo-color4/20">
                <h5 className="font-semibold mb-2 text-ngo-color4">
                  Transparency Promise
                </h5>
                <p className="text-sm text-gray-300">
                  98% of donations go directly to programs. View our{" "}
                  <a
                    href={impactReport}
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/shipping-delivery"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Shipping & Delivery
              </Link>
              <Link
                to="/pricing-inr"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Pricing Policy
              </Link>
              <Link
                to="/refund-cancellations"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Refund Policy
              </Link>
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
