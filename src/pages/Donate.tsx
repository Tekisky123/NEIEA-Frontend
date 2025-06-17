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
  Shield,
  Target,
  Globe,
  CheckCircle,
  CreditCard,
  Smartphone,
  Building,
  Users,
  GraduationCap,
  Stethoscope,
  Home,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState("monthly");
  const [customAmount, setCustomAmount] = useState("");

  const quickAmounts = [25, 50, 100, 250, 500];

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
      <section className="py-24 bg-gradient-to-br from-ngo-true-joy to-ngo-mocha-mousse text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2 rounded-full">
              Make a Difference Today
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Invest in
              <span className="text-white/90 block">Educational Equity</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">
              Your donation directly funds innovative educational programs,
              digital literacy training, and scholarships for underserved
              communities. Join thousands of supporters creating educational
              opportunities worldwide.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-lg font-bold">100% Secure</div>
                <div className="text-sm text-white/80">SSL Encrypted</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Target className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-lg font-bold">98% Direct</div>
                <div className="text-sm text-white/80">To Programs</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Globe className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-lg font-bold">75 Countries</div>
                <div className="text-sm text-white/80">Worldwide Impact</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-lg font-bold">50K+ Donors</div>
                <div className="text-sm text-white/80">Trusted by</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donation Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-8">
                Quick Donation
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose your donation amount and see the immediate impact you'll
                make in someone's life.
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 lg:p-12">
                {/* Donation Type Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gray-100 rounded-full p-1">
                    <button
                      onClick={() => setDonationType("monthly")}
                      className={`px-6 py-3 rounded-full font-semibold transition-all ${
                        donationType === "monthly"
                          ? "bg-ngo-true-joy text-white shadow-lg"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setDonationType("onetime")}
                      className={`px-6 py-3 rounded-full font-semibold transition-all ${
                        donationType === "onetime"
                          ? "bg-ngo-true-joy text-white shadow-lg"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      One-time
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-ngo-encore mb-6 text-center">
                    Select Amount
                  </h3>
                  <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-xl font-semibold transition-all border-2 ${
                          selectedAmount === amount
                            ? "border-ngo-true-joy bg-ngo-true-joy text-white shadow-lg"
                            : "border-gray-200 text-gray-700 hover:border-ngo-true-joy hover:text-ngo-true-joy"
                        }`}
                      >
                        {formatAmount(amount)}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(parseFloat(e.target.value) || 0);
                      }}
                      className="text-center text-xl py-6 border-2 border-gray-200 focus:border-ngo-true-joy rounded-xl"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                      $
                    </div>
                  </div>
                </div>

                {/* Impact Preview */}
                <div className="mb-8 p-6 bg-ngo-quietude/20 rounded-xl border border-ngo-quietude/30">
                  <h4 className="font-semibold text-ngo-encore mb-3 text-center">
                    Your Impact
                  </h4>
                  <p className="text-gray-700 text-center">
                    {donationType === "monthly"
                      ? `Your ${formatAmount(
                          selectedAmount,
                        )} monthly donation will `
                      : `Your ${formatAmount(selectedAmount)} donation will `}
                    support digital literacy training, teacher development
                    programs, and educational innovation initiatives that create
                    lasting impact in underserved communities worldwide.
                  </p>
                </div>

                {/* Donate Button */}
                <Button
                  size="lg"
                  className="w-full bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white font-bold py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Donate {formatAmount(selectedAmount)}{" "}
                  {donationType === "monthly" ? "Monthly" : "Now"}
                  <Heart className="ml-3 w-6 h-6" />
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  Secure SSL encryption. Tax-deductible receipt provided.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-ngo-encore text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
            Ready to Change Lives?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether you donate once or monthly, every contribution creates
            ripples of positive change. Join thousands of supporters making
            education and healthcare accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-12 py-6 text-xl rounded-full shadow-2xl font-semibold"
            >
              Become Monthly Donor
              <Heart className="ml-3 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-12 py-6 text-xl rounded-full font-semibold"
            >
              Learn About Impact
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
