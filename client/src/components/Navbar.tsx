/**
 * Navbar — SouthWay Results
 * Design: Deep navy sticky nav, Montserrat 600 links, blue CTA button
 * Animated underline on active/hover, mobile hamburger menu
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,22,40,0.97)"
          : "rgba(10,22,40,0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Urgency banner */}
      <div className="urgency-banner">
        ⚡ Limited spots available — Book your free consultation today!
      </div>

      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <span
            className="font-display font-900 text-xl tracking-tight"
            style={{ color: "#fff" }}
          >
            South<span style={{ color: "#1E90FF" }}>Way</span>{" "}
            <span style={{ color: "#F59E0B" }}>Results</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={`nav-link ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <button
            className="btn-cta font-display font-700 text-sm px-5 py-2.5 rounded-full text-white"
            style={{
              background: "linear-gradient(135deg, #1E90FF, #0066CC)",
              letterSpacing: "0.03em",
            }}
          >
            Book Free Consultation
          </button>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "rgba(10,22,40,0.98)", overflow: "hidden" }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`block py-3 font-display font-600 text-base border-b border-white/10 ${
                        location === link.href
                          ? "text-blue-400"
                          : "text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/contact">
                  <button
                    className="w-full btn-cta font-display font-700 text-sm px-5 py-3 rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #1E90FF, #0066CC)",
                    }}
                  >
                    Book Free Consultation
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
