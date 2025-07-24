import React from 'react';
import { MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/918149507266?text=Hello%20Namo%20Caterers!%20I'm%20interested%20in%20your%20catering%20services.`,
      color: 'hover:bg-green-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/namocaterers',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/namocaterers',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@namocaterers',
      color: 'hover:bg-red-500'
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-12 h-12 bg-primary text-primary-foreground rounded-full 
                flex items-center justify-center shadow-warm transition-all duration-300 
                hover:scale-110 hover:shadow-lg ${link.color}
                animate-float
              `}
              style={{
                animationDelay: `${socialLinks.indexOf(link) * 0.2}s`
              }}
              title={link.name}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSidebar;