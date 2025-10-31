import { Button } from '@/components/ui/button';
import { Users, Trophy, MapPin, Star } from 'lucide-react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: 'Akosua Mensah',
      location: 'Accra, Ghana',
      avatar: 'AM',
      text: 'HushSense helped me find the perfect quiet cafe for my remote work. The token rewards are a nice bonus!',
      rating: 5,
    },
    {
      name: 'Kwame Asante',
      location: 'Kumasi, Ghana',
      avatar: 'KA',
      text: 'As an urban planner, the noise data from HushSense has been invaluable for our city projects.',
      rating: 5,
    },
    {
      name: 'Ama Osei',
      location: 'Takoradi, Ghana',
      avatar: 'AO',
      text: 'Love contributing to my community while earning rewards. The app is so easy to use!',
      rating: 5,
    },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Communities,{' '}
              <span className="text-success">Real Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a global movement of citizens working together to create quieter, healthier cities.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Cities with Reduced Noise</div>
            </div>
            
            <div className="bg-card backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">150K+</div>
              <div className="text-sm text-muted-foreground">Active Contributors</div>
            </div>
            
            <div className="bg-card backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tertiary/10 rounded-full mb-4">
                <Trophy className="h-6 w-6 text-tertiary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">5M+</div>
              <div className="text-sm text-muted-foreground">Tokens Earned</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border/20 rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="text-center">
            <Button variant="success" size="lg" asChild>
              <a href="/download/app-release.apk">Join the Network</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;