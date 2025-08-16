import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RotateCcw,
  XCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Shield,
  ArrowRight,
  Box,
  Timer,
  AlertCircle,
  Info,
  CreditCard,
  UserCheck,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const RefundCancellations = () => {
  const refundPolicies = [
    {
      id: "policy1",
      title: "Return Request Timeline",
      icon: <Clock className="w-6 h-6" />,
      content: [
        "NEIEA allows you to return its item(s) within a period of 29 days from the date of purchase.",
        "This extended return window gives you ample time to evaluate your purchase and ensure it meets your expectations.",
        "Returns initiated after the 29-day period will not be accepted."
      ]
    },
    {
      id: "policy2",
      title: "Return Condition Requirements",
      icon: <Box className="w-6 h-6" />,
      content: [
        "All returned items must be in their original, unopened condition.",
        "Items must be unused and in the same packaging as received.",
        "Any signs of use, damage, or missing packaging may result in return rejection.",
        "We recommend keeping original packaging until you're satisfied with your purchase."
      ]
    },
    {
      id: "policy3",
      title: "Refund Processing",
      icon: <CreditCard className="w-6 h-6" />,
      content: [
        "Refunds will be processed within 5-10 business days after we receive and inspect your return.",
        "Refunds will be issued to the original payment method used for the purchase.",
        "Processing times may vary depending on your bank or payment provider.",
        "You will receive an email confirmation once your refund has been processed."
      ]
    },
    {
      id: "policy4",
      title: "Return Shipping",
      icon: <RotateCcw className="w-6 h-6" />,
      content: [
        "Customers are responsible for return shipping costs unless the item was received damaged or incorrect.",
        "We recommend using a trackable shipping method for returns.",
        "Return shipping labels are not provided by default.",
        "Contact our customer service team for assistance with damaged or incorrect items."
      ]
    },
    {
      id: "policy5",
      title: "Non-Refundable Items",
      icon: <XCircle className="w-6 h-6" />,
      content: [
        "Digital products and downloadable content are non-refundable once accessed.",
        "Custom or personalized items cannot be returned unless defective.",
        "Gift cards and promotional vouchers are non-refundable.",
        "Services and consultations are non-refundable once rendered."
      ]
    },
    {
      id: "policy6",
      title: "Cancellation Policy",
      icon: <Timer className="w-6 h-6" />,
      content: [
        "Orders can be cancelled within 24 hours of placement if they haven't been processed.",
        "Once an order is processed and shipped, it cannot be cancelled.",
        "Contact our customer service team immediately if you need to cancel an order.",
        "Cancelled orders will be refunded in full if cancellation is successful."
      ]
    }
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Contact our customer service team within 29 days of purchase",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Get Approval",
      description: "Receive return authorization and instructions from our team",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Package Item",
      description: "Securely package the item in its original condition",
      icon: <Box className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Ship Return",
      description: "Send the package using a trackable shipping method",
      icon: <RotateCcw className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Receive Refund",
      description: "Get your refund processed within 5-10 business days",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const importantNotes = [
    "Always keep original packaging until you're satisfied with your purchase",
    "Use trackable shipping for returns to ensure safe delivery",
    "Contact customer service immediately for damaged or incorrect items",
    "Returns must be initiated within the 29-day window",
    "Refunds are processed to the original payment method",
    "Processing times may vary based on your bank or payment provider"
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
                <RotateCcw className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We want you to be completely satisfied with your purchase. Learn about our 
              return process, refund policies, and cancellation procedures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                29-Day Returns
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Easy Process
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Customer Protection
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Simple Return Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined return process makes it easy to return items and get your refund. 
              Follow these simple steps for a hassle-free experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {returnProcess.map((step, index) => (
              <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-ngo-color4 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ngo-color4/10 rounded-full text-ngo-color4">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
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
                  Policy Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {refundPolicies.map((policy, index) => (
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
              {refundPolicies.map((policy, index) => (
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
            <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      Important Notes
                    </h4>
                    <ul className="text-blue-700 space-y-2">
                      {importantNotes.map((note, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-12 bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-ngo-color1">
                  <HelpCircle className="w-6 h-6 mr-3" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      How long do I have to return an item?
                    </h4>
                    <p className="text-gray-600">
                      You have 29 days from the date of purchase to initiate a return.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      What condition must items be in for return?
                    </h4>
                    <p className="text-gray-600">
                      Items must be unopened, unused, and in their original packaging.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      How long does it take to process a refund?
                    </h4>
                    <p className="text-gray-600">
                      Refunds are typically processed within 5-10 business days after we receive your return.
                    </p>
                  </div>
                  
                  <div className="pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Can I cancel my order after it's placed?
                    </h4>
                    <p className="text-gray-600">
                      Orders can be cancelled within 24 hours if they haven't been processed and shipped.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-12 bg-gradient-to-r from-ngo-color1 to-ngo-color2 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Need Help with Returns?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-200 mb-6">
                  Our customer service team is here to help with any questions about returns, 
                  refunds, or cancellations. Contact us for personalized assistance.
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
                    Customer Service Hours
                  </h5>
                  <p className="text-sm text-gray-200">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday: 9:00 AM - 2:00 PM IST<br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Have Questions About Returns?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our team is here to help. Contact us for assistance with returns, refunds, or any other questions.
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

export default RefundCancellations;
