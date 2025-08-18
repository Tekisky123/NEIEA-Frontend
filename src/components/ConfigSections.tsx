import React, { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axiosInstance';

interface SectionContent {
  _id: string;
  page: string;
  heading: string;
  subHeading?: string;
  body: string;
  orientation: 'left' | 'right';
  imageUrl?: string;
}

interface ConfigSectionsProps {
  page: string; // submenu key like "introduction", "it-skills-training", etc.
}

const ConfigSections: React.FC<ConfigSectionsProps> = ({ page }) => {
  const [sections, setSections] = useState<SectionContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   // Regex se links identify karke clickable <a> banayenge
   const renderWithLinks = (inputText) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return inputText.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium hover:text-blue-800"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  useEffect(() => {
    const fetchSections = async () => {
      if (!page) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/sections/${page}`);
        
        if (response.data.success && response.data.data) {
          console.log('Fetched sections:', response.data.data);
          setSections(response.data.data);
        } else {
          console.log('No sections data found');
          setSections([]);
        }
      } catch (err: any) {
        console.error('Failed to fetch sections:', err);
        // Don't show error for 404 (no sections exist yet)
        if (err?.response?.status !== 404) {
          setError('Failed to load content sections');
        }
        setSections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [page]);
  

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ngo-color6"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (sections.length === 0) {
    return <h1 className='text-center py-12 text-gray-500'>No sections found for this page.</h1>; // Don't render anything if no sections
  }

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {sections.map((section, index) => {
          const hasImage = Boolean(section.imageUrl);
          const hasSubHeading = Boolean(section.subHeading && section.subHeading.trim().length > 0);
          const isFullWidthTextOnly = !hasImage && !hasSubHeading;
          const bodyText = section.body || '';
          const wordCount = bodyText.trim() ? bodyText.trim().split(/\s+/).length : 0;
          const isLongBody = wordCount > 180;

          return (
            <div key={section._id} className="mb-10 last:mb-0">
              <div
                className={`grid gap-12 ${hasImage ? (isLongBody ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2') : 'grid-cols-1'} ${hasImage && !isLongBody && section.orientation === 'right' ? 'lg:grid-flow-col-dense' : ''} ${isLongBody ? 'items-start' : 'items-center'}`}
              >
                {isLongBody ? (
                  <>
                    {/* Content first for long text */}
                    <div>
                      <div className={`space-y-6 ${isFullWidthTextOnly ? '' : ''}`}>
                        {section.heading && (
                          <h2 className={`text-3xl ${!hasImage && 'text-center'}  lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight`}>
                            {section.heading}
                          </h2>
                        )}
                        {hasSubHeading && (
                          <h3 className={`text-xl ${!hasImage && 'text-center'} lg:text-2xl font-semibold text-ngo-color6 leading-relaxed`}>
                            {section.subHeading}
                          </h3>
                        )}
                        {section.body && (
                          <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                              {renderWithLinks(section.body)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Image below if present */}
                    {hasImage && (
                      <div>
                        <div className="bg-white rounded-2xl shadow-xl p-0 relative overflow-hidden">
                          <div className="relative w-full h-80 lg:h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                            <img
                              src={section.imageUrl!}
                              alt={section.heading || 'Section content'}
                              className="w-full h-full object-cover rounded-xl shadow-lg"
                              onError={(e) => {
                                console.error('Image failed to load:', section.imageUrl);
                                (e.currentTarget as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute top-4 right-4">
                              <div className="w-3 h-3 bg-ngo-color6 rounded-full opacity-60"></div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <div className="w-2 h-2 bg-ngo-color5 rounded-full opacity-60"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* Image Section - render only if image exists */}
                    {hasImage && (
                      <div className={`${section.orientation === 'right' ? 'lg:col-start-2' : ''}`}>
                        <div className="bg-white rounded-2xl shadow-xl p-0 relative overflow-hidden">
                          <div className="relative w-full h-80 lg:h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                            <img
                              src={section.imageUrl!}
                              alt={section.heading || 'Section content'}
                              className="w-full h-full object-cover rounded-xl shadow-lg"
                              onError={(e) => {
                                console.error('Image failed to load:', section.imageUrl);
                                (e.currentTarget as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4">
                              <div className="w-3 h-3 bg-ngo-color6 rounded-full opacity-60"></div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <div className="w-2 h-2 bg-ngo-color5 rounded-full opacity-60"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className={`${hasImage && section.orientation === 'right' ? 'lg:col-start-1' : ''}`}>
                      <div className={`space-y-6 ${isFullWidthTextOnly ? '' : ''}`}>
                        {section.heading && (
                          <h2 className={`text-3xl ${!hasImage && 'text-center'}  lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight`}>
                            {section.heading}
                          </h2>
                        )}
                        {hasSubHeading && (
                          <h3 className={`text-xl ${!hasImage && 'text-center'} lg:text-2xl font-semibold text-ngo-color6 leading-relaxed`}>
                            {section.subHeading}
                          </h3>
                        )}
                        {section.body && (
                          <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                              {section.body}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {index < sections.length - 1 && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-ngo-color6 to-ngo-color5 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConfigSections; 