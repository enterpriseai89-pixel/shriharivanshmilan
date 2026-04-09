import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { Phone, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import vrindavanImg from "@/assets/vrindavan-temple.jpg";
import templeTimeImg from "@/assets/temple-time.jpg";
import prayerImg from "@/assets/prayer-hands.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-center">
              Get In <span className="text-gradient-saffron">Touch</span>
            </h1>
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Connect with us for spiritual guidance, event information, or to schedule your personal Bhagavat Katha session
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
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
                  className="bg-background rounded-3xl overflow-hidden border border-border/30 shadow-lg h-full"
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
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
            >
              <Youtube className="w-6 h-6" />
              Subscribe to YouTube Channel
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default ContactPage;
