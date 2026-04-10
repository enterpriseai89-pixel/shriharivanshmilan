import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Phone, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import vrindavanImg from "@/assets/vrindavan-temple.jpg";
import templeTimeImg from "@/assets/temple-time.jpg";
import prayerImg from "@/assets/prayer-hands.jpg";
import CinematicPageHero from "@/components/CinematicPageHero";
import CinematicSection from "@/components/CinematicSection";
import contactBg from "@/assets/contact-bg.jpg";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <CinematicPageHero
          image={contactBg}
          title="Connect with"
          highlight="Swami Guneshananda Ji"
          subtitle="Reach out for spiritual guidance, event details, and personal Bhagavat Katha bookings in a warm, devotional setting."
        />

        <CinematicSection image={contactBg} className="pt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: vrindavanImg,
                title: "Our Sacred Location",
                content: "Vrindavan, Uttar Pradesh",
                sub: "Experience the divine atmosphere of our sacred space.",
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
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card/75 backdrop-blur-md rounded-3xl overflow-hidden border border-border/30 shadow-xl h-full"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/80 font-medium">{item.content}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.sub}</p>

                    {item.isContact && (
                      <div className="mt-5 space-y-3">
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
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <a
              href="http://www.youtube.com/@GuneshanandaMilan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-6 py-3 text-primary font-semibold text-lg backdrop-blur-md hover:bg-card/80 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              Subscribe to YouTube Channel
            </a>
          </AnimatedSection>
        </CinematicSection>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
