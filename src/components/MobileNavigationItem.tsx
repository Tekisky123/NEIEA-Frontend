// components/MobileNavigationItem.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../types/NavigationItem';

interface MobileNavigationItemProps {
  section: NavigationItem;
  activeMobileMenu: string | null;
  toggleSubMenu: (label: string) => void;
  handleNavigation: (href: string) => void;
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  section,
  activeMobileMenu,
  toggleSubMenu,
  handleNavigation,
}) => (
  <div key={section.label}>
    {section.href ? (
      <button
        onClick={() => handleNavigation(section.href)}
        className="w-full text-left py-3 px-2 text-ngo-color5 hover:bg-ngo-color8 rounded-md font-medium"
      >
        {section.label}
      </button>
    ) : (
      <>
        <button
          onClick={() => toggleSubMenu(section.label)}
          className="w-full flex justify-between items-center py-3 px-2 text-ngo-color5 hover:text-ngo-color1 font-medium"
        >
          {section.label}
          <ChevronDown
            className={`transform transition-transform ${
              activeMobileMenu === section.label ? 'rotate-180' : ''
            }`}
            size={18}
          />
        </button>
        {activeMobileMenu === section.label && (
          <div className="ml-4 mt-1 space-y-1">
            {section.items?.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href || '')}
                className="block w-full text-left px-3 py-2 text-sm text-ngo-color5 hover:bg-ngo-color8 rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </>
    )}
  </div>
);

export default MobileNavigationItem;
