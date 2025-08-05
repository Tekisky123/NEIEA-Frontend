import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import axiosInstance from "@/lib/axiosInstance";

// Types for API data
interface HeroSection {
  _id: string;
  h1: string;
  h2: string;
  page: string;
}

interface BulletPoint {
  _id: string;
  page: string;
  points: string[];
}

interface VideoCard {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  page: string;
}

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  page: string;
}

interface CarouselImage {
  _id: string;
  url: string;
  heading?: string;
  subText?: string;
  ctaText?: string;
  ctaUrl?: string;
}

interface Carousel {
  _id: string;
  page: string;
  images: CarouselImage[];
  createdAt: string;
  updatedAt: string;
}

const ITSkillsTraining = () => {
  const [videoModal, setVideoModal] = useState<{ open: boolean; url: string | null }>({ open: false, url: null });
  
  // API data state
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);
  const [bulletPoints, setBulletPoints] = useState<BulletPoint | null>(null);
  const [videoCards, setVideoCards] = useState<VideoCard[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [carousel, setCarousel] = useState<Carousel | null>(null);
  
  // Loading states
  const [loading, setLoading] = useState(true);
  const [loadingHero, setLoadingHero] = useState(false);
  const [loadingBulletPoints, setLoadingBulletPoints] = useState(false);
  const [loadingVideoCards, setLoadingVideoCards] = useState(false);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);
  const [loadingCarousel, setLoadingCarousel] = useState(false);

  // Fetch data from APIs
  const fetchHeroSection = async () => {
    setLoadingHero(true);
    try {
      const res = await axiosInstance.get("/hero-section/it-skills-training");
      if (res.data.success && res.data.data && res.data.data.length > 0) {
        // API returns an array, take the first item
        setHeroSection(res.data.data[0]);
      }
    } catch (err) {
      console.error("Failed to fetch hero section:", err);
    } finally {
      setLoadingHero(false);
    }
  };

  const fetchBulletPoints = async () => {
    setLoadingBulletPoints(true);
    try {
      const res = await axiosInstance.get("/bullet-points/it-skills-training");
      if (res.data.success && res.data.data && res.data.data.length > 0) {
        // API returns an array, take the first item
        setBulletPoints(res.data.data[0]);
      }
    } catch (err) {
      console.error("Failed to fetch bullet points:", err);
    } finally {
      setLoadingBulletPoints(false);
    }
  };

  const fetchVideoCards = async () => {
    setLoadingVideoCards(true);
    try {
      const res = await axiosInstance.get("/video-cards/it-skills-training");
      if (res.data.success && res.data.data) {
        setVideoCards(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch video cards:", err);
    } finally {
      setLoadingVideoCards(false);
    }
  };

  const fetchTestimonials = async () => {
    setLoadingTestimonials(true);
    try {
      const res = await axiosInstance.get("/testimonials/it-skills-training");
      if (res.data.success && res.data.data) {
        setTestimonials(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const fetchCarousel = async () => {
    setLoadingCarousel(true);
    try {
      const res = await axiosInstance.get("/carousel/it-skills-training");
      if (res.data.success && res.data.data) {
        setCarousel(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch carousel:", err);
    } finally {
      setLoadingCarousel(false);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([
        fetchHeroSection(),
        fetchBulletPoints(),
        fetchVideoCards(),
        fetchTestimonials(),
        fetchCarousel()
      ]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  // Fallback data if API fails
  const fallbackData = {
    title: "IT Skills Training",
    subtitle: "Empowering communities with essential digital skills",
    carouselImages: [
      "https://scoonews.com/wp-content/uploads/2022/07/computer-learning-centre-for-underprivileged-students-610x359114691053741469105374-2.jpg",
      "https://assets.telegraphindia.com/telegraph/18metchandrakona_184229.jpg",
      "https://t4.ftcdn.net/jpg/04/11/19/61/360_F_411196155_bAztsXMFRSprbiFP8mWtDIG6WNVJCg6d.jpg",
    ],
    bulletPoints: [
      "Teachers and educators transitioning to digital platforms",
      "Students under NIOS or other non-mainstream boards",
      "Women and homemakers seeking digital independence",
      "Community workers and NGO staff",
      "Youth and volunteers",
    ],
    videoCarousel: [
      {
        title: "Intro to Google Docs",
        description: "Learn the basics of Google Docs and how to collaborate in real time.",
        duration: "3:45",
        videoUrl: "https://www.youtube.com/embed/abc123",
        thumbnailUrl: "https://media.licdn.com/dms/image/v2/D4D12AQHVMcx-ckRzTQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693712101604?e=2147483647&v=beta&t=x2x4Klr6G4MotvdA5Vknr0huNRVJi0dNJ4ojugImG-Q",
      },
      {
        title: "Basic Excel for Beginners",
        description: "Step-by-step walkthrough of Excel fundamentals and formulas.",
        duration: "5:10",
        videoUrl: "https://www.youtube.com/embed/xyz456",
        thumbnailUrl: "https://s3.amazonaws.com/libapps/accounts/1505/images/Excel_Example_1.jpg",
      },
    ],
    testimonials: [
      {
        name: "Hazeera Khanam",
        message: "Yes it's good. I have learnt so many new things. This program helped me a lot.",
      },
      {
        name: "Naziya Tabassum N",
        message: "Wonderful training center. Very useful training. Got many things to learn. Thanks!",
      },
      {
        name: "Y. Md. Habeebullah Roomy",
        message: "I sincerely appreciate and admire the exceptional coaching provided by my mentor...",
      },
    ],
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ngo-color6"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center bg-gradient-to-br from-ngo-color1/10 to-ngo-color3/10 py-12 px-4 md:px-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ngo-color6">
            {heroSection?.h1 || fallbackData.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-ngo-color4 mb-6">
            {heroSection?.h2 || fallbackData.subtitle}
          </h2>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="carousel-section py-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto gap-4 pb-2">
            {(carousel?.images && carousel.images.length > 0 ? carousel.images : fallbackData.carouselImages).map((img, i) => (
              <img
                key={i}
                src={typeof img === 'string' ? img : img.url}
                alt={`Carousel ${i + 1}`}
                className="rounded-lg shadow w-72 h-44 object-cover flex-shrink-0 border-2 border-ngo-color1/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bullet Points */}
      <section className="bullets-section py-10 bg-ngo-color1/5">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-ngo-color6">Who is this for?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(bulletPoints?.points && bulletPoints.points.length > 0 ? bulletPoints.points : fallbackData.bulletPoints).map((point, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded shadow p-4 border-l-4 border-ngo-color4">
                <span className="text-ngo-color4 mt-1">✔️</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Video Carousel */}
      <section className="video-carousel-section py-10 bg-white">
        <h3 className="text-2xl font-bold mb-6 text-center text-ngo-color6">Video Tutorials</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {(videoCards.length > 0 ? videoCards : fallbackData.videoCarousel).map((video, i) => (
            <div key={i} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col border border-ngo-color1/10">
              <div className="relative cursor-pointer" onClick={() => setVideoModal({ open: true, url: video.videoUrl })}>
                <img 
                  src={video.thumbnail || video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-40 object-cover rounded mb-2 border border-ngo-color4/20" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/80 rounded-full p-2 text-ngo-color6 text-2xl">▶</span>
                </div>
              </div>
              <div className="font-semibold text-lg mt-2 text-ngo-color6">{video.title}</div>
              <div className="text-xs text-gray-500 mb-1">{video.duration}</div>
              <div className="text-sm text-gray-600 mb-2">{video.description}</div>
            </div>
          ))}
        </div>
        {/* Video Modal */}
        {videoModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full relative">
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setVideoModal({ open: false, url: null })}>×</button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={videoModal.url}
                  title="Video Player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-96 rounded"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-10 bg-ngo-color1/5">
        <h3 className="text-2xl font-bold mb-6 text-center text-ngo-color6">What Our Learners Say</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {(testimonials.length > 0 ? testimonials : fallbackData.testimonials).map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border-l-4 border-ngo-color4">
              <blockquote className="italic text-gray-700 text-lg mb-2 relative">
                <span className="text-3xl text-ngo-color4 absolute -left-4 -top-2">"</span>
                {t.message}
                <span className="text-3xl text-ngo-color4 absolute -right-4 -bottom-2">"</span>
              </blockquote>
              <div className="font-semibold text-ngo-color6 mt-2">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default ITSkillsTraining;
