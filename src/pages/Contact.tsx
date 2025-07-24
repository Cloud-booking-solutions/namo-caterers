import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import heroContact from '@/assets/hero-contact.jpg';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Dange Chowk Rd, near SBI, Yashoda Colony, Thergaon, Pimpri-Chinchwad, Pune, Maharashtra 411033',
      link: 'https://maps.google.com/?q=Dange+Chowk+Rd+near+SBI+Yashoda+Colony+Thergaon+Pimpri-Chinchwad+Pune+Maharashtra+411033'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8149507266',
      link: 'tel:8149507266'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'namocaterers10@gmail.com',
      link: 'mailto:namocaterers10@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24/7 Available for Events',
      link: null
    }
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Festival Celebration',
    'Social Gathering',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroContact}
        title="Contact Us"
        subtitle="Let's discuss your catering needs and create something amazing together"
      />

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to plan your next event? Contact us today and let's create a memorable 
              culinary experience for your special occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Contact */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="text-center"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                        Event Date
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                        Guest Count
                      </label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="Approximate number of guests"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your event requirements, dietary preferences, budget, etc."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Quick Contact</CardTitle>
                  <p className="text-muted-foreground">
                    Need immediate assistance? Reach out to us directly.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a
                      href="https://wa.me/918149507266?text=Hello%20Namo%20Caterers!%20I'm%20interested%20in%20your%20catering%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Us</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href="tel:8149507266"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now: +91 8149507266</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href="mailto:namocaterers10@gmail.com"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Free consultation and menu planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Customizable packages to fit your budget</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Professional and courteous staff</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Fresh ingredients and authentic flavors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">On-time delivery and setup</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Location</h2>
            <p className="text-xl text-muted-foreground">
              Find us in Pune, Maharashtra. We're conveniently located and ready to serve you.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-warm">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Address</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Dange Chowk Rd, near SBI, Yashoda Colony, Thergaon,<br />
              Pimpri-Chinchwad, Pune, Maharashtra 411033
            </p>
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <a
                href="https://maps.google.com/?q=Dange+Chowk+Rd+near+SBI+Yashoda+Colony+Thergaon+Pimpri-Chinchwad+Pune+Maharashtra+411033"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;