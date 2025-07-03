// components/DesktopNavigationItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from '../types/NavigationItem';

interface DesktopNavigationItemProps {
  section: NavigationItem;
}

const DesktopNavigationItem: React.FC<DesktopNavigationItemProps> = ({ section }) => (
  <div key={section.label} className="relative group">
    <button className="p-3 text-ngo-color5 text-sm hover:text-ngo-color2 font-semibold flex items-center gap-1 whitespace-nowrap">
      {section.label}
      {section.items && <ChevronDown size={16} />}
    </button>
    {section.items && (
      <div className="absolute left-0 top-8 mt-2 w-64 bg-white shadow-lg border rounded-md p-2 z-[999999] hidden group-hover:block">
        {section.items.map((item) => (
          <Link
            key={item.href}
            to={item.href || ''}
            className="block p-2 text-sm text-ngo-color5 hover:text-ngo-color6 hover:bg-ngo-color8 rounded"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default DesktopNavigationItem;
