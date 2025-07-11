// components/FloatingSocialIcons.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FloatingSocialIcons: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", color: "text-[#1877F2]" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "text-[#1DA1F2]" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "text-[#E1306C]" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "text-[#0077B5]" },
    { icon: <FaYoutube />, url: "https://youtube.com", color: "text-[#FF0000]" },
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
