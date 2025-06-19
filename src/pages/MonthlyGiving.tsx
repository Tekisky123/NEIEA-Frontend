import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Calendar,
  Shield,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Mail,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MonthlyGiving = () => {
  const monthlyGivingBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictable Impact",
      description:
        "Your monthly commitment helps us plan long-term programs and make sustainable changes in communities.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Efficient Giving",
      description:
        "Monthly donations have lower processing costs, meaning more of your gift goes directly to programs.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Convenient & Flexible",
      description:
        "Set it and forget it - you can modify or cancel your monthly gift at any time through your donor portal.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Greater Recognition",
      description:
        "Monthly donors receive enhanced communication, impact reports, and special access to programs and events.",
    },
  ];

  const donorTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Monthly Donor for 3 years",
      amount: "$75/month",
      story:
        "Being a monthly donor allows me to see the continuous impact of my giving. I receive updates that show exactly how my contributions are being used.",
      image: "/placeholder.svg",
      impact: "Supported 8 students through graduation",
    },
    {
      name: "Dr. Michael Chen",
      role: "Monthly Donor for 2 years",
      amount: "$150/month",
      story:
        "Monthly giving fits my budget better than large one-time donations, and I love knowing that I'm providing consistent support for the programs.",
      image: "/placeholder.svg",
      impact: "Helped establish 2 learning centers",
    },
  ];

  const formatAmount = (amount: number | string) => {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-true-joy to-ngo-mocha-mousse text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2 rounded-lg">
              Sustainable Impact
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Monthly Giving Program
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Join our community of committed supporters who believe in the
              power of consistent giving to create lasting educational change.
              Monthly donors are the backbone of our mission.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Calendar className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm text-gray-200">Monthly Donors</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Heart className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-200">Program Funding</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Users className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold">3.2 years</div>
                <div className="text-sm text-gray-200">Average Giving</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <TrendingUp className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold">$180K</div>
                <div className="text-sm text-gray-200">Monthly Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Monthly Giving */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Why Choose Monthly Giving?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Monthly donations provide the stable funding we need to plan
              effective programs and create sustainable change in communities
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monthlyGivingBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-ngo-true-joy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-ngo-true-joy">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-ngo-encore mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-16 bg-ngo-quietude/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              What Monthly Donors Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our dedicated monthly donors about their experience and
              the satisfaction they get from consistent giving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {donorTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-ngo-encore text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <Badge className="bg-ngo-true-joy text-white mt-1">
                        {testimonial.amount}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex text-ngo-true-joy mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.story}"
                  </p>

                  <div className="bg-ngo-true-joy/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-ngo-encore">
                      Total Impact: {testimonial.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Support */}
      <section className="py-16 bg-ngo-encore text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Questions About Monthly Giving?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our donor support team is here to help you set up your monthly
            giving and answer any questions about your impact and benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-8 py-3 text-lg font-medium"
            >
              <Mail className="mr-3 w-5 h-5" />
              Contact Donor Support
            </Button>
            <Link to="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-8 py-3 text-lg font-medium"
              >
                One-Time Donation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MonthlyGiving;
