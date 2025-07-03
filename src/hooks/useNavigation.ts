// hooks/useNavigation.ts
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationItem } from '../types/NavigationItem';

const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setActiveMobileMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const navigation: NavigationItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      items: [
        { label: 'Introduction of NEIEA', href: '/about/introduction' },
        { label: 'Vision and Mission', href: '/about/vision-mission' },
        { label: 'Leadership and Team', href: '/about/leadership' },
        { label: 'Management Advisory Board', href: '/about/advisory-board' },
        { label: 'Blended Learning Model', href: '/about/blended-learning' },
        { label: 'Our Working Process', href: '/about/workshops' },
        { label: 'Application of Technologies', href: '/about/technologies' },
        { label: 'Discourse Oriented Pedagogy (DOP)', href: '/about/eop' },
        { label: 'Impact', href: '/about/impact' },
        { label: 'Testimonials', href: '/about/testimonials' },
      ],
    },
    {
      label: 'Our Projects',
      items: [
        { label: 'IT Skills Training', href: '/projects/it-skills' },
        { label: 'Cluster Education', href: '/projects/cluster-education' },
        { label: 'Teachers Training', href: '/projects/teachers-training' },
        { label: 'Slum Children Education', href: '/projects/slum-children' },
        { label: 'Out of School Children Education', href: '/projects/out-of-school' },
        { label: 'Girls Education', href: '/projects/girls-education' },
        { label: 'Pedagogy Training', href: '/projects/pedagogy-training' },
        { label: 'Madarsa Education', href: '/projects/madarsa-education' },
        { label: 'Social and Financial Education', href: '/projects/social-financial' },
        { label: 'Adult Education', href: '/projects/adult-education' },
        { label: 'Public(Government) Schools Education', href: '/projects/public-schools' },
      ],
    },
    { label: 'Courses', items: [{ label: 'All Courses', href: '/courses' }] },
    {
      label: 'Partners',
      items: [
        { label: 'Domestic Partners', href: '/partners/domestic' },
        { label: 'Global Partners', href: '/partners/global' },
      ],
    },
    { label: 'NEI USA', href: '/nei-usa' },
    { label: 'Donate', href: '/donate' },
    { label: 'Featured Stories', href: '/stories' },
    {
      label: 'Media and Events',
      items: [{ label: 'Gallery', href: '/about/introduction' }],
    },
    {
      label: 'Contact Us',
      items: [
        { label: 'Partner With Us', href: '/contact/partner' },
        { label: 'FAQ', href: '/contact/faq' },
      ],
    },
    { label: 'Volunteers', href: '/volunteer' },
  ];

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeMobileMenu,
    handleNavigation,
    toggleSubMenu,
    navigation,
  };
};

export default useNavigation;
