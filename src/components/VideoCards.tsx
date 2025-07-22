import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Play, Share2 } from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";

interface VideoCard {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  page: string;
}

interface VideoCardsProps {
  pageKey: string;
}

const VideoCards: React.FC<VideoCardsProps> = ({ pageKey }) => {
  const [videoCards, setVideoCards] = useState<VideoCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axiosInstance
      .get(`/video-cards/${pageKey}`)
      .then((res) => {
        if (res.data.success && res.data.data) {
          setVideoCards(res.data.data);
        } else {
          setVideoCards([]);
        }
      })
      .catch(() => {
        setError("Failed to load video cards.");
        setVideoCards([]);
      })
      .finally(() => setLoading(false));
  }, [pageKey]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ngo-color6 mb-4">
            Featured Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highlighted moments that capture the essence of our mission and
            the transformation happening in communities worldwide.
          </p>
        </div>
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading videos...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : videoCards.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No videos found for this page.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoCards.map((item) => (
              <Card
                key={item._id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Button
                      className="bg-ngo-color4 hover:bg-ngo-color4/90 text-white rounded-full w-16 h-16"
                      onClick={() => window.open(item.videoUrl, "_blank")}
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                    {item.duration && (
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                        {item.duration}
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ngo-color6 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-ngo-color6 hover:bg-ngo-color6/90 text-white text-sm"
                      onClick={() => window.open(item.videoUrl, "_blank")}
                    >
                      Watch Video
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
        )}
      </div>
    </section>
  );
};

export default VideoCards;
