import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Users,
  GraduationCap,
  Stethoscope,
  Home,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  Play,
  Clock,
  Target,
  Globe,
  BookOpen,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  School,
  Laptop,
  Monitor,
  Wifi,
  Smartphone,
  Coffee,
  Building,
  Zap,
  Shield,
  CheckCircle,
  UserCheck,
  Trophy,
  Briefcase,
  DollarSign,
  Calculator,
  PieChart,
  BarChart3,
  Headphones,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import img1 from "../images/home/banner1.jpg";
import img2 from "../images/home/banner2.jpg";
import img3 from "../images/home/banner3.jpg";

const Index = () => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSlides = [
    {
      image: img1,
      title: "Empowering Through Education",
      subtitle: "Innovation • Equity • Excellence",
      description:
        "Building bridges to quality education for underserved communities through innovative programs and sustainable solutions.",
      cta: "Start Your Journey",
      stats: { students: "15,000+", programs: "50+", communities: "200+" },
    },
    {
      image: img2,
      title: "Skills for Tomorrow",
      subtitle: "Digital Literacy • Vocational Training",
      description:
        "Preparing students for the future workforce with cutting-edge technology training and 21st-century skills development.",
      cta: "Explore Courses",
      stats: { graduates: "5,000+", placements: "85%", partners: "120+" },
    },
    {
      image: img3,
      title: "Community Innovation",
      subtitle: "Local Solutions • Global Impact",
      description:
        "Working hand-in-hand with communities to develop locally-relevant educational solutions that create lasting change.",
      cta: "See Our Impact",
      stats: { villages: "150+", teachers: "800+", years: "12+" },
    },
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const quickStats = [
    {
      value: "15,000+",
      label: "Students Impacted",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Learners across 25 countries",
    },
    {
      value: "200+",
      label: "Communities Served",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Rural and urban areas",
    },
    {
      value: "12+",
      label: "Years of Excellence",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Proven track record",
    },
    {
      value: "85%",
      label: "Graduate Employment",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Job placement success",
    },
  ];

  const featuredPrograms = [
    {
      icon: <School className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Primary Education Access",
      description:
        "Establishing schools and learning centers in remote areas, providing quality foundational education for children who otherwise wouldn't have access.",
      impact: "8,000+ children enrolled",
      image: "/placeholder.svg",
      link: "/our-work",
      color: "bg-ngo-encore",
      features: [
        "Remote Area Schools",
        "Quality Teachers",
        "Learning Materials",
      ],
    },
    {
      icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Digital Skills Training",
      description:
        "Comprehensive computer literacy and digital skills programs preparing students for modern workforce demands.",
      impact: "3,500+ students certified",
      image: "/placeholder.svg",
      link: "/courses",
      color: "bg-ngo-rumors",
      features: ["Computer Literacy", "Job Placement", "Online Learning"],
    },
    {
      icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Teacher Development",
      description:
        "Training and mentoring educators with modern teaching methodologies and continuous professional development.",
      impact: "800+ teachers trained",
      image: "/placeholder.svg",
      link: "/our-work",
      color: "bg-ngo-true-joy",
      features: ["Modern Pedagogy", "Ongoing Support", "Best Practices"],
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation Labs",
      description:
        "Creative learning spaces equipped with modern technology, fostering innovation and problem-solving skills.",
      impact: "25+ labs established",
      image: "/placeholder.svg",
      link: "/our-work",
      color: "bg-ngo-purple-basil",
      features: ["STEM Equipment", "Creative Spaces", "Problem Solving"],
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Developer, Former Student",
      story:
        "From a village with no electricity to becoming a software developer at a tech company. NEIEA's digital literacy program changed my life completely.",
      image: "/placeholder.svg",
      video: true,
      achievement: "First in family to graduate college",
      location: "Rajasthan, India",
    },
    {
      name: "James Kato",
      role: "Community Teacher, Uganda",
      story:
        "NEIEA's teacher training program equipped me with modern teaching methods. Now my students consistently score in the top 10% nationally.",
      image: "/placeholder.svg",
      video: false,
      achievement: "95% student pass rate",
      location: "Kampala, Uganda",
    },
    {
      name: "Maria Rodriguez",
      role: "Young Entrepreneur, Guatemala",
      story:
        "The entrepreneurship course taught me to start my own business. I now employ 15 people from my community and run a successful textile company.",
      image: "/placeholder.svg",
      video: true,
      achievement: "15 jobs created",
      location: "Guatemala City",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual Education Innovation Summit",
      date: "March 15-17, 2025",
      location: "Virtual & Delhi, India",
      description:
        "Join educators, innovators, and policy makers discussing the future of education in underserved communities.",
      attendees: 2500,
      type: "Conference",
    },
    {
      title: "Digital Skills Workshop Series",
      date: "April 1-30, 2025",
      location: "Multiple Centers",
      description:
        "Month-long intensive digital literacy training for rural youth, including certification programs.",
      attendees: 500,
      type: "Workshop",
    },
  ];

  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ngo-mocha-mousse/85 via-ngo-mocha-mousse/80 to-ngo-cinnamon-slate/75 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
            ></div>

            <div className="relative z-20 h-full flex items-center justify-center text-white">
              <div
                className={`text-start w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 ${
                  index === currentSlide ? "animate-fadeInUp" : ""
                }`}
              >
                <Badge className="bg-ngo-true-joy text-white mb-4 sm:mb-6 text-sm sm:text-base px-4 py-1 rounded-full animate-fade-in">
                  {slide.subtitle}
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                  {slide.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={
                        i === slide.title.split(" ").length - 1
                          ? "text-ngo-true-joy block"
                          : ""
                      }
                    >
                      {word}
                      {i === slide.title.split(" ").length - 1 ? "" : " "}
                    </span>
                  ))}
                </h1>

              

                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8 sm:mb-12">
                  <Link to="/courses" className="w-full sm:w-auto">
                    <Button
                      size={isMobile ? "default" : "lg"}
                      className="relative w-full sm:w-auto bg-gradient-to-r from-ngo-true-joy to-ngo-true-joy/90 hover:from-ngo-true-joy/90 hover:to-ngo-true-joy text-white px-6 lg:px-8 py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 font-semibold btn-enhanced group overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        {slide.cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/stories" className="w-full sm:w-auto">
                    <Button
                      size={isMobile ? "default" : "lg"}
                      variant="outline"
                      className="relative w-full sm:w-auto border-2 border-white text-white  hover:text-ngo-mocha-mousse px-6 lg:px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-500 font-semibold group backdrop-blur-sm bg-white/10 hover:bg-white hover:scale-105"
                    >
                      <span className="flex items-center justify-center">
                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        <span className="hidden sm:inline">
                          Watch Success Stories
                        </span>
                        <span className="sm:hidden">Success Stories</span>
                      </span>
                    </Button>
                  </Link>
                </div>

                {/* Slide-specific stats */}
                <div className="flex  sm:flex-row gap-4 justify-start items-center mb-8 sm:mb-12">
                  {Object.entries(slide.stats).map(([key, value], i) => (
                    <div
                      key={i}
                      className={`text-center w-auto bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 group cursor-pointer animate-fadeInUp animate-delay-${
                        (i + 3) * 100
                      }`}
                    >
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-ngo-true-joy to-white bg-clip-text text-transparent">
                        {value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-200 capitalize group-hover:text-white transition-colors duration-300">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20 hover:border-white/40 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20 hover:border-white/40 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-ngo-true-joy scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-ngo-true-joy rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Quick Impact Stats */}
      <section className="py-12 sm:py-16 bg-ngo-true-joy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-3 sm:mb-4">
              Transforming Lives Through Education
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Every program we run, every student we teach, creates ripples of
              positive change across communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="p-2 sm:p-3 bg-ngo-true-joy/20 rounded-full group-hover:bg-ngo-true-joy/30 transition-colors duration-300">
                    <div className="text-ngo-true-joy group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-white/70">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="bg-ngo-encore text-white mb-4 sm:mb-6 text-sm sm:text-base px-4 py-1">
              Our Impact Areas
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-4 sm:mb-6">
              Educational Programs That
              <span className="text-ngo-rumors block">
                Create Lasting Change
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From primary education access to advanced digital skills training,
              our comprehensive programs address every stage of the learning
              journey with innovation and equity at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {featuredPrograms.map((program, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-md overflow-hidden bg-gradient-to-br from-white to-gray-50 card-hover animate-fadeInUp animate-delay-${
                  index * 100
                }`}
              >
                <div className="h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-ngo-mocha-mousse to-ngo-cinnamon-slate relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-ngo-encore/60 group-hover:bg-ngo-encore/40 transition-colors duration-300"></div>
                  <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-ngo-true-joy text-white text-xs px-2 py-1">
                      {program.impact}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-ngo-encore mb-2 sm:mb-3 font-heading">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {program.description}
                  </CardDescription>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-ngo-encore mb-1 sm:mb-2">
                      Key Features:
                    </h4>
                    <div className="space-y-1">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <CheckCircle className="w-3 h-3 mr-2 text-ngo-true-joy flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={program.link}>
                    <Button className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white font-semibold rounded-lg group text-xs sm:text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button
                size={isMobile ? "default" : "lg"}
                className="bg-ngo-rumors hover:bg-ngo-rumors/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold"
              >
                Explore All Programs
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-12 sm:py-16 lg:py-24 bg-ngo-quietude/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="bg-ngo-purple-basil text-white mb-4 sm:mb-6 text-sm sm:text-base px-4 py-1">
              Student Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-4 sm:mb-6">
              Lives Transformed Through
              <span className="text-ngo-rumors block">
                Education & Innovation
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the incredible students, teachers, and entrepreneurs whose
              lives have been transformed through NEIEA's educational programs
              and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {story.video && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-black/60 text-white text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex text-ngo-true-joy mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-4 sm:mb-6">
                    "{story.story}"
                  </p>
                  <div className="border-t pt-3 sm:pt-4">
                    <h4 className="font-semibold text-ngo-encore text-base sm:text-lg">
                      {story.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                      {story.role}
                    </p>
                    <Badge className="bg-ngo-true-joy/10 text-ngo-true-joy text-xs">
                      {story.achievement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/stories">
              <Button
                size={isMobile ? "default" : "lg"}
                className="bg-ngo-purple-basil hover:bg-ngo-purple-basil/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold"
              >
                Read More Success Stories
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="bg-ngo-rumors text-white mb-4 sm:mb-6 text-sm sm:text-base px-4 py-1">
              Join Our Community
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ngo-encore mb-4 sm:mb-6">
              Upcoming Events & Programs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with educators, innovators, and change-makers through our
              events, workshops, and training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-ngo-mocha-mousse to-ngo-rumors relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-3 left-3 bg-ngo-true-joy text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {event.attendees.toLocaleString()} attending
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/20 text-white text-xs">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-ngo-encore mb-3 sm:mb-4 font-heading">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-ngo-true-joy" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-ngo-true-joy" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {event.description}
                  </p>
                  <Button className="w-full bg-ngo-rumors hover:bg-ngo-rumors/90 text-white font-semibold rounded-lg text-sm sm:text-base">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="border-2 border-ngo-encore text-ngo-encore hover:bg-ngo-encore hover:text-white px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-24 bg-ngo-encore text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 sm:mb-8">
            Ready to Join Our Mission?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you donate, volunteer, or enroll in our programs, every
            action helps us create more equitable educational opportunities.
            Together, we can build a future where quality education is
            accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/donate" className="w-full sm:w-auto">
              <Button
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full shadow-xl font-semibold"
              >
                Support Education
                <Heart className="ml-2 sm:ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/volunteer" className="w-full sm:w-auto">
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full font-semibold"
              >
                Become a Volunteer
                <Users className="ml-2 sm:ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/courses" className="w-full sm:w-auto">
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-6 sm:px-8 py-4 text-base sm:text-lg rounded-full font-semibold"
              >
                Join Our Courses
                <BookOpen className="ml-2 sm:ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;