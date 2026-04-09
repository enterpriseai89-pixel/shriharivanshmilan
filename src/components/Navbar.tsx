import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Book Katha", href: "/katha" },
  { label: "Schedule", href: "/schedule" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-lg">🕉️</span>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-primary leading-tight">
              Guneshananda Ji
            </h2>
            <p className="text-xs text-muted-foreground">Maharaj</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admin"
            className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            aria-label="Admin"
          >
            <Shield className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919430880950"
            className="flex items-center gap-2 bg-cta-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" />
            9430880950
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "block py-3 px-4 rounded-xl text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="block py-3 px-4 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Admin Panel
              </Link>
              <a
                href="tel:+919430880950"
                className="mt-3 flex items-center justify-center gap-2 bg-cta-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                9430880950
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
