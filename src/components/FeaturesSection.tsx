import { MapPin, Users, DollarSign } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Find Quiet Spots',
      description: 'Discover serene locations using real-time noise maps powered by community data.',
      color: 'text-primary',
    },
    {
      icon: Users,
      title: 'Contribute to Your City',
      description: 'Share noise data to aid urban planning and create positive change in your community.',
      color: 'text-secondary',
    },
    {
      icon: DollarSign,
      title: 'Earn Rewards',
      description: 'Earn $HUSH tokens for contributing valuable noise pollution data to the network.',
      color: 'text-tertiary',
    },
  ];

  return (
    <section className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how HushSense helps you find tranquility while contributing to a quieter world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 group-hover:scale-110 transition-smooth">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;