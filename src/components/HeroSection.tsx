import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  height = 'h-[60vh]'
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;