import { Phone, Youtube } from "lucide-react";
import vrindavanImg from "@/assets/vrindavan-temple.jpg";
import templeTimeImg from "@/assets/temple-time.jpg";
import prayerImg from "@/assets/prayer-hands.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-3">
          Get In <span className="text-gradient-saffron">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
          Connect with us for spiritual guidance, event information, or to schedule your personal
          Bhagavat Katha session
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: vrindavanImg,
              title: "Our Sacred Location",
              content: "Vrindavan, Uttar Pradesh",
              sub: "Experience the divine atmosphere of our sacred space where spiritual seekers gather for wisdom and enlightenment.",
            },
            {
              img: templeTimeImg,
              title: "Office Hours",
              content: "Monday - Saturday: 9:00 AM - 6:00 PM",
              sub: "Morning: 6-8 AM | Evening: 5-7 PM",
            },
            {
              img: prayerImg,
              title: "Ready to Connect?",
              content: "+91 9430880950",
              sub: "Book your spiritual session today",
              isContact: true,
            },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl overflow-hidden border border-border/50">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
                <p className="text-sm text-muted-foreground mt-3">{item.sub}</p>

                {item.isContact && (
                  <div className="mt-4 space-y-3">
                    <a
                      href="tel:+919430880950"
                      className="flex items-center gap-2 bg-cta-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold justify-center hover:opacity-90 transition-opacity"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919430880950?text=Hello!%20I%20would%20like%20to%20book%20a%20Bhagavat%20Katha%20session."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold justify-center hover:bg-primary/5 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="http://www.youtube.com/@GuneshanandaMilan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Youtube className="w-5 h-5" />
            Subscribe to YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
