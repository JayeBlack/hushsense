import { Button } from '@/components/ui/button';
import { Building, Map, FileText, Calculator } from 'lucide-react';

const DataProductsSection = () => {
  const products = [
    {
      icon: Building,
      title: 'Facility Noise Intensity',
      description: 'Real-time and historical noise data for restaurants, hotels, and entertainment venues to optimize customer experience.',
      features: ['Real-time monitoring', 'Historical trends', 'Customer satisfaction insights'],
    },
    {
      icon: Map,
      title: 'Urban Sound Intensity',
      description: 'Hyperlocal street-level noise maps for urban planners, developers, and policymakers.',
      features: ['Block-level precision', 'Time-based patterns', 'Comparative analysis'],
    },
    {
      icon: FileText,
      title: 'Detailed Noise Reports',
      description: 'Custom reports and analytics for policy development, enforcement, and environmental impact assessments.',
      features: ['Custom reporting', 'Compliance tracking', 'Impact analysis'],
    },
  ];

  return (
    <section id="data-products" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Power Your Decisions with{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                HushSense Data
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform noise data into actionable insights for businesses, urban planners, and policymakers.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
                  <product.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Contact for Business Solutions</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProductsSection;