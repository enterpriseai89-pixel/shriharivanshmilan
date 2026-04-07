import krishnaImg from "@/assets/krishna-hero.png";

const FloatingEmoji = ({ emoji, className }: { emoji: string; className: string }) => (
  <span className={`absolute text-xl pointer-events-none select-none ${className}`}>
    {emoji}
  </span>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-16">
      {/* Floating decorative elements */}
      <FloatingEmoji emoji="✨" className="top-24 left-[10%] animate-sparkle" />
      <FloatingEmoji emoji="🪷" className="top-32 left-[25%] animate-sparkle opacity-60" />
      <FloatingEmoji emoji="🌟" className="top-20 right-[30%] animate-sparkle" />
      <FloatingEmoji emoji="🕉️" className="top-40 right-[15%] animate-sparkle opacity-50" />
      <FloatingEmoji emoji="💫" className="bottom-40 left-[15%] animate-sparkle" />
      <FloatingEmoji emoji="🪶" className="top-1/3 left-[5%] animate-feather opacity-60" />
      <FloatingEmoji emoji="🪶" className="bottom-1/3 right-[8%] animate-feather opacity-40" />
      <FloatingEmoji emoji="✨" className="bottom-24 right-[25%] animate-sparkle opacity-50" />

      {/* Scattered gold dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-divine-gold/40 animate-sparkle"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight">
              <span className="text-gradient-saffron">Swami</span>
              <br />
              <span className="text-gradient-saffron">Guneshananda</span>
              <br />
              <span className="text-foreground/80">Maharaj</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0">
              Experience the divine wisdom through sacred{" "}
              <span className="text-primary font-semibold">Bhagavat Katha</span>{" "}
              and spiritual teachings
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="tel:+919430880950"
                className="bg-cta-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Book Bhagavat Katha
              </a>
              <a
                href="#about"
                className="text-foreground/70 font-medium text-lg hover:text-primary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Krishna Image */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-divine-gold/30 to-primary/20 flex items-center justify-center shadow-2xl">
              <img
                src={krishnaImg}
                alt="Divine Krishna"
                width={512}
                height={512}
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain animate-float"
              />
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-divine-gold/20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
