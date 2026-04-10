import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { MapPin, Calendar, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import CinematicPageHero from "@/components/CinematicPageHero";
import CinematicSection from "@/components/CinematicSection";
import kathaBg from "@/assets/katha-bg.jpg";

interface KathaBooking {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string;
  status: string;
}

const KathaPage = () => {
  const [kathas, setKathas] = useState<KathaBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("katha_bookings")
        .select("*")
        .order("event_date", { ascending: true });
      setKathas(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <CinematicPageHero
          image={kathaBg}
          title="Bhagavat Katha"
          highlight="with Swami Guneshananda Ji"
          subtitle="Enter a sacred atmosphere where scripture, devotion, and living wisdom come together with warmth and grandeur."
        />

        <CinematicSection image={kathaBg} className="pt-0">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card/70 backdrop-blur-md rounded-3xl p-8 animate-pulse shadow-lg">
                  <div className="h-4 bg-muted rounded w-1/2 mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : kathas.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-24">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mx-auto">
                    <Sparkles className="w-10 h-10 text-primary/40" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-heading font-bold text-foreground/60 mb-3">No Kathas Scheduled Yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Upcoming Bhagavat Katha events will appear here. Contact us to book a katha session.
                </p>
                <a
                  href="tel:+919430880950"
                  className="inline-flex items-center gap-2 bg-cta-gradient text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
              </div>
            </AnimatedSection>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {kathas.map((k, i) => (
                  <AnimatedSection key={k.id} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-card/75 backdrop-blur-md rounded-3xl p-8 border border-border/30 hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem]" />
                      <div className="flex items-center gap-3 mb-5">
                        <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {k.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {new Date(k.event_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">{k.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{k.description}</p>
                      <div className="mt-5">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${k.status === "upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                          {k.status.charAt(0).toUpperCase() + k.status.slice(1)}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection className="mt-16 text-center">
                <div className="bg-cta-gradient rounded-3xl p-12 text-center shadow-2xl shadow-primary/20">
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
            </>
          )}
        </CinematicSection>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default KathaPage;
