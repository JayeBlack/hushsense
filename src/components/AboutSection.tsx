import { Button } from '@/components/ui/button';
import { Heart, Globe, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Every decision we make puts our community of contributors at the center.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that scale from local neighborhoods to global cities.',
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Using precise, real-time data to create meaningful change in urban environments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                HushSense was born from a simple observation: noise pollution is everywhere, 
                but comprehensive data about it is nowhere. We're changing that by putting 
                the power of noise monitoring directly into the hands of communities worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create a decentralized, community-driven platform that not only 
                helps individuals find peace and quiet in their daily lives, but also provides 
                invaluable data to urban planners, policymakers, and businesses to create 
                healthier, more livable cities for everyone.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-12 shadow-medium text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Vision for 2030
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A world where every city has comprehensive, real-time noise data that empowers 
              citizens to find tranquility, helps businesses optimize their environments, 
              and enables governments to create evidence-based policies for healthier urban living.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;