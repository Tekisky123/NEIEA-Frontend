// components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoRemovedBg from '../images/logoRemovedBg.png';
import GoogleTranslate from './GoogleTranslate';
import DesktopNavigationItem from './DesktopNavigationItem';
import MobileNavigationItem from './MobileNavigationItem';
import useNavigation from '../hooks/useNavigation';

const Navigation: React.FC = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeMobileMenu,
    handleNavigation,
    toggleSubMenu,
    navigation,
  } = useNavigation();

  return (
    <header className="sticky top-0 z-50 bg-ngo-color6 border-b shadow-sm">
      <div className="mx-auto px-4 py-2 flex sm:items-center sm:flex-row flex-col sm:justify-between">
        <Link to="/" className="flex items-center justify-between space-x-2">
          <img src={logoRemovedBg} alt="NEIEA Logo" className="w-20" />
          <div className="lg:text-xl font-bold text-ngo-color5 text-center">
            The New Equitable and Innovative Educational Association
          </div>
        </Link>

        <div className='pt-4 flex justify-between'>
          <div className="py-1 px-4">
            <GoogleTranslate />
          </div>
          <div className="flex items-center space-x-4">
            <div className="lg:hidden">
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
        <nav className="lg:hidden px-4 pb-4 border-t space-y-2 bg-white shadow-lg">
          {navigation.map((section) => (
            <MobileNavigationItem
              key={section.label}
              section={section}
              activeMobileMenu={activeMobileMenu}
              toggleSubMenu={toggleSubMenu}
              handleNavigation={handleNavigation}
            />
          ))}
          <Button
            onClick={() => handleNavigation('/donate')}
            className="w-full mt-4 bg-gradient-to-r from-ngo-color6 to-ngo-color3 hover:from-ngo-color2 hover:to-ngo-color1 text-white font-semibold py-3 rounded-md"
          >
            Make a Donation
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
