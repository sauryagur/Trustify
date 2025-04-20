
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/layout/HeroSection";
import FeaturesSection from "@/components/layout/FeaturesSection";
import HowItWorksSection from "@/components/layout/HowItWorksSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import PricingSection from "@/components/layout/PricingSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
