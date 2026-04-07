import swamiImg from "@/assets/swami-photo.jpg";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10000+", label: "Lives Touched" },
  { value: "500+", label: "Kathas Conducted" },
];

const WelcomeSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-foreground mb-4">
            Welcome to <span className="text-gradient-saffron">Divine Wisdom</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-foreground/70 text-lg leading-relaxed">
              Swami Guneshananda Maharaj brings decades of spiritual wisdom and devotion to guide
              souls on their divine journey. Through his enlightening Bhagavat Katha, experience the
              profound teachings that transform hearts and minds.
            </p>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Join thousands of devotees who have found peace, purpose, and spiritual awakening
              through his sacred teachings in the holy land of Vrindavan.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.15}>
                  <div className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30">
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={swamiImg}
                  alt="Swami Guneshananda Maharaj"
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-80 md:h-[32rem] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
