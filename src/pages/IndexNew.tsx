import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import img1 from "../images/home/banner1.jpg";
import img2 from "../images/home/banner2.jpg";
import img3 from "../images/home/banner3.jpg";
import impactReport from "../assets/pdfs/NEIEA-Impact-report.pdf";

import {
    GraduationCap,
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
    ArrowRight,
    Play,
    ChevronRight,
    ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const IndexNew = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const stats = [
        {
            value: "55%",
            label: "Learners are Girls & Women",
            icon: <Users className="w-5 h-5" />,
        },
        {
            value: "3,500+",
            label: "Learners completed courses",
            icon: <GraduationCap className="w-5 h-5" />,
        },
        {
            value: "1,500+",
            label: "Teachers trained",
            icon: <Award className="w-5 h-5" />,
        },
        {
            value: "250+",
            label: "Towns & Cities served",
            icon: <Globe className="w-5 h-5" />,
        },
        {
            value: "53+",
            label: "Daily classes (6 AM - 10 PM)",
            icon: <TrendingUp className="w-5 h-5" />,
        },
        {
            value: "14,300+",
            label: "Students registered",
            icon: <BookOpen className="w-5 h-5" />,
        },
        {
            value: "65+",
            label: "Partner Institutions",
            icon: <Building className="w-5 h-5" />,
        },
    ];

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

    return (
        <Layout>

            {/* Hero Slider Section */}
            <section className="relative h-screen min-h-[600px] overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                            }`}
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-ngo-color1/85 via-ngo-color1/80 to-ngo-color3/75 z-10"></div> */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
                            style={{
                                backgroundImage: `url('${slide.image}')`,
                                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
                            }}
                        ></div>

                        {/* <div className="relative z-20 h-full flex items-center justify-center text-white ">
                            <div
                                className={`text-start w-full mx-auto px-4 sm:px-6 lg:px-8 py-16  ${index === currentSlide ? "animate-fadeInUp" : ""
                                    }`}
                            >
                                <Badge className="bg-ngo-color4 text-white mb-4 sm:mb-6 text-sm sm:text-base px-4 py-1 rounded-full animate-fade-in">
                                    {slide.subtitle}
                                </Badge>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                                    {slide.title.split(" ").map((word, i) => (
                                        <span
                                            key={i}
                                            className={
                                                i === slide.title.split(" ").length - 1
                                                    ? "text-ngo-color4 block"
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
                                            className="relative w-full sm:w-auto bg-gradient-to-r from-ngo-color4 to-ngo-color4/90 hover:from-ngo-color4/90 hover:to-ngo-color4 text-white px-6 lg:px-8 py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 font-semibold btn-enhanced group overflow-hidden"
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
                                            className="relative w-full sm:w-auto border-2 border-white text-white  hover:text-ngo-color1 px-6 lg:px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-500 font-semibold group backdrop-blur-sm bg-white/10 hover:bg-white hover:scale-105"
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

                                Slide-specific stats
                                <div className="flex  sm:flex-row gap-4 justify-start items-center mb-8 sm:mb-12">
                                    {Object.entries(slide.stats).map(([key, value], i) => (
                                        <div
                                            key={i}
                                            className={`text-center w-auto bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 group cursor-pointer animate-fadeInUp animate-delay-${(i + 3) * 100
                                                }`}
                                        >
                                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-ngo-color4 to-white bg-clip-text text-transparent">
                                                {value}
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-200 capitalize group-hover:text-white transition-colors duration-300">
                                                {key.replace(/([A-Z])/g, " $1")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}
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
                            className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${index === currentSlide
                                ? "bg-ngo-color4 scale-125 shadow-lg"
                                : "bg-white/50 hover:bg-white/75 hover:scale-110"
                                }`}
                        >
                            {index === currentSlide && (
                                <div className="absolute inset-0 bg-ngo-color4 rounded-full animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* Hero / Introduction */}

            <section className="relative overflow-hidden bg-gradient-to-br from-ngo-color1 via-ngo-color1 to-ngo-color3 text-white">

                <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
                    <Badge className="bg-ngo-color4 text-white mb-4">NEIEA'S INTRODUCTION</Badge>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4">
                        Welcome to NEIEA, The New Equitable and Innovative Educational Association
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-4xl leading-relaxed">
                        NEIEA is committed to revolutionizing education through innovative approaches and extensive collaborations.
                        Since April 2022, NEIEA has introduced 13 free online courses and partnered with various institutions to benefit
                        thousands of learners. We employ cutting-edge technological tools, the best pedagogy and teaching practices, and
                        ethical, transparent, and democratic processes to make education equitable and accessible for learners worldwide.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Link to="/courses">
                            <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                                Explore Free Courses
                            </Button>
                        </Link>
                        <Link to="/donate">
                            <Button variant="outline" className="border-2 border-white text-black hover:text-ngo-color1">
                                Support Our Mission
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                        <Badge className="bg-ngo-color6 text-white mb-4">ABOUT US</Badge>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ngo-color6 mb-4">
                            Equitable. Innovative. Transparent.
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            NEIEA (The New Equitable and Innovative Educational Association) is a non-profit NGO led by educationists and
                            supporters committed to advancing educational goals with innovative pedagogy, inclusive culture, and cutting-edge
                            technology. As a knowledge sharing platform, we collaborate with Educational Institutions, Colleges, and Skills
                            Development Centers. Join us in bringing transformative changes to education, making it equitable and innovative for everyone!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50">
                            <CardHeader>
                                <Badge className="bg-ngo-color2 text-white mb-2 flex justify-center">Our Vision</Badge>
                                <CardTitle className="text-ngo-color6">A society transformed by quality education</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 leading-relaxed">
                                To envision a society where all youth and citizens are able to obtain good quality education and use this to
                                transform society ensuring human welfare, sustainability, and progress.
                            </CardContent>
                        </Card>

                        <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50">
                            <CardHeader>
                                <Badge className="bg-ngo-color4 text-white mb-2 flex justify-center">Our Mission</Badge>
                                <CardTitle className="text-ngo-color6">Good quality, innovative education for all</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 leading-relaxed">
                                To provide good quality and innovative education to all segments of society with high consideration given to
                                providing free education to the poor.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Impact & Credibility */}
            <section className="py-12 sm:py-16 bg-ngo-color8/20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                        <Card className="border-0 shadow-md lg:col-span-2">
                            <CardHeader className="pb-2">
                                <Badge className="bg-ngo-color5 text-white mb-2 flex justify-center">Impact Report 2022–24</Badge>
                                <CardTitle className="text-ngo-color6">Education for All</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 leading-relaxed">
                                NEIEA is committed to revolutionizing education through innovative approaches and extensive collaborations. Since April 2022,
                                NEIEA has introduced 13 free online courses and partnered with various institutions to benefit thousands of learners. We are
                                recognized for credibility and transparency, having obtained the 80G certification for tax-exempt donations and a Darpan ID to
                                ensure compliance and accountability. NEIEA uses a modern pedagogy called Discourse Oriented Pedagogy (DOP) to nurture critical
                                thinking—unlike the widely used rote-memorization approach.
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="flex items-start gap-3">
                                        <Shield className="w-5 h-5 text-ngo-color4 mt-1" />
                                        <p className="text-sm">80G certified and registered with Darpan for transparency and accountability.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="w-5 h-5 text-ngo-color4 mt-1" />
                                        <p className="text-sm">Discourse Oriented Pedagogy (DOP) fosters analytical, critical, and collaborative learning.</p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <a href={impactReport} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white">
                                            Click Here To Know More
                                        </Button>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader className="pb-2">
                                <Badge className="bg-ngo-color6 text-white mb-2 flex justify-center">Key Outcomes</Badge>
                                <CardTitle className="text-ngo-color6">Highlights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-ngo-color4 mt-1 mr-2" /> 13 free online courses introduced since 2022
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-ngo-color4 mt-1 mr-2" /> Thousands of learners benefited via partnerships
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-ngo-color4 mt-1 mr-2" /> Inclusive, ethical, and democratic operating processes
                                    </li>
                                </ul>
                                {/* <div className="mt-4">
                                    <Link to="/reports">
                                        <Button className="w-full bg-ngo-color6 hover:bg-ngo-color6/90 text-white">
                                            View Impact Updates
                                        </Button>
                                    </Link>
                                </div> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12">
                        <Badge className="bg-ngo-color4 text-white mb-4">We connect children to a bright future</Badge>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ngo-color6">At-a-glance</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
                        {stats.map((s, i) => (
                            <div key={i} className="bg-ngo-color8/20 rounded-xl p-4 border border-ngo-color8/30 hover:shadow-md transition-all">
                                <div className="flex items-center gap-2 text-ngo-color4 mb-2">{s.icon}<span className="text-xs text-ngo-color6">{s.label}</span></div>
                                <div className="text-2xl font-bold text-ngo-color6">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 sm:py-16 bg-ngo-color6 text-white">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h3 className="text-3xl font-heading font-bold mb-3">Join the Movement</h3>
                    <p className="text-white/90 max-w-3xl mx-auto mb-6">
                        Partner with us, volunteer your time, or support a learner. Together we can make education equitable and innovative for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/volunteer">
                            <Button variant="outline" className="border-2 border-white text-black">Become a Volunteer</Button>
                        </Link>
                        <Link to="/donate">
                            <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white">
                                Donate <Heart className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexNew;


