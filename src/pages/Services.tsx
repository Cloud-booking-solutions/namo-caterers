import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Building2, 
  Cake, 
  Users, 
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Utensils
} from 'lucide-react';
import heroServices from '@/assets/hero-services.jpg';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our exquisite wedding catering services.',
      features: ['Traditional & Modern Menus', 'Bridal Party Catering', 'Multi-cuisine Options', 'Elegant Presentation'],
      price: 'Starting from ₹800 per person'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional catering services for business meetings, conferences, and corporate parties.',
      features: ['Executive Lunch Boxes', 'Conference Catering', 'Office Parties', 'Product Launches'],
      price: 'Starting from ₹400 per person'
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate birthdays with delicious food and professional service.',
      features: ['Kids Party Menus', 'Themed Decorations', 'Birthday Cakes', 'Fun Food Options'],
      price: 'Starting from ₹500 per person'
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Perfect catering for family reunions, anniversaries, and social events.',
      features: ['Family Style Serving', 'Traditional Recipes', 'Flexible Menu Options', 'Home-style Cooking'],
      price: 'Starting from ₹600 per person'
    },
    {
      icon: Calendar,
      title: 'Festival Catering',
      description: 'Authentic festival foods and traditional preparations for religious celebrations.',
      features: ['Traditional Recipes', 'Prasadam Preparation', 'Bulk Cooking', 'Festival Specials'],
      price: 'Starting from ₹300 per person'
    },
    {
      icon: Utensils,
      title: 'Custom Catering',
      description: 'Tailored catering solutions for unique events and special requirements.',
      features: ['Custom Menu Design', 'Dietary Accommodations', 'Theme-based Catering', 'Personalized Service'],
      price: 'Quote on Request'
    }
  ];

  const cuisines = [
    'North Indian', 'South Indian', 'Gujarati', 'Maharashtrian', 
    'Punjabi', 'Bengali', 'Chinese', 'Continental',
    'Italian', 'Mexican', 'Thai', 'Street Food'
  ];

  const additionalServices = [
    {
      title: 'Complete Event Management',
      description: 'End-to-end event planning and execution'
    },
    {
      title: 'Decoration Services',
      description: 'Beautiful themed decorations for your event'
    },
    {
      title: 'Equipment Rental',
      description: 'Tables, chairs, crockery, and serving equipment'
    },
    {
      title: 'Professional Staff',
      description: 'Trained waiters, bartenders, and service staff'
    },
    {
      title: 'Live Cooking Stations',
      description: 'Interactive cooking counters for fresh preparations'
    },
    {
      title: 'Cake & Dessert Services',
      description: 'Custom cakes and dessert arrangements'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroServices}
        title="Our Catering Services"
        subtitle="Comprehensive catering solutions for all your special occasions"
      />

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide professional 
              catering services tailored to your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Cuisines We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in a wide variety of cuisines to cater to diverse tastes and preferences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cuisines.map((cuisine, index) => (
              <div 
                key={index} 
                className="bg-background text-center py-4 px-6 rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 border border-border/50"
              >
                <span className="text-lg font-medium text-foreground">{cuisine}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete event solutions to make your occasion stress-free and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to book our catering services for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your requirements and preferences' },
              { step: '2', title: 'Menu Planning', desc: 'Customize menu based on your needs' },
              { step: '3', title: 'Confirmation', desc: 'Finalize details and confirm booking' },
              { step: '4', title: 'Event Day', desc: 'Professional execution on your special day' }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your catering needs and get a personalized quote 
            for your upcoming event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:8149507266">Call Now: +91 8149507266</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;