import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoRemovedBg from '../images/logoRemovedBg.png';
import GoogleTranslate from './GoogleTranslate';
import DesktopNavigationItem from './DesktopNavigationItem';
import MobileNavigationItem from './MobileNavigationItem';
import useNavigation from '../hooks/useNavigation';
import FloatingSocialIcons from './FloatingSocialIcons';

const Navigation: React.FC = () => {
  const location = useLocation();
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeMobileMenu,
    handleNavigation,
    toggleSubMenu,
    navigation,
  } = useNavigation();

  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false);

  useEffect(() => {
    // Reset or reinitialize the GoogleTranslate component on route change
    const loadTranslate = async () => {
      setIsTranslateLoaded(false);
      // Add any necessary loading logic here
      setIsTranslateLoaded(true);
    };

    loadTranslate();
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-ngo-color6 border-b shadow-sm">
      <div className="mx-auto px-4 py-2 flex sm:items-center sm:flex-row flex-col sm:justify-between">
        <Link to="/" className="flex items-center lg:justify-between space-x-8 space-y-2">
          <img src={logoRemovedBg} alt="NEIEA Logo" className="lg:w-20 w-16" />
          <div className="lg:text-xl font-bold text-white text-md">
            <span className='text-white'>NEIEA</span> <br />
            The New Equitable and Innovative Educational Association
          </div>
        </Link>

        <div className="pt-4 flex justify-between items-center w-full sm:w-auto">
          <div className="hidden md:flex items-center space-x-4">
            <FloatingSocialIcons />
          </div>
          <div className="py-4 lg:px-8 px-2">
            <GoogleTranslate />
          </div>
          {/* Donate Now Button - positioned next to language translator */}
          <div className="hidden md:flex items-center ml-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ngo-color4 hover:bg-ngo-color4/90 text-white font-semibold text-base rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Heart size={18} />
              Donate Now
            </Link>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded hover:bg-ngo-color8"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation with integrated CTA buttons */}
      <nav className="hidden lg:block bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Main Navigation Links */}
            <div className="flex justify-center flex-1">
              {navigation.map((section) =>
                section.href ? (
                  <Link
                    key={section.label}
                    to={section.href}
                    className="p-3 text-ngo-color5 text-sm hover:text-ngo-color2 font-semibold whitespace-nowrap transition-colors duration-200"
                  >
                    {section.label}
                  </Link>
                ) : (
                  <DesktopNavigationItem key={section.label} section={section} />
                )
              )}
            </div>
            
            {/* Volunteer Button Only */}
            <div className="flex items-center space-x-3 ml-8">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-4 py-2 text-ngo-color6 hover:text-ngo-color5 font-medium text-sm transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                <Users size={16} />
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-6">
              {navigation.map((section) =>
                section.href ? (
                  <Link
                    key={section.label}
                    to={section.href}
                    className="block p-3 text-ngo-color5 hover:text-ngo-color2 font-semibold transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.label}
                  </Link>
                ) : (
                  <MobileNavigationItem 
                    key={section.label} 
                    section={section} 
                    activeMobileMenu={activeMobileMenu}
                    toggleSubMenu={toggleSubMenu}
                    handleNavigation={handleNavigation}
                  />
                )
              )}
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <Link
                to="/volunteer"
                className="flex items-center gap-2 px-4 py-3 text-ngo-color6 hover:text-ngo-color5 font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users size={18} />
                Volunteer
              </Link>
              <Link
                to="/donate"
                className="flex items-center gap-2 px-6 py-3 bg-ngo-color4 hover:bg-ngo-color4/90 text-white font-semibold text-base rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={18} />
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
