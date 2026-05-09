/**
 * Footer — SouthWay Results
 * Design: Deep navy background, three-column layout, social icons, CTA
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ background: "#0A1628", color: "#fff" }}
      className="pt-16 pb-8"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/favicon.ico" alt="SouthWay Results Logo" className="w-6 h-6" />
              <div className="font-display font-800 text-2xl">
                SouthWay <span style={{ color: "#1E90FF" }}>Results</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Dedicated digital marketing for local businesses in London.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1E90FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)")
                }
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1E90FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)")
                }
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1E90FF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)")
                }
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Results", href: "/results" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Facebook Ads",
                "Instagram Ads",
                "Lead Generation",
                "Strategy Consultation",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-sm text-white/60 hover:text-white transition-colors">
                      {s}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/40 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "#1E90FF" }} />
                <a
                  href="mailto:southwayresults@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors break-all"
                >
                  southwayresults@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#1E90FF" }} />
                <a
                  href="tel:+447729653253"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +44 7729 653253
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#1E90FF" }} />
                <span className="text-sm text-white/60">London, England</span>
              </li>
            </ul>

            <Link href="/contact">
              <button
                className="mt-6 btn-cta font-display font-700 text-sm px-5 py-2.5 rounded-full text-white w-full"
                style={{
                  background: "linear-gradient(135deg, #1E90FF, #0066CC)",
                }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SouthWay Results. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy">
              <span className="text-xs text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-xs text-white/40 hover:text-white transition-colors">
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
