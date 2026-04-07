import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Book Katha", href: "#katha" },
  { label: "Schedule", href: "#schedule" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-lg">🕉️</span>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-primary leading-tight">
              Swami Guneshananda
            </h2>
            <p className="text-xs text-muted-foreground">Maharaj</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+919430880950"
          className="hidden lg:flex items-center gap-2 bg-cta-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          9430880950
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919430880950"
            className="mt-3 flex items-center justify-center gap-2 bg-cta-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            9430880950
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
