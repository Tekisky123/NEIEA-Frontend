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
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Heart,
  Clock,
  MapPin,
  GraduationCap,
  Laptop,
  BookOpen,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Target,
  Award,
  Briefcase,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    availability: "",
    interests: [],
    experience: "",
    motivation: "",
  });

  const volunteerStats = [
    {
      value: "1,200+",
      label: "Active Volunteers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "25",
      label: "Countries",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      value: "50,000+",
      label: "Volunteer Hours",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "15,000+",
      label: "Students Impacted",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Digital Literacy Trainer",
      category: "Teaching",
      location: "Remote/On-site",
      commitment: "10 hours/week",
      duration: "6 months",
      skills: ["Computer Skills", "Teaching", "Patience"],
      description:
        "Teach basic computer skills and digital literacy to students in rural communities through our learning centers.",
      requirements: [
        "Proficiency in computers and internet",
        "Basic teaching or training experience",
        "Good communication skills",
        "Patience with beginner learners",
      ],
      impact: "Train 50+ students per batch",
      openings: 15,
      featured: true,
    },
    {
      id: 2,
      title: "Curriculum Developer",
      category: "Content Creation",
      location: "Remote",
      commitment: "15 hours/week",
      duration: "3-12 months",
      skills: ["Curriculum Design", "Education", "Research"],
      description:
        "Design and develop educational content and curricula for various skill development programs.",
      requirements: [
        "Education background preferred",
        "Curriculum development experience",
        "Research and writing skills",
        "Knowledge of modern pedagogy",
      ],
      impact: "Courses reaching 1000+ students",
      openings: 8,
      featured: true,
    },
    {
      id: 3,
      title: "Youth Mentor",
      category: "Mentoring",
      location: "Remote/Flexible",
      commitment: "5 hours/week",
      duration: "6-12 months",
      skills: ["Mentoring", "Communication", "Empathy"],
      description:
        "Provide guidance and support to young learners in their educational and career development journey.",
      requirements: [
        "Professional or educational experience",
        "Strong communication skills",
        "Empathy and patience",
        "Commitment to mentoring relationship",
      ],
      impact: "Mentor 3-5 students directly",
      openings: 25,
      featured: false,
    },
    {
      id: 4,
      title: "Marketing & Communications",
      category: "Marketing",
      location: "Remote",
      commitment: "8 hours/week",
      duration: "6 months",
      skills: ["Digital Marketing", "Content Creation", "Social Media"],
      description:
        "Help promote NEIEA's programs through social media, content creation, and digital marketing initiatives.",
      requirements: [
        "Digital marketing experience",
        "Content creation skills",
        "Social media proficiency",
        "Creative thinking",
      ],
      impact: "Reach 10,000+ potential beneficiaries",
      openings: 10,
      featured: false,
    },
    {
      id: 5,
      title: "Field Coordinator",
      category: "Operations",
      location: "On-site (Various)",
      commitment: "20 hours/week",
      duration: "12 months",
      skills: ["Project Management", "Local Languages", "Leadership"],
      description:
        "Coordinate field operations, manage local partnerships, and ensure smooth implementation of programs.",
      requirements: [
        "Local area knowledge",
        "Project management skills",
        "Leadership experience",
        "Cultural sensitivity",
      ],
      impact: "Coordinate programs for 500+ students",
      openings: 5,
      featured: false,
    },
    {
      id: 6,
      title: "Technology Support",
      category: "Technical",
      location: "Remote",
      commitment: "10 hours/week",
      duration: "Ongoing",
      skills: ["IT Support", "Troubleshooting", "Training"],
      description:
        "Provide technical support for learning centers, troubleshoot issues, and train staff on technology use.",
      requirements: [
        "IT/Computer science background",
        "Troubleshooting skills",
        "Remote support experience",
        "Training ability",
      ],
      impact: "Support 50+ learning centers",
      openings: 12,
      featured: false,
    },
  ];

  const volunteerTestimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Literacy Trainer",
      duration: "2 years",
      story:
        "Volunteering with NEIEA has been incredibly rewarding. Seeing students go from never touching a computer to creating their own projects is magical.",
      image: "/placeholder.svg",
      location: "Remote Volunteer",
      impact: "Trained 200+ students",
    },
    {
      name: "Dr. Michael Okafor",
      role: "Curriculum Developer",
      duration: "1.5 years",
      story:
        "Contributing to curriculum development allows me to impact thousands of students worldwide. The team's dedication is inspiring.",
      image: "/placeholder.svg",
      location: "Nigeria",
      impact: "Developed 8 course modules",
    },
  ];

  const volunteerBenefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Skill Development",
      description:
        "Gain new skills and enhance existing ones through training and hands-on experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Network",
      description:
        "Connect with like-minded individuals and professionals from around the world",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Meaningful Impact",
      description:
        "See direct results of your contributions in transforming lives through education",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Growth",
      description:
        "Build professional experience and references while making a difference",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Volunteer application:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-ngo-color2 to-ngo-color5 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-ngo-color4 text-white mb-6 text-lg px-6 py-2 rounded-full">
              Make a Difference
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Volunteer for
              <span className="text-ngo-color4 block">
                Educational Change
              </span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">
              Join our global community of volunteers working to create
              equitable educational opportunities. Share your skills, gain
              experience, and help transform lives through innovative education
              programs.
            </p>

            {/* Volunteer Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerStats.map((stat, index) => (
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

      {/* Why Volunteer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
              Why Volunteer With NEIEA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with us is more than giving back – it's about growing
              personally and professionally while creating lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-ngo-color4/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-ngo-color4">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ngo-color6 mb-4">
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

      {/* Volunteer Opportunities */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-ngo-color6 text-white mb-6 text-lg px-6 py-2">
              Current Openings
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Find the perfect volunteer role that matches your skills,
              interests, and availability. All our positions offer flexible
              scheduling and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  opportunity.featured ? "ring-2 ring-ngo-color4" : ""
                }`}
              >
                {opportunity.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-ngo-color4 text-white px-4 py-1">
                      High Priority
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-ngo-color6 mb-2">
                        {opportunity.title}
                      </h3>
                      <Badge className="bg-ngo-color2 text-white mb-2">
                        {opportunity.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        {opportunity.openings} openings
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">
                        {opportunity.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">
                        {opportunity.commitment}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">
                        {opportunity.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-ngo-color4" />
                      <span className="text-gray-600">
                        {opportunity.impact}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ngo-color6 mb-3">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-ngo-color4 text-ngo-color4"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ngo-color6 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.requirements
                        .slice(0, 3)
                        .map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-ngo-color4 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white font-semibold rounded-full">
                    Apply for This Role
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
                Apply to Volunteer
              </h2>
              <p className="text-xl text-gray-600">
                Ready to make a difference? Fill out our volunteer application
                and we'll match you with opportunities that fit your skills and
                interests.
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-ngo-color6 mb-6">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location & Availability */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-ngo-color6 mb-6">
                      Location & Availability
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location/City *
                        </label>
                        <Input
                          required
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Availability (hours/week) *
                        </label>
                        <Input
                          required
                          placeholder="e.g., 10 hours/week"
                          value={formData.availability}
                          onChange={(e) =>
                            handleInputChange("availability", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills & Experience */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-ngo-color6 mb-6">
                      Skills & Experience
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Relevant Skills *
                        </label>
                        <Textarea
                          required
                          placeholder="List your relevant skills, qualifications, and expertise..."
                          value={formData.skills}
                          onChange={(e) =>
                            handleInputChange("skills", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                          rows={4}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Previous Experience
                        </label>
                        <Textarea
                          placeholder="Describe any relevant volunteer or professional experience..."
                          value={formData.experience}
                          onChange={(e) =>
                            handleInputChange("experience", e.target.value)
                          }
                          className="border-ngo-color4/30 focus:border-ngo-color4"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-ngo-color6 mb-6">
                      Motivation
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to volunteer with NEIEA? *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us about your motivation and what you hope to achieve..."
                        value={formData.motivation}
                        onChange={(e) =>
                          handleInputChange("motivation", e.target.value)
                        }
                        className="border-ngo-color4/30 focus:border-ngo-color4"
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white font-bold py-4 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Submit Volunteer Application
                    <Heart className="ml-3 w-6 h-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-24 bg-ngo-color8/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-color6 mb-8">
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our dedicated volunteers about their experiences and the
              impact they've made through their contributions to NEIEA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-ngo-color6 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1 text-ngo-color4" />
                        <span className="text-xs text-gray-500">
                          {testimonial.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-ngo-color4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.story}"
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {testimonial.location}
                    </div>
                    <Badge className="bg-ngo-color4/10 text-ngo-color4 text-xs">
                      {testimonial.impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-ngo-color6 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
            Have Questions?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Our volunteer coordinators are here to help you find the perfect
            opportunity and answer any questions about volunteering with NEIEA.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-12 py-4 text-lg rounded-full font-semibold"
            >
              <Mail className="mr-3 w-5 h-5" />
              Email Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ngo-color6 px-12 py-4 text-lg rounded-full font-semibold"
            >
              <Phone className="mr-3 w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
