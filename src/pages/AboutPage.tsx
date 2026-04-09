import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import swamiImg from "@/assets/swami-photo.jpg";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10000+", label: "Lives Touched" },
  { value: "500+", label: "Kathas Conducted" },
  { value: "50+", label: "Cities Visited" },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-28 pb-24 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-center">
                About <span className="text-gradient-saffron">Guneshananda Ji</span>
              </h1>
              <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                A journey of decades in spiritual service and divine wisdom
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={swamiImg}
                      alt="Swami Guneshananda Maharaj"
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
                <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
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
                        className="text-center p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30"
                      >
                        <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
