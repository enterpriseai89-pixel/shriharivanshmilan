import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import CinematicPageHero from "@/components/CinematicPageHero";
import CinematicSection from "@/components/CinematicSection";
import { FileText, Video, Music, ExternalLink, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import resourcesBg from "@/assets/resources-bg.jpg";

interface Resource {
  id: string;
  title: string;
  description: string | null;
  type: string;
  url: string;
  thumbnail_url: string | null;
}

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
      const { data } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });
      setResources(data || []);
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
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />

      <CinematicPageHero
        image={resourcesBg}
        title="Spiritual"
        highlight="Resources"
        subtitle="Downloadable content, videos, and audio to deepen your spiritual practice with Swami Guneshananda Ji"
      />

      <CinematicSection image={resourcesBg} className="py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background/60 backdrop-blur-sm rounded-3xl p-8 animate-pulse border border-border/20">
                  <div className="h-4 bg-muted rounded w-1/2 mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : resources.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-24">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <Sparkles className="w-10 h-10 text-primary/60" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-heading font-bold text-foreground/70 mb-3">No Resources Available Yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Spiritual videos, PDFs, and audio content will appear here once added by the admin. Check back soon!
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <>
              <AnimatedSection className="flex justify-center gap-2 mb-12 flex-wrap">
                {["all", "video", "pdf", "audio"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                      filter === t
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-background/60 text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/30"
                    }`}
                  >
                    {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1) + "s"}
                  </button>
                ))}
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((resource, i) => {
                  const Icon = typeIcon[resource.type as keyof typeof typeIcon] || FileText;
                  const gradient = typeColor[resource.type as keyof typeof typeColor] || "from-primary to-deep-orange";
                  const ytId = resource.type === "video" ? getYouTubeId(resource.url) : null;

                  return (
                    <AnimatedSection key={resource.id} delay={i * 0.08}>
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-background/70 backdrop-blur-md rounded-3xl overflow-hidden border border-border/30 shadow-lg group"
                      >
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
                          </div>
                        )}

                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-primary-foreground`}>
                              {resource.type.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="text-lg font-heading font-bold text-foreground mb-2">{resource.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{resource.description}</p>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                          >
                            {resource.type === "video" ? (
                              <><Play className="w-4 h-4" /> Watch Now</>
                            ) : (
                              <><ExternalLink className="w-4 h-4" /> Download</>
                            )}
                          </a>
                        </div>
                      </motion.div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </CinematicSection>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default ResourcesPage;
