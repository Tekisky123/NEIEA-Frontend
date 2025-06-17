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
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Award,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const Mission = () => {
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Equity & Inclusion",
      description:
        "We believe education is a fundamental right and work to eliminate barriers that prevent access to quality learning opportunities.",
      principles: [
        "Equal access regardless of background",
        "Inclusive learning environments",
        "Support for marginalized communities",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Excellence",
      description:
        "We continuously innovate our approaches to education, leveraging technology and modern pedagogies to maximize impact.",
      principles: [
        "Cutting-edge educational methods",
        "Technology-enhanced learning",
        "Continuous improvement mindset",
      ],
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Community Partnership",
      description:
        "We work hand-in-hand with local communities, ensuring our programs are culturally relevant and sustainable.",
      principles: [
        "Local community engagement",
        "Cultural sensitivity and respect",
        "Sustainable program development",
      ],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Transparency & Accountability",
      description:
        "We maintain the highest standards of transparency in our operations and accountability to our beneficiaries and donors.",
      principles: [
        "Open financial reporting",
        "Regular impact assessments",
        "Stakeholder feedback integration",
      ],
    },
  ];

  const strategicGoals = [
    {
      goal: "Reach 100,000 Students by 2030",
      description:
        "Expand our educational programs to directly impact 100,000 students across underserved communities worldwide.",
      progress: 15,
      metrics: [
        "15,000 students currently enrolled",
        "25 countries active",
        "50+ learning centers",
      ],
    },
    {
      goal: "Establish 500 Learning Centers",
      description:
        "Build and equip 500 digital learning centers in rural and remote areas to provide consistent access to quality education.",
      progress: 45,
      metrics: [
        "225 centers operational",
        "Advanced equipment in 80%",
        "Local teacher training in 100%",
      ],
    },
    {
      goal: "Train 10,000 Educators",
      description:
        "Provide modern pedagogical training to 10,000 teachers and educators to multiply our impact through improved teaching quality.",
      progress: 8,
      metrics: [
        "800 teachers trained",
        "95% satisfaction rate",
        "Ongoing mentorship programs",
      ],
    },
    {
      goal: "Achieve 90% Employment Rate",
      description:
        "Maintain a 90% employment or entrepreneurship rate for graduates of our vocational and skills training programs.",
      progress: 85,
      metrics: [
        "Current 85% placement rate",
        "Strong industry partnerships",
        "Continuous alumni support",
      ],
    },
  ];

  const impactAreas = [
    {
      area: "Digital Literacy",
      description:
        "Teaching essential computer and internet skills for the modern workforce",
      beneficiaries: "8,500+ students",
      outcomes: "85% job placement rate",
    },
    {
      area: "Teacher Development",
      description:
        "Training educators in modern teaching methodologies and classroom management",
      beneficiaries: "800+ teachers",
      outcomes: "300% improvement in student performance",
    },
    {
      area: "Women's Empowerment",
      description:
        "Providing educational and entrepreneurial opportunities specifically for women",
      beneficiaries: "3,200+ women",
      outcomes: "65% started their own businesses",
    },
    {
      area: "Youth Skills Training",
      description:
        "Vocational training programs for young people entering the workforce",
      beneficiaries: "2,800+ youth",
      outcomes: "78% found employment within 6 months",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-encore to-ngo-rumors text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              NEIEA is dedicated to creating equitable educational opportunities
              through innovative programs that empower individuals and transform
              communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-ngo-true-joy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-ngo-true-joy" />
                </div>
                <CardTitle className="text-3xl font-heading font-bold text-ngo-encore">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide equitable access to quality education and
                  innovative learning opportunities that empower individuals,
                  strengthen communities, and create pathways to sustainable
                  development and economic prosperity.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-true-joy mr-3" />
                    <span className="text-gray-700">
                      Equitable Access to Education
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-true-joy mr-3" />
                    <span className="text-gray-700">Community Empowerment</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-true-joy mr-3" />
                    <span className="text-gray-700">
                      Sustainable Development
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-ngo-encore/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-ngo-encore" />
                </div>
                <CardTitle className="text-3xl font-heading font-bold text-ngo-encore">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-700 leading-relaxed mb-6">
                  A world where every individual, regardless of their background
                  or circumstances, has access to quality education and the
                  opportunity to reach their full potential, contributing to
                  thriving, equitable communities.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-encore mr-3" />
                    <span className="text-gray-700">
                      Global Educational Equity
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-encore mr-3" />
                    <span className="text-gray-700">
                      Individual Potential Realization
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ngo-encore mr-3" />
                    <span className="text-gray-700">Thriving Communities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and
              every program we implement, ensuring our work remains true to our
              mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-ngo-true-joy/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-ngo-true-joy">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-ngo-encore">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {value.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {value.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-ngo-true-joy mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {principle}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals 2030 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-ngo-rumors text-white mb-4 text-lg px-6 py-2">
              Strategic Goals 2030
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Our Roadmap to Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ambitious yet achievable goals that will guide our work over the
              next decade, ensuring measurable progress toward our vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategicGoals.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-ngo-encore mb-3">
                    {item.goal}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-ngo-true-joy h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-ngo-encore text-sm">
                      Current Metrics:
                    </h4>
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-ngo-true-joy mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-ngo-quietude/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Our Impact Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Focused intervention areas where we've demonstrated significant
              impact and continue to expand our reach and effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-ngo-encore mb-3">
                    {area.area}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-ngo-true-joy/10 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                      <div className="font-bold text-ngo-true-joy">
                        {area.beneficiaries}
                      </div>
                    </div>
                    <div className="bg-ngo-encore/10 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Key Outcome</div>
                      <div className="font-bold text-ngo-encore">
                        {area.outcomes}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ngo-encore text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Be part of creating a world where quality education is accessible to
            all. Your support helps us turn our vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-8 py-3 text-lg font-medium"
              >
                Support Our Mission
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-8 py-3 text-lg font-medium"
              >
                Volunteer With Us
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
