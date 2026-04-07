const CTASection = () => {
  return (
    <section className="py-20 bg-cta-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute text-primary-foreground/20 text-sm animate-sparkle"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Experience the transformative power of divine wisdom and join our community of seekers
        </p>
        <a
          href="tel:+919430880950"
          className="inline-block bg-card text-primary px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
        >
          Book Your Bhagavat Katha
        </a>
      </div>
    </section>
  );
};

export default CTASection;
