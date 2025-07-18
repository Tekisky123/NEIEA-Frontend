import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const WebsiteNavigationSection = () => {
  const [activePage, setActivePage] = useState(navigationPages[0].key);
  const [activeSubmenu, setActiveSubmenu] = useState(navigationPages[0].submenus[0].key);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  const currentPage = navigationPages.find((page) => page.key === activePage);
  const currentSubmenu = currentPage?.submenus.find((sm) => sm.key === activeSubmenu);

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
            Manage content for this page. (CRUD UI coming soon)
          </p>
        </CardHeader>
        <CardContent>
          {/* Special UI for Introduction of NEIEA */}
          {activeSubmenu === 'introduction' ? (
            <div className="space-y-10">
              {/* Carousel Images CRUD */}
              <section>
                <h2 className="text-lg font-semibold mb-2">Carousel Images</h2>
                {/* TODO: Implement carousel images CRUD UI */}
                <div className="border border-dashed border-gray-300 rounded p-6 text-center text-gray-500">
                  Carousel images management coming soon...
                </div>
              </section>
              {/* Video Cards CRUD */}
              <section>
                <h2 className="text-lg font-semibold mb-2">Video Cards</h2>
                {/* TODO: Implement video cards CRUD UI */}
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