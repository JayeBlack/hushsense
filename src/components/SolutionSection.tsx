import { Button } from '@/components/ui/button';
import { Smartphone, Map, Coins } from 'lucide-react';

const SolutionSection = () => {
  const pillars = [
    {
      icon: Smartphone,
      title: 'Crowdsourced Data',
      description: 'Billions of smartphones worldwide contribute noise measurements, creating the largest noise pollution dataset ever assembled.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Map,
      title: 'Real-Time Mapping',
      description: 'Live noise intensity visualization helps you find quiet spaces and avoid noisy areas in real-time.',
      color: 'bg-secondary/10 text-secondary',
    },
    {
      icon: Coins,
      title: 'Token Rewards',
      description: 'Earn $HUSH tokens for contributing valuable data, creating a sustainable incentive for community participation.',
      color: 'bg-tertiary/10 text-tertiary',
    },
  ];

  return (
    <section id="solution-overview" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Smartphone, Your Contribution,{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Your Rewards
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              HushSense transforms every smartphone into a powerful noise monitoring device, 
              creating a decentralized network that benefits everyone.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${pillar.color} rounded-full mb-6`}>
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#how-it-works">How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;