import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          <div className="lg:text-xl font-bold text-ngo-color5 text-md">
            The New Equitable and Innovative Educational Association
          </div>
        </Link>

        <div className="pt-4 flex justify-between">
          <div className="hidden md:flex items-center space-x-4">
            <FloatingSocialIcons />
          </div>
          <div className="py-4 lg:px-8 px-2">
            <GoogleTranslate />
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
      <nav className="hidden lg:block bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {navigation.map((section) =>
              section.href ? (
                <Link
                  key={section.label}
                  to={section.href}
                  className="p-3 text-ngo-color5 text-sm hover:text-ngo-color2 font-semibold whitespace-nowrap"
                >
                  {section.label}
                </Link>
              ) : (
                <DesktopNavigationItem key={section.label} section={section} />
              )
            )}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <nav className="lg:hidden fixed inset-y-0 right-0 bg-white shadow-lg w-full px-4 pb-4 overflow-y-auto">
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-ngo-color8"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {navigation.map((section) => (
              <MobileNavigationItem
                key={section.label}
                section={section}
                activeMobileMenu={activeMobileMenu}
                toggleSubMenu={toggleSubMenu}
                handleNavigation={handleNavigation}
              />
            ))}
            <FloatingSocialIcons />
            <Button
              onClick={() => handleNavigation('/donate')}
              className="w-full mt-4 bg-gradient-to-r from-ngo-color6 to-ngo-color3 hover:from-ngo-color2 hover:to-ngo-color1 text-white font-semibold py-3 rounded-md"
            >
              Make a Donation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
