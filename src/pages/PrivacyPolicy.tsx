import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Eye,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
  FileText,
  UserCheck,
  CreditCard,
  Globe,
  Cookie,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "section1",
      title: "What We Do With Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        "When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.",
        "When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.",
        "Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates."
      ]
    },
    {
      id: "section2",
      title: "Consent",
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        "When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.",
        "If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
        "If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at feedback@neiea.org or mailing us at: 22-2-472/3, Panjathan colony, Hyderabad, TS, 500024 IN."
      ]
    },
    {
      id: "section3",
      title: "Disclosure",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service."
      ]
    },
    {
      id: "section4",
      title: "Payment Security",
      icon: <CreditCard className="w-6 h-6" />,
      content: [
        "We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers.",
        "The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment.",
        "Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.",
        "Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.",
        "For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com"
      ]
    },
    {
      id: "section5",
      title: "Third-Party Services",
      icon: <Globe className="w-6 h-6" />,
      content: [
        "In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.",
        "However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.",
        "For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.",
        "Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service."
      ]
    },
    {
      id: "section6",
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed."
      ]
    },
    {
      id: "section7",
      title: "Cookies",
      icon: <Cookie className="w-6 h-6" />,
      content: [
        "We use cookies to maintain session of your user. It is not used to personally identify you on other websites."
      ]
    },
    {
      id: "section8",
      title: "Age of Consent",
      icon: <Users className="w-6 h-6" />,
      content: [
        "By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site."
      ]
    },
    {
      id: "section9",
      title: "Changes to This Privacy Policy",
      icon: <Calendar className="w-6 h-6" />,
      content: [
        "We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.",
        "If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.",
        "If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you."
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color2 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Lock className="w-4 h-4 mr-2" />
                Data Protection
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Secure Processing
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Eye className="w-4 h-4 mr-2" />
                Transparency
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <Card className="mb-12 bg-white shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-ngo-color1 to-ngo-color2 text-white">
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="w-8 h-8 bg-ngo-color4 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 group-hover:text-ngo-color1 transition-colors">
                        {section.title}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-ngo-color1 transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={section.id} id={section.id} className="bg-white shadow-lg border-0">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="flex items-center text-ngo-color1">
                      <div className="p-2 bg-ngo-color4/10 rounded-lg mr-4">
                        {section.icon}
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Information */}
            <Card className="mt-12 bg-gradient-to-r from-ngo-color1 to-ngo-color2 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Questions and Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-200 mb-6">
                  If you would like to: access, correct, amend or delete any personal information we have about you, 
                  register a complaint, or simply want more information contact our Privacy Compliance Officer.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-ngo-color4" />
                      <span className="text-gray-200">feedback@neiea.org</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-ngo-color4 mt-1" />
                      <div className="text-gray-200">
                        <p>22-2-472/3, Panjathan colony</p>
                        <p>Hyderabad, TS, 500024 IN</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-ngo-color4" />
                      <span className="text-gray-200">
                        622 Manglam Electronic Market<br />
                        Jaipur Rajasthan India 302001
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                  <h5 className="font-semibold mb-2 text-ngo-color4">
                    Privacy Compliance Officer
                  </h5>
                  <p className="text-sm text-gray-200">
                    Our dedicated team ensures your privacy rights are protected and all data handling 
                    complies with applicable laws and regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Have Questions About Your Privacy?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're here to help. Contact us if you have any concerns about how we handle your data.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                        Contact Us
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button variant="outline" className="border-ngo-color4 text-ngo-color4 hover:bg-ngo-color4 hover:text-white">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
