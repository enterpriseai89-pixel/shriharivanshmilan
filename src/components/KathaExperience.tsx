import { BookOpen, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: BookOpen,
    title: "Divine Stories",
    description:
      "Immerse yourself in the divine stories of Lord Krishna and the eternal wisdom of Shrimad Bhagavatam through enlightening narrations.",
    gradient: "from-primary to-deep-orange",
  },
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description:
      "Receive personalized guidance on meditation, devotion, and the path to spiritual enlightenment through direct interaction.",
    gradient: "from-secondary to-warm-pink",
  },
  {
    icon: Users,
    title: "Community Satsang",
    description:
      "Join a vibrant community of devotees in group discussions, bhajans, and collective spiritual practices.",
    gradient: "from-accent to-secondary",
  },
];

const KathaExperience = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-foreground">
            Bhagavat Katha <span className="text-gradient-saffron">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">
            Discover the profound wisdom of Shrimad Bhagavatam through contemporary understanding
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-3xl p-8 shadow-lg border border-border/30 group h-full relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KathaExperience;
