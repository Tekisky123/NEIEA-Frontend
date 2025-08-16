import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Globe,
  Shield,
  ArrowRight,
  Box,
  Timer,
  AlertCircle,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const ShippingDelivery = () => {
  const policies = [
    {
      id: "policy1",
      title: "Shipping Commitment",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "NEIEA is committed to excellence, and the full satisfaction of our customers.",
        "We proudly offer shipping services. Be assured we are doing everything in our power to get your order to you as soon as possible.",
        "Please consider any holidays that might impact delivery times. NEIEA also offers same day dispatch."
      ]
    },
    {
      id: "policy2",
      title: "Processing & Shipping Time",
      icon: <Timer className="w-6 h-6" />,
      content: [
        "All orders for our products are processed and shipped out in 4-10 business days.",
        "Orders are not shipped or delivered on weekends or holidays.",
        "If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.",
        "If there will be a significant delay in the shipment of your order, we will contact you via email."
      ]
    },
    {
      id: "policy3",
      title: "Address Verification",
      icon: <MapPin className="w-6 h-6" />,
      content: [
        "It is the responsibility of the customers to make sure that the shipping address entered is correct.",
        "We do our best to speed up processing and shipping time, so there is always a small window to correct an incorrect shipping address.",
        "Please contact us immediately if you believe you have provided an incorrect shipping address."
      ]
    },
    {
      id: "policy4",
      title: "Undeliverable Orders",
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        "Orders that are returned to us as undeliverable because of incorrect shipping information are subject to a restocking fee to be determined by us."
      ]
    },
    {
      id: "policy5",
      title: "Lost or Stolen Packages",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "NEIEA is not responsible for lost or stolen packages.",
        "If your tracking information states that your package was delivered to your address and you have not received it, please report to the local authorities."
      ]
    },
    {
      id: "policy6",
      title: "Return Policy",
      icon: <Box className="w-6 h-6" />,
      content: [
        "NEIEA allows you to return its item(s) within a period of 29 days.",
        "Kindly be advised that the item(s) should be returned unopened and unused."
      ]
    },
    {
      id: "policy7",
      title: "Out of Stock Items",
      icon: <Package className="w-6 h-6" />,
      content: [
        "NEIEA has the following options in the event there are items which are out of stock:",
        "NEIEA will cancel and refund out of stock items and ship remaining items in order."
      ]
    },
    {
      id: "policy8",
      title: "Import Duties & Taxes",
      icon: <Globe className="w-6 h-6" />,
      content: [
        "When dealing with NEIEA you have the following options when it comes to taxes as well as import duties:",
        "You will be required to settle the requisite fees when the items are arriving in the destination country."
      ]
    },
    {
      id: "policy9",
      title: "Policy Acceptance",
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        "By accessing our site and placing an order you have willingly accepted the terms of this Shipping Policy."
      ]
    }
  ];

  const shippingFeatures = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Orders processed in 4-10 business days"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Secure Packaging",
      description: "Professional packaging for safe delivery"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same Day Dispatch",
      description: "Available for eligible orders"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tracking Available",
      description: "Monitor your order progress"
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
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We're committed to getting your orders to you quickly and safely. 
              Learn about our shipping process, delivery times, and policies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Truck className="w-4 h-4 mr-2" />
                Fast Delivery
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Package className="w-4 h-4 mr-2" />
                Secure Packaging
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                Same Day Dispatch
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ngo-color4/10 rounded-full text-ngo-color4">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                  Shipping Policy Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {policies.map((policy, index) => (
                    <a
                      key={policy.id}
                      href={`#${policy.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="w-8 h-8 bg-ngo-color4 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 group-hover:text-ngo-color1 transition-colors">
                        {policy.title}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-ngo-color1 transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policy Sections */}
            <div className="space-y-8">
              {policies.map((policy, index) => (
                <Card key={policy.id} id={policy.id} className="bg-white shadow-lg border-0">
                  <CardHeader className="border-b border-gray-100">
                    <CardTitle className="flex items-center text-ngo-color1">
                      <div className="p-2 bg-ngo-color4/10 rounded-lg mr-4">
                        {policy.icon}
                      </div>
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {policy.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Information Box */}
            <Card className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">
                      Important Shipping Information
                    </h4>
                    <ul className="text-amber-700 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                        Business days exclude weekends and holidays
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                        Always verify your shipping address before placing an order
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                        Contact us immediately for address corrections
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                        Returns must be initiated within 29 days
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-12 bg-gradient-to-r from-ngo-color1 to-ngo-color2 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-200 mb-6">
                  In the event you have any questions or comments about our shipping policy, 
                  please reach us via the following contacts:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-ngo-color4" />
                      <span className="text-gray-200">+91 8088893207</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-ngo-color4" />
                      <span className="text-gray-200">feedback@neiea.org</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-ngo-color4 mt-1" />
                      <div className="text-gray-200">
                        <p>22-2-472/3, Panjathan colony</p>
                        <p>Hyderabad, TS, 500024 IN</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                  <h5 className="font-semibold mb-2 text-ngo-color4">
                    Customer Support
                  </h5>
                  <p className="text-sm text-gray-200">
                    Our dedicated team is here to help with any shipping questions or concerns. 
                    We're committed to ensuring your orders arrive safely and on time.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to Place Your Order?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Have questions about shipping? Contact our team for personalized assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                        Contact Support
                      </Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" className="border-ngo-color4 text-ngo-color4 hover:bg-ngo-color4 hover:text-white">
                        Browse Courses
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

export default ShippingDelivery;
