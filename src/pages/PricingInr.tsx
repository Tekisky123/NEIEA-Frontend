import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Target,
  Users,
  Building,
  Globe,
  BookOpen,
  Shield,
  Lightbulb,
  CheckCircle,
  Heart,
  GraduationCap,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Users2,
  BookOpenCheck,
  School,
  HandHeart,
  Zap,
  Globe2,
  AwardIcon,
  TrendingUp,
  Eye,
  FileText,
  Info,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const PricingInr = () => {
  const pricingFeatures = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Free Education",
      description: "Empowering children to learn and gain knowledge for free in India and abroad"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Non-Profit Model",
      description: "501c(3) registered organization focused on educational impact, not profit"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive Access",
      description: "Prioritizing education for weaker and marginalized segments of society"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Expanding our proven educational model to benefit communities worldwide"
    }
  ];

  const paradigmFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Massive Learning",
      description: "Enables massive learning using Technology"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Critical Thinking",
      description: "Builds critical thinking by applying Pedagogy in lesson preparation and delivery"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Teacher Training",
      description: "Provides continuous Teacher training"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Ensures monitoring of student performance and rectification"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "School Management",
      description: "Assists school management and supports community involvement"
    }
  ];

  const pricingStrategy = [
    {
      title: "Assessment & Analysis",
      description: "Thorough evaluation of current pricing structure and market positioning",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Expert Consultation",
      description: "Skilled expert recommendations for optimal pricing strategy",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Custom Solutions",
      description: "Hybrid approaches combining multiple pricing models for best results",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Implementation",
      description: "Detailed roadmap and timeline for successful execution",
      icon: <CheckCircle className="w-6 h-6" />
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
                <DollarSign className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our commitment to providing quality education through innovative pricing strategies 
              that maximize charitable impact and reach more people in need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Heart className="w-4 h-4 mr-2" />
                Non-Profit Focus
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <GraduationCap className="w-4 h-4 mr-2" />
                Free Education
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Global Impact
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFeatures.map((feature, index) => (
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
          <div className="max-w-6xl mx-auto">
            
            {/* Mission Statement */}
            <Card className="mb-12 bg-gradient-to-r from-ngo-color1 to-ngo-color2 text-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Program for NEIEA is to empower the children to learn and gain knowledge for free in India and abroad.
                  </p>
                  <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                    <p className="text-gray-200">
                      The New Educational Initiative (NEI) is a 501c(3) non-profit registered in NY state. 
                      Its Indian branch is the New Equitable and Innovative Educational Association (NEIEA).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Overview */}
            <Card className="mb-12 bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-ngo-color1">
                  <Building className="w-6 h-6 mr-3" />
                  About Our Organization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    NEIEA is led by a group of professional educationists and supporters dedicated to advancing 
                    educational goals advocating quality embedded education with innovative pedagogy, inclusive 
                    cultural constructs, and cutting-edge technology.
                  </p>
                  <p>
                    It is also a "Knowledge sharing platform" for educational institutions, professional colleges, 
                    management institutes, and other Skills Development Centers. It seeks to be a transformative 
                    educational agency prioritizing the education of the weaker and marginalized segments of society.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NEIEA Paradigm */}
            <Card className="mb-12 bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-ngo-color1">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  The NEIEA Paradigm
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The NEIEA paradigm is a hybrid model of Education that combines Online learning with Onsite 
                  learning in a classroom setting. It is a <strong>TRANSFORMATIVE MODEL</strong> of education.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paradigmFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-ngo-color4/10 rounded-lg mr-4 text-ngo-color4">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Licensing Information */}
            <Card className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">
                      Licensing Program
                    </h4>
                    <p className="text-amber-700 mb-4">
                      NEIEA has not created any licensing program to make the curriculum available to other 
                      organizations for a fee. However, we are exploring optimal pricing strategies to expand 
                      our impact while maintaining our non-profit mission.
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-amber-800 mb-2">Our Approach:</h5>
                      <ul className="text-amber-700 space-y-1 text-sm">
                        <li>• Focus on maximizing charitable effect</li>
                        <li>• Transparent and informative pricing</li>
                        <li>• Gradual rollout of new strategies</li>
                        <li>• Customer benefit-focused implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Strategy Process */}
            <Card className="mb-12 bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-ngo-color1">
                  <Target className="w-6 h-6 mr-3" />
                  Pricing Strategy Development Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pricingStrategy.map((step, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-3">
                        <span className="w-8 h-8 bg-ngo-color4 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <div className="p-2 bg-ngo-color4/10 rounded-lg text-ngo-color4">
                          {step.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Factors */}
            <Card className="mb-12 bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-ngo-color1">
                  <Star className="w-6 h-6 mr-3" />
                  Keys to Success
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Transparency</h4>
                    <p className="text-green-700">
                      Being transparent and informative about pricing changes and their benefits to customers.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Strategic Planning</h4>
                    <p className="text-blue-700">
                      Detailed roadmap and timeline for successful execution of new pricing strategies.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Customer Benefits</h4>
                    <p className="text-purple-700">
                      Ensuring new pricing offers benefits to customers and promotes increased ability to serve more people.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Statement */}
            <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Maximizing Charitable Impact
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    When a nonprofit organization embraces pricing strategies as an essential tool for optimizing operations, 
                    they will be able to reach more people and have greater impact on society. Whether the cause is helping 
                    new parents, feeding the homeless, or supporting public radio, any nonprofit with a pricing or donation 
                    plan can benefit from an enhanced pricing strategy.
                  </p>
                  <div className="mt-4 p-3 bg-white/50 rounded-lg inline-block">
                    <p className="text-green-800 font-semibold">
                      The tool used for years to maximize profits can also be leveraged for maximum charitable effect.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Support Our Educational Mission
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join us in making quality education accessible to all. Your support helps us reach more 
                    communities and create lasting impact.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/donate">
                      <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                        Make a Donation
                      </Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" className="border-ngo-color4 text-ngo-color4 hover:bg-ngo-color4 hover:text-white">
                        Explore Free Courses
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                        Contact Us
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

export default PricingInr;
