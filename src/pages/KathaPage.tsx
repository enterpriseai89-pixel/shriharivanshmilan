import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Heart, Users, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BookOpen,
    title: "Divine Stories",
    description: "Immerse yourself in the divine stories of Lord Krishna and the eternal wisdom of Shrimad Bhagavatam.",
    gradient: "from-primary to-deep-orange",
  },
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description: "Receive personalized guidance on meditation, devotion, and the path to spiritual enlightenment.",
    gradient: "from-secondary to-warm-pink",
  },
  {
    icon: Users,
    title: "Community Satsang",
    description: "Join a vibrant community of devotees in group discussions, bhajans, and collective spiritual practices.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Star,
    title: "Sacred Rituals",
    description: "Participate in divine ceremonies, pujas, and sacred rituals that connect you with the divine.",
    gradient: "from-divine-gold to-primary",
  },
];

const KathaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-24 bg-hero-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-center">
              Bhagavat Katha <span className="text-gradient-saffron">Experience</span>
            </h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Discover the profound wisdom of Shrimad Bhagavatam through contemporary understanding
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background rounded-3xl p-8 shadow-lg border border-border/30 group relative overflow-hidden h-full"
                  >
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-cta-gradient rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready to Book Your Katha?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Contact us today to schedule your personal Bhagavat Katha session
              </p>
              <a
                href="tel:+919430880950"
                className="inline-flex items-center gap-2 bg-card text-primary px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Phone className="w-5 h-5" />
                Call to Book
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KathaPage;
