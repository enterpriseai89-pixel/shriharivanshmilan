import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface KathaBooking {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  location: string;
  status: string;
}

const fallbackEvents = [
  {
    id: "1",
    location: "Vrindavan",
    event_date: "2025-12-15",
    title: "Shrimad Bhagavat Katha",
    description: "7-day spiritual journey through the divine stories of Lord Krishna",
    status: "upcoming",
  },
  {
    id: "2",
    location: "Vrindavan",
    event_date: "2025-12-22",
    title: "Shrimad Bhagavat Katha",
    description: "Experience divine love and wisdom through Krishna's eternal stories",
    status: "upcoming",
  },
  {
    id: "3",
    location: "Vrindavan",
    event_date: "2026-01-05",
    title: "Shrimad Bhagavat Katha",
    description: "New Year special katha for spiritual renewal",
    status: "upcoming",
  },
];

const SchedulePage = () => {
  const [events, setEvents] = useState<KathaBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("katha_bookings")
        .select("*")
        .order("event_date", { ascending: true });

      if (error || !data?.length) {
        setEvents(fallbackEvents);
      } else {
        setEvents(data);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-center">
              Upcoming <span className="text-gradient-saffron">Bhagavat Kathas</span>
            </h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Join us for transformative spiritual experiences
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background rounded-3xl p-8 border border-border/30 hover:shadow-xl transition-shadow relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-3xl" />
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {new Date(event.event_date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="mt-5">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        event.status === "upcoming"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchedulePage;
