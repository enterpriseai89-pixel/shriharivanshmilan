import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import KathaExperience from "@/components/KathaExperience";
import UpcomingEvents from "@/components/UpcomingEvents";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <WelcomeSection />
        <KathaExperience />
        <UpcomingEvents />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
