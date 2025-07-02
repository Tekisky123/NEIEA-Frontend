import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Stethoscope,
  Home,
  Users,
  Target,
  Clock,
  MapPin,
  ArrowRight,
  Globe,
  Heart,
  TrendingUp,
} from "lucide-react";

const Projects = () => {
  const projectStats = [
    {
      value: "127",
      label: "Active Projects",
      icon: <Target className="w-6 h-6" />,
    },
    { value: "45", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    {
      value: "2.3M",
      label: "Lives Impacted",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const currentProjects = [
    {
      id: 1,
      title: "Digital Learning Centers - Rural India",
      category: "Technology",
      location: "Rajasthan, India",
      description:
        "Establishing 20 digital learning centers in remote villages, providing computer access and digital literacy training to 5,000+ students.",
      image: "/placeholder.svg",
      progress: 85,
      funding: { raised: 340000, goal: 400000 },
      timeline: "3 months remaining",
      beneficiaries: 5000,
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-ngo-color6",
    },
    {
      id: 2,
      title: "Teacher Training Initiative - East Africa",
      category: "Education",
      location: "Uganda & Kenya",
      description:
        "Comprehensive teacher development program training 800+ educators in modern teaching methodologies and classroom management.",
      image: "/placeholder.svg",
      progress: 70,
      funding: { raised: 210000, goal: 300000 },
      timeline: "6 months remaining",
      beneficiaries: 800,
      icon: <Users className="w-6 h-6" />,
      color: "bg-ngo-color2",
    },
    {
      id: 3,
      title: "Innovation Labs - Latin America",
      category: "STEM",
      location: "Guatemala & Peru",
      description:
        "Setting up science and innovation laboratories in 15 schools to promote STEM education and creative problem-solving.",
      image: "/placeholder.svg",
      progress: 55,
      funding: { raised: 165000, goal: 300000 },
      timeline: "10 months remaining",
      beneficiaries: 3000,
      icon: <Target className="w-6 h-6" />,
      color: "bg-ngo-color5",
    },
    {
      id: 4,
      title: "Girls' Education Scholarship Program",
      category: "Education",
      location: "Bangladesh & Pakistan",
      description:
        "Providing scholarships and educational support to 1,500 girls from underprivileged families to complete their secondary education.",
      image: "/placeholder.svg",
      progress: 92,
      funding: { raised: 460000, goal: 500000 },
      timeline: "2 months remaining",
      beneficiaries: 1500,
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-ngo-color4",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-br from-ngo-color1 to-ngo-color3 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-ngo-color4 text-white mb-6 text-lg px-6 py-2 rounded-full">
              Our Global Impact
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Educational Innovation
              <span className="text-ngo-color4 block">Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">
              Discover NEIEA's educational initiatives focused on access,
              innovation, and equity. Each project is designed with communities
              to create sustainable educational solutions and opportunities.
            </p>

            {/* Project Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {projectStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-ngo-color4 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-ngo-color6 text-white cursor-pointer hover:bg-ngo-color6/90 px-4 py-2">
                All Projects
              </Badge>
              <Badge
                variant="outline"
                className="border-ngo-color6 text-ngo-color6 cursor-pointer hover:bg-ngo-color6 hover:text-white px-4 py-2"
              >
                Education
              </Badge>
              <Badge
                variant="outline"
                className="border-ngo-color6 text-ngo-color6 cursor-pointer hover:bg-ngo-color6 hover:text-white px-4 py-2"
              >
                Healthcare
              </Badge>
              <Badge
                variant="outline"
                className="border-ngo-color6 text-ngo-color6 cursor-pointer hover:bg-ngo-color6 hover:text-white px-4 py-2"
              >
                Infrastructure
              </Badge>
            </div>
            <div className="text-gray-600">
              Showing {currentProjects.length} active projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${project.color} text-white`}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </div>

                <CardContent className="p-8">
                  <CardTitle className="text-xl text-ngo-color6 mb-3 font-heading group-hover:text-ngo-color2 transition-colors">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Progress Section */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Funding Progress
                      </span>
                      <span className="text-sm font-bold text-ngo-color6">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>
                        {formatCurrency(project.funding.raised)} raised
                      </span>
                      <span>{formatCurrency(project.funding.goal)} goal</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">{project.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">
                        {project.beneficiaries.toLocaleString()} people
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-ngo-color6 hover:bg-ngo-color6/90 text-white font-semibold rounded-full">
                      Support Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white rounded-full px-4"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-ngo-color4 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
            Have a Project Idea?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            We're always looking for new opportunities to make a positive
            impact. Share your ideas or nominate a community that could benefit
            from our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-ngo-color4 hover:bg-gray-100 px-12 py-4 text-lg rounded-full font-semibold"
            >
              Submit Project Idea
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ngo-color4 px-12 py-4 text-lg rounded-full font-semibold"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
