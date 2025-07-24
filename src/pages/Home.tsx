import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import { ChefHat, Clock, Heart, Users, Star, Award } from 'lucide-react';
import heroHome from '@/assets/hero-home.jpg';

const Home = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Professional culinary team with years of experience in diverse cuisines.'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock availability for all your catering needs and emergencies.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and attention to detail.'
    },
    {
      icon: Users,
      title: 'All Occasions',
      description: 'From intimate gatherings to grand celebrations, we cater to all events.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Events Catered' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Cuisine Varieties' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroHome}
        title="Welcome to Namo Caterers"
        subtitle="All Cuisines. All Occasions. One delicious solution."
        height="h-screen"
      />

      {/* Features Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Namo Caterers?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring exceptional culinary experiences to your special moments with 
              our commitment to quality, service, and flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">About Namo Caterers</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in the catering industry, Namo Caterers 
                has been serving delicious and authentic cuisines for all types of occasions. 
                From traditional Indian delicacies to international flavors, we ensure 
                every meal is a memorable experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Premium Quality Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Certified Professional Chefs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Customized Menu Planning</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/09745e0c-660e-4fe0-a370-dc320c15d822.png"
                alt="Namo Caterers"
                className="w-full h-auto rounded-2xl shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Make Your Event Special?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle the catering while you enjoy your special moments. 
            Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;