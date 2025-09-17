import { Button } from '@/components/ui/button';
import { Shield, Lock, Database, Zap } from 'lucide-react';

const TechnologySection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Hedera Network',
      description: 'Built on enterprise-grade blockchain technology for maximum security and scalability.',
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Your personal data remains private with advanced encryption and user-controlled sharing.',
    },
    {
      icon: Database,
      title: 'Immutable Records',
      description: 'All noise measurements are permanently recorded on the blockchain for transparency.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant data processing and visualization for immediate insights and rewards.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Built on Blockchain,{' '}
              <span className="text-primary">Powered by Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology meets community collaboration to create the most trusted noise monitoring platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border/20 rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="#community">Join the Community</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;