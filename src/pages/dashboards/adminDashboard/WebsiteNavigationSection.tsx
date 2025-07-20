import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";

const navigationPages = [
  {
    label: "About Us",
    key: "about-us",
    submenus: [
      { label: 'Introduction of NEIEA', key: 'introduction' },
      { label: 'Vision and Mission', key: 'vision-mission' },
      { label: 'Leadership and Team', key: 'leadership' },
      { label: 'Management Advisory Board', key: 'advisory-board' },
      { label: 'Blended Learning Model', key: 'blended-learning' },
      { label: 'Our Working Process', key: 'workshops' },
      { label: 'Application of Technologies', key: 'technologies' },
      { label: 'Discourse Oriented Pedagogy (DOP)', key: 'eop' },
      { label: 'Impact', key: 'impact' },
      { label: 'Testimonials', key: 'testimonials' },
    ],
  },
  // Add more main pages here as needed
];

const MAX_IMAGES = 3;
const MAX_SIZE_MB = 1;

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

const WebsiteNavigationSection = () => {
  const [activePage, setActivePage] = useState(navigationPages[0].key);
  const [activeSubmenu, setActiveSubmenu] = useState(navigationPages[0].submenus[0].key);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  // Carousel Images state
  const [carouselImages, setCarouselImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [existingCarousel, setExistingCarousel] = useState<Carousel | null>(null);
  const [loadingCarousel, setLoadingCarousel] = useState(false);
  const [deletingImage, setDeletingImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const currentPage = navigationPages.find((page) => page.key === activePage);
  const currentSubmenu = currentPage?.submenus.find((sm) => sm.key === activeSubmenu);

  // Carousel image handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    // Validate file type and size
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast.error("Only image files are allowed.");
        return;
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        toast.error("Each image must be less than 1MB.");
        return;
      }
    }
    if (carouselImages.length + files.length > MAX_IMAGES) {
      toast.error(`You can only upload up to ${MAX_IMAGES} images.`);
      return;
    }
    setCarouselImages((prev) => [...prev, ...files].slice(0, MAX_IMAGES));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveImage = (idx: number) => {
    setCarouselImages((prev) => prev.filter((_, i) => i !== idx));
  };

  // Fetch existing carousel
  const fetchExistingCarousel = async () => {
    setLoadingCarousel(true);
    try {
      const response = await axiosInstance.get(`/carousel/${activeSubmenu}`);
      // Handle the API response structure: {success: true, data: {...}}
      if (response.data.success && response.data.data) {
        setExistingCarousel(response.data.data);
      } else {
        setExistingCarousel(null);
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        setExistingCarousel(null);
      } else {
        console.error("Failed to fetch carousel:", error);
        setExistingCarousel(null);
      }
    } finally {
      setLoadingCarousel(false);
    }
  };

  useEffect(() => {
    fetchExistingCarousel();
  }, [activeSubmenu]);

  const handleCarouselSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (carouselImages.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("page", activeSubmenu);
      carouselImages.forEach((img) => formData.append("images", img));
      await axiosInstance.post("/admin/carousel", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Carousel images uploaded successfully!");
      setCarouselImages([]);
      fetchExistingCarousel(); // Refresh the existing carousel
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    
    setDeletingImage(imageId);
    try {
      await axiosInstance.delete(`/carousel/${activeSubmenu}/image/${imageId}`);
      toast.success("Image deleted successfully!");
      fetchExistingCarousel(); // Refresh the carousel
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete image.");
    } finally {
      setDeletingImage(null);
    }
  };

  return (
    <div className="w-full">
      {/* Horizontal Navigation Menu */}
      <nav className="flex gap-6 border-b border-gray-200 mb-6 relative shadow-lg">
        {navigationPages.map((page) => (
          <div
            key={page.key}
            className="relative"
            onMouseEnter={() => setSubmenuOpen(page.key)}
            onMouseLeave={() => setSubmenuOpen(null)}
          >
            <button
              className={`px-4 py-2 font-semibold text-base transition rounded-t-md focus:outline-none ${
                activePage === page.key ? "bg-ngo-color6 text-ngo-color1" : "hover:bg-ngo-color2/20 text-ngo-color1"
              }`}
              onClick={() => {
                setActivePage(page.key);
                setActiveSubmenu(page.submenus[0].key);
              }}
            >
              {page.label}
            </button>
            {/* Dropdown for submenus */}
            {submenuOpen === page.key && (
              <div className="absolute left-0 top-full bg-white border rounded-b-md shadow-lg min-w-[220px] z-10">
                {page.submenus.map((submenu) => (
                  <button
                    key={submenu.key}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-ngo-color6/10 ${
                      activeSubmenu === submenu.key ? "bg-ngo-color6/20 font-semibold" : ""
                    }`}
                    onClick={() => {
                      setActivePage(page.key);
                      setActiveSubmenu(submenu.key);
                      setSubmenuOpen(null);
                    }}
                  >
                    {submenu.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      {/* CRUD Section for selected submenu */}
      <Card className="border-0 rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">{currentSubmenu?.label || "Select a section"}</CardTitle>
          <p className="text-muted-foreground">
            Manage content for this page.
          </p>
        </CardHeader>
        <CardContent>
          {/* Special UI for Introduction of NEIEA */}
          {activeSubmenu === 'introduction' ? (
            <div className="space-y-10">
              {/* Carousel Images CRUD */}
              <section>
                <h2 className="text-lg font-semibold mb-4">Carousel Images</h2>
                
                {/* Existing Carousel Preview */}
                {loadingCarousel ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ngo-color6"></div>
                  </div>
                ) : existingCarousel ? (
                  <div className="mb-6">
                    <h3 className="text-md font-medium mb-3 text-gray-700">Current Carousel Images</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {(existingCarousel.images || []).map((image, idx) => (
                        <div key={image._id} className="relative group bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src={image.url}
                            alt={`Carousel ${idx + 1}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <button
                              onClick={() => handleDeleteImage(image._id)}
                              disabled={deletingImage === image._id}
                              className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-red-700 transition-colors disabled:opacity-50"
                              title="Delete image"
                            >
                              {deletingImage === image._id ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              ) : (
                                "×"
                              )}
                            </button>
                          </div>
                          <div className="p-3">
                            <div className="text-sm text-gray-600">
                              Image {idx + 1} of {existingCarousel.images?.length || 0}
                            </div>
                            {image.heading && (
                              <div className="text-xs text-gray-500 mt-1 truncate">
                                Heading: {image.heading}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Last updated: {existingCarousel.updatedAt ? new Date(existingCarousel.updatedAt).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <div className="text-gray-500 mb-2">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">No carousel images found</p>
                    <p className="text-gray-500 text-sm">Upload images to create a carousel for this page</p>
                  </div>
                )}

                {/* Upload New Images */}
                <div className="border-t pt-6">
                  <h3 className="text-md font-medium mb-3 text-gray-700">
                    {existingCarousel ? "Add More Images" : "Upload Carousel Images"}
                  </h3>
                  <form onSubmit={handleCarouselSubmit} encType="multipart/form-data" className="space-y-4">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      disabled={carouselImages.length >= MAX_IMAGES || uploading}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-ngo-color6 file:text-white hover:file:bg-ngo-color5"
                    />
                    <div className="flex gap-4 flex-wrap">
                      {carouselImages.map((img, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={URL.createObjectURL(img)}
                            alt={`carousel-img-${idx}`}
                            className="w-32 h-20 object-cover border rounded shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-80 hover:opacity-100 transition-opacity"
                            title="Remove"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      You can upload up to 3 images. Only image files (max 1MB each).
                      {existingCarousel && ` Current: ${existingCarousel.images?.length || 0}/3`}
                    </div>
                    <Button 
                      type="submit" 
                      disabled={uploading || carouselImages.length === 0}
                      className="bg-ngo-color6 hover:bg-ngo-color5"
                    >
                      {uploading ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Uploading...
                        </div>
                      ) : (
                        "Upload Carousel Images"
                      )}
                    </Button>
                  </form>
                </div>
              </section>
              
              {/* Video Cards CRUD */}
              <section>
                <h2 className="text-lg font-semibold mb-2">Video Cards</h2>
                <div className="border border-dashed border-gray-300 rounded p-6 text-center text-gray-500">
                  Video cards (video URLs) management coming soon...
                </div>
              </section>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Content management for <b>{currentSubmenu?.label}</b> coming soon...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WebsiteNavigationSection; 