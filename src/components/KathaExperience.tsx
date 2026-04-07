import { BookOpen, Heart, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Divine Stories",
    description:
      "Immerse yourself in the divine stories of Lord Krishna and the eternal wisdom of Shrimad Bhagavatam through enlightening narrations.",
  },
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description:
      "Receive personalized guidance on meditation, devotion, and the path to spiritual enlightenment through direct interaction.",
  },
  {
    icon: Users,
    title: "Community Satsang",
    description:
      "Join a vibrant community of devotees in group discussions, bhajans, and collective spiritual practices.",
  },
];

const KathaExperience = () => {
  return (
    <section id="katha" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground">
          Bhagavat Katha <span className="text-gradient-saffron">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
          Discover the profound wisdom of Shrimad Bhagavatam through contemporary understanding
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KathaExperience;
