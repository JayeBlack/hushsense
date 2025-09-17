import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DataProductsSection from '@/components/DataProductsSection';
import TechnologySection from '@/components/TechnologySection';
import CommunitySection from '@/components/CommunitySection';
import TeamSection from '@/components/TeamSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import InteractiveElements from '@/components/InteractiveElements';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <DataProductsSection />
        <TechnologySection />
        <CommunitySection />
        <TeamSection />
        <AboutSection />
        <InteractiveElements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
