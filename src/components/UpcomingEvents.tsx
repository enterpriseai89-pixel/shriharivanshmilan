import { MapPin, Clock, Calendar, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface ScheduleEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  time_slot: string | null;
  location: string;
  status: string;
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("schedules")
        .select("*")
        .eq("status", "upcoming")
        .order("event_date", { ascending: true })
        .limit(3);
      setEvents((data as ScheduleEvent[]) || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  if (loading) return null;

  return (
    <section id="schedule" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Upcoming <span className="text-gradient-saffron">Bhagavat Kathas</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Join us for transformative spiritual experiences
            </p>
          </div>
          <Link
            to="/schedule"
            className="mt-4 md:mt-0 text-primary font-semibold hover:underline"
          >
            View All Events →
          </Link>
        </div>

        {events.length === 0 ? (
          <AnimatedSection>
            <div className="text-center py-16">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-8 h-8 text-primary/30" />
              </motion.div>
              <p className="text-muted-foreground">No upcoming events. Check back soon!</p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-background rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {new Date(event.event_date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  {event.time_slot && (
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time_slot}
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
