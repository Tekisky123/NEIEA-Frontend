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
  Heart,
  Lightbulb,
  Handshake,
  Award,
  Users,
  Globe,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Values = () => {
  const coreValues = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Equity & Inclusion",
      subtitle: "Education as a Human Right",
      description:
        "We believe that quality education is a fundamental human right that should be accessible to all, regardless of background, location, or economic circumstances. We actively work to remove barriers and create inclusive learning environments.",
      principles: [
        "Equal access to quality education for all",
        "Inclusive learning environments that celebrate diversity",
        "Special focus on marginalized and underserved communities",
        "Gender equality in all our programs",
        "Accessibility for learners with disabilities",
      ],
      realWorldApplication:
        "Our scholarship programs specifically target girls from low-income families, and we ensure all learning materials are available in local languages and adapted for different learning styles.",
      color: "ngo-true-joy",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation & Excellence",
      subtitle: "Pioneering Educational Solutions",
      description:
        "We continuously innovate our approaches to education, embracing new technologies and methodologies while maintaining the highest standards of quality in everything we do.",
      principles: [
        "Cutting-edge educational technology integration",
        "Evidence-based program development",
        "Continuous improvement and adaptation",
        "Excellence in teaching and learning outcomes",
        "Creative problem-solving approaches",
      ],
      realWorldApplication:
        "We develop custom learning management systems for rural areas with limited internet, using AI to personalize learning paths and mobile technology to reach remote communities.",
      color: "ngo-encore",
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Community Partnership",
      subtitle: "Local Solutions, Global Impact",
      description:
        "We work hand-in-hand with local communities, ensuring our programs are culturally relevant, locally owned, and sustainable. True change comes from within communities.",
      principles: [
        "Community-led program development",
        "Cultural sensitivity and respect",
        "Local capacity building and empowerment",
        "Sustainable, long-term relationships",
        "Collaborative decision-making processes",
      ],
      realWorldApplication:
        "Every learning center is established in partnership with local leaders, teachers are hired from the community, and curriculum is adapted to reflect local culture and needs.",
      color: "ngo-rumors",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Transparency & Accountability",
      subtitle: "Trust Through Openness",
      description:
        "We maintain the highest standards of transparency in our operations and accountability to our beneficiaries, donors, and partners. Trust is earned through consistent, open communication.",
      principles: [
        "Open financial reporting and impact metrics",
        "Regular program evaluations and assessments",
        "Stakeholder feedback integration",
        "Ethical governance and operations",
        "Public access to organizational information",
      ],
      realWorldApplication:
        "We publish quarterly impact reports, conduct annual third-party evaluations, and maintain an open feedback system where beneficiaries can report concerns anonymously.",
      color: "ngo-purple-basil",
    },
  ];

  const valuesInAction = [
    {
      situation: "Program Development",
      challenge: "Creating a digital literacy program for rural communities",
      approach: [
        "Partner with local leaders to understand specific needs",
        "Adapt technology to work with limited infrastructure",
        "Train local teachers to ensure sustainability",
        "Measure impact transparently and adjust accordingly",
      ],
      outcome:
        "85% of participants gained employment or started businesses within 6 months",
    },
    {
      situation: "Crisis Response",
      challenge: "COVID-19 pandemic disrupted in-person learning",
      approach: [
        "Innovated with offline digital learning packages",
        "Prioritized most vulnerable students first",
        "Worked with families to support home learning",
        "Tracked and reported on continued impact honestly",
      ],
      outcome: "Maintained 78% student engagement during lockdowns",
    },
  ];

  const commitment = [
    {
      area: "To Our Students",
      commitments: [
        "Provide high-quality, relevant education",
        "Respect your culture and background",
        "Support your growth and development",
        "Connect you with opportunities",
      ],
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      area: "To Our Communities",
      commitments: [
        "Listen to your needs and priorities",
        "Build local capacity and leadership",
        "Ensure sustainable program development",
        "Respect your traditions and wisdom",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      area: "To Our Donors",
      commitments: [
        "Use your funds efficiently and effectively",
        "Report regularly on impact and outcomes",
        "Maintain highest ethical standards",
        "Be transparent about challenges and successes",
      ],
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-encore to-ngo-rumors text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Values
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              The principles that guide every decision we make, every program we
              design, and every relationship we build. These values are not just
              words on a page – they're the foundation of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - Detailed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } flex flex-col lg:flex-row items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-xl h-full">
                    <CardContent className="p-8">
                      <div
                        className={`w-20 h-20 bg-${value.color}/10 rounded-full flex items-center justify-center mb-6`}
                      >
                        <div className={`text-${value.color}`}>
                          {value.icon}
                        </div>
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-ngo-encore mb-2">
                        {value.title}
                      </h2>
                      <p className="text-lg text-ngo-rumors font-medium mb-4">
                        {value.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {value.description}
                      </p>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-ngo-encore mb-3">
                          In Practice:
                        </h4>
                        <p className="text-gray-600 leading-relaxed italic">
                          {value.realWorldApplication}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-ngo-encore mb-6">
                        Key Principles:
                      </h3>
                      <div className="space-y-4">
                        {value.principles.map((principle, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-ngo-true-joy mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{principle}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 bg-ngo-quietude/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Values in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real examples of how our values guide our decisions and actions in
              challenging situations and program development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {valuesInAction.map((example, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-ngo-encore">
                    {example.situation}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    <strong>Challenge:</strong> {example.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-ngo-encore mb-3">
                      How Our Values Guided Us:
                    </h4>
                    <div className="space-y-2">
                      {example.approach.map((step, idx) => (
                        <div key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-ngo-true-joy mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-ngo-true-joy/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-ngo-encore mb-2">
                      Outcome:
                    </h4>
                    <p className="text-gray-700 font-medium">
                      {example.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Our Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specific promises we make to the communities we serve, based on
              our core values and demonstrated through our actions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commitment.map((area, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-ngo-true-joy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-ngo-true-joy">{area.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-ngo-encore">
                    {area.area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {area.commitments.map((commitment, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-gray-50 rounded-lg text-left"
                      >
                        <div className="flex items-start">
                          <Target className="w-4 h-4 text-ngo-true-joy mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {commitment}
                          </span>
                        </div>
                      </div>
                    ))}
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
            Share Our Values?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            If these values resonate with you, we invite you to join our mission
            and help us create a more equitable world through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer">
              <Button
                size="lg"
                className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-8 py-3 text-lg font-medium"
              >
                Volunteer With Us
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-8 py-3 text-lg font-medium"
              >
                Support Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Values;
