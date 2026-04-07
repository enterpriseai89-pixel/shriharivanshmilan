import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Video, Music, ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Resource {
  id: string;
  title: string;
  description: string | null;
  type: string;
  url: string;
  thumbnail_url: string | null;
}

const fallbackResources: Resource[] = [
  {
    id: "1",
    title: "Introduction to Bhagavat Katha",
    description: "A comprehensive introduction to the sacred art of Bhagavat Katha and its significance.",
    type: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: null,
  },
  {
    id: "2",
    title: "Daily Prayers & Mantras",
    description: "Collection of essential daily prayers and mantras for spiritual practice.",
    type: "pdf",
    url: "#",
    thumbnail_url: null,
  },
  {
    id: "3",
    title: "Krishna Bhajans Collection",
    description: "Beautiful devotional songs and bhajans dedicated to Lord Krishna.",
    type: "audio",
    url: "#",
    thumbnail_url: null,
  },
  {
    id: "4",
    title: "Bhagavad Gita Teachings",
    description: "Key teachings from the Bhagavad Gita explained in simple language.",
    type: "video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: null,
  },
  {
    id: "5",
    title: "Meditation Guide",
    description: "Step-by-step meditation guide for beginners and advanced practitioners.",
    type: "pdf",
    url: "#",
    thumbnail_url: null,
  },
  {
    id: "6",
    title: "Spiritual Discourses",
    description: "Audio recordings of spiritual discourses and teachings.",
    type: "audio",
    url: "#",
    thumbnail_url: null,
  },
];

const typeIcon = { pdf: FileText, video: Video, audio: Music };
const typeColor = {
  pdf: "from-primary to-deep-orange",
  video: "from-secondary to-warm-pink",
  audio: "from-accent to-secondary",
};

const ResourcesPage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchResources = async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (error || !data?.length) {
        setResources(fallbackResources);
      } else {
        setResources(data);
      }
      setLoading(false);
    };
    fetchResources();
  }, []);

  const filtered = filter === "all" ? resources : resources.filter((r) => r.type === filter);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([^&?\s]+)/);
    return match?.[1];
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-center">
              Spiritual <span className="text-gradient-saffron">Resources</span>
            </h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Downloadable content, videos, and audio to deepen your spiritual practice
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <AnimatedSection className="flex justify-center gap-2 mb-12 flex-wrap">
            {["all", "video", "pdf", "audio"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === t
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-background text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border/30"
                }`}
              >
                {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1) + "s"}
              </button>
            ))}
          </AnimatedSection>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background rounded-3xl p-8 animate-pulse">
                  <div className="h-4 bg-muted rounded w-1/2 mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((resource, i) => {
                const Icon = typeIcon[resource.type as keyof typeof typeIcon] || FileText;
                const gradient = typeColor[resource.type as keyof typeof typeColor] || "from-primary to-deep-orange";
                const ytId = resource.type === "video" ? getYouTubeId(resource.url) : null;

                return (
                  <AnimatedSection key={resource.id} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="bg-background rounded-3xl overflow-hidden border border-border/30 shadow-lg group"
                    >
                      {/* Video embed or type banner */}
                      {ytId ? (
                        <div className="relative aspect-video bg-dark-navy">
                          <iframe
                            src={`https://www.youtube.com/embed/${ytId}`}
                            title={resource.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
                          <Icon className="w-12 h-12 text-primary-foreground/80" />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-primary-foreground`}>
                            {resource.type.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {resource.description}
                        </p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                        >
                          {resource.type === "video" ? (
                            <>
                              <Play className="w-4 h-4" /> Watch Now
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-4 h-4" /> Download
                            </>
                          )}
                        </a>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
