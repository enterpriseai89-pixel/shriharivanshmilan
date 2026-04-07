import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import KathaExperience from "@/components/KathaExperience";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <KathaExperience />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
