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
  Play,
  Heart,
  MapPin,
  Calendar,
  Star,
  Quote,
  Users,
  ArrowRight,
  BookOpen,
  Award,
  Globe,
  TrendingUp,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const Stories = () => {
  const storyStats = [
    {
      value: "500+",
      label: "Success Stories",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      value: "15,000+",
      label: "Lives Transformed",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      value: "85%",
      label: "Employment Success",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "200+",
      label: "Communities Impacted",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const featuredStories = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 22,
      location: "Rajasthan, India",
      program: "Digital Literacy Program",
      story:
        "From a village with no electricity to becoming a software developer at a tech company in Delhi. NEIEA's digital literacy program opened doors I never knew existed.",
      beforeAfter: {
        before: "Village girl with no computer access",
        after: "Software Developer at TechCorp",
      },
      achievement: "First in her family to work in tech",
      image: "/placeholder.svg",
      video: true,
      duration: "8:32",
      featured: true,
      tags: ["Digital Skills", "Employment", "Women Empowerment"],
      yearJoined: 2022,
      currentStatus: "Employed",
    },
    {
      id: 2,
      name: "James Kato",
      age: 28,
      location: "Kampala, Uganda",
      program: "Teacher Training Initiative",
      story:
        "As a rural teacher, I struggled with modern teaching methods. NEIEA's training transformed my classroom and my students' performance soared.",
      beforeAfter: {
        before: "Traditional teaching methods, 40% pass rate",
        after: "Modern pedagogy expert, 95% pass rate",
      },
      achievement: "Best Teacher Award 2024",
      image: "/placeholder.svg",
      video: true,
      duration: "12:15",
      featured: true,
      tags: ["Teacher Development", "Education Innovation"],
      yearJoined: 2021,
      currentStatus: "Teaching",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      age: 35,
      location: "Guatemala City, Guatemala",
      program: "Women's Entrepreneurship",
      story:
        "The entrepreneurship course taught me to turn my textile skills into a business. I now employ 15 women from my community.",
      beforeAfter: {
        before: "Unemployed single mother",
        after: "Successful business owner",
      },
      achievement: "15 jobs created in community",
      image: "/placeholder.svg",
      video: false,
      featured: false,
      tags: ["Entrepreneurship", "Women Empowerment", "Job Creation"],
      yearJoined: 2020,
      currentStatus: "Business Owner",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      age: 19,
      location: "Cairo, Egypt",
      program: "Digital Skills Bootcamp",
      story:
        "I was selling tea on the streets. After learning web development through NEIEA, I now work remotely for international clients.",
      beforeAfter: {
        before: "Street vendor earning $2/day",
        after: "Freelance web developer earning $30/day",
      },
      achievement: "15x income increase",
      image: "/placeholder.svg",
      video: true,
      duration: "6:45",
      featured: false,
      tags: ["Digital Skills", "Career Change", "Remote Work"],
      yearJoined: 2023,
      currentStatus: "Freelancer",
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      age: 24,
      location: "Dhaka, Bangladesh",
      program: "Girls' Scholarship Program",
      story:
        "Thanks to NEIEA's scholarship, I completed my engineering degree and now work on renewable energy projects.",
      beforeAfter: {
        before: "Unable to afford university",
        after: "Renewable Energy Engineer",
      },
      achievement: "First female engineer in her village",
      image: "/placeholder.svg",
      video: false,
      featured: false,
      tags: ["Scholarship", "Women in STEM", "Engineering"],
      yearJoined: 2019,
      currentStatus: "Engineer",
    },
    {
      id: 6,
      name: "Robert Mensah",
      age: 31,
      location: "Accra, Ghana",
      program: "Innovation Labs",
      story:
        "Using skills from NEIEA's innovation lab, I developed a mobile app that helps farmers get fair prices for their crops.",
      beforeAfter: {
        before: "Struggling small farmer",
        after: "Tech entrepreneur and farmer advocate",
      },
      achievement: "App used by 5,000+ farmers",
      image: "/placeholder.svg",
      video: true,
      duration: "10:20",
      featured: false,
      tags: ["Innovation", "Agriculture", "Technology"],
      yearJoined: 2021,
      currentStatus: "Entrepreneur",
    },
  ];

  const impactMetrics = [
    {
      category: "Education",
      stories: 180,
      avgImprovement: "300% income increase",
      topSuccess: "95% completion rate",
    },
    {
      category: "Employment",
      stories: 220,
      avgImprovement: "85% job placement",
      topSuccess: "Remote work opportunities",
    },
    {
      category: "Entrepreneurship",
      stories: 100,
      avgImprovement: "50 businesses created",
      topSuccess: "200+ jobs generated",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ngo-purple-basil to-ngo-mocha-mousse text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-ngo-true-joy text-white mb-6 text-lg px-6 py-2 rounded-lg">
              Real Stories, Real Impact
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Stories of Transformation
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Meet the incredible people whose lives have been transformed
              through NEIEA's educational programs. These stories showcase the
              power of education to create lasting change.
            </p>

            {/* Story Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {storyStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-ngo-true-joy mb-2 flex justify-center">
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

      {/* Featured Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Spotlight on transformative journeys that exemplify the impact of
              educational opportunity and determination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredStories
              .filter((story) => story.featured)
              .map((story) => (
                <Card
                  key={story.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {story.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <Button className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white rounded-full w-16 h-16">
                          <Play className="w-6 h-6 ml-1" />
                        </Button>
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                          {story.duration}
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ngo-true-joy text-white">
                        Featured
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {story.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        Class of {story.yearJoined}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-ngo-encore">
                          {story.name}
                        </h3>
                        <p className="text-gray-600">
                          {story.age} years old • {story.currentStatus}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-2 border-ngo-purple-basil text-ngo-purple-basil"
                        >
                          {story.program}
                        </Badge>
                      </div>
                    </div>

                    <div className="bg-ngo-true-joy/10 p-4 rounded-lg border-l-4 border-ngo-true-joy mb-6">
                      <Quote className="w-6 h-6 text-ngo-true-joy mb-2" />
                      <p className="text-gray-700 italic leading-relaxed">
                        "{story.story}"
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Before:</span>
                        <span className="text-sm text-gray-800">
                          {story.beforeAfter.before}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">After:</span>
                        <span className="text-sm font-medium text-ngo-encore">
                          {story.beforeAfter.after}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Achievement:
                        </span>
                        <span className="text-sm font-medium text-ngo-true-joy">
                          {story.achievement}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-ngo-purple-basil hover:bg-ngo-purple-basil/90 text-white">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              More Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover more inspiring journeys of transformation and growth
              through education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories
              .filter((story) => !story.featured)
              .map((story) => (
                <Card
                  key={story.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {story.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <Button className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white rounded-full w-12 h-12">
                          <Play className="w-4 h-4 ml-0.5" />
                        </Button>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-sm font-medium">{story.name}</div>
                      <div className="text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <Badge
                      variant="outline"
                      className="mb-3 border-ngo-purple-basil text-ngo-purple-basil"
                    >
                      {story.program}
                    </Badge>

                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {story.story}
                    </p>

                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Achievement:</span>
                        <span className="font-medium text-ngo-true-joy">
                          {story.achievement}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Status:</span>
                        <span className="font-medium">
                          {story.currentStatus}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-ngo-encore hover:bg-ngo-encore/90 text-white text-sm">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Impact by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-encore mb-4">
              Impact by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our programs create measurable impact across different
              areas of education and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-ngo-encore">
                    {metric.category}
                  </CardTitle>
                  <div className="text-3xl font-bold text-ngo-true-joy">
                    {metric.stories}
                  </div>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">
                        Average Impact
                      </div>
                      <div className="font-medium">{metric.avgImprovement}</div>
                    </div>
                    <div className="p-3 bg-ngo-true-joy/10 rounded-lg">
                      <div className="text-sm text-gray-600">Top Success</div>
                      <div className="font-medium text-ngo-true-joy">
                        {metric.topSuccess}
                      </div>
                    </div>
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
            Create Your Own Success Story
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of learners who have transformed their lives through
            NEIEA's programs. Your journey to success starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-ngo-true-joy hover:bg-ngo-true-joy/90 text-white px-8 py-3 text-lg font-medium"
              >
                Explore Courses
                <GraduationCap className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-encore px-8 py-3 text-lg font-medium"
              >
                Support Others
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
