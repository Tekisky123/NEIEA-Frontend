// components/FloatingSocialIcons.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const FloatingSocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100093505457474", color: "text-[#1877F2]" },
    { icon: <FaTwitter />, url: "https://x.com/neiea_india", color: "text-[#1DA1F2]" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/neiea_india/", color: "text-[#E1306C]" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/the-neiea/", color: "text-[#0077B5]" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@neiea_india", color: "text-[#FF0000]" },
    { icon: <FaWhatsapp />, url: "https://whatsapp.com/channel/0029VaA7jjBLo4hapNUZ1s3B", color: "text-[#25D366]" },
  ];

  return (
    <div className="flex space-x-4 justify-center py-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full shadow-lg bg-white text-xl ${social.color} hover:opacity-80 transition-opacity duration-300`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
