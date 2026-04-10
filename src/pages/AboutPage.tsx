import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import swamiImg from "@/assets/swami-photo.jpg";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import CinematicPageHero from "@/components/CinematicPageHero";
import CinematicSection from "@/components/CinematicSection";
import aboutBg from "@/assets/about-bg.jpg";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10000+", label: "Lives Touched" },
  { value: "500+", label: "Kathas Conducted" },
  { value: "50+", label: "Cities Visited" },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <CinematicPageHero
          image={aboutBg}
          title="About"
          highlight="Swami Guneshananda Ji"
          subtitle="A radiant journey of devotion, wisdom, and sacred service that continues to uplift hearts across generations."
        />

        <CinematicSection image={aboutBg} className="pt-0">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/40 backdrop-blur-sm">
                    <img
                      src={swamiImg}
                      alt="Swami Guneshananda Ji Maharaj"
                      loading="lazy"
                      width={640}
                      height={960}
                      className="w-full h-[32rem] object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl -z-10" />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  The <span className="text-gradient-saffron">Spiritual Journey</span>
                </h2>
                <div className="space-y-4 text-foreground/75 text-lg leading-relaxed">
                  <p>
                    Swami Guneshananda Ji brings decades of spiritual wisdom and devotion to guide
                    souls on their divine journey. Through his enlightening Bhagavat Katha, experience the
                    profound teachings that transform hearts and minds.
                  </p>
                  <p>
                    Join thousands of devotees who have found peace, purpose, and spiritual awakening
                    through his sacred teachings in the holy land of Vrindavan.
                  </p>
                  <p>
                    His teachings blend the ancient wisdom of Shrimad Bhagavatam with contemporary
                    relevance, making spirituality accessible to all seekers regardless of background.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <AnimatedSection key={stat.label} delay={i * 0.1}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-5 rounded-2xl bg-card/70 backdrop-blur-md border border-border/30 shadow-lg"
                      >
                        <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
        </CinematicSection>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
