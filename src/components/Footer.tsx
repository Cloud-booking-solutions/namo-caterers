import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'Social Gatherings',
    'Festival Catering',
  ];

  return (
    <footer className="bg-gradient-section border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/09745e0c-660e-4fe0-a370-dc320c15d822.png"
                alt="Namo Caterers Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">Namo Caterers</h3>
                <p className="text-sm text-muted-foreground">All Cuisines. All Occasions.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              One delicious solution for all your catering needs. We bring the finest 
              culinary experiences to your special moments.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Dange+Chowk+Rd+near+SBI+Yashoda+Colony+Thergaon+Pimpri-Chinchwad+Pune+Maharashtra+411033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dange Chowk Rd, near SBI, Yashoda Colony, Thergaon, 
                  Pimpri-Chinchwad, Pune, Maharashtra 411033
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:8149507266" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8149507266
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:namocaterers10@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  namocaterers10@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <p className="text-sm text-muted-foreground">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Namo Caterers. All rights reserved. | 
            Crafted with ❤️ for delicious experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;