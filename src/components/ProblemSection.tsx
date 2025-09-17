import { Button } from '@/components/ui/button';
import { AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    {
      icon: AlertTriangle,
      value: '1.6B',
      label: 'People Affected',
      description: 'by harmful noise pollution globally',
    },
    {
      icon: DollarSign,
      value: '$40B+',
      label: 'Annual Cost',
      description: 'economic impact of noise pollution',
    },
    {
      icon: TrendingDown,
      value: '70%',
      label: 'Data Gap',
      description: 'of noise data is missing or outdated',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              The Hidden Crisis of{' '}
              <span className="text-destructive">Noise Pollution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Noise pollution is one of the most pervasive environmental issues of our time, 
              yet it remains largely invisible and under-measured.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border/20 rounded-2xl p-6 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-destructive" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Noise Impact Infographic */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-medium mb-12">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Real-Time Noise Mapping
              </h3>
              <p className="text-muted-foreground">
                Interactive map showing noise levels across different locations
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/noise-impact-infographic.jpg"
                alt="Interactive noise mapping interface showing real-time noise measurements across different locations"
                className="max-w-full h-auto rounded-lg shadow-medium"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#solution-overview">See Our Solution</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;