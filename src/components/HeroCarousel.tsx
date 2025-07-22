import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

interface HeroCarouselProps {
  pageKey: string;
  className?: string;
}

const DEFAULTS = {
  heading: "Welcome to NEIEA",
  subText: "Empowering Through Education",
  ctaText: "Learn More",
  ctaUrl: "/about-us",
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ pageKey, className }) => {
  const [carousel, setCarousel] = useState<Carousel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    axiosInstance
      .get(`/carousel/${pageKey}`)
      .then((res) => {
        if (isMounted && res.data.success && res.data.data) {
          setCarousel(res.data.data);
        } else if (isMounted) {
          setCarousel(null);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Failed to load carousel images.");
          setCarousel(null);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [pageKey]);

  // Auto-advance slider
  useEffect(() => {
    if (!carousel || !carousel.images || carousel.images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carousel.images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carousel]);

  const nextSlide = () => {
    if (!carousel || !carousel.images) return;
    setCurrentSlide((prev) => (prev + 1) % carousel.images.length);
  };
  const prevSlide = () => {
    if (!carousel || !carousel.images) return;
    setCurrentSlide((prev) => (prev - 1 + carousel.images.length) % carousel.images.length);
  };

  return (
    <>
      <section
        className={`relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[420px] aspect-[23/9] overflow-hidden ${className || ""}`}
        style={{ maxWidth: "100vw" }}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 min-h-[350px]">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-ngo-color6 mb-4"></div>
            <span className="text-gray-500 text-lg font-medium">Loading hero images...</span>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 min-h-[350px]">
            <span className="text-red-500 text-lg font-medium">{error}</span>
          </div>
        ) : !carousel || !carousel.images || carousel.images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 min-h-[350px]">
            <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-500 text-lg font-medium">No hero images available yet.</span>
          </div>
        ) : (
          <>
            {carousel.images.map((img, idx) => {
              const { heading, subText, ctaText, ctaUrl } = img;
              return (
                <div
                  key={img._id}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    idx === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: '220px',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ngo-color1/40 via-ngo-color1/30 to-ngo-color3/20 z-10"></div>
                  <div className="relative z-20 h-full flex items-center justify-center text-white">
                    <div className={`text-start w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 ${idx === currentSlide ? "animate-fadeInUp" : ""}`}>
                      {heading && (
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                          {heading}
                        </h1>
                      )}
                      {subText && (
                        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl text-white/90 drop-shadow">
                          {subText}
                        </p>
                      )}
                      {ctaText && ctaUrl && (
                        <a
                          href={ctaUrl}
                          className="inline-block bg-ngo-color4 hover:bg-ngo-color4/90 text-white px-6 lg:px-8 py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 font-semibold btn-enhanced group overflow-hidden"
                        >
                          {ctaText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20 hover:border-white/40 hover:scale-110"
            >
              <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20 hover:border-white/40 hover:scale-110"
            >
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              {carousel.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentSlide
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
          </>
        )}
      </section>
      
    </>
  );
};

export default HeroCarousel; 