import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";
import { navigationPages } from "@/lib/navigationPages";

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

// Add VideoCard type
interface VideoCard {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  page: string;
}

const WebsiteNavigationSection = () => {
  const [activePage, setActivePage] = useState(navigationPages[0].key);
  const [activeSubmenu, setActiveSubmenu] = useState(navigationPages[0].submenus[0]?.key);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  // Carousel Images state
  const [carouselImages, setCarouselImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [existingCarousel, setExistingCarousel] = useState<Carousel | null>(null);
  const [loadingCarousel, setLoadingCarousel] = useState(false);
  const [deletingImage, setDeletingImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Video Cards state
  const [videoCards, setVideoCards] = useState<VideoCard[]>([]);
  const [loadingVideoCards, setLoadingVideoCards] = useState(false);
  const [videoCardForm, setVideoCardForm] = useState<Partial<VideoCard>>({});
  const [editingVideoCardId, setEditingVideoCardId] = useState<string | null>(null);
  const [videoCardUploading, setVideoCardUploading] = useState(false);

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
    if (!activeSubmenu) return;
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

  // Fetch video cards for the current submenu
  const fetchVideoCards = async () => {
    if (!activeSubmenu) return;
    setLoadingVideoCards(true);
    try {
      const res = await axiosInstance.get(`/video-cards/${activeSubmenu}`);
      if (res.data.success && res.data.data) {
        setVideoCards(res.data.data);
      } else {
        setVideoCards([]);
      }
    } catch (err) {
      setVideoCards([]);
    } finally {
      setLoadingVideoCards(false);
    }
  };

  useEffect(() => {
    if (activeSubmenu) {
      fetchExistingCarousel();
      fetchVideoCards();
    }
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

  // Handle form input changes
  const handleVideoCardInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVideoCardForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update video card
  const handleVideoCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVideoCardUploading(true);
    try {
      if (editingVideoCardId) {
        // Update
        await axiosInstance.put(`/admin/video-cards/${editingVideoCardId}`, {
          ...videoCardForm,
          page: activeSubmenu,
        });
        toast.success("Video card updated!");
      } else {
        // Add
        await axiosInstance.post(`/admin/video-cards`, {
          ...videoCardForm,
          page: activeSubmenu,
        });
        toast.success("Video card added!");
      }
      setVideoCardForm({});
      setEditingVideoCardId(null);
      fetchVideoCards();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to save video card.");
    } finally {
      setVideoCardUploading(false);
    }
  };

  // Edit video card
  const handleEditVideoCard = (card: VideoCard) => {
    setVideoCardForm(card);
    setEditingVideoCardId(card._id);
  };

  // Delete video card
  const handleDeleteVideoCard = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video card?")) return;
    try {
      await axiosInstance.delete(`/admin/video-cards/${id}`);
      toast.success("Video card deleted!");
      fetchVideoCards();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete video card.");
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
                setActiveSubmenu(page.submenus[0]?.key);
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
                    {existingCarousel.images && existingCarousel.images.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(existingCarousel.images || []).map((image, idx) => (
                          <div key={image._id} className="relative group bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                              src={image.url}
                              alt={`Carousel ${idx + 1}`}
                              className="w-full h-48 object-cover"
                            />
                            {/* Removed delete button and overlay */}
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
                    ) : (
                      <div className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
                        <div className="text-gray-500 mb-2">
                          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 font-medium">No images present in the carousel yet</p>
                        <p className="text-gray-500 text-sm">Upload images to populate the carousel for this page</p>
                      </div>
                    )}
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
                    <div className="text-xs text-gray-500 mt-1">
                      Recommended size: <span className="font-medium">23:9 aspect ratio, at least 1840x720px</span> for best results in the homepage carousel.
                    </div>
                    <div className="text-xs text-gray-400 mt-1 italic">
                      Example prompt for AI image generation:<br/>
                      <span className="text-gray-600">"A beautiful, inspiring education scene in India, children learning together, bright and positive, 23:9 aspect ratio, 1840x720px"</span>
                    </div>
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
                <div className="border border-dashed border-gray-300 rounded p-6">
                  {/* Video Card Form */}
                  <form onSubmit={handleVideoCardSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={videoCardForm.title || ""}
                      onChange={handleVideoCardInput}
                      className="border rounded px-3 py-2"
                      required
                    />
                    <input
                      type="text"
                      name="thumbnail"
                      placeholder="Thumbnail URL"
                      value={videoCardForm.thumbnail || ""}
                      onChange={handleVideoCardInput}
                      className="border rounded px-3 py-2"
                      required
                    />
                    <input
                      type="text"
                      name="duration"
                      placeholder="Duration (e.g. 5:32)"
                      value={videoCardForm.duration || ""}
                      onChange={handleVideoCardInput}
                      className="border rounded px-3 py-2"
                      required
                    />
                    <input
                      type="text"
                      name="videoUrl"
                      placeholder="Video URL"
                      value={videoCardForm.videoUrl || ""}
                      onChange={handleVideoCardInput}
                      className="border rounded px-3 py-2"
                      required
                    />
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={videoCardForm.description || ""}
                      onChange={handleVideoCardInput}
                      className="border rounded px-3 py-2 md:col-span-2"
                      required
                    />
                    <div className="md:col-span-2 flex gap-3">
                      <Button
                        type="submit"
                        className="bg-ngo-color6 hover:bg-ngo-color5"
                        disabled={videoCardUploading}
                      >
                        {editingVideoCardId ? (videoCardUploading ? "Updating..." : "Update Video Card") : (videoCardUploading ? "Adding..." : "Add Video Card")}
                      </Button>
                      {editingVideoCardId && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => { setVideoCardForm({}); setEditingVideoCardId(null); }}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                  {/* Video Cards List */}
                  {loadingVideoCards ? (
                    <div className="text-center py-8 text-gray-500">Loading video cards...</div>
                  ) : videoCards.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">No video cards found for this page.</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {videoCards.map((card) => (
                        <div key={card._id} className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-2 relative">
                          <img src={card.thumbnail} alt={card.title} className="w-full h-40 object-cover rounded mb-2" />
                          <div className="font-semibold text-lg text-ngo-color6">{card.title}</div>
                          <div className="text-sm text-gray-600 mb-1">{card.description}</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>Duration: {card.duration}</span>
                            <a href={card.videoUrl} target="_blank" rel="noopener noreferrer" className="text-ngo-color4 underline ml-auto">Watch</a>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" onClick={() => handleEditVideoCard(card)} className="bg-ngo-color6 hover:bg-ngo-color5">Edit</Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteVideoCard(card._id)} className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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