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
  Users,
  MapPin,
  Calendar,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Globe,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamStats = [
    {
      value: "25+",
      label: "Full-time Staff",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "1,200+",
      label: "Active Volunteers",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      value: "25",
      label: "Countries",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      value: "12+",
      label: "Years Experience",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const leadership = [
    {
      name: "Dr. Sarah Rahman",
      position: "Founder & Executive Director",
      location: "Bangladesh",
      bio: "Dr. Rahman founded NEIEA in 2010 with a vision to democratize education through technology. She holds a PhD in Education Policy from Harvard and has 20+ years of experience in international development.",
      expertise: [
        "Education Policy",
        "International Development",
        "NGO Management",
      ],
      image: "/placeholder.svg",
      joinedYear: 2010,
      linkedin: "#",
      email: "sarah.rahman@neiea.org",
      achievements: [
        "UNESCO Education Innovation Award 2022",
        "Global Education Leader 2021",
        "Founded 3 educational NGOs",
      ],
    },
    {
      name: "James Mitchell",
      position: "Chief Operating Officer",
      location: "United Kingdom",
      bio: "James brings 15 years of operational excellence from both non-profit and corporate sectors. He oversees program implementation and organizational efficiency across all NEIEA initiatives.",
      expertise: [
        "Operations Management",
        "Strategic Planning",
        "Team Leadership",
      ],
      image: "/placeholder.svg",
      joinedYear: 2012,
      linkedin: "#",
      email: "james.mitchell@neiea.org",
      achievements: [
        "Scaled operations to 25 countries",
        "Improved efficiency by 300%",
        "MBA from London Business School",
      ],
    },
    {
      name: "Maria Santos",
      position: "Director of Programs",
      location: "Guatemala",
      bio: "Maria leads our program development and ensures quality across all educational initiatives. Her grassroots experience and academic background create powerful, community-centered programs.",
      expertise: [
        "Program Development",
        "Community Engagement",
        "Curriculum Design",
      ],
      image: "/placeholder.svg",
      joinedYear: 2014,
      linkedin: "#",
      email: "maria.santos@neiea.org",
      achievements: [
        "Developed 50+ educational programs",
        "Masters in International Education",
        "Fluent in 5 languages",
      ],
    },
  ];

  const departments = [
    {
      name: "Technology & Innovation",
      head: "Dr. Raj Patel",
      members: 8,
      description:
        "Developing cutting-edge educational technology solutions and digital learning platforms.",
      projects: [
        "Learning Management System",
        "Mobile Learning Apps",
        "AI-Powered Assessment Tools",
      ],
    },
    {
      name: "Program Implementation",
      head: "Anna Kowalski",
      members: 12,
      description:
        "Managing on-ground program delivery and ensuring quality across all learning centers.",
      projects: [
        "Teacher Training",
        "Curriculum Delivery",
        "Student Support Services",
      ],
    },
    {
      name: "Community Partnerships",
      head: "David Okonkwo",
      members: 6,
      description:
        "Building and maintaining relationships with local communities, governments, and organizations.",
      projects: [
        "Local Government Relations",
        "Community Engagement",
        "Cultural Integration",
      ],
    },
    {
      name: "Research & Evaluation",
      head: "Dr. Lisa Chen",
      members: 5,
      description:
        "Conducting impact assessments and research to continuously improve our programs.",
      projects: ["Impact Studies", "Program Evaluation", "Data Analytics"],
    },
  ];

  const advisors = [
    {
      name: "Prof. Michael Thompson",
      title: "Education Technology Expert",
      organization: "Stanford University",
      expertise: "Digital Learning, Educational Innovation",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Fatima Al-Zahra",
      title: "Development Economics Specialist",
      organization: "World Bank",
      expertise: "Economic Development, Policy Analysis",
      image: "/placeholder.svg",
    },
    {
      name: "Roberto Silva",
      title: "Former CEO, Education International",
      organization: "Education International",
      expertise: "Global Education Leadership, Strategy",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Technology for Development",
      organization: "MIT",
      expertise: "ICT4D, Social Innovation",
      image: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-color6 to-ngo-color2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Our diverse, passionate team of educators, technologists, and
              development professionals work together to create lasting
              educational impact worldwide.
            </p>

            {/* Team Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => (
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

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring decades of expertise in education,
              technology, and international development to guide NEIEA's
              mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sm">{leader.position}</p>
                    <div className="flex items-center text-xs mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {leader.location}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="bg-ngo-color4 text-white mb-2">
                      Since {leader.joinedYear}
                    </Badge>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {leader.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-ngo-color6 mb-2 text-sm">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-gray-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ngo-color6 mb-2 text-sm">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {leader.achievements
                        .slice(0, 2)
                        .map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs text-gray-600"
                          >
                            <Award className="w-3 h-3 mr-2 text-ngo-color4 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-xs"
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Contact
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white text-xs px-2"
                    >
                      <Linkedin className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized teams working collaboratively to deliver comprehensive
              educational solutions and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-ngo-color6">
                      {dept.name}
                    </CardTitle>
                    <Badge className="bg-ngo-color4 text-white">
                      {dept.members} members
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">Led by {dept.head}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {dept.description}
                  </CardDescription>

                  <div className="mb-4">
                    <h4 className="font-semibold text-ngo-color6 mb-3 text-sm">
                      Current Projects:
                    </h4>
                    <div className="space-y-2">
                      {dept.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 text-ngo-color4" />
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-sm">
                    Learn More About This Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Advisory Board
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Distinguished experts and thought leaders who provide strategic
              guidance and expertise to strengthen our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-ngo-color6 mb-1 text-sm">
                    {advisor.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">{advisor.title}</p>
                  <p className="text-xs text-ngo-color2 font-medium mb-3">
                    {advisor.organization}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {advisor.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-ngo-color6 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Are you passionate about education and making a global impact? We're
            always looking for talented individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-3 text-lg font-medium"
            >
              View Open Positions
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/volunteer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-color6 px-8 py-3 text-lg font-medium"
              >
                Volunteer With Us
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
