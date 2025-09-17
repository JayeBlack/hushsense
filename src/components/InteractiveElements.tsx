import { Volume2, Activity, Target, Map } from 'lucide-react';

const InteractiveElements = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Interactive Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience HushSense technology through our interactive demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Noise Map */}
            <div className="bg-card border border-border/20 rounded-2xl p-8 shadow-soft">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Map className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Live Noise Map
                </h3>
                <div className="bg-muted/20 rounded-xl p-6 mb-4">
                  <div className="text-muted-foreground font-medium">
                    [Live Noise Map Placeholder]
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time visualization of noise levels in your area
                  </p>
                </div>
              </div>
            </div>

            {/* Noise Level Checker */}
            <div className="bg-card border border-border/20 rounded-2xl p-8 shadow-soft">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <Volume2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Noise Level Checker
                </h3>
                <div className="bg-muted/20 rounded-xl p-6 mb-4">
                  <div className="text-muted-foreground font-medium">
                    [Noise Level Checker Placeholder]
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Test your device's noise measurement capabilities
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Meter */}
            <div className="bg-card border border-border/20 rounded-2xl p-8 shadow-soft">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tertiary/10 rounded-full mb-6">
                  <Target className="h-8 w-8 text-tertiary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Impact Meter
                </h3>
                <div className="bg-muted/20 rounded-xl p-6 mb-4">
                  <div className="text-muted-foreground font-medium">
                    [Impact Meter Placeholder]
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Track your contribution to the network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;