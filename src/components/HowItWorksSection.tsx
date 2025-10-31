import { Button } from '@/components/ui/button';
import { Download, Activity, Gift } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Download & Check-In',
      description: 'Get the free HushSense app and complete our simple onboarding process. No complicated setup required.',
      color: 'text-primary',
    },
    {
      number: '02',
      icon: Activity,
      title: 'Measure & Contribute',
      description: 'Choose between passive background monitoring or active noise measurements. Your data helps build comprehensive noise maps.',
      color: 'text-secondary',
    },
    {
      number: '03',
      icon: Gift,
      title: 'Earn & Impact',
      description: 'Earn $HUSH tokens for your contributions and see how your data helps create positive change in your community.',
      color: 'text-tertiary',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Three Simple Steps to{' '}
              <span className="text-success">Make an Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who are already contributing to a quieter world.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border/30 z-0">
                    <div className="w-1/2 h-full bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                )}
                
                <div className="bg-card border border-border/20 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth relative z-10 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-muted/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:scale-110 transition-smooth">
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mini-App Simulator */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-12 shadow-medium text-center mb-12">
            <video 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/assets/tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="success" size="lg" asChild>
              <a href="/download/app-release.apk">Download Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;