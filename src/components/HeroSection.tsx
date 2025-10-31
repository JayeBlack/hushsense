import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MapPin, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-calm">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              HushSense:
            </span>
            <br />
            Your Guide to a{' '}
            <span className="text-secondary">Quieter</span> World
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Measure noise, find tranquility, and shape your city with decentralized data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/download/app-release.apk" className="flex items-center">
                Download App
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>


          {/* Real-time Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary mb-2" />
              </div>
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-secondary mb-2" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-8 w-8 text-tertiary mb-2" />
              </div>
              <div className="text-2xl font-bold text-foreground">1M+</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;