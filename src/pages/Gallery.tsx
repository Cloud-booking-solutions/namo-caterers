import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import heroGallery from '@/assets/hero-gallery.jpg';

const Gallery = () => {
  // Placeholder gallery items - in a real app, these would come from a CMS or API
  const galleryItems = [
    {
      id: 1,
      title: 'Wedding Catering Setup',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Corporate Event Buffet',
      category: 'Corporate',
      image: 'https://plus.unsplash.com/premium_photo-1723867267202-169dfe3b197a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      title: 'Traditional Indian Thali',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBmb29kfGVufDB8fDB8fHww'
    },
    {
      id: 4,
      title: 'Birthday Party Setup',
      category: 'Celebrations',
      image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 5,
      title: 'Festival Catering',
      category: 'Festivals',
      image: 'https://images.unsplash.com/photo-1678646142794-253fdd20fa05?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww'
    },
    // {
    //   id: 6,
    //   title: 'Gourmet Appetizers',
    //   category: 'Food',
    //   image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop'
    // },
    {
      id: 7,
      title: 'Outdoor Event Catering',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1576842546422-60562b9242ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D'
    },
    // {
    //   id: 8,
    //   title: 'Dessert Station',
    //   category: 'Desserts',
    //   image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop'
    // },
    // {
    //   id: 9,
    //   title: 'Live Cooking Station',
    //   category: 'Live Cooking',
    //   image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop'
    // }
  ];

  const categories = ['All', 'Weddings', 'Corporate', 'Food', 'Celebrations', 'Festivals', 'Events',];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={heroGallery}
        title="Our Gallery"
        subtitle="Browse through our portfolio of successful events and delicious cuisine"
      />

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Event Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at some of our finest work and the memorable events we've catered. 
              From intimate gatherings to grand celebrations, we bring the same level of 
              excellence to every occasion.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 bg-gradient-card border-border/50">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {item.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients about 
              their experience with Namo Caterers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                event: 'Wedding Reception',
                text: 'Namo Caterers made our wedding day absolutely perfect! The food was delicious and the service was impeccable. All our guests are still talking about the amazing spread.',
                rating: 5
              },
              {
                name: 'Rajesh Patel',
                event: 'Corporate Event',
                text: 'Professional service and excellent food quality. They handled our company annual meet perfectly with over 200 attendees. Highly recommended for corporate events.',
                rating: 5
              },
              {
                name: 'Anita Desai',
                event: 'Birthday Party',
                text: 'Amazing experience! They took care of everything from menu planning to decoration. The kids loved the food and the presentation was beautiful.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful memories with our exceptional catering services. 
            Contact us today to discuss your event requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium">
              <a href="/contact">Get Started Today</a>
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium">
              <a href="tel:8149507266">Call: +91 8149507266</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;