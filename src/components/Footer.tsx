import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Twitter, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Maharaj", href: "/about" },
  { label: "Book Katha", href: "/katha" },
  { label: "Event Schedule", href: "/schedule" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "http://www.youtube.com/@GuneshanandaMilan", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-footer-gradient text-primary-foreground/80 relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-lg">🕉️</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground">
                  Swami Guneshananda
                </h3>
                <p className="text-xs text-primary-foreground/50">Maharaj</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Experience divine wisdom through sacred Bhagavat Katha and spiritual teachings.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-primary-foreground/70" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Radha Keli Kunj</p>
                  <p className="text-xs text-primary-foreground/50">Vrindavan, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-primary-foreground">+91 9430880950</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-heading font-bold text-primary mb-2">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/50 mb-4">
              Subscribe for updates about upcoming events
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-cta-gradient text-primary-foreground px-6 py-3 rounded-r-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs text-primary-foreground/40">
          © 2024 Swami Guneshananda Maharaj. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
