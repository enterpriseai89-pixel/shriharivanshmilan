import swamiImg from "@/assets/swami-photo.jpg";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10000+", label: "Lives Touched" },
  { value: "500+", label: "Kathas Conducted" },
];

const WelcomeSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          Welcome to <span className="text-gradient-saffron">Divine Wisdom</span>
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Swami Guneshananda Maharaj brings decades of spiritual wisdom and devotion to guide
              souls on their divine journey. Through his enlightening Bhagavat Katha, experience the
              profound teachings that transform hearts and minds.
            </p>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Join thousands of devotees who have found peace, purpose, and spiritual awakening
              through his sacred teachings in the holy land of Vrindavan.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={swamiImg}
                alt="Swami Guneshananda Maharaj"
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-80 md:h-[28rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-warm-pink/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
