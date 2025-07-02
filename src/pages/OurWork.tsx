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
  GraduationCap,
  Users,
  Globe,
  Heart,
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const OurWork = () => {
  const workStats = [
    {
      value: "15,000+",
      label: "Students Educated",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      value: "200+",
      label: "Communities Served",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      value: "85%",
      label: "Employment Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "12+",
      label: "Years of Impact",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const workAreas = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Literacy Programs",
      description:
        "Teaching essential computer skills and digital literacy to prepare students for the modern workforce.",
      impact: "8,500+ students trained",
      link: "/courses",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Access",
      description:
        "Establishing learning centers and providing quality education in underserved communities.",
      impact: "200+ learning centers",
      link: "/courses",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teacher Development",
      description:
        "Training educators with modern teaching methods and continuous professional development.",
      impact: "800+ teachers trained",
      link: "/courses",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Labs",
      description:
        "Creating spaces for creativity, problem-solving, and hands-on learning with modern technology.",
      impact: "25+ labs established",
      link: "/courses",
    },
  ];

  const currentProjects = [
    {
      title: "Digital Learning Centers - Rural India",
      location: "Rajasthan, India",
      description:
        "Establishing 20 digital learning centers providing computer access and training to 5,000+ students.",
      progress: 85,
      beneficiaries: 5000,
      status: "Active",
    },
    {
      title: "Teacher Training Initiative - East Africa",
      location: "Uganda & Kenya",
      description:
        "Training 800+ educators in modern teaching methodologies and classroom management.",
      progress: 70,
      beneficiaries: 800,
      status: "Active",
    },
    {
      title: "Girls' Education Scholarships",
      location: "Bangladesh & Pakistan",
      description:
        "Providing scholarships to 1,500 girls from underprivileged families for secondary education.",
      progress: 92,
      beneficiaries: 1500,
      status: "Active",
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-color6 to-ngo-color2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Work Overview
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              NEIEA focuses on creating equitable educational opportunities
              through innovative programs, digital literacy training, and
              community-based learning solutions.
            </p>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {workStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-ngo-color4 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across multiple educational domains to create
              comprehensive learning ecosystems that serve diverse community
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-ngo-color4/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-ngo-color4">{area.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-ngo-color6">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </CardDescription>
                  <Badge className="bg-ngo-color4/10 text-ngo-color4 mb-4">
                    {area.impact}
                  </Badge>
                  <Link to={area.link}>
                    <Button className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Current Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our active initiatives are creating measurable impact across
              communities, with progress tracked transparently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-100 text-green-800">
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {project.beneficiaries.toLocaleString()} beneficiaries
                    </span>
                  </div>
                  <CardTitle className="text-lg text-ngo-color6">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-ngo-color4 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full bg-ngo-color2 hover:bg-ngo-color2/90 text-white">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ngo-color4 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Be part of creating educational opportunities that transform lives
            and communities. Your support helps us expand our reach and deepen
            our impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-white text-ngo-color4 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
              >
                Support Our Work
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-color4 px-8 py-3 text-lg font-medium"
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

export default OurWork;
