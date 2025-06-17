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
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Clock,
  Users,
  ArrowRight,
  BookOpen,
  Laptop,
  Briefcase,
  Globe,
  Award,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
  Play,
  Download,
} from "lucide-react";

const Courses = () => {
  const courseStats = [
    {
      value: "50+",
      label: "Active Courses",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      value: "15,000+",
      label: "Students Enrolled",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      value: "85%",
      label: "Completion Rate",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: "90%",
      label: "Job Placement",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const courseCategories = [
    { id: "all", label: "All Courses", count: 50 },
    { id: "digital", label: "Digital Skills", count: 18 },
    { id: "vocational", label: "Vocational Training", count: 15 },
    { id: "entrepreneurship", label: "Entrepreneurship", count: 8 },
    { id: "teacher", label: "Teacher Development", count: 9 },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Computer Fundamentals & Digital Literacy",
      category: "Digital Skills",
      duration: "3 months",
      mode: "Hybrid",
      level: "Beginner",
      enrolled: 1250,
      capacity: 1500,
      rating: 4.8,
      price: "Free",
      image: "/placeholder.svg",
      description:
        "Comprehensive introduction to computers, internet, and essential digital skills for modern workplace readiness.",
      syllabus: [
        "Computer basics and operating systems",
        "Internet navigation and email",
        "Microsoft Office Suite",
        "Digital communication tools",
        "Online safety and security",
        "Basic troubleshooting",
      ],
      eligibility: [
        "Age 16+ years",
        "Basic reading and writing skills",
        "No prior computer experience required",
      ],
      outcomes: [
        "Basic computer certification",
        "Job placement assistance",
        "Follow-up support for 6 months",
      ],
      instructor: "NEIEA Certified Trainers",
      nextBatch: "March 15, 2025",
      featured: true,
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      category: "Digital Skills",
      duration: "6 months",
      mode: "Online",
      level: "Intermediate",
      enrolled: 890,
      capacity: 1000,
      rating: 4.9,
      price: "$200",
      image: "/placeholder.svg",
      description:
        "Intensive program covering modern web development technologies including HTML, CSS, JavaScript, and React.",
      syllabus: [
        "HTML5 & CSS3 fundamentals",
        "JavaScript programming",
        "React.js framework",
        "Backend development with Node.js",
        "Database management",
        "Project deployment",
      ],
      eligibility: [
        "Basic computer knowledge",
        "English proficiency",
        "Commitment to 20+ hours/week",
      ],
      outcomes: [
        "Full-stack development certification",
        "Portfolio of 5 projects",
        "Interview preparation",
        "Industry mentorship",
      ],
      instructor: "Industry Professionals",
      nextBatch: "April 1, 2025",
      featured: true,
    },
    {
      id: 3,
      title: "Sustainable Agriculture & Farming",
      category: "Vocational Training",
      duration: "4 months",
      mode: "In-person",
      level: "Beginner",
      enrolled: 450,
      capacity: 500,
      rating: 4.7,
      price: "Free",
      image: "/placeholder.svg",
      description:
        "Modern farming techniques, sustainable practices, and agricultural business management for rural entrepreneurs.",
      syllabus: [
        "Sustainable farming methods",
        "Crop selection and rotation",
        "Organic farming practices",
        "Agricultural technology",
        "Market analysis and pricing",
        "Business planning for farmers",
      ],
      eligibility: [
        "Rural background preferred",
        "Interest in agriculture",
        "Basic literacy required",
      ],
      outcomes: [
        "Certified sustainable farmer",
        "Business plan development",
        "Seed and tool grants available",
        "Market linkage support",
      ],
      instructor: "Agricultural Experts",
      nextBatch: "March 20, 2025",
      featured: false,
    },
    {
      id: 4,
      title: "Women's Entrepreneurship Program",
      category: "Entrepreneurship",
      duration: "3 months",
      mode: "Hybrid",
      level: "Beginner",
      enrolled: 320,
      capacity: 400,
      rating: 4.8,
      price: "Free",
      image: "/placeholder.svg",
      description:
        "Empowering women with business skills, financial literacy, and entrepreneurial mindset to start their own ventures.",
      syllabus: [
        "Business idea development",
        "Financial planning and management",
        "Digital marketing basics",
        "Legal aspects of business",
        "Networking and partnerships",
        "Scaling and growth strategies",
      ],
      eligibility: [
        "Women aged 18-45",
        "Basic education",
        "Business idea (optional)",
      ],
      outcomes: [
        "Business plan certification",
        "Microfinance opportunities",
        "Mentorship for 1 year",
        "Market access support",
      ],
      instructor: "Successful Women Entrepreneurs",
      nextBatch: "April 10, 2025",
      featured: false,
    },
    {
      id: 5,
      title: "Teacher Training & Modern Pedagogy",
      category: "Teacher Development",
      duration: "5 months",
      mode: "Hybrid",
      level: "Intermediate",
      enrolled: 680,
      capacity: 800,
      rating: 4.9,
      price: "$150",
      image: "/placeholder.svg",
      description:
        "Advanced teacher training focusing on modern teaching methods, classroom management, and educational technology.",
      syllabus: [
        "Modern teaching methodologies",
        "Classroom management techniques",
        "Educational technology integration",
        "Student assessment strategies",
        "Inclusive education practices",
        "Professional development planning",
      ],
      eligibility: [
        "Teaching experience (any level)",
        "Education degree preferred",
        "Commitment to improving education",
      ],
      outcomes: [
        "Advanced teaching certification",
        "Technology integration skills",
        "Career advancement opportunities",
        "Peer network access",
      ],
      instructor: "Education Specialists",
      nextBatch: "March 25, 2025",
      featured: false,
    },
    {
      id: 6,
      title: "Digital Marketing & E-commerce",
      category: "Digital Skills",
      duration: "4 months",
      mode: "Online",
      level: "Intermediate",
      enrolled: 750,
      capacity: 900,
      rating: 4.6,
      price: "$180",
      image: "/placeholder.svg",
      description:
        "Comprehensive digital marketing course covering social media, SEO, content marketing, and e-commerce strategies.",
      syllabus: [
        "Digital marketing fundamentals",
        "Social media marketing",
        "Search engine optimization",
        "Content creation and strategy",
        "E-commerce platform management",
        "Analytics and reporting",
      ],
      eligibility: [
        "Basic computer skills",
        "Internet familiarity",
        "Business interest",
      ],
      outcomes: [
        "Digital marketing certification",
        "Portfolio of campaigns",
        "Freelancing opportunities",
        "Agency placement assistance",
      ],
      instructor: "Digital Marketing Experts",
      nextBatch: "April 15, 2025",
      featured: false,
    },
  ];

  const upcomingWorkshops = [
    {
      title: "AI in Education Workshop",
      date: "March 10, 2025",
      duration: "1 day",
      mode: "Online",
      participants: 500,
    },
    {
      title: "Financial Literacy Bootcamp",
      date: "March 18, 2025",
      duration: "2 days",
      mode: "In-person",
      participants: 200,
    },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-br from-ngo-encore to-ngo-rumors text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-ngo-true-joy text-white mb-6 text-lg px-6 py-2 rounded-full">
              NEIEA Course Catalog
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Skills for
              <span className="text-ngo-true-joy block">Tomorrow's World</span>
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12">
              Discover our comprehensive range of courses designed to equip
              learners with essential skills for the modern economy. From
              digital literacy to entrepreneurship, we offer pathways to
              success.
            </p>

            {/* Course Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {courseStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-ngo-true-joy mb-2 flex justify-center">
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

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {courseCategories.map((category) => (
                <Badge
                  key={category.id}
                  className="bg-ngo-encore text-white cursor-pointer hover:bg-ngo-encore/90 px-4 py-2"
                >
                  {category.label} ({category.count})
                </Badge>
              ))}
            </div>
            <div className="text-gray-600">
              Showing {featuredCourses.length} available courses
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-8">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular courses designed by industry experts and
              education specialists to provide practical, job-ready skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white ${
                  course.featured ? "ring-2 ring-ngo-true-joy" : ""
                }`}
              >
                {course.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-ngo-true-joy text-white px-4 py-1">
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="h-48 relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-ngo-encore text-white">
                      {course.category}
                    </Badge>
                    <Badge className="bg-black/60 text-white">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="w-4 h-4 mr-1" />
                      {course.mode}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-ngo-true-joy text-white px-3 py-1 rounded-full text-sm font-bold">
                    {course.price}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl text-ngo-encore font-heading group-hover:text-ngo-rumors transition-colors line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center ml-2">
                      <Star className="w-4 h-4 text-ngo-true-joy fill-current" />
                      <span className="text-sm font-medium ml-1">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {course.description}
                  </CardDescription>

                  {/* Enrollment Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Enrolled: {course.enrolled}</span>
                      <span>Capacity: {course.capacity}</span>
                    </div>
                    <Progress
                      value={(course.enrolled / course.capacity) * 100}
                      className="h-2"
                    />
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-ngo-true-joy" />
                      <span className="text-gray-600">{course.nextBatch}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-ngo-true-joy" />
                      <span className="text-gray-600">
                        {course.enrolled} enrolled
                      </span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-ngo-encore text-sm">
                      What You'll Learn:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.syllabus.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-ngo-true-joy mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-ngo-encore hover:bg-ngo-encore/90 text-white font-semibold rounded-full">
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-ngo-encore text-ngo-encore hover:bg-ngo-encore hover:text-white rounded-full px-4"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-ngo-rumors text-white mb-6 text-lg px-6 py-2">
              Special Programs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-8">
              Upcoming Workshops & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our special workshops and training events designed to provide
              focused learning experiences and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingWorkshops.map((workshop, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-ngo-encore">
                      {workshop.title}
                    </h3>
                    <Badge className="bg-ngo-true-joy text-white">
                      {workshop.mode}
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-ngo-true-joy" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-ngo-true-joy" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-ngo-true-joy" />
                      {workshop.participants} participants max
                    </div>
                  </div>
                  <Button className="w-full bg-ngo-rumors hover:bg-ngo-rumors/90 text-white font-semibold rounded-full">
                    Register for Workshop
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-ngo-true-joy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners who have transformed their lives through
            NEIEA's courses. Whether you're looking to gain new skills, advance
            your career, or start a business, we have the right program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-ngo-true-joy hover:bg-gray-100 px-12 py-4 text-lg rounded-full font-semibold"
            >
              Browse All Courses
              <BookOpen className="ml-3 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ngo-true-joy px-12 py-4 text-lg rounded-full font-semibold"
            >
              Download Course Catalog
              <Download className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
