import { MapPin, Clock, Calendar } from "lucide-react";

const events = [
  {
    location: "Vrindavan",
    date: "Dec 15, 2024",
    title: "Shrimad Bhagavat Katha",
    description: "7-day spiritual journey through the divine stories of Lord Krishna",
    time: "6:00 AM - 8:00 AM",
  },
  {
    location: "Vrindavan",
    date: "Dec 22, 2024",
    title: "Shrimad Bhagavat Katha",
    description: "Experience divine love and wisdom through Krishna's eternal stories",
    time: "5:30 AM - 7:30 AM",
  },
  {
    location: "Vrindavan",
    date: "Jan 5, 2025",
    title: "Shrimad Bhagavat Katha",
    description: "New Year special katha for spiritual renewal and divine blessings",
    time: "6:00 AM - 8:00 AM",
  },
];

const UpcomingEvents = () => {
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
          <a
            href="#schedule"
            className="mt-4 md:mt-0 text-primary font-semibold hover:underline"
          >
            View All Events →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {event.date}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              <div className="flex items-center gap-1 text-sm text-primary font-medium">
                <Clock className="w-3.5 h-3.5" />
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
