/**
 * Testimonials Page — SouthWay Results
 * Sections: Page Hero | Testimonial Cards | Rating Summary | CTA
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const TESTIMONIALS = [
  {
    name: "John D.",
    role: "Owner, London Plumbing Co.",
    avatar: "JD",
    color: "#1E90FF",
    rating: 5,
    quote:
      "SouthWay Results helped us generate leads faster than we imagined! Within the first month we had more enquiries than we could handle. The team is professional, responsive, and genuinely cares about our results.",
  },
  {
    name: "Sarah P.",
    role: "Director, Capital Fitness Studio",
    avatar: "SP",
    color: "#F59E0B",
    rating: 5,
    quote:
      "Our Instagram engagement tripled in just 2 weeks thanks to their strategy. We went from struggling to fill classes to having a waiting list. The ROI has been incredible — best investment we've made in marketing.",
  },
  {
    name: "Mike L.",
    role: "MD, Swift Cleaners",
    avatar: "ML",
    color: "#10B981",
    rating: 5,
    quote:
      "Professional, results-driven, and easy to work with! They took the time to understand our business and built a campaign that actually converted. Our cost per booking dropped significantly.",
  },
  {
    name: "Emma R.",
    role: "Owner, City Dental Practice",
    avatar: "ER",
    color: "#8B5CF6",
    rating: 5,
    quote:
      "I was sceptical about paid social ads for a dental practice, but SouthWay Results proved me wrong. We've seen a consistent stream of new patient enquiries every single week. Highly recommend.",
  },
  {
    name: "David K.",
    role: "CEO, Metro Legal Services",
    avatar: "DK",
    color: "#EF4444",
    rating: 5,
    quote:
      "The team at SouthWay Results are true professionals. They delivered a clear strategy, transparent reporting, and most importantly — real results. Our lead volume has doubled in three months.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#F59E0B" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="overflow-x-hidden">
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0d2040 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,144,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10 text-center">
          <motion.p
            className="font-display font-600 text-sm uppercase tracking-widest mb-3"
            style={{ color: "#1E90FF" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client Reviews
          </motion.p>
          <motion.h1
            className="font-display font-800 text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real feedback from real business owners who've grown their revenue with SouthWay Results.
          </motion.p>

          {/* Rating summary */}
          <motion.div
            className="inline-flex items-center gap-4 mt-8 px-6 py-4 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="font-display font-800 text-4xl text-white">5.0</div>
              <div className="text-white/50 text-xs font-body mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <StarRating count={5} />
              <div className="text-white/50 text-xs font-body mt-1">Based on 150+ reviews</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL CARDS ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div
                  className="card-glow rounded-2xl p-8 h-full flex flex-col"
                  style={{ background: "#f8faff", border: "1px solid #e0eaff" }}
                >
                  {/* Quote icon */}
                  <Quote size={28} style={{ color: t.color, opacity: 0.4, marginBottom: "1rem" }} />

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Quote text */}
                  <p className="text-gray-700 leading-relaxed my-5 flex-1 font-body italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-700 text-sm text-white shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-display font-700 text-sm" style={{ color: "#0A1628" }}>
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400 font-body">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ──────────────────────────────── */}
      <section style={{ background: "#f4f7ff" }} className="py-16">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="font-display font-600 text-sm uppercase tracking-widest mb-6" style={{ color: "#1E90FF" }}>
              Trusted by Local Businesses Across London
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {["Plumber Pro", "LDN Fitness", "Capital Roofing", "Swift Cleaners", "Metro Legal", "City Dental"].map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-2.5 rounded-lg font-display font-700 text-sm"
                  style={{ background: "#fff", color: "#0A1628", border: "1px solid #dde5f5" }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A1628, #0d2a50)" }}
      >
        <div className="container text-center">
          <AnimatedSection>
            <h2
              className="font-display font-800 text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Join Our Happy Clients
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto font-body">
              Become our next success story. Book your free consultation today.
            </p>
            <Link href="/contact">
              <button
                className="btn-cta font-display font-700 text-base px-8 py-4 rounded-full text-white inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1E90FF, #0066CC)" }}
              >
                Book Your Free Consultation
                <ArrowRight size={18} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
