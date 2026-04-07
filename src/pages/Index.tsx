import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import KathaExperience from "@/components/KathaExperience";
import UpcomingEvents from "@/components/UpcomingEvents";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <KathaExperience />
      <UpcomingEvents />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
