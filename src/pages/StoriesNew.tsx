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
  Eye,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Users2,
  BookOpenCheck,
  School,
  HandHeart,
  TargetIcon,
  Zap,
  Globe2,
  AwardIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import javidSirPic from "../images/javed-sir-pic.png";

const StoriesNew = () => {
  // NEIEA's actual story data from their website
  const storyData = {
    founder: {
      name: "Mr. Javeed Mirza",
      role: "Founder & President of NEIEA",
      image: javidSirPic, // You can add actual image later
      description: "Our journey began with a shared vision of a world where quality education reaches every corner, empowering individuals to break barriers and realize their full potential."
    },
    objectives: [
      {
        id: 1,
        title: "Rapid Growth of Education",
        description: "Pursue rapid growth of education from basic to highest level for all marginalized sections of society on a sustainable basis.",
        icon: <TrendingUp className="w-8 h-8 text-ngo-color4" />
      },
      {
        id: 2,
        title: "Leverage Educational Bodies",
        description: "Leverage the Indian Ministry of Education & affiliate bodies, the International Educational bodies like UNESCO, UNICEF, and global agencies, trusts and foundations for educational enhancement.",
        icon: <Globe2 className="w-8 h-8 text-ngo-color4" />
      },
      {
        id: 3,
        title: "Innovative Strategies",
        description: "Initiate innovative and creative strategies for building quality in education using advanced Technology for and freeware software.",
        icon: <Lightbulb className="w-8 h-8 text-ngo-color4" />
      },
      {
        id: 4,
        title: "Resilience & Sustainability",
        description: "Ensure resilience and sustainability in fulfilling educational needs that lead to quality of life and livelihood.",
        icon: <Shield className="w-8 h-8 text-ngo-color4" />
      },
      {
        id: 5,
        title: "Collaboration & Partnership",
        description: "Leverage, influence, collaborate, partner and affiliate with all groups and educational institutions of marginalized, weaker sections of society that share its objectives.",
        icon: <Users2 className="w-8 h-8 text-ngo-color4" />
      }
    ],
    impact: [
      {
        value: "14.3k+",
        label: "Students are enrolled with us",
        icon: <Users className="w-6 h-6" />,
        color: "from-blue-500 to-blue-600"
      },
      {
        value: "65+",
        label: "Partners",
        icon: <HandHeart className="w-6 h-6" />,
        color: "from-green-500 to-green-600"
      },
      {
        value: "3.5K+",
        label: "Students successfully completed course",
        icon: <GraduationCap className="w-6 h-6" />,
        color: "from-purple-500 to-purple-600"
      }
    ],
    milestones: [
      {
        year: "2022",
        title: "NEIEA Founded",
        description: "The New Equitable and Innovative Educational Association was established with a vision to revolutionize education.",
        icon: <Star className="w-5 h-5" />
      },
      {
        year: "2022-2024",
        title: "13 Free Online Courses",
        description: "Introduced 13 free online courses benefiting thousands of learners worldwide.",
        icon: <BookOpen className="w-5 h-5" />
      },
      {
        year: "2023",
        title: "80G Certification",
        description: "Obtained 80G certification for tax-exempt donations, ensuring credibility and transparency.",
        icon: <AwardIcon className="w-5 h-5" />
      },
      {
        year: "2023",
        title: "Darpan ID",
        description: "Received Darpan ID to ensure compliance and accountability in all operations.",
        icon: <Shield className="w-5 h-5" />
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color3 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-ngo-color4/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ngo-color2/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <Badge className="bg-ngo-color4 text-white mb-6 px-4 py-2 text-sm">
            Our Journey
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            The NEIEA Story
          </h1>
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            From humble beginnings to transforming thousands of lives through innovative education. 
            Discover how we're making quality education accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about-us">
              <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-3 text-lg">
                Learn More About Us
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="outline" className="border-2 border-white text-ngo-color1 px-8 py-3 text-lg">
                Support Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-ngo-color4/10 text-ngo-color4 border border-ngo-color4/20">
                Our Founder
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 leading-tight">
                Meet {storyData.founder.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {storyData.founder.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                NEIEA was born out of a deep-seated passion for education and a belief in its power to shape destinies. 
                A group of educators, activists, and visionaries came together, driven by a common mission: to bridge 
                the education gap and create a brighter future for generations to come.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-ngo-color4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Founder & President</span>
                </div>
                <div className="flex items-center gap-2 text-ngo-color4">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Educationist</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-ngo-color1 to-ngo-color3 p-8 rounded-2xl text-white text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <img src={javidSirPic} alt={"Mr. Javeed Mirza Pic"} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{storyData.founder.name}</h3>
                <p className="text-white/80">{storyData.founder.role}</p>
                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ngo-color4" />
                    <span className="text-sm">Leading educational innovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ngo-color4" />
                    <span className="text-sm">Advocating for equitable access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-ngo-color4" />
                    <span className="text-sm">Building global partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-ngo-color4/10 text-ngo-color4 border border-ngo-color4/20 mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-6">
              Transforming Education, One Life at a Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since our inception, we've reached thousands of learners and built partnerships that amplify our impact 
              across communities and borders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storyData.impact.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-ngo-color6 mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-ngo-color4/10 text-ngo-color4 border border-ngo-color4/20 mb-4">
              Our Objectives
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-6">
              Building a Better Future Through Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic objectives guide every decision and action, ensuring we stay true to our mission 
              of making quality education accessible to all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storyData.objectives.map((objective) => (
              <Card key={objective.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-ngo-color4/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {objective.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold text-ngo-color6 mb-3 group-hover:text-ngo-color4 transition-colors duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-ngo-color1 to-ngo-color3 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border border-white/30 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Key Milestones
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              From our founding to today, discover the pivotal moments that have shaped NEIEA's growth 
              and impact in the educational landscape.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-white/30 hidden lg:block" />
            
            <div className="space-y-12">
              {storyData.milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 bg-ngo-color4 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-ngo-color4 rounded-full flex items-center justify-center text-white">
                            {milestone.icon}
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-ngo-color4">{milestone.year}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-ngo-color6 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for mobile */}
                  <div className="lg:hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-6">
              Join Us. Let's Make a Difference Together!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Subscribe to our newsletter to know more about NEIEA Action Towards Education. 
              Be part of our journey in transforming education and creating opportunities for all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex-1 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-ngo-color4 focus:outline-none text-lg transition-colors duration-300"
                />
              </div>
              <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-8 py-4 text-lg whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-ngo-color4/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-ngo-color4" />
                </div>
                <h3 className="text-xl font-bold text-ngo-color6 mb-2">Free Courses</h3>
                <p className="text-gray-600">Access quality education without barriers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ngo-color4/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-ngo-color4" />
                </div>
                <h3 className="text-xl font-bold text-ngo-color6 mb-2">Global Reach</h3>
                <p className="text-gray-600">Connecting learners worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ngo-color4/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-ngo-color4" />
                </div>
                <h3 className="text-xl font-bold text-ngo-color6 mb-2">Community Impact</h3>
                <p className="text-gray-600">Building stronger communities through education</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default StoriesNew;
