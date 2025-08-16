import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Award,
  TrendingUp,
  Building,
  Globe,
  BookOpen,
  Shield,
  Lightbulb,
  CheckCircle,
  Heart,
  GraduationCap,
  Target,
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
  Flag,
  GraduationCapIcon,
  UsersIcon,
  BookOpenIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Neiusa = () => {
  const neiData = {
    mission: "To provide good-quality education for all, empowering youth and citizens to drive positive change.",
    targetGroups: [
      {
        id: 1,
        title: "US Urban Youth",
        description: "Tailored educational programs to combat concentrated poverty and unemployment, equipping young individuals with tools for personal growth and success.",
        icon: <Users className="w-8 h-8 text-ngo-color4" />,
        color: "from-blue-500 to-blue-600"
      },
      {
        id: 2,
        title: "Native American Youth",
        description: "Dedicated to uplifting through education, mentorship, and cultural preservation, fostering empowerment and brighter futures.",
        icon: <Award className="w-8 h-8 text-ngo-color4" />,
        color: "from-green-500 to-green-600"
      },
      {
        id: 3,
        title: "Immigrants",
        description: "Support in overcoming language barriers and integrating into American society, creating a more inclusive and harmonious society.",
        icon: <Globe className="w-8 h-8 text-ngo-color4" />,
        color: "from-purple-500 to-purple-600"
      },
      {
        id: 4,
        title: "Incarcerated Youth",
        description: "Empowering through tailored educational programs and personalized support, breaking the school-to-prison pipeline.",
        icon: <Shield className="w-8 h-8 text-ngo-color4" />,
        color: "from-orange-500 to-orange-600"
      }
    ],
    courses: [
      {
        id: 1,
        title: "GED Preparation",
        description: "A recognized bridge to education and boundless opportunity for individuals who did not complete their high school education.",
        icon: <GraduationCap className="w-6 h-6" />,
        features: ["Comprehensive curriculum", "Experienced instructors", "Flexible learning", "Career guidance"]
      },
      {
        id: 2,
        title: "ESL Courses for Immigrants",
        description: "Specialized courses combining language skills with GED preparation, fostering confidence and community connections.",
        icon: <BookOpen className="w-6 h-6" />,
        features: ["Language skills", "GED preparation", "Cultural integration", "Higher education prep"]
      }
    ],
    incarceratedPrograms: [
      {
        title: "Inmate Learning",
        description: "Studies show that access to quality education significantly benefits incarcerated youth, enhancing cognitive development and reducing recidivism rates.",
        icon: <BookOpenCheck className="w-6 h-6" />
      },
      {
        title: "Reentry Education",
        description: "Tailored educational programs and personalized support to offer pathways to reintegration into society.",
        icon: <GraduationCapIcon className="w-6 h-6" />
      },
      {
        title: "Ending Pipeline",
        description: "Breaking the school-to-prison pipeline by providing supportive learning environments and creating opportunities for success.",
        icon: <UsersIcon className="w-6 h-6" />
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flag className="w-8 h-8 text-yellow-400" />
            <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2">
              NEI USA Initiative
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Expanding Our Proven Model
          </h1>
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Building on the overwhelming success of NEIEA, we are expanding our proven model to the United States. 
            Welcome to the New Education Initiative (NEI), a passionate advocate for accessible and transformative education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-3 text-lg">
                Support NEI USA
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="border-2 border-white  text-blue-700 px-8 py-3 text-lg">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-6">
              Our Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8">
              {neiData.mission}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that education is the key to unlocking potential and creating lasting positive change. 
              Our commitment extends to every corner of American society, ensuring no one is left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-4">
              Our Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Targeted Support for Every Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We intend to focus on three distinct groups facing unique challenges: US urban youth, 
              Native American youth, immigrants, and incarcerated youth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {neiData.targetGroups.map((group) => (
              <Card key={group.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {group.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incarcerated Youth Programs */}
      <section className="py-16 sm:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border border-white/30 mb-4">
              Special Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Empowering Incarcerated Youth Through Education
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We believe that education is the key to a better future for incarcerated youth and our society as a whole.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {neiData.incarceratedPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 border border-green-200 mb-4">
              Our Courses
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Comprehensive Educational Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to address the specific needs of each group, 
              ensuring personalized learning experiences that lead to real success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {neiData.courses.map((course) => (
              <Card key={course.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Expanding Our Reach
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in breaking barriers, empowering minds, and thriving through education. 
              We are expanding our successful model in the United States to create more opportunities for all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/donate">
                <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-4 text-lg">
                  Support Our Mission
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button variant="outline" className="border-2 border-white text-blue-700 px-8 py-4 text-lg">
                  Become a Volunteer
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                <p className="text-white/80">Proven methodologies that work</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-white/80">Addressing local needs and challenges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusive Approach</h3>
                <p className="text-white/80">Ensuring no one is left behind</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Neiusa;
