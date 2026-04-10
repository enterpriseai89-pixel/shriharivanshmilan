import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { MapPin, Clock, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import CinematicPageHero from "@/components/CinematicPageHero";
import CinematicSection from "@/components/CinematicSection";
import scheduleBg from "@/assets/schedule-bg.jpg";

interface ScheduleEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  time_slot: string | null;
  location: string;
  status: string;
}

const SchedulePage = () => {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("schedules")
        .select("*")
        .order("event_date", { ascending: true });
      setEvents((data as ScheduleEvent[]) || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <CinematicPageHero
          image={scheduleBg}
          title="Event"
          highlight="Schedule"
          subtitle="Follow the upcoming darshan of kathas, gatherings, and sacred moments with Swami Guneshananda Ji."
        />

        <CinematicSection image={scheduleBg} className="pt-0">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card/70 backdrop-blur-md rounded-3xl p-8 animate-pulse shadow-lg">
                  <div className="h-4 bg-muted rounded w-1/2 mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
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
                <h3 className="text-2xl font-heading font-bold text-foreground/60 mb-3">No Events Scheduled Yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  New katha events and spiritual gatherings will be announced here. Stay tuned for upcoming schedules from Vrindavan.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                      className="bg-card/75 backdrop-blur-md rounded-3xl p-8 border border-border/30 hover:shadow-xl transition-shadow relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl" />
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {new Date(event.event_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      {event.time_slot && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {event.time_slot}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    <div className="mt-5">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.status === "upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </CinematicSection>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default SchedulePage;
