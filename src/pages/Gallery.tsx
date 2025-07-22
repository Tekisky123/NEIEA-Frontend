import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCards from "@/components/VideoCards";
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
  Users,
  ArrowRight,
  Download,
  Share2,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Media", count: 48 },
    { id: "classrooms", label: "Classrooms", count: 18 },
    { id: "events", label: "Events", count: 12 },
    { id: "graduation", label: "Graduations", count: 8 },
    { id: "community", label: "Community", count: 10 },
  ];

  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Digital Learning Center Opening",
      description:
        "Grand opening of our new learning center in rural Rajasthan",
      location: "Rajasthan, India",
      date: "March 2025",
      category: "events",
      thumbnail: "/placeholder.svg",
      featured: true,
      tags: ["Opening Ceremony", "Digital Learning", "Community"],
    },
    {
      id: 2,
      type: "video",
      title: "Student Success Stories",
      description: "Compilation of student testimonials and achievements",
      location: "Multiple Locations",
      date: "February 2025",
      category: "graduation",
      thumbnail: "/placeholder.svg",
      duration: "5:32",
      featured: true,
      tags: ["Success Stories", "Testimonials", "Achievements"],
    },
    {
      id: 3,
      type: "image",
      title: "Computer Training Session",
      description: "Students learning basic computer skills",
      location: "Bangladesh",
      date: "January 2025",
      category: "classrooms",
      thumbnail: "/placeholder.svg",
      featured: false,
      tags: ["Training", "Computers", "Students"],
    },
    {
      id: 4,
      type: "video",
      title: "Teacher Training Workshop",
      description: "Modern pedagogy training for rural teachers",
      location: "Uganda",
      date: "December 2024",
      category: "events",
      thumbnail: "/placeholder.svg",
      duration: "8:45",
      featured: false,
      tags: ["Teacher Training", "Workshop", "Professional Development"],
    },
    {
      id: 5,
      type: "image",
      title: "Community Graduation Ceremony",
      description: "100 students receive certificates in digital literacy",
      location: "Guatemala",
      date: "November 2024",
      category: "graduation",
      thumbnail: "/placeholder.svg",
      featured: true,
      tags: ["Graduation", "Certificates", "Community"],
    },
    {
      id: 6,
      type: "image",
      title: "Innovation Lab Setup",
      description: "New STEM equipment installation",
      location: "Kenya",
      date: "October 2024",
      category: "classrooms",
      thumbnail: "/placeholder.svg",
      featured: false,
      tags: ["Innovation Lab", "STEM", "Equipment"],
    },
    {
      id: 7,
      type: "video",
      title: "Women's Entrepreneurship Program",
      description: "Documentary on our women's business training program",
      location: "India",
      date: "September 2024",
      category: "community",
      thumbnail: "/placeholder.svg",
      duration: "12:18",
      featured: false,
      tags: ["Women Empowerment", "Business Training", "Entrepreneurship"],
    },
    {
      id: 8,
      type: "image",
      title: "Village Learning Session",
      description: "Outdoor learning session with local community",
      location: "Mali",
      date: "August 2024",
      category: "community",
      thumbnail: "/placeholder.svg",
      featured: false,
      tags: ["Community Learning", "Outdoor", "Local Engagement"],
    },
    {
      id: 9,
      type: "video",
      title: "Annual Impact Report 2024",
      description: "Year in review: our achievements and impact",
      location: "Global",
      date: "December 2024",
      category: "events",
      thumbnail: "/placeholder.svg",
      duration: "15:30",
      featured: true,
      tags: ["Annual Report", "Impact", "Year Review"],
    },
    {
      id: 10,
      type: "image",
      title: "Children's Learning Workshop",
      description: "Young students engaged in creative learning activities",
      location: "Philippines",
      date: "July 2024",
      category: "classrooms",
      thumbnail: "/placeholder.svg",
      featured: false,
      tags: ["Children", "Creative Learning", "Workshop"],
    },
    {
      id: 11,
      type: "image",
      title: "Technology Training Center",
      description: "State-of-the-art computer lab in rural area",
      location: "Pakistan",
      date: "June 2024",
      category: "classrooms",
      thumbnail: "/placeholder.svg",
      featured: false,
      tags: ["Technology", "Computer Lab", "Infrastructure"],
    },
    {
      id: 12,
      type: "video",
      title: "Volunteer Appreciation Event",
      description: "Celebrating our dedicated volunteers worldwide",
      location: "Virtual Event",
      date: "May 2024",
      category: "events",
      thumbnail: "/placeholder.svg",
      duration: "7:22",
      featured: false,
      tags: ["Volunteers", "Appreciation", "Community"],
    },
  ];

  const filteredMedia =
    selectedCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  const featuredMedia = mediaItems.filter((item) => item.featured);

  return (
    <Layout>
      <HeroCarousel pageKey="introduction" />

      {/* Hero Section */}
      {/* <section className="py-16 bg-gradient-to-r from-ngo-color6 to-ngo-color2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Media Gallery
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Explore photos and videos showcasing our educational programs,
              community impact, and the incredible journeys of our students and
              educators worldwide.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-200">Photos</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold mb-1">150+</div>
                <div className="text-sm text-gray-200">Videos</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold mb-1">25</div>
                <div className="text-sm text-gray-200">Countries</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold mb-1">12+</div>
                <div className="text-sm text-gray-200">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gradient-to-r from-ngo-color6 to-ngo-color2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            About NEIEA Introduction
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              NEIEA (New Equitable And Innovative Educational Association) is dedicated to empowering communities through quality education, innovation, and equity. Our mission is to bridge educational gaps and create sustainable solutions for underserved populations. Explore our story, vision, and impact below.
            </p>
          </div>
        </div>
      </section>

      <VideoCards />

      {/* Featured Media */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
              Featured Media
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighted moments that capture the essence of our mission and
              the transformation happening in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredMedia.slice(0, 3).map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white rounded-full w-16 h-16">
                        <Play className="w-6 h-6 ml-1" />
                      </Button>
                      {item.duration && (
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                          {item.duration}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-ngo-color4 text-white">
                      {item.type === "video" ? "Video" : "Photo"}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ngo-color6 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-sm">
                      View Full Size
                    </Button>
                    <Button
                      variant="outline"
                      className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white"
                      size="sm"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Filter and View Controls */}
      {/* <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-ngo-color6 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-ngo-color6/10 hover:text-ngo-color6 border border-gray-200"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-ngo-color6 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-ngo-color6 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <div className="text-gray-600 text-sm">
                {filteredMedia.length} items
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Media Grid */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((item) => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <Button className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white rounded-full w-12 h-12">
                          <Play className="w-4 h-4 ml-0.5" />
                        </Button>
                      </div>
                    )}

                    <div className="absolute top-2 left-2">
                      <Badge
                        className={`text-xs ${
                          item.type === "video"
                            ? "bg-red-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {item.type === "video" ? "Video" : "Photo"}
                      </Badge>
                    </div>

                    <div className="absolute bottom-2 left-2 text-white text-xs">
                      <div className="flex items-center mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h4 className="font-bold text-ngo-color6 mb-2 text-sm line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    <div className="flex gap-1">
                      <Button className="flex-1 bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-xs py-1">
                        View
                      </Button>
                      <Button
                        variant="outline"
                        className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white text-xs px-2"
                      >
                        <Share2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMedia.map((item) => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-1">
                        <div className="h-32 relative overflow-hidden rounded-lg">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-ngo-color6 mb-2">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {item.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                          <Badge
                            className={
                              item.type === "video"
                                ? "bg-red-500 text-white"
                                : "bg-blue-500 text-white"
                            }
                          >
                            {item.type === "video" ? "Video" : "Photo"}
                          </Badge>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs border-gray-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button className="bg-ngo-color6 hover:bg-ngo-color6/90 text-white">
                            View Full Size
                          </Button>
                          <Button
                            variant="outline"
                            className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button
                            variant="outline"
                            className="border-ngo-color6 text-ngo-color6 hover:bg-ngo-color6 hover:text-white"
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-ngo-color4 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Share Your Story
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Have photos or videos from our programs? We'd love to feature your
            contributions in our gallery to inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-ngo-color4 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
            >
              Submit Media
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-ngo-color4 px-8 py-3 text-lg font-medium"
            >
              Download Gallery
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Gallery;
