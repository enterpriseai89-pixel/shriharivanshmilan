import { MapPin, Clock, Phone, Youtube } from "lucide-react";

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
          {/* Location */}
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              Our Sacred Location
            </h3>
            <p className="text-muted-foreground">
              Radha Keli Kunj, Vrindavan, Uttar Pradesh
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Experience the divine atmosphere of our sacred space where spiritual seekers gather
              for wisdom and enlightenment.
            </p>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Office Hours</h3>
            <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Morning Sessions:</span> 6:00 AM - 8:00 AM
              </p>
              <p>
                <span className="font-medium text-foreground">Evening Sessions:</span> 5:00 PM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Online / Contact */}
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              Ready to Connect?
            </h3>
            <p className="text-muted-foreground mb-4">Book your spiritual session today</p>

            <div className="space-y-3">
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

            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Direct Contact</p>
              <p className="font-semibold text-foreground">+91 9430880950</p>
            </div>
          </div>
        </div>

        {/* YouTube */}
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
