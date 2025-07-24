import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Heart, Target, CheckCircle } from 'lucide-react';
import heroAbout from '@/assets/hero-about.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our heart into every dish we create.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium ingredients and exceptional standards.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Customer satisfaction is our top priority.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for perfection in every detail.'
    }
  ];

  const achievements = [
    'Over 500 successful events catered',
    '10+ years of culinary excellence',
    'Certified professional kitchen and staff',
    '50+ varieties of cuisines mastered',
    '100% client satisfaction rate',
    'Award-winning catering services'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroAbout}
        title="About Namo Caterers"
        subtitle="Crafting memorable culinary experiences since 2014"
      />

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Namo Caterers began as a passion project to bring authentic, delicious food 
                to people's special moments. Founded in 2014, we started with a simple belief: 
                great food brings people together and creates lasting memories.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we've grown from a small family business to one of Pune's 
                most trusted catering services. Our commitment to quality, authenticity, 
                and exceptional service has earned us the trust of hundreds of families 
                and businesses across Maharashtra.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to offer a diverse range of cuisines for all occasions, 
                while maintaining the same passion and attention to detail that started it all.
              </p>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/09745e0c-660e-4fe0-a370-dc320c15d822.png"
                alt="Namo Caterers Logo"
                className="w-full h-auto rounded-2xl shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver 
              exceptional experiences to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-card border-border/50">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional catering services that exceed our clients' expectations 
                  by delivering delicious, authentic cuisine with outstanding service. We strive 
                  to make every event memorable through our commitment to quality and attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading catering service in Maharashtra, known for our culinary 
                  excellence, innovative menu options, and exceptional customer service. We envision 
                  a future where Namo Caterers is synonymous with memorable dining experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These milestones reflect our dedication to excellence and the trust 
              our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our experienced team of chefs and service professionals are passionate 
            about creating exceptional culinary experiences for your special occasions.
          </p>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-warm">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by our head chef with over 15 years of experience in traditional and 
              contemporary cuisines, our team consists of skilled cooks, professional 
              servers, and dedicated event coordinators who work together to ensure 
              your event is flawlessly executed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;